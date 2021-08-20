import { useState } from "react"

const AddTask = ({ onAddTask }) => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)

    // Submit form function
    const onSubmit = (e) => {
        e.preventDefault()
        if (!title) { alert('Please a task') }
        onAddTask({ title, date, reminder })
        // Clear form on submit
        setTitle('')
        setDate('')
        setReminder(false)
    }

    return (
        <form form className='add-form' onSubmit={onSubmit} >
            <div className='form-control'>
                <label> Task</label>
                <input type='title' placeholder='Add Task'
                    value={title} onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>date & Time</label>
                <input type='title' placeholder='Add date and Time'
                    value={date} onChange={event => setDate(event.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={event => setReminder(event.currentTarget.checked)} />
            </div>
            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}
export default AddTask