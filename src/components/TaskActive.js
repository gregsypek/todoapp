import React from "react";
import ok from "../images/ok.svg";
import x from "../images/usun.svg";

const TaskActive = (props) => {
	const importantStyle = {
		color: "#EB5757",
	};
	const { text, date, id, important } = props.task;
	return (
		<tr>
			<th style={important ? importantStyle : null}>{text}</th>
			<td>{date}</td>
			<td>
				<button onClick={() => props.change(id)}>
					<img className="ok" src={ok} alt={`ok ${ok}`} />
				</button>
			</td>
			<td>
				<button onClick={() => props.delete(id)}>
					<img className="x" src={x} alt={`x button ${x}`} />
				</button>
			</td>
		</tr>
	);
};

export default TaskActive;
