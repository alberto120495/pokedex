
import { useEffect, useState } from 'react'
import './App.css'

function App() {
const [data, setData] = useState()
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
      const data = await response.json()
      setData(data)
      console.log(data)
      
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  fetchData()
}
, [])


  return (
    <>
      <h1>POKEDEX</h1>
      <h2>Welcome to the Pokedex</h2>
      <p>Here you can find information about your favorite Pokemon.</p>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt="" />
      <div className="footer">
        <p>Developed by Alberto Pimentel</p>
        <p>2023</p>
        <p>All rights reserved</p>
      </div>
    </>
  )
}

export default App
