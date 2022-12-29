import PropTypes from 'prop-types'

function myalert(onc){
    onc ? alert('are you ok?') : console.log(onc)
}

function Button({name, color, toggleForm}) {
  return (
    <button onClick={toggleForm} style={{backgroundColor:color}} className="btn">{name}</button>
  )
}

export default Button

Button.defaultProps = {
    color:'green',
    name:'click'
}
 
Button.propTypes = {
    color:PropTypes.string.isRequired,
    
  
 }
 

// function Button(props) {
//   return (
//     <button style={{backgroundColor:props.color}} 
//     className="btn">{props.name}</button>
//   )
// }

// export default Button