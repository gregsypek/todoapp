import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
	return (
		<nav>
			<ul>
				<li>
					<NavLink to="/" exact>
						home
					</NavLink>
				</li>
				<li>
					<NavLink to="/history">history</NavLink>
				</li>
			</ul>
		</nav>
	);
};

export default Navigation;
