import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

console.log('lol')

class App extends React.Component {
    componentDidMount() {
        fetch(`https://pokeapi.co/api/v2/pokemon/1/`)
        .then(data => data.json())
        .then(data => console.log(data.name, data.sprites.front_default))
    }

    render() {
        return (
            <div>
                {/* RENDER YOUR POKEMON HERE */}
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)