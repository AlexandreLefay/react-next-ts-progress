import React, { useState, useEffect } from "react"
import axios from "axios"

export default function PokeAPI() {
  const [name, setName] = useState("")
  const [pokemonId, setPokemonId] = useState(1)
  const [find, setFind] = useState("")
  const [img, setImg] = useState("")
  const [types, setType] = useState([""])

  useEffect(() => {
    async function getData() {
      await getPokemonByIdentifier(pokemonId)
    }

    getData()
  }, [pokemonId])

  const Typename = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const Search = async () => {
    if (name === "") return
    await getPokemonByIdentifier(name)
    setName("")
  }

  const handleNext = () => setPokemonId(pokemonId + 1)
  const handlePrevious = () => setPokemonId(pokemonId - 1)

  const setPokemon = (res: any) => {
    setPokemonId(res.data.id)
    setFind(res.data.name)
    setImg(res.data.sprites.front_default)
    setType(res.data.types.map((t: any) => t.type.name))
    console.log(types)
  }

  const getPokemonByIdentifier = async (identifier: number | string) => {
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${identifier}`)
    setPokemon(res)
  }

  // console.log(type.map())
  const reptiles = ["alligator", "snake", "lizard"]
  return (
    <>
      <div className="back">
        <div className="card">
          <img src={`${img}`} alt="" />
          <div className="name">
            {find.toUpperCase()} N°{pokemonId}
          </div>

          {
            <div>
              {types.map((type) => (
                <li>{type}</li>
              ))}
            </div>
          }
          {/* <div className="type">
            {types.map((type: any) => (
              <div>{type}</div>
            ))}{" "}
          </div> */}

          <input type="text" onChange={Typename} value={name} />

          <button onClick={Search}>Search</button>
        </div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>

      <div>Pokedex</div>
    </>
  )
}
