import { FaTimes } from "react-icons/fa"

// let counter = 1
// function myClick() {
//     console.log(counter)
//     counter = counter + 1;
// }

function Task({ content, date, counter, odFunciton }) {
    return (
            <div className="task">                
                <h3>{content} <FaTimes onClick={odFunciton} color="red" /> {counter}</h3>
                <p>{date}</p>
            </div>
        )
    }



    export default Task