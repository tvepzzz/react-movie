import { useEffect, useState } from 'react'
import './App.css'
import Empty from './components/Empty'
import Search from './components/Search'
import MovieList from './components/MovieList'
import SearchIcon from './search.svg'

const API_URL = process.env.REACT_APP_API_URL
const App = () => {
	const [movies, setMovies] = useState([])
	const [searchTerm, setSearchTerm] = useState('')

	const searchMovies = async title => {
		const response = await fetch(`${API_URL}&s=${title}`)
		const data = await response.json()

		setMovies(data.Search)
	}

	useEffect(() => {
		searchMovies('')
	}, [])

	return (
		<div className="app">
			<h1>MovieSearch</h1>

			<Search
				search={searchTerm}
				setSearch={setSearchTerm}
				icon={SearchIcon}
				movies={searchMovies}
			/>

			{movies?.length > 0 ? <MovieList prop={movies} /> : <Empty />}
		</div>
	)
}

export default App
