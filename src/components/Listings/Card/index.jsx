import "../styles.css"

export const Card = ({item, addToCart}) => {
    return (
        <div className="text-white col-12 mb-2 col-sm-12 col-md-6 mb-3">
            <div className="text-center bg-dark p-5">
                <div className="p-3" style={{
                    height: '400px',
                    backgroundImage: `url(https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                </div>
                <h1 className="mt-3">{item.name}</h1>
                <p>Product description, which will describe the specific product.</p>
                <p>Price: ${item.price}</p>
                <button className="button btn-default custom-btn btn-lg" onClick={() => addToCart(item)}>Add to card</button>
            </div>
        </div>
    )
}