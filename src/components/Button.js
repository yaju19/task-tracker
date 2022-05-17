import PropTypes from 'prop-types'

const Button = (props) => {

  return (
    <div 
    onClick={props.onClick}
    className='btn' 
    style={{backgroundColor:  props.color}}
    >
      {props.text}
    </div>
  )
}


//default prop
Button.defaultProps = {
  color: 'orange'
}


// To enforce the prop types
Button.propTypes ={
  text: PropTypes.string,
  color: PropTypes.string,
  onclick: PropTypes.func
}

export default Button