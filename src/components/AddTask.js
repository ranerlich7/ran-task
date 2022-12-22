import { useState } from 'react'

function AddTask({addTask}) {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    function onSubmit(e) {
        e.preventDefault()
        addTask(text,day,reminder)
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text}
                    onChange={(e) => setText(e.target.value)}>
                </input>
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Enter day and time" value={day}
                    onChange={(e) => setDay(e.target.value)}>
                </input>
            </div>
            <div className="form-control form-control-check">
                <label>Reminder</label>
                <input type="checkbox" 
                onChange={(e) => setReminder(e.currentTarget.checked)}>
                </input>
            </div>
            <input type="submit" value="Save task" className="btn btn-block" />


        </form>
    )
}

export default AddTask