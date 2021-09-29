import {Header} from "../../components/Header";
import {storeContext} from "../../StoreContext";
import {useContext} from "react";

export const HeaderContainer = () => {
    const {cartHolder} = useContext(storeContext);
    const [cart, setCard] = cartHolder;

    return (
        <div className="container p-0 position-fixed" style={{marginLeft:'-12px'}}>
            <Header cart={cart}/>
        </div>

    )
}