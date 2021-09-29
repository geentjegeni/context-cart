import "../styles.css"

export const Cart = ({cart, showPopup, setShowPopup}) => {
    return(
        <div onClick={cart.length ? () => setShowPopup(!showPopup) : null} className={cart.length ? 'cart-items my-auto' :'my-auto' }>
            Cart Items ({cart.length}) <br/>
        </div>
    )
}