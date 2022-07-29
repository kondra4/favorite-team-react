import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teamsApi = createApi({
	reducerPath: 'teams',
	baseQuery: fetchBaseQuery({ baseUrl: 'https://v3.football.api-sports.io/' }),
	endpoints: (builder) => ({
		searchTeam: builder.query({
			query: (title) => ({
				url: 'teams',
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
				},
				params: {
					search: title,
				},
			}),
			transformResponse: (response) => response.response,
		}),
		getMoreInfo: builder.query({
			query: (teamID) => ({
				url: 'teams',
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
					'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
				},
				params: {
					id: teamID,
				},
			}),
			transformResponse: (response) => response.response,
		}),
	}),
})

export const { useSearchTeamQuery, useGetMoreInfoQuery } = teamsApi
