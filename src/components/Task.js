import { FaTimes, FaBath } from "react-icons/fa"
import { useState } from 'react';

// let counter = 1
// function myClick() {
//     console.log(counter)
//     counter = counter + 1;
// }

function Task({ content, date, icon }) {
    const [counter,ranFunction] = useState(0)

    return (
            <div className="task">                
                <h3>{content} <FaTimes onClick={() => ranFunction(counter+1)} color="red" /> {counter}</h3>
                <p>{date}</p>
            </div>
        )
    }



    export default Task