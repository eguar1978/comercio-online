import React, { Component } from 'react';
import ItemDetailContainer from './components/Detail/ItemDetailContainer';
import ItemList, { ItemPrueba } from './components/ItemList';
import Nav from './components/Nav';

class App extends Component {
    render() {
        return (
        <>
            <Nav />
            <ItemList />
            <ItemDetailContainer />
        </>
        );
    }
}

export default App;