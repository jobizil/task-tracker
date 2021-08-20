/* 
useState is a Hook that allows us to have state variables in functional components. We pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. */
import { useState, useEffect } from "react"
import { Route } from "react-router-dom"

import Header from "./components/Header.component"

import Footer from "./components/Footer"
import About from "./components/About"

import Tasks from "./components/Tasks.component"
import AddTask from "./components/form/Add-Task-Form.component"

function App() {
	const [showAddButton, setShowAddButton] = useState(false)
	const [tasks, setTasks] = useState([])

	// Fetch Tasks
	const fetchTasks = async () => {
		const res = await fetch("http://localhost:4300/tasks")
		const data = await res.json()
		return data
	}
	// Fetch Single Task
	const fetchTask = async (id) => {
		const res = await fetch(`http://localhost:4300/tasks/${id}`)
		const data = await res.json()
		return data
	}
	useEffect(() => {
		const getTasks = async () => {
			const tasksFromServer = await fetchTasks()
			setTasks(tasksFromServer)
		}
		getTasks()
	}, [])

	// Add Task
	const addTask = async (task) => {
		const res = await fetch(`http://localhost:4300/tasks`, {
			method: "POST",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(task),
		})
		const data = await res.json()
		setTasks([...tasks, data])
		// const id = Math.floor(Math.random() * 10000) + 1
		// const newTask = { id, ...task }
		// setTasks([...tasks, newTask])
	}
	// Delete  Task  Function
	const deleteTask = async (id) => {
		await fetch(`http://localhost:4300/tasks/${id}`, { method: "DELETE" })
		setTasks(tasks.filter((task) => task.id !== id))
	}

	//  Toggle Reminder
	const toggleReminder = async (id) => {
		const taskToToggle = await fetchTask(id)
		const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }
		const res = await fetch(`http://localhost:4300/tasks/${id}`, {
			method: "PUT",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify(updatedTask),
		})
		const data = await res.json()
		setTasks(tasks.map((task) => (task.id === id ? { ...task, reminder: data.reminder } : task)))
	}
	return (
		<div className="container">
			<Header onShowForm={() => setShowAddButton(!showAddButton)} showAdd={showAddButton} />
			<Route
				exact
				path="/"
				render={(props) => (
					<>
						<AddTask onAddTask={addTask} />
						{tasks.length ? (
							<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
						) : (
							<h4>No task to track</h4>
						)}
					</>
				)}
			/>
			<Route exact path="/about" component={About} />
			<Footer />
		</div>
	)
}

export default App
