import Button from "./Button"

function Header({onAdd, showAddTask}) {
  
  return (
    <header className="header">
        <h1>Ran's Header</h1>
        <Button onAdd={onAdd} name={showAddTask? "close" :"Add task"} color={showAddTask? "red" : "black"} onc={false}/>

    </header>
  )
}

export default Header