import Task from "./Task"



function Tasks({taskClick, counter}) {    
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
    {tasks.map((task) => <Task key={task.id} content={task.name} date={task.date} taskClick={taskClick} counter={counter}/>)}
    </>
  )
}

export default Tasks