
function ToDoItem({text, completed, onComplete, onDelete}) {
  return (
<li className="toDoItem">
  <span 
  className={`toDoItem__iconCheck ${completed && "toDoItem__iconCheck--active" }`}
  onClick={onComplete}
  >V</span>
  <p className={`toDoItem__text ${completed && "toDoItem__complete" }`}>{text}</p>
  <span 
  className="toDoItem__iconDelete"
  onClick={onDelete}
  >X</span>
</li>
  );
}

export default ToDoItem;
