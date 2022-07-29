import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css'

import MyNavbar from './components/MyNavbar'
import HomePage from './pages/HomePage'
import FavoritesTeams from './pages/FavoritesPage'
import DetailsPage from './pages/DetailsPage'
import SearchPage from './pages/SearchPage'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import NotFound from './pages/NotFound'
import HistoryPage from './pages/HistoryPage'

import { RequirePrivate } from './hoc/RequirePrivate'
import { SearchContext } from './context/SearchContext'

function App() {
	const [searchTitle, setSearchTitle] = useState('')

	return (
		<SearchContext.Provider
			value={{
				searchTitle,
				setSearchTitle,
			}}
		>
			<Container>
				<MyNavbar />
				<Routes>
					<Route path='/' element={<HomePage />} />
					<Route path='/signin' element={<SignIn />} />
					<Route path='/signup' element={<SignUp />} />
					<Route
						path='/favorites'
						element={
							<RequirePrivate>
								<FavoritesTeams />
							</RequirePrivate>
						}
					/>
					<Route
						path='/history'
						element={
							<RequirePrivate>
								<HistoryPage />
							</RequirePrivate>
						}
					/>
					<Route path='/search' element={<SearchPage />} />
					<Route path='/details/:teamID' element={<DetailsPage />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</Container>
		</SearchContext.Provider>
	)
}

export default App
