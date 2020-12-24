import React, { Component } from 'react';
import Nav from './components/general/Nav/Nav';
import ItemDetailContainer from './components/Home/PrdsDestacados/ItemDetailContainer';





class App extends Component {
    render() {
        return (
        <>
            <Nav />
            <ItemDetailContainer />
            
        </>
        );
    }
}

export default App;