import Task from "./Task"



function Tasks() {    
    let tasks = [
        {
            id: 1,
            name:"Cleaning",
            date:"Monday 9pm"
    
        },
        {
            id: 2,
            name:"Ironing",
            date:"Sunday 9pm"
    
        },
        {
            id: 3,
            name:"Shopping",
            date:"Saturday 9pm"
    
        }
    ]
    return (
    <>    
    {tasks.map((task) => <Task key={task.id} content={task.name} icon="bath" date={task.date}/>)}
    </>
  )
}

export default Tasks