import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			text: "",
			checked: false,
			date: "2020-04-20",
		};
	}
	render() {
		return (
			<div className="form">
				<input
					type="text"
					placeholder="dodaj zadanie... "
					value={this.state.text}
				/>
				<input type="checkbox" checked={this.state.checked} id="important" />
				<label htmlFor="important">Priorytet</label>
				<input type="date" value={this.state.date} />
				<label htmlFor="date">do kiedy...</label>
				<button>dodaj</button>
			</div>
		);
	}
}

export default AddTask;
