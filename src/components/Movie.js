import React from "react";
import { Link } from "react-router-dom";

const Movie = ({ id }) => {
	return (
		<div>
			<Link to={`/${id}`}>
				<h1>{id}</h1>
			</Link>
		</div>
	);
};

export default Movie;
