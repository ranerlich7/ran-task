import Button from "./Button"

function Header({onAdd}) {
  
  return (
    <header className="header">
        <h1>Ran's Header</h1>
        <Button onAdd={onAdd} name="Add task" color="black" onc={false}/>

    </header>
  )
}

export default Header