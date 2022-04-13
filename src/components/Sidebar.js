import React from "react";

const Sidebar = () => {
	return (
		<div className="sidebar">
			<h2>New Releases</h2>
			<h2>Star Rating</h2>
			<div className="inputBox">
				<input type="text" placeholder="Write a Star 1 ~ 10" />
				<button>Done</button>
			</div>
		</div>
	);
};

export default Sidebar;
