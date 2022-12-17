
function Task({task}) {
  return (
      
    <div className="task">
        <h3>Task {task.name}</h3>
    <p>{task.date}</p>
    </div>
    
  )
}

export default Task

// example of style in js
// const taskStyle={
//     color:'red',
//     backgroundColor:'black'
// }