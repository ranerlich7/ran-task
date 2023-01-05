import Header from './components/Header';
import Tasks from './components/Tasks';
import { useEffect, useState } from 'react';
import AddTask from './components/AddTask';

function App() {
    const [showAddForm, setShowAddForm] = useState(false)


    useEffect(() => {
        // promise
        // async await
        fetch("http://localhost:5000/tasks")
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
                setTasks(data)
            });
        console.log('ran ran')
    }, [])

    const [tasks, setTasks] = useState([])

    function onDelete(id) {
        fetch("http://localhost:5000/tasks/" + id, { method: 'DELETE' })

        setTasks(tasks.filter(task => task.id !== id))
    }

    function toggleReminder(id) {
        setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
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
