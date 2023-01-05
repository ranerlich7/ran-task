import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import axios from 'axios';

function App() {
    const [showAddForm, setShowAddForm] = useState(false)

    console.log('rendering!')

    const [tasks, setTasks] = useState([])
    const [ranTest, setRanTest] = useState(1)

    useEffect(() => {
        // promise
        // async await
        fetch("http://localhost:5000/tasks")
            .then((response) => response.json())
            .then((data) => {
                // console.log(data)
                setTasks(data)
            });
        console.log('use effect called!')
    }, [ranTest])


    function onDelete(id) {
        fetch("http://localhost:5000/tasks/" + id, { method: 'DELETE' })

        setTasks(tasks.filter(task => task.id !== id))
    }

    function toggleReminder(task) {
        setRanTest(ranTest + 1)
        axios.put(`http://localhost:5000/tasks/${task.id}`,
        {...task, reminder:!task.reminder})
        
        // if this code was in python:
        // for temptask in tasks:
        // if temptask.id == task.id:
        //     temptask.reminder = !temptask.reminder
        // else:
        //     temptask # do nothing

        setTasks(tasks.map(temptask => temptask.id === task.id ? { ...temptask, reminder: !temptask.reminder } : temptask))
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
        <div className="container">
            <Header toggleForm={toggleForm} showAddForm={showAddForm} />
            {showAddForm && <AddTask addTask={addTask} />}
            <Tasks tasks={tasks} onDelete={onDelete} toggleReminder={toggleReminder} />
        </div>
    );
}

export default App;
