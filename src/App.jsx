import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/general/Cart';
import Error404 from './components/general/Error404';
import Nav from './components/general/Nav';
import ItemDetailContainer from './components/Home/PrdsDestacados/ItemDetailContainer';
import ItemListContainer from './components/Home/PrdsDestacados/ItemListContainer';

class App extends Component {
    render() {
        return (
        <>
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
            
        </>
        );
    }
}

export default App;