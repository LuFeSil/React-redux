import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { setFavorite } from '../slices/dataSlice'
import StarButton from './StarButton'

const PokemonCard = ({ pokemon }) => {
	const dispatch = useDispatch()
	const pokemonTypes = pokemon.types.map(elem => elem.type.name).join(', ')

	const handleOnFavorite = () => {
		dispatch(setFavorite({ pokemonId: pokemon.id }))
	}

	return (
		<Card
			title={pokemon.name}
			cover={<img src={pokemon.sprites.front_default} alt={pokemon.name} />}
			extra={
				<StarButton isFavorite={pokemon.favorite} onClick={handleOnFavorite} />
			}>
			<Meta description={pokemonTypes} />
		</Card>
	)
}

PokemonCard.propTypes = {
	pokemon: PropTypes.object,
}

export default PokemonCard
