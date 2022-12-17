import { FaTimes } from "react-icons/fa"

function Task({ task, onDelete }) {
    return (
        
        <div className="task">
            <h3>Task {task.name}
                <FaTimes style={{color:'red', cursor:'pointer'}}
                 onClick={() => onDelete(task.id)} />
            </h3>
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