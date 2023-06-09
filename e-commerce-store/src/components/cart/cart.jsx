import { useCallback, useContext } from "react";
import { CartContext } from "../../context/cart-context";
import useRazorpay from "react-razorpay";
// import "./cart.css"

const Cart = () => {
    const { cartData } = useContext(CartContext);
    const Razorpay = useRazorpay();

    const razorpayDisplay = useCallback(async (total) => {
        const options = {
            key: "rzp_test_cE1jUCzhCkdtKT",
            amount: total * 100,
            currency: "INR",
            name: "Game-site",
            description: "Gaming transaction",
            handler: (res) => {
                console.log(res);
            },
            prefill: {
                name: "Yogesh KU",
                email: "yogeshyogi634@gmail.com",
            },
            notes: {
                address: "work Address",
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new Razorpay(options);
        rzp1.open();
    }, [Razorpay]);

    const calculateTotalPrice = () => {
        let totalPrice = 0;
        cartData.forEach((cartItem) => {
            totalPrice += cartItem.price;
        });
        return totalPrice;
    };

    return (

        <><section className="logo">
            Cart
        </section>
            <section className="cart-wrapper">
                <section className="cart-div">
                    {cartData.map((cartItem) => {
                        return (
                            <>
                                <section className="card">
                                    <img className="card-image" src={"http://localhost:1337" + cartItem.image.data.attributes.url} alt={cartItem.title} />
                                    <p className="card-title">{cartItem.title}</p>
                                    <p className="card-description">{cartItem.description}</p>
                                    <section className="card-footer">
                                        <p className="price">₹ {cartItem.price}</p>
                                        <button>Remove</button>
                                    </section>
                                </section>


                            </>
                        );
                    })}
                </section>
                <section className="bill-container">
                    <p className="logo">Billing information</p>
                    <section className="bill-wrapper">
                        <ol>
                            {cartData.map((cartItem) => {
                                return (
                                    <li key={cartItem.id}>
                                        <p>{cartItem.title}</p>
                                        <p>₹ {cartItem.price}</p>
                                    </li>
                                );
                            })}
                        </ol>
                        <p>Total Price: ₹ {calculateTotalPrice()}</p>
                        <button onClick={() => { razorpayDisplay(calculateTotalPrice()) }}>
                            CheckOut
                        </button>
                    </section>
                </section>
            </section>
        </>
    );
};

export default Cart;


