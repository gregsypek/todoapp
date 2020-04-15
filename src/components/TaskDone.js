import React from "react";

const TaskDone = (props) => {
	const { text, date, id, finishDate } = props.task;
	const finish = new Date(finishDate).toLocaleDateString();
	return (
		<tr>
			<th>{text}</th>
			<td>{date}</td>
			<td>{finish}</td>
			<td>
				<button onClick={() => props.delete(id)}>X</button>
			</td>
		</tr>
	);
};

export default TaskDone;
