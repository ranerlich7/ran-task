import { useState } from "react"

function AddTask({addTask}) {
    const [taskName, setTaskName] = useState('aaa')
    const [taskTime, setTaskTime] = useState('')
    const [reminder, setReminder] = useState(false)

    // python
    // taskName = 'aaa'
    // taskName = 'bbbb'

    // setTaskName('bbbb')

    function mySubmit(e) {
        e.preventDefault()
        addTask(taskName, taskTime, reminder)
        setTaskTime('')
        setTaskName('')
        setReminder(false)
        
    }

    return (
        <form onSubmit={mySubmit} className="add-form">
            <div className="form-control">
                <label>Task Name</label>
                <input type="text" onChange={e => setTaskName(e.target.value)} value={taskName}></input>
            </div>
            <div className="form-control">
                <label>Task time</label>
                <input type="text" onChange={e => setTaskTime(e.target.value)} value={taskTime}></input>
            </div>
            <div className="form-control form-control-check">
                <label>Task reminder</label>
                <input type="checkbox" onChange={(e) => setReminder(e.currentTarget.checked)} checked={reminder}></input>
            </div>
            <div className="form-control">
                <input className="btn btn-block" type="submit" value="Submit"></input>
            </div>
        </form>
    )
}

export default AddTask