import React from "react";
import {Navbar} from "./Navbar.jsx"
import {ToDo} from "./ToDo.jsx"


//create your first component
export const Home = () => {
	return (
		<div className="container-fluid">
			<Navbar />
			<ToDo />
		</div>
	);
};
