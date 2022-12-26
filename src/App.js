import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
    const [tasks,setTasks] = useState([
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
    ])

    function onDelete(id) {
        setTasks(tasks.filter(task => task.id !== id))
    }

  return (      
      <div className="container">
      <Header/>
      <Tasks tasks={tasks} onDelete={onDelete}/>
      <button onClick={()=>onDelete(2)}>RAn's Click</button>
      </div>
  );
}

export default App;
