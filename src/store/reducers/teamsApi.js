import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const teamsApi = createApi({
    reducerPath: 'teams',
    baseQuery: fetchBaseQuery({baseUrl: 'https://v3.football.api-sports.io/'}),
    endpoints: builder => ({
        searchTeam: builder.query({
            query: (title) => ({
                url: 'teams',
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'fc029df5729e7c7e83d442394d2235e6',
                    'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
                },
                params: {
                    search: title,
                    // apikey: process.env.REACT_APP_API_KEY,
                    // plot: 'full'
                }
            }),
            transformResponse: (response) => response.response
        }),
    })
})

export const {useSearchTeamQuery} = teamsApi;