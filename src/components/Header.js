
import PropTypes from 'prop-types'
import Button from './Button'

const Header = (props) => {
  return (
    <header className="header">
      <h1>{props.title}</h1>
      <Button 
      onClick={props.toggleAddButton}
      color={props.showAddTask ? 'green': 'blue'}
      text="Add"/>
    </header>
  )
}

export default Header