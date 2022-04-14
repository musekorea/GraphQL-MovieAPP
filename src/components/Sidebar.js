import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ setRating }) => {
	const [starRating, setStarRating] = useState("0");
	const onChange = (e) => {
		setStarRating(e.target.value);
	};
	const onSubmit = (e) => {
		if (starRating === "0" || !Number.isInteger(Number(starRating))) {
			return;
		} else if (starRating > 10) {
			setRating(9);
		} else {
			setRating(starRating);
		}
	};
	return (
		<div className="sidebar">
			<Link to={`/`}>
				<h2>New Releases</h2>
			</Link>
			<h2>Star Rating</h2>
			<div className="inputBox">
				<form onSubmit={onSubmit}>
					<input
						type="text"
						placeholder="Write a Star 1 ~ 10"
						onChange={onChange}
					/>
					<button>Done</button>
				</form>
			</div>
		</div>
	);
};

export default Sidebar;
