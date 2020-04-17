import React from "react";
import x from "../images/usun.svg";
const TaskDone = (props) => {
	const { text, date, id, finishDate } = props.task;
	const finish = new Date(finishDate).toLocaleDateString();
	return (
		<tr>
			<th>{text}</th>
			<td>{date}</td>
			<td>{finish}</td>
			<td>
				<button onClick={() => props.delete(id)}>
					<img class="x" src={x} alt={`x button ${x}`} />
				</button>
			</td>
		</tr>
	);
};

export default TaskDone;
