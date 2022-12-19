import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "Cleaning",
      date: "Monday 9pm"

    },
    {
      id: 2,
      name: "Ironing",
      date: "Sunday 9pm"

    },
    {
      id: 3,
      name: "Shopping",
      date: "Saturday 9pm"

    }
  ])

  // delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
    console.log('delete', id)
  }

  return (
    <div className='container'>
      <Header />
      {tasks.length >0 ? <Tasks onDelete={deleteTask} tasks={tasks} /> : 'no tasks'}
    </div>
  );
}

export default App;
