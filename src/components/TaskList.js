import React from "react";
import Task from "./Task";

const TaskList = (props) => {
	const tasks = props.tasks.map((task) => (
		<Task key={task.id} task={task} tasks={props.tasks} />
	));

	return (
		<>
			<div className="active">
				<table>
					<thead>
						<tr>
							<th>Zadania do zrobienia</th>
							<th>Czas wykonania...</th>
							<th>Zrobione</th>
							<th>Usuń</th>
						</tr>
					</thead>
					<tbody>{tasks}</tbody>
				</table>
			</div>
			<hr />
			<div className="done">
				<h3>Zadania zrobione (0)</h3>
			</div>
		</>
	);
};

export default TaskList;
