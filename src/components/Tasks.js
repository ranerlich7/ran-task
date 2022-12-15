import Button from "./Button"

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

function getName(i){
    return <li> {i.name} </li>
}
function Tasks() {    
      return (
        //   for task in tasks
        //     f'<li>{task.name}</li>'
    <>    
    {tasks.map((i) => <Task task={i}/>)}
    {/* {tasks.map((i) => <li>{i.name}</li>)}
    {tasks.map(getName)} */}
    </>
  )
}

export default Tasks