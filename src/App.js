import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [tasks, setTasks] = useState([
      {
        id: 1,
        name: "Cleaning",
        date: "Monday 9pm",
        reminder: false

      },
      {
        id: 2,
        name: "Ironing",
        date: "Sunday 9pm",
        reminder: false

      },
      {
        id: 3,
        name: "Shopping",
        date: "Saturday 9pm",
        reminder: false

      }
    ])

  // function taskClick() {
  //   setCounter(counter + 1)
  //   console.log(counter)
  // }

  function deleteTask(taskID) {
    setTasks(()=> tasks.filter((task)=>task.id === taskID ? null : task))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder:!task.reminder} : task))
  }
 

  return (
    <div className="container">
      <Header />
      <Tasks counter={counter} tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
