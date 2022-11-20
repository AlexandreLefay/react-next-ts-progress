// import React, { Fragment, useState, useEffect } from "react"
// import axios from "axios"

// export default function Pokemon() {
//   const [pokemon, setPokemon] = useState([])

//   useEffect(() => {
//     axios.get("https://pokeapi.co/api/v2/pokemon").then((res) => {
//       setPokemon(res.data.results.map((p) => p.name))
//     })
//   }, [])

//   return (
//     <div>
//       {pokemon.map((p) => (
//         <div key={p}>{p}</div>
//       ))}
//     </div>
//   )
// }

import React, { Fragment, useState, useEffect } from "react"
import axios from "axios"

export default function Pokemon() {
  const [pokemon, setPokemon] = useState([])
  const [pokemonType, setPokemonType] = useState([])
  const [pokemonData, setPokemonData] = useState([])

  const id = pokemon.length + 1

  // hook similaire à "componentDidMount" et "componentDidUpdate"
  //Récupération de 151 pokemon; nom :
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon?limit=151").then((res) => {
      setPokemon(res.data.results.map((p: { name: any }) => p.name))
    })
  }, [])
  console.log(pokemon)

  // Récupération des types de chaque pokemon
  // useEffect(() => {
  //   axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
  //     setPokemonType(res.data.results.map((p: { abilities: any }) => p.abilities))
  //   })
  // }, [])
  // console.log(pokemonType)

  return (
    <Fragment>
      <ul>
        {pokemon.map((p, id) => (
          <li key={id + 1}>
            <p>
              {p}, {id + 1}
            </p>
          </li>
        ))}
      </ul>
    </Fragment>
  )
}

// const result = await axios("https://jsonplaceholder.typicode.com/posts")

// import React, { Fragment, useState, useEffect } from "react"
// import axios from "axios"

// export default function Pokemon() {
//   const [data, setData] = useState([])

//   // hook similaire à "componentDidMount" et "componentDidUpdate"
//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios("https://pokeapi.co/api/v2/pokemon?limit?151")
//       setData(res.data.results.map((p) => p.name))
//       console.log("updated")
//     }
//     fetchData()
//     console.log("mounted")
//   }, [])
//   console.log(data)

//   return (
//     <Fragment>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>
//             <p>{item.id}</p>
//           </li>
//         ))}
//       </ul>
//     </Fragment>
//   )
// }
