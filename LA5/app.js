import React, { useState } from "react"; import "./App.css";
import TaskList from "./Tasklist";

function App() {
const [tasks, setTasks] = useState([]); const [newTask, setNewTask] = useState("");

const handleAddTask = () => { if (newTask.trim() !== "") {
setTasks([...tasks, newTask]); setNewTask("");
}
};

const handleDeleteTask = (taskToDelete) => {
const updatedTasks = tasks.filter((task) => task !== taskToDelete);
setTasks(updatedTasks);
};

return (
<div className="app">
<h1>Task List App</h1>
<input
type="text" value={newTask}
onChange={(e) => setNewTask(e.target.value)} placeholder="Enter a task..."
/>
<button onClick={handleAddTask}>Add Task</button>
<TaskList tasks={tasks} onDelete={handleDeleteTask} />
</div>
);
}

export default App;
