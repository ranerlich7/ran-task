import { useLocation} from 'react-router-dom';

import Button from "./Button"

function Header({toggleForm, showAddForm}) {
    const location = useLocation()
  return (
    <header className="header">
        <h1>Ran's Header</h1>
        {location.pathname === '/' && <Button name={showAddForm ?"Close" : "Add task"} color={showAddForm?"red":"black"} toggleForm={toggleForm}></Button>}

    </header>
  )
}

export default Header