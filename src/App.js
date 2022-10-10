import './App.css'
import { useEffect } from 'react'

import { Col, Spin } from 'antd'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'

import PokemonList from './components/PokemonList'
import Searcher from './components/Searcher'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import logo from './statics/logo.svg'

function App() {
	const pokemons = useSelector(state => state.data.pokemons, shallowEqual)

	const loading = useSelector(state => state.ui.loading)

	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchPokemonsWithDetails())
	}, [])

	return (
		<div className='App'>
			<Col span={4} offset={10}>
				<img src={logo} alt='pokedux-logo' />
			</Col>
			<Col span={8} offset={8}>
				<Searcher />
			</Col>
			{loading ? (
				<Col offset={12}>
					<Spin spinning size='large' />
				</Col>
			) : (
				<PokemonList pokemons={pokemons} />
			)}
		</div>
	)
}

App.propTypes = {}

export default App
