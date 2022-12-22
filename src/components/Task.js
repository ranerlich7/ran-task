import { FaTimes } from "react-icons/fa"

// let counter = 1
// function myClick() {
//     console.log(counter)
//     counter = counter + 1;
// }

function Task({ content, date, counter, taskClick }) {
    return (
            <div className="task">                
                <h3>{content} <FaTimes onClick={taskClick} color="red" /> {counter}</h3>
                <p>{date}</p>
            </div>
        )
    }



    export default Task