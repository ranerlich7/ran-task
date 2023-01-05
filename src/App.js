import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/About';

function App() {
  const [showAddForm, setShowAddForm] = useState(false)
  const [tasks, setTasks] = useState([])

  console.log('rendering component')

  useEffect(() => {
    // promise
    // async await
    fetch("http://localhost:5000/tasks")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data)
      });
    console.log('useEffect')
  }, [])


  function onDelete(id) {
    fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })

    setTasks(tasks.filter(task => task.id !== id))
  }

  function toggleReminder(task) {
    let updatedTask = {...task,
      reminder: !task.reminder

    }
    fetch(`http://localhost:5000/tasks/${task.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    });


    setTasks(tasks.map(task2 => task2.id === task.id ? { ...task2, reminder: !task2.reminder } : task2))
  }

  function addTask(name, date, reminder) {
    let task = {
      id: tasks.length + 10,
      name: name,
      date: date,
      reminder: reminder

    }
    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(task)
    });

    setTasks([...tasks, task])

  }

  function toggleForm() {
    setShowAddForm(!showAddForm)
  }

  return (
    <BrowserRouter>
    <div className="container">
      <Header toggleForm={toggleForm} showAddForm={showAddForm} />
      {showAddForm && <AddTask addTask={addTask} />}
      <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder} />
      <Routes>
      <Route path="/about" element={<About/>} />
      </Routes>

      <Footer/>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
