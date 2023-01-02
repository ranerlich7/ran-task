import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState, useEffect } from 'react';
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  useEffect(() => {
    function getTasks(params) {
      fetch('http://127.0.0.1:5000/tasks')
        .then(response => response.json())
        .then(json => {
          setTasks(json)
          console.log(json)
        })
    }
    getTasks()

  }, [])


  const [tasks, setTasks] = useState([])

  // function taskClick() {
  //   setCounter(counter + 1)
  //   console.log(counter)
  // }

  function deleteTask(taskID) {
    fetch('http://127.0.0.1:5000/tasks/'+taskID, {
      method: 'DELETE',}).then(response => response.json())
      .then(json => console.log(json))
    
    setTasks(()=> tasks.filter((task)=>task.id === taskID ? null : task))
  }





  function addTask(name, date, reminder) {
    setTasks([...tasks, { id: tasks.length + 1, name: name, date: date, reminder: reminder }])
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
  }

  function onAdd() {
    setShowAddTask(!showAddTask)
  }


  return (
    <div className="container">
      <Header onAdd={onAdd} showAddTask={showAddTask} />
      {showAddTask && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} deleteTask={deleteTask} toggleReminder={toggleReminder} />
    </div>
  );
}

export default App;
