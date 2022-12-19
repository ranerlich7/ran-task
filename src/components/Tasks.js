import Task from "./Task"


function Tasks({onDelete, tasks}) {    
    return (
        //   for task in tasks
        //     f'<li>{task.name}</li>'
    <>    
    {tasks.map((task) => <Task key={task.id} task={task} onDelete={onDelete}/>)}
    {/* {tasks.map((i) => <li>{i.name}</li>)}
    {tasks.map(getName)} */}
    </>
  )
}


export default Tasks