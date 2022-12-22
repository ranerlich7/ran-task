import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)
  const [tasks, setTasks] = useState(
  let tasks = [
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

  function taskClick() {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <div className="container">
      <Header />
      <Tasks counter={counter} taskClick={taskClick} tasks={tasks}/>
    </div>
  );
}

export default App;
