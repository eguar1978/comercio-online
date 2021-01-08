import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/general/Cart';
import Error404 from './components/general/Error404';
import Nav from './components/general/Nav';
import ItemDetailContainer from './components/Home/PrdsDestacados/ItemDetailContainer';
import ItemListContainer from './components/Home/PrdsDestacados/ItemListContainer';
import {Store} from '../src/context/store'
import {ShowCart} from '../src/context/showCart'

function App() {

    const [data, setData] = useState({

        items: [], 
        cantidad: 0,

    });

    const [showCart, setShowCart] = useState({

        visibilidad: 'hidden',

    }); 


        return (
        <Store.Provider value={[data, setData]}>
         <ShowCart.Provider value={[showCart, setShowCart]}>
            <BrowserRouter>
                <Nav />
                <Switch>
                    <Route exact path="/">
                        <ItemListContainer />
                    </Route>
                    <Route  exact path="/categoria/:categoria">
                        <ItemListContainer />
                    </Route>
                    <Route exact path="/item/:itemid">
                        <ItemDetailContainer />
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
            </BrowserRouter>
         </ShowCart.Provider>
        </Store.Provider>
        );
    }


export default App;