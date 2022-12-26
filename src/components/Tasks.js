import Task from "./Task"



function Tasks({tasks}) {    
    return (
    <>    
    {tasks.map(task => <Task key={task.id} content={task.name} date={task.date} />)}
    </>
  )
}

export default Tasks