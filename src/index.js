import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class App extends React.Component {
    constructor () {
        super()
        this.state = {
            name: "",
            img: ""
        }
    }

    getPokemon = async () => {
        const takeFromAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${Math.floor(Math.random() * 807)}/`)
        const randomPokemon = takeFromAPI.json();
        return randomPokemon;
    }

    componentDidMount = async () => {
        const pokemon = await this.getPokemon().then(data => {return data})
        console.log(pokemon)
        this.setState({
            name: pokemon.name,
            img: pokemon.sprites.front_default
        })
    }

    render() {
        const {name, img} = this.state

        return (
           <div className='pokemon'>
               <img src={img} alt="pokemon"></img>
                <div className='pokemon__name'>
                    <p>{name}</p>
                </div>
           </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#container')
)