
function ToDoItem({text, completed}) {
  return (
<li>
  <p>V{completed}</p>
  <p>{text}</p>
  <p>X</p>
</li>
  );
}

export default ToDoItem;
