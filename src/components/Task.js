import { FaTimes } from "react-icons/fa"

// let counter = 1
// function myClick() {
//     console.log(counter)
//     counter = counter + 1;
// }

function Task({  task, deleteTask }) {
    return (
            <div className="task">                
                <h3>{task.content} <FaTimes onClick={() => deleteTask(task.id)} color="red" /></h3>
                <p>{task.date}</p>
            </div>
        )
    }



    export default Task