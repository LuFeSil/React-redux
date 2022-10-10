import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { getPokemonDetails, getPokemons } from '../api/getPokemon'
import { setLoading } from './uiSlice'

const initialState = {
	pokemons: [],
}

export const fetchPokemonsWithDetails = createAsyncThunk(
	'data/fetchPokemonsWithDetails',
	async (_, { dispatch }) => {
		dispatch(setLoading(true))
		const pokemonsRes = await getPokemons()
		const pokemonsDetailed = await Promise.all(
			pokemonsRes.map(pokemon => getPokemonDetails(pokemon))
		)
		dispatch(setPokemons(pokemonsDetailed))
		dispatch(setLoading(false))
	}
)

export const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setPokemons: (state, action) => {
			state.pokemons = action.payload
		},
		setFavorite: (state, action) => {
			const currentPokemonIndex = state.pokemons.findIndex(pokemon => {
				return pokemon.id === action.payload.pokemonId
			})

			if (currentPokemonIndex >= 0) {
				const isFavorite = state.pokemons[currentPokemonIndex].favorite

				state.pokemons[currentPokemonIndex].favorite = !isFavorite
			}
		},
	},
})

export const { setFavorite, setPokemons } = dataSlice.actions

export default dataSlice.reducer
