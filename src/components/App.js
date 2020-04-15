import React, { Component } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

import "./App.css";
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					id: 0,
					text: "kupic pomidory",
					date: "2020-05-23",
					important: true,
					active: true,
					finishDate: null,
				},
				{
					id: 1,
					text: "umyc samochod",
					date: "2020-04-20",
					important: true,
					active: true,
					finishDate: null,
				},
				{
					id: 2,
					text: "posprzątać pokój",
					date: "2021-08-03",
					important: true,
					active: true,
					finishDate: null,
				},
				{
					id: 3,
					text: "sprzedać ksiąźkę",
					date: "2020-11-02",
					important: true,
					active: true,
					finishDate: null,
				},
			],
		};
	}
	render() {
		return (
			<div>
				TODOAPP
				<AddTask />
				<TaskList tasks={this.state.tasks} />
			</div>
		);
	}
}

export default App;
