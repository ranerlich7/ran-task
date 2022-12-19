import Button from "./Button"

function Header() {
  return (
    <header className="header">
        <h1>Ran's Header</h1>
        <Button name="Add task" color="black" onc="false"></Button>

    </header>
  )
}

export default Header