/* 
useState is a Hook that allows us to have state variables in functional components. We pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. */
import { useState } from "react"; 
import Header from "./components/Header.component";
import Tasks from "./components/Tasks.component";

function App() {
  const [tasks, setTasks] = useState(  [{
    id: 1,
    title: "Proin interdum mauris non ligula pellentesque ultrices.",
    userId: "620-71-9079",
    date: "06-Jul-2021",
    time: "9:45 AM"
    ,reminder:true
}, {
    id: 2,
    title: "Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed.  ",
    userId: "645-54-2197",
    date: "25-Mar-2021",
    time: "9:18 AM"
    ,reminder:true
}, {
    id: 3,
    title: " Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    userId: "278-03-9960",
    date: "10-Oct-2020",
    time: "1:36 AM"
    ,reminder:true
}, {
    id: 4,
    title: "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.  ",
    userId: "377-83-3657",
    date: "19-Aug-2020",
    time: "3:24 AM"
    ,reminder:true
}, {
    id: 5,
    title: "  Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci.",
    userId: "354-46-4832",
    date: "05-Oct-2020",
    time: "4:42 AM"
    ,reminder:true
}])

  // Delete  Task  Function
  const deleteTask = (id) => {
    setTasks(tasks.filter(task=>task.id !== id))
  }
  return (
    <div className="container">
      < Header />
      {
        tasks.length ?
          <Tasks tasks={tasks} onDelete={deleteTask} />
        : <h4>No task to track</h4>
        }
    </div >
  );
}

export default App;
