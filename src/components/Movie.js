import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.scss";

const Movie = ({ id, title, poster }) => {
	const [mouseOn, setMouseOn] = useState(false);
	const [keep, setKeep] = useState(false);
	const onClick = (e) => {
		setKeep((prep) => !prep);
	};
	console.log(keep);

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
			<button className={keep ? "keep active" : "keep"} onClick={onClick}>
				KEEP
			</button>
		</div>
	);
};

export default Movie;
