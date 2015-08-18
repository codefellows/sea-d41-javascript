var React = require('react')

var Pokemon = React.createClass({
  render: function() {
    return (
      <li>
        <h2> Name: {this.props.pokemon.name} </h2>
        <p> Level: {this.props.pokemon.level}  </p> 
      </li>
    )
  }
})

var PokemonList = React.createClass({
  render: function() {
    var ourPokemon = this.props.pokemonList.map(function(pokemon) {
      return <Pokemon pokemon={pokemon} />
    })

   return (
     <section>
       <h2>Current Pokemon</h2>
       <ul>
         { ourPokemon }
       </ul>
     </section>
   )
  }
})

var PokemonListContainer = React.createClass({
  getInitialState: function() {
    return {
      pokemon: [
        {name: 'Charmander', level: 1},
        {name: 'Bulbasaur', level: 1}
      ]
    }
  },

  render: function() {
    return (
      <PokemonList pokemonList={this.state.pokemon} />
    )
  }
})


var Header = React.createClass({
  render: function() {
    return (
      <section>
        <h1>Gotta Catch them All!</h1>
      </section> 
    )
  }
})


var App = React.createClass({
  render: function() {
    return (
      <main>
        <Header />
        <h1>{this.props.appName}</h1>
        <PokemonListContainer />
      </main>
    )
  }
})

React.render(<App appName='My Cool React App' />, document.body)

















