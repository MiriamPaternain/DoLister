import '../styles/App.scss';
import ToDoCounter from './ToDoCounter.js';
import ToDoSearch from './ToDoSearch.js';
import ToDoList from './ToDoList.js';
import ToDoItem from './ToDoItem.js';
import CreateToDoButton from './CreateToDoButton.js';
import { useState, useRef, useEffect } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

library.add(fas);

function App() {
  const allToDos = [
    { id: 1, text: 'poner la lavadora', completed: true },
    { id: 2, text: 'tender la lavadora', completed: false },
    { id: 3, text: 'terminar proyecto react', completed: false },
  ];

  //Estados
  const [valueSearched, setValueSearched] = useState('');
  const [toDos, setToDos] = useState(allToDos);

  const [newToDoItem, setNewToDoItem] = useState('');
  const [showModal, setShowModal] = useState(false);

//Constantes
  const totalToDos = toDos.length;
  const inputRef = useRef(null);

  //Funciones
  const completedToDos = toDos.filter((todo) => !!todo.completed).length;

  const openModal = () => {
    setShowModal(true);
  };

useEffect(() => {
    if (showModal) {
      inputRef.current.focus();
    }
  }, [showModal]);

  const addNewToDoItem = () => {
    if (newToDoItem.trim() !== '') {
      const newToDo = {
        id: uuidv4(),
        text: newToDoItem,
        completed: false,
      };

      setToDos([...toDos, newToDo]);
      setNewToDoItem('');
      setShowModal(false); // Oculta la ventana emergente después de agregar el elemento
    }
  };

  //Eventos

  const searchedToDos = toDos.filter((todo) => {
    const toDoText = todo.text.toLocaleLowerCase();
    const searchText = valueSearched.toLocaleLowerCase();
    return toDoText.includes(searchText);
  });

  const completeToDo = (id) => {
    const newToDos = [...toDos];
    const todoIndex = newToDos.findIndex((todo) => todo.id === id);
    newToDos[todoIndex].completed = true;
    setToDos(newToDos);
  };

  const deleteToDo = (id) => {
    const newToDos = [...toDos];
    const todoIndex = newToDos.findIndex((todo) => todo.id === id);
    newToDos.splice(todoIndex, 1);
    setToDos(newToDos);
  };




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

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <input
              type='text'
              placeholder='Nuevo elemento'
              value={newToDoItem}
               onChange={(e) => setNewToDoItem(e.target.value)}
  ref={inputRef}
  autoFocus
            />
            <button onClick={addNewToDoItem}>Añadir tarea</button>
          </div>
        </div>
      )}

      <CreateToDoButton openModal={openModal} />
    </>
  );
}

export default App;
