import { useRef, useState } from "react"
import useFetch from "./useFetch"
import useRandomNumber from "./useRandomNumber"

const options = [
    {
        id: 28,
        value: "Ação"
    },
    {
        id: 16,
        value: "Animação"
    },
    {
        id: 18,
        value: "Drama"
    },
    {
        id: 14,
        value: "Fantasia"
    },
    {
        id: 36,
        value: "História"
    },
    {
        id: 27,
        value: "Terror"
    },
    {
        id: 9648,
        value: "Mistério"
    },
    {
        id: 878,
        value: "Ficção científica"
    },
    {
        id: 878,
        value: "Thriller"
    },
]

export default function Finder() {
    let url

    const [genre, setGenre] = useState('')

    const movieList = useRef()

    const { page, firstNum, secNum, randomize } = useRandomNumber()
    const { fetchMovies } = useFetch(genre, movieList, url, firstNum, secNum)

    const changeGenre = (e) => {
        setGenre(e.currentTarget.value)
    }

    const findMovie = async (e) => {
        randomize()
        e.preventDefault()

        if(genre !== "") {
            if(page !== undefined) {
                url = `https://api.themoviedb.org/3/discover/movie?page=${page}&with_genres=${genre}`
            } else {
                url = `https://api.themoviedb.org/3/discover/movie?with_genres=${genre}`
            }
        } else {
            if(page !== undefined) {
                url = `https://api.themoviedb.org/3/discover/movie?page=${page}`
            } else {
                url = `https://api.themoviedb.org/3/discover/movie`
            }
        }

        await fetchMovies(genre, movieList, url, firstNum, secNum)
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <h1 className="font-sansita text-defalt-purple lg:text-7xl text-4xl font-medium pb-8 lg:pb-10"> MovieFinder </h1>
            <div className="max-w-[264px] w-full">
                <p className="lg:text-xl text-base text-defalt-grey pb-2"> Gênero do filme </p>
                <form className="flex gap-3 items-center w-full" onSubmit={(e) => findMovie(e)}>
                    <select className="h-10 rounded-[4px] border w-full border-defalt-grey bg-transparent text-sm text-defalt-grey appearance-none px-2" onChange={(e) => changeGenre(e)}>
                        <option value=""> Sem gênero </option>
                        {options.map((option) => 
                            <option value={option.id}> {option.value} </option>
                        )}
                    </select>
                    <button className="h-10 max-w-[60px] w-full bg-defalt-darker-purple text-white rounded-[4px] lg:text-base text-sm" type="submit"> OK </button>
                </form>
            </div>
            <div className="w-full" ref={movieList}></div>
        </div>
    )
}