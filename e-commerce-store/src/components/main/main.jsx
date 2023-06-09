import { useEffect, useState } from "react"
import axios from "axios"
import Header from "../header/header"
import Item from "../item/item"
import "./main.css"
const Main = () => {
    const [oldschool, setOldSchool] = useState([])
    const [bestseller, setBestSeller] = useState([])
    useEffect(() => {
        axios.get('http://localhost:1337/api/old-schools?populate=*').then((oldschool) => {
            setOldSchool(oldschool.data.data)
        }).catch(() => {

        }).finally(() => {

        });
        axios.get('http://localhost:1337/api/best-sellers?populate=*').then((bestseller) => {
            setBestSeller(bestseller.data.data)
        }).catch(() => {

        }).finally(() => {

        });
    }, [])
    return (
        <>
            <Header />

            <section className="content-wrapper">
                <article className="actions">Old-School</article>
                <div className="div">
                    {oldschool.map((item, key) => {
                        return <Item key={key} item={item.attributes} />
                    })}
                </div>

                <article className="bestseller">Best-Seller</article>
                <div className="div">
                    {bestseller.map((item, key) => {
                        return <Item key={key} item={item.attributes} />
                    })}
                </div>

            </section>
        </>
    )
}
export default Main