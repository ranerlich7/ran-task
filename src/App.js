import Header from './components/Header';
import Tasks from './components/Tasks';
import { useState } from 'react';

function App() {
    const [counter,ranFunction] = useState(0)

    function odFunciton() {
        ranFunction(counter+1)
        console.log(counter)        
    }

  return (
      <div className="container">
      <Header/>
      <Tasks counter={counter} odFunciton={odFunciton}/>
      </div>
  );
}

export default App;
