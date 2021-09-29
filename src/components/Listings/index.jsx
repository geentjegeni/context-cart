import {Card} from "./Card";
import {useContext, useEffect} from "react";
import {storeContext} from "../../StoreContext";

export const Listings = () => {
    const {itemsHolder, cartHolder} = useContext(storeContext);
    const [items, setItems] = itemsHolder;
    const [cart, setCart] = cartHolder;


    const addToCart = (obj) => {
        let isOnCart = false
        if (cart.length > 0) {
            cart.map(crt => {
                if (crt.name === obj.name) {
                    isOnCart = true
                    alert("Max quantity at 1  :( sry")
                }
            })
        }
        if (!isOnCart) {
            setCart([...cart, obj])
        }
    }

    console.log("CARD COMPONENT RENDERED")

    return (
        <div>
            <div className="row">
                <h1 className="text-center pt-4 mt-5">Our Nike Collection</h1>
                {
                    items.map(item => (
                        <Card addToCart={addToCart} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}