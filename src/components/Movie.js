import React from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Movie = ({ id, title, image }) => {
	return (
		<div>
			<Link to={`/${id}`}>
				<img src={image} alt={id} />
			</Link>
		</div>
	);
};

export default Movie;
