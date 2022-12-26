import { FaTimes } from "react-icons/fa"

// let counter = 1
// function myClick() {
//     console.log(counter)
//     counter = counter + 1;
// }

function Task({ task, onDelete }) {
    return (
            <div className="task">                
                <h3>{task.name} <FaTimes onClick={()=>onDelete(task.id)} color="red" /></h3>
                <p>{task.date}</p>
            </div>
        )
    }



    export default Task