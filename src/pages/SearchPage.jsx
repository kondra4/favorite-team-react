import React, { useContext } from 'react'
import CardGroup from '../components/CardGroup'
import { useSearchTeamQuery } from '../store/reducers/teamsApi'
import { SearchContext } from '../context/SearchContext'

const SearchPage = () => {
	const { searchTitle } = useContext(SearchContext)
	const { data } = useSearchTeamQuery(searchTitle)
	// const data = teams.response;

	return <div>{data ? <CardGroup arrRes={data} /> : null}</div>
}

export default SearchPage
