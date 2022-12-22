import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0)

  function taskClick() {
    setCounter(counter + 1)
    console.log(counter)
  }

  return (
    <div className="container">
      <Header />
      <Tasks counter={counter} taskClick={taskClick} />
    </div>
  );
}

export default App;
