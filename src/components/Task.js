import { FaTimes } from "react-icons/fa"

// let counter = 1
// function myClick() {
//     console.log(counter)
//     counter = counter + 1;
// }

function Task({ task, onDelete, toggleReminder }) {
    return (
            <div className={task.reminder ? "task reminder": "task"} onDoubleClick={()=>toggleReminder(task.id)}>                
                <h3>{task.name} <FaTimes onClick={()=>onDelete(task.id)} color="red" /></h3>
                <p>{task.date}</p>
            </div>
        )
    }



    export default Task