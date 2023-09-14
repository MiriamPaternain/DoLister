import '../styles/App.scss';
import ToDoCounter from './ToDoCounter.js';
import ToDoSearch from './ToDoSearch.js';
import ToDoList from './ToDoList.js';
import ToDoItem from './ToDoItem.js';
import CreateToDoButton from './CreateToDoButton.js';
import { useState } from 'react';

function App() {
  //Estados
  const allToDos = [
    { id: 1, text: 'poner la lavadora', completed: true },
    { id: 2, text: 'tender la lavadora', completed: false },
    { id: 3, text: 'terminar proyecto react', completed: false },
  ];

  const [valueSearched, setValueSearched] = useState('');

//Eventos

const handleToDoSearch = () => {

};


  return (
    <>
      <ToDoCounter completed={3} total={10} />

      <ToDoSearch handleToDoSearch={handleToDoSearch}/>

      <ToDoList>
        {allToDos.map((todo) => (
          <ToDoItem key={todo.id} text={todo.text} completed={todo.completed} valueSearched={valueSearched}/>
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
