import React from "react";
import { Link } from "react-router-dom";

function Home() {
	return (
		<div>
			<h1>Home</h1>
			<Link to="/registry">To go to Registry. Click Here!</Link>
		</div>
	);
}

export default Home;
