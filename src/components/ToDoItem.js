import CompleteIcon from '../img/check.svg';
import DeleteIcon from '../img/delete.svg';

function ToDoItem({ text, completed, onComplete, onDelete }) {
  return (
    <li className='toDoItem'>
      <span
        className={`toDoItem__iconCheck ${
          completed && 'toDoItem__iconCheck--active'
        }`}
        onClick={onComplete}
      >
        <img src={CompleteIcon} alt="complete icon" />
      </span>
      <p className={`toDoItem__text ${completed && 'toDoItem__complete'}`}>
        {text}
      </p>
      <span className='toDoItem__iconDelete' onClick={onDelete}>
         <img src={DeleteIcon} alt="delete icon" />
      </span>
    </li>
  );
}

export default ToDoItem;
