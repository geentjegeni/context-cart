import "./styles.css"

export const CartPopup = ({cart}) => {
    return (
        <div className="just-test p-4" style={{padding: '10px'}}>
            {cart.length ? cart.map(crItem => <p className="mt-1 m-0">{crItem.name}</p>) : ''}
            <hr/>
            <h5>Items</h5>
            <h6>Total: ${cart.length ? cart.reduce((x, item) => x + item.price, 0) : '0'}</h6>
        </div>
    )
}