import React from "react";

const Task = (props) => {
	const { text, date, id } = props.task;
	return (
		<tr>
			<th>{text}</th>
			<td>{date}</td>
			<td>
				<button onClick={() => props.change(id)}>zrobione</button>
			</td>
			<td>
				<button onClick={() => props.delete(id)}>X</button>
			</td>
		</tr>
	);
};

export default Task;
