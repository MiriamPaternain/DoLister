function ToDoSearch({handleToDoSearch, valueSearched}) {
    return(
      <input 
      type="text" 
      placeholder="Busca aquí tu tarea"
      className="toDoSearch"
      /* onChange={handleToDoSearch} */
      value={valueSearched} />
    );
}

export default ToDoSearch;