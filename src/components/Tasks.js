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
        //   for task in tasks
        //     f'<li>{task.name}</li>'
    <>    
    {tasks.map((i) => <Task key={i.id} content={i.name} date={i.date}/>)}
    {/* {tasks.map((i) => <li>{i.name}</li>)}
    {tasks.map(getName)} */}
    </>
  )
}

export default Tasks