import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title, onAdd, showAdd} ) => {

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button 
        onClick={onAdd} 
        color={showAdd ? 'Red' : 'Green'}
        text={showAdd ? 'Close' : 'Add Task'} 
        />
    </header>
  )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: 'Default Prop',
}

// Inline css for JS
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black',
// }

export default Header