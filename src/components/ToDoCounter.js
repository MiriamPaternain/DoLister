function ToDoCounter({total, completed}) {

    return(
        <p className="toDoCounter__text">Has completado <span className="toDoCounter__number">{completed}</span> de <span className="toDoCounter__number">{total}</span> tareas</p>
    );
}

export default ToDoCounter;