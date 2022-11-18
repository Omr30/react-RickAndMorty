import { useEffect, useState } from "react"
import Characters from "./Characters"
import NavPage from "./NavPage"


const CharactersList = () => {

    const [characters, setCharacters] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)

    useEffect(() => {
        const dataFetch = async() => {
            const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            const {results} = await response.json()
            setLoading(false)
            setCharacters(results)
        }
        dataFetch()
    }, [page])
    

  return <div className="container">

            <NavPage page={page} setPage={setPage} />

            {
                loading ? (<h1>Loading...</h1>
                ) : (
                    <div className="row">
                        {characters.map(character => {
                                return(
                                    <div className="col-md-4" key={character.id}>
                                        <Characters characters={character} />
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            }
            <NavPage page={page} setPage={setPage} />
        </div>
}

export default CharactersList