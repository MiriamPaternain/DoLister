import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ToDoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='toDoItem'>
      <span
        className={`toDoItem__iconCheck ${
          completed && 'toDoItem__iconCheck--active'
        }`}
        onClick={onComplete}
      >
        <FontAwesomeIcon icon="check" />
      </span>
      <p className={`toDoItem__text ${completed && 'toDoItem__complete'}`}>
        {text}
      </p>
      <span className='toDoItem__iconDelete' onClick={onDelete}>
       <FontAwesomeIcon icon="trash-can" />
      </span>
    </li>
  );
}

export default ToDoItem;
