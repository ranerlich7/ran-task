import Task from "./Task"



function Tasks({deleteTask, tasks}) {    
    return (
    <>    
    {tasks.map((task) => <Task key={task.id} deleteTask={deleteTask} task={task}/>)}
    </>
  )
}

export default Tasks
