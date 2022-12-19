import { FaTimes } from "react-icons/fa"
import {useState} from 'react';

function Task({ task, onDelete }) {
    // example of local data
    // let t = 1
    // function raiseT(){
    //     t = t + 1; console.log(t)
    // }
    const [t,raiseT] = useState(1)
    return (
        
        <div className="task">
            <h3 onClick={()=>raiseT(t+2)}>{t}</h3>
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