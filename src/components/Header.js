import React from "react";
import "../styles.scss";
import logo from "../images/logo.png";

const Header = () => {
	return (
		<div className="headerContainer">
			<img className="logo" src={logo} alt="logo" />
			<div>Profile</div>
		</div>
	);
};

export default Header;
