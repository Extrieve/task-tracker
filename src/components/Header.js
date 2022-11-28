import PropTypes from 'prop-types'
import Button from './Button'

const Header = ( {title} ) => {

  const onClick = () => {
    console.log('Clicking')
  }

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button onClick={onClick} color= 'orange' text='Goodbye' />
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