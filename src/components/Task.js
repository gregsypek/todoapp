import React from "react";

const Task = (props) => {
	const { text, date } = props.task;
	return (
		<tr>
			<th>{text}</th>
			<td>{date}</td>
			<td>
				<button>zrobione</button>
			</td>
			<td>
				<button>X</button>
			</td>
		</tr>
	);
};

export default Task;
