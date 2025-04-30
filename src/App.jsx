
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [pokemones, setPokemones] = useState([])
useEffect(() => {
  const fetchPokemones = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10')
    const data = await response.json()
   const { results } = data
  
   const pokemonesDetalles = await Promise.all(
    results.map(async (pokemon) => {
      const response = await fetch(pokemon.url)
      const poke = await response.json()
      return {
        id: poke.id,
        name: poke.name,
        url: pokemon.url,
        image: poke.sprites.front_default,
        height: poke.height,
        weight: poke.weight,
        types: poke.types.map(t => t.type.name)
      }
    })
  )
  setPokemones(pokemonesDetalles)
}

fetchPokemones()
}
, [])


  return (
    <>
      <h1>POKEDEX</h1>
      <h2>Welcome to the Pokedex</h2>
      <p>Here you can find information about your favorite Pokemon.</p>
{
        pokemones.length > 0 ? (
          <div className="container">
            {pokemones.map((pokemon) => (
              <div className="card" key={pokemon.id}>
               <h3>{pokemon.name} (#{pokemon.id})</h3>
  <img src={pokemon.image} alt={pokemon.name} />
  <p>Height: {pokemon.height / 10} m</p>
  <p>Weight: {pokemon.weight / 10} kg</p>
  <p>Type(s): {pokemon.types.join(', ')}</p>
              </div>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )  
}
      <div className="footer">
        <p>Developed by Alberto Pimentel</p>
        <p>2023</p>
        <p>All rights reserved</p>
      </div>
    </>
  )
}

export default App
