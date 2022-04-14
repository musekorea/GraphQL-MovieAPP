import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Movie = ({ id, title, poster }) => {
	const [mouseOn, setMouseOn] = useState(false);

	return (
		<div className="movieContainer">
			<Link to={`/${id}`}>
				<img
					className={mouseOn ? "mouseOn" : null}
					src={poster}
					alt={id}
					onMouseOver={() => {
						setMouseOn(true);
					}}
					onMouseLeave={() => setMouseOn(false)}
				/>
			</Link>
		</div>
	);
};

export default Movie;
