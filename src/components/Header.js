import Button from "./Button"

function Header() {
  return (
    <header className="header">
        <h1>Ran's Header</h1>
        <Button name="Ran" color="red" onc="true"></Button>
        <Button name="Add" color="blue" onc="false"></Button>
        <Button name="Del" color="magenta" onc="false"></Button>

    </header>
  )
}

export default Header