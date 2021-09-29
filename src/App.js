import './App.css';
import {HeaderContainer} from "./containers/Header";
import {ListingsContainer} from "./containers/Listings";
import {StoreProvider} from "./StoreContext";

function App() {
    return (
        <StoreProvider>
            <div className="container">
                <HeaderContainer/>
                <ListingsContainer/>
            </div>
        </StoreProvider>
    );
}

export default App;
