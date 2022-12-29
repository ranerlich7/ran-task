import { useState } from "react"

function AddTask() {
    const [taskName,setTaskName] = useState('')

    function change(e) {
        setTaskName(e.target.value)
    }

    return (
        <form>
            <div className="form-control">
                <label>Task Name</label>
                <input type="text" onChange={change}></input>
            </div>
                <input className="btn btn-block" type="submit" value="Submit"></input>
        </form>
    )
}

export default AddTask