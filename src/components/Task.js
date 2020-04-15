import React from "react";

const Task = (props) => {
	const importantStyle = {
		color: "red",
	};
	const { text, date, id, important, finishDate } = props.task;
	return (
		<tr>
			<th style={important ? importantStyle : null}>{text}</th>
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
