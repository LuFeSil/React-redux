import { Input } from 'antd'

const Searcher = props => {
	return (
		<Input.Search style={{ marginBottom: '3rem' }} placeholder='Buscar...' />
	)
}

Searcher.propTypes = {}

export default Searcher
