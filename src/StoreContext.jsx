import React, {createContext, useState} from 'react'

export const storeContext = createContext();

export const StoreProvider = (props) => {
    const [items, setItems] = useState([
        {
            name:'Nike KDA 22',
            id:1,
            price:24
        },
        {
            name:'Nike RD',
            id:2,
            price: 54
        },
        {
            name:'Nike Oreon',
            id:3,
            price:124
        },
        {
            name:'Nike SS2',
            id:4,
            price:204
        }
    ])

    const [cart, setCart] = useState([])

    return(
        <storeContext.Provider value={{itemsHolder: [items,setItems], cartHolder: [cart, setCart]}}>
            {props.children}
        </storeContext.Provider>
    );
}