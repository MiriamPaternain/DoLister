function ToDoSearch({handleToDoSearch, valueSearched, setValueSearched}) {
   const handleInputChange = (event) => {
    setValueSearched(event.target.value);
  };
    return(
      <div className="toDoSearch">
        <input
        type="text"
        placeholder="Busca aquí tu tarea"
        className="toDoSearch_input"
        onChange={handleInputChange}
        value={valueSearched} />
      </div>
    );
}

export default ToDoSearch;