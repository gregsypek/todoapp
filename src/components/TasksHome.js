import React from "react";
import TaskActive from "./TaskActive";

const TasksListActive = (props) => {
	const active = props.tasks.filter((task) => task.active);

	if (active.length >= 2) {
		active.sort((a, b) => {
			//zamienia date (string) na liczbe zeby posortowac
			a = Date.parse(new Date(a.date));
			b = Date.parse(new Date(b.date));
			return a - b;
		});
	}
	const activeTasks = active.map((task) => (
		<TaskActive
			key={task.id}
			task={task}
			tasks={props.tasks}
			delete={props.delete}
			change={props.change}
		/>
	));

	return (
		<>
			<div className="active">
				<table>
					<thead>
						<tr>
							<th>Zadania do zrobienia</th>
							<th>Do kiedy...</th>
							<th>Zrobione</th>
							<th>Usuń</th>
						</tr>
					</thead>
					<tbody>{activeTasks}</tbody>
				</table>
			</div>
		</>
	);
};

export default TasksListActive;
