import React from "react";
import Task from "./Task";

const TaskList = (props) => {
	const active = props.tasks.filter((task) => task.active);
	const activeTasks = active.map((task) => (
		<Task
			key={task.id}
			task={task}
			tasks={props.tasks}
			delete={props.delete}
			change={props.change}
		/>
	));
	// do zaimplementowania na osobnej stronie
	const done = props.tasks.filter((task) => !task.active);
	const doneTasks = done.map((task) => (
		<Task
			key={task.id}
			task={task}
			tasks={props.tasks}
			delete={props.delete}
			change={props.change}
		/>
	));
	// koniec
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
			{/* do zaimplementowania na osobnej stronie */}
			<hr />
			<div className="done">
				<table>
					<thead>
						<tr>
							<th>Zadania zrobione</th>
							<th>Do kiedy...</th>
							<th>Zrobione</th>
							<th>Usuń</th>
						</tr>
					</thead>
					{/* slice wyswietli tylko 5 */}
					<tbody>{doneTasks.slice(0, 5)}</tbody>
				</table>
			</div>
		</>
	);
};

export default TaskList;
