import { FaTimes } from 'react-icons/fa'
const Task = ({ task, onDelete, onToggle }) => {
    return (
        <div className={`task ${ task.reminder ? 'reminder' : 'no-reminder' }`} onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.title} <FaTimes style={{ color: 'red', cursor: 'pointer', }} onClick={() => onDelete(task.id)} /> </h3>
            <p>Due on {task.date} at about {task.time} </p>
        </div>
    )
}
export default Task

