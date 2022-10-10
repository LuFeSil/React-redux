import PropTypes from 'prop-types'

import PokemonCard from './PokemonCard'

import './PokemonList.css'

const PokemonList = ({ pokemons }) => {
	return (
		<div className='PokemonList'>
			{pokemons.map((pokemon, index) => {
				return <PokemonCard key={index} pokemon={pokemon} />
			})}
		</div>
	)
}

PokemonList.propTypes = {
	pokemons: PropTypes.array,
}

PokemonList.defaultProps = {
	pokemons: Array(10).fill(''),
}

export default PokemonList
