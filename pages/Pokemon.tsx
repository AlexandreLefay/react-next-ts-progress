import React, { useState, useEffect } from "react"
import axios from "axios"

export default function PokeAPI() {
  const [name, setName] = useState("")
  const [PokemonId, setPokemonId] = useState(1)
  const [Find, setFind] = useState("")
  const [Img, setImg] = useState("")
  const [Type, setType] = useState("")

  useEffect(() => {
    async function getData() {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${PokemonId}`)
      console.log(res)
      setPokemonId(res.data.id)
      setFind(res.data.name)
      setImg(res.data.sprites.front_default)
      setType(res.data.types[0].type.name)
    }

    getData()
  }, [PokemonId])
  console.log(PokemonId + "Id pokemon")
  const Typename = (event: { target: { value: React.SetStateAction<string> } }) => {
    setName(event.target.value)
  }

  const Search = () => {
    if (name !== "") setFind(name)
    setName("")
  }

  const handleNext = () => setPokemonId(PokemonId + 1)
  const handlePrevious = () => setPokemonId(PokemonId - 1)

  return (
    <>
      <div className="back">
        <div className="card">
          <img src={`${Img}`} alt="" />
          <div className="name">
            {Find.toUpperCase()} N°{PokemonId}
          </div>

          <div className="type">{Type}</div>

          <input type="text" onChange={Typename} value={name} />

          <button>Search</button>
        </div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div>Pokedex</div>
    </>
  )
}
