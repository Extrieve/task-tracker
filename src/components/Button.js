import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
  return <button onClick={onClick} className='btn' style={{backgroundColor: color}}>{text}</button>
}


Button.defaultProps = {
    color: 'orange',
    text: 'Button',
}

Button.protoTypes = {
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button