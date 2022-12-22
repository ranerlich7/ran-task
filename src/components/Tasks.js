import Task from "./Task"



function Tasks({taskClick, counter, deleteTask, tasks}) {    
    return (
    <>    
    <button onClick={deleteTask}>Del All</button>
    {tasks.map((task) => <Task key={task.id} content={task.name} date={task.date} taskClick={taskClick} counter={counter}/>)}
    </>
  )
}

export default Tasks
