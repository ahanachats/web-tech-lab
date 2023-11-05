import React from "react";

const Task = ({ task, onDelete }) => { return (
<div className="task">
<span>{task}</span>
<button onClick={() => onDelete(task)}>Delete</button>
</div>
);
};

export default Task;
