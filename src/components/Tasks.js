import Task from "./Task"



function Tasks({deleteTask, toggleReminder, tasks}) {    
    return (
    <>    
    {tasks.map((task) => <Task key={task.id} deleteTask={deleteTask} task={task} toggleReminder={toggleReminder}/>)}
    </>
  )
}

export default Tasks
