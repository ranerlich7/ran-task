import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {

  return (
      <div className='container'>
      <Header/>
      <Tasks onDelete={deleteTask}/>
      </div>
  );
}

// delete task
const deleteTask =  (id) =>{
  console.log('delete', id)
}
export default App;
