import React, { Component } from 'react';
import { ItemPrueba } from './components/ItemPrueba';
import Nav from './components/Nav';

class App extends Component {
    render() {
        return (
        <>
            <Nav />
            <ItemPrueba />

        </>
        );
    }
}

export default App;