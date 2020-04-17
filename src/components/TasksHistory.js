import React from "react";

import TaskDone from "./TaskDone";

const TaskListDone = (props) => {
	const done = props.tasks.filter((task) => !task.active);

	//sortuje od najmniejszej do najwiekszej liczby
	if (done.length >= 2) {
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
			<div className="done">
				<table className="tbl-2">
					<thead>
						<tr>
							<th>Zadania zrobione</th>
							<th>Do kiedy było...</th>
							<th>Zrobiono dnia...</th>
							<th>Usuń</th>
						</tr>
					</thead>
					{/* slice wyswietli tylko 10 */}
					<tbody>{doneTasks.slice(0, 10)}</tbody>
				</table>
			</div>
		</>
	);
};

export default TaskListDone;
