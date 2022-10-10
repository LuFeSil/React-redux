import { StarFilled, StarOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import PropTypes from 'prop-types'

const StarButton = ({ isFavorite, onClick }) => {
	const Icon = isFavorite ? StarFilled : StarOutlined
	return <Button icon={<Icon />} onClick={onClick} />
}

StarButton.propTypes = {
	isFavorite: PropTypes.bool,
	onClick: PropTypes.func,
}

export default StarButton
