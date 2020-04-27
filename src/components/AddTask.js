import React, { Component } from "react";
import "../styles/AddTask.css";

class AddTask extends Component {
	minDate = new Date().toISOString().slice(0, 10);

	constructor(props) {
		super(props);
		this.state = {
			text: "",
			checked: false,
			date: this.minDate,
		};
	}

	handleDate = (e) => {
		this.setState({
			date: e.target.value,
		});
	};
	handleCheck = (e) => {
		this.setState({
			checked: e.target.checked,
		});
	};
	handleText = (e) => {
		this.setState({
			text: e.target.value,
		});
	};
	handleClick = () => {
		const { text, checked, date } = this.state;
		if (text.length > 2) {
			const add = this.props.add(text, date, checked);
			if (add) {
				this.setState({
					text: "",
					checked: false,
					date: this.minDate,
				});
			}
		} else {
			alert("Wprowadź zadanie z conajmniej dwóch liter!");
		}
	};
	render() {
		let maxDate = Number(this.minDate.slice(0, 4)) + 1;
		maxDate = maxDate + "-12-31";

		return (
			<div className="form">
				<input
					type="text"
					placeholder="dodaj zadanie... "
					value={this.state.text}
					onChange={this.handleText}
				/>
				<div>
					<input
						type="checkbox"
						checked={this.state.checked}
						id="important"
						onChange={this.handleCheck}
					/>
					<label htmlFor="important">priorytet</label>
				</div>
				<div>
					<label htmlFor="date">do kiedy...</label>
					<input
						type="date"
						value={this.state.date}
						min={this.minDate}
						max={maxDate}
						onChange={this.handleDate}
						id="date"
					/>
				</div>
				<button onClick={this.handleClick}>dodaj</button>
			</div>
		);
	}
}

export default AddTask;
