import '../styles/App.scss';
import ToDoCounter from './ToDoCounter.js';
import ToDoSearch from './ToDoSearch.js';
import ToDoList from './ToDoList.js';
import ToDoItem from './ToDoItem.js';
import CreateToDoButton from './CreateToDoButton.js';
import { useState } from 'react';


function App() {
  const allToDos = [
    { id: 1, text: 'poner la lavadora', completed: true },
    { id: 2, text: 'tender la lavadora', completed: false },
    { id: 3, text: 'terminar proyecto react', completed: false },
  ];

  //Estados
  const [valueSearched, setValueSearched] = useState('');
  const [toDos, setToDos] = useState(allToDos);

  const completedToDos = toDos.filter((todo) => !!todo.completed).length;

  const totalToDos = toDos.length;

  const searchedToDos = toDos.filter((todo) => {
    const toDoText = todo.text.toLocaleLowerCase();
    const searchText = valueSearched.toLocaleLowerCase();
    return toDoText.includes(searchText);
  });
const completeToDo = (id) => {
  const newToDos = [...toDos];
const todoIndex = newToDos.findIndex(
  (todo) => todo.id === id
);
  newToDos[todoIndex].completed = true;
  setToDos(newToDos);
}

const deleteToDo = (id) => {
  const newToDos = [...toDos];
const todoIndex = newToDos.findIndex(
  (todo) => todo.id === id
);
  newToDos.splice(todoIndex, 1);
  setToDos(newToDos);
}

  //Eventos

  return (
    <>
      <ToDoCounter completed={completedToDos} total={totalToDos} />

      <ToDoSearch
        valueSearched={valueSearched}
        setValueSearched={setValueSearched}
      />

      <ToDoList>
        {searchedToDos.map((todo) => (
          <ToDoItem
            key={todo.id}
            text={todo.text}
            completed={todo.completed}
            valueSearched={valueSearched}
            onComplete={() => completeToDo(todo.id)}
            onDelete={() => deleteToDo(todo.id)}
          />
        ))}
      </ToDoList>

      <CreateToDoButton />
    </>
  );
}

export default App;
