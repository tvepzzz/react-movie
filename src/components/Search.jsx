import React from 'react'

const Search = ({ search, setSearch, icon, movies }) => {
	return (
		<div className="search">
			<input
				type="text"
				placeholder="Search for movies"
				value={search}
				onChange={e => setSearch(e.target.value)}
				onKeyPress={e => e.key === 'Enter' && movies(search)}
			/>
			<img src={icon} alt="search" onClick={() => movies(search)} />
		</div>
	)
}

export default Search
