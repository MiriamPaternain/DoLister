
function ToDoItem({text, completed}) {
  return (
<li className="toDoItem">
  <span className={`toDoItem__iconCheck ${completed && "toDoItem__iconCheck--active" }`}>V</span>
  <p className={`toDoItem__text ${completed && "toDoItem__complete" }`}>{text}</p>
  <span className="toDoItem__iconDelete">X</span>
</li>
  );
}

export default ToDoItem;
