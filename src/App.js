import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask,setShowAddTask] = useState(false)
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

  function addTask(name, date, reminder){
    setTasks([...tasks,{id:tasks.length + 1, name:name, date:date, reminder:reminder}])
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map( task => task.id === id ? {...task, reminder:!task.reminder} : task))
  }

  function onAdd() {
      setShowAddTask(!showAddTask)
  }
 

  return (
    <div className="container">
      <Header onAdd={onAdd}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      <Tasks tasks={tasks}  deleteTask={deleteTask} toggleReminder={toggleReminder}/>
    </div>
  );
}

export default App;
