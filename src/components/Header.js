import Button from "./Button"

function Header({toggleForm, showAddForm}) {
  return (
    <header className="header">
        <h1>Ran's Header</h1>
        <Button name={showAddForm ?"Close" : "Add task"} color={showAddForm?"red":"black"} toggleForm={toggleForm}></Button>

    </header>
  )
}

export default Header