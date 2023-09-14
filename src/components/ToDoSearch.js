function ToDoSearch({handleToDoSearch, valueSearched, setValueSearched}) {
   const handleInputChange = (event) => {
    setValueSearched(event.target.value);
  };
    return(
      <input 
      type="text" 
      placeholder="Busca aquí tu tarea"
      className="toDoSearch"
      onChange={handleInputChange}
      value={valueSearched} />
    );
}

export default ToDoSearch;