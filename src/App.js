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

    function onDelete() {
        setTasks([{
            id: 3,
            name:"Ran",
            date:"Ran 9pm"
    
        }])
    }

  return (      
      <div className="container">
      <Header/>
      <Tasks tasks={tasks}/>
      <button onClick={onDelete}>RAn's Click</button>
      </div>
  );
}

export default App;
