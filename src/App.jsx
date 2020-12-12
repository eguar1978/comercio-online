import React, { Component } from 'react';
import ItemList, { ItemPrueba } from './components/ItemList';
import Nav from './components/Nav';

class App extends Component {
    render() {
        return (
        <>
            <Nav />
            <ItemList />

        </>
        );
    }
}

export default App;