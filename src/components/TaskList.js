import React from "react";
import Task from "./Task";
import TaskDone from "./TaskDone";

const TaskList = (props) => {
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

	//sortuje od najmniejszej do najwiekszej liczby
	if (done.length >= 2) {
		// console.log(done);
		done.sort((a, b) => b.finishDate - a.finishDate);
	}
	const doneTasks = done.map((task) => (
		<TaskDone
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
							<th>Do kiedy było...</th>
							<th>Zrobiono dnia...</th>
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
