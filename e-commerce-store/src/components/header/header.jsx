import { useContext } from "react"
import "./header.css"
import { CartContext } from "../../context/cart-context"
import { useNavigate } from "react-router-dom";
const Header=()=>{
    const {cartData}=useContext(CartContext)
    const navigate=useNavigate()
    return(
        <>
            <nav className="navbar">
                <section className="logo">
                    Game-site
                </section>
                <section className="cart" onClick={()=>{navigate("/cart")}}>
                <i className="fa fa-shopping-cart"></i>
                    <span className="cartData-length">{cartData.length}</span>
                    
                </section>
            </nav>
        </>
    )
}
export default Header;