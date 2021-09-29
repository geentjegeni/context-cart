import {PersonInfo} from "./PersonInfo";
import {Cart} from "./Cart";
import {CartPopup} from "./CartPopup";
import {useEffect, useState} from "react";
import "./styles.css"

export const Header = ({cart}) => {
    const [showPopup, setShowPopup] = useState(false)

    console.log("LISTINGS COMPONENT RENDERED")

    return (
        <div className="d-flex position-relative justify-content-between text-white bg-dark"
             style={{border: '3px solid', padding: '10px', marginBottom: '35px'}}>
            <PersonInfo/>
            <Cart showPopup={showPopup} setShowPopup={setShowPopup} cart={cart}/>
            {
                showPopup ? <CartPopup cart={cart}/> : ''
            }
        </div>
    )
}