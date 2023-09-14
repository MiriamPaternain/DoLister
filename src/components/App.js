import '../styles/App.scss';
import ToDoCounter from './ToDoCounter.js';
import ToDoSearch from './ToDoSearch.js';
import ToDoList from './ToDoList.js';
import ToDoItem from './ToDoItem.js';
import CreateToDoButton from './CreateToDoButton.js';

function App() {
  return (
    <div>
      <ToDoCounter />

      <ToDoSearch />

      <ToDoList>
        <ToDoItem />
      </ToDoList>

      <ToDoItem />

      <CreateToDoButton />
      
    </div>
  );
}

export default App;
