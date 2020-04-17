import React, { Component } from "react";
import AddTask from "./AddTask";
import TasksHome from "./TasksHome";
import TasksHistory from "./TasksHistory";
import Navigation from "./Navigation";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import image from "../images/image2.svg";
import logo from "../images/logo.svg";

import "../styles/App.css";
import "../styles/Main.css";
class App extends Component {
	//ustaw counter na podstawie tablicy
	counter = 9;
	constructor(props) {
		super(props);
		this.state = {
			tasks: [
				{
					id: 0,
					text: "kupic pomidory",
					date: "2020-05-23",
					important: false,
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
					important: false,
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

	deleteTask = (id) => {
		const tasks = [...this.state.tasks];
		const index = tasks.findIndex((task) => task.id === id);
		tasks.splice(index, 1);

		this.setState({
			tasks,
		});
	};
	changeTaskStatus = (id) => {
		const tasks = [...this.state.tasks];
		tasks.forEach((task) => {
			if (task.id === id) {
				task.active = false;
				task.finishDate = new Date().getTime();
			}
		});
		this.setState({
			tasks,
		});
	};
	addTask = (text, date, important) => {
		const task = {
			id: this.counter,
			text, //pobierane z inputów z komponentu AddTask
			date,
			important,
			active: true,
			finishDate: null,
		};
		this.counter++;
		console.log(task, this.counter);

		this.setState((prevState) => ({
			tasks: [...prevState.tasks, task],
		}));

		return true;
	};
	render() {
		return (
			<Router>
				<div className="container">
					<div className="app ">
						<Navigation />
						<header>{<AddTask add={this.addTask} />}</header>
						<section>
							<aside>
								<img class="logo" src={logo} alt={`logo ${logo}`} />
								<img class="img" src={image} alt={`picutre ${image}`} />
							</aside>
							<main>
								<Switch>
									<Route
										path="/"
										exact
										render={() => (
											<TasksHome
												tasks={this.state.tasks}
												delete={this.deleteTask}
												change={this.changeTaskStatus}
											/>
										)}
									/>
									<Route
										path="/history"
										render={() => (
											<TasksHistory
												tasks={this.state.tasks}
												delete={this.deleteTask}
												// change={this.changeTaskStatus}
											/>
										)}
									/>
									<Route
										render={() => (
											<TasksHome
												tasks={this.state.tasks}
												delete={this.deleteTask}
												// change={this.changeTaskStatus}
											/>
										)}
									/>
								</Switch>
							</main>
						</section>
						<footer>
							<small>&copy; Copyright 2020 gregsypek</small>
						</footer>
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
