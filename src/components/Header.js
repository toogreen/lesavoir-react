import React from "react"
import variables from "./variables"

function Header() {
	return(
		<header>
			<div id="logo"></div>
			<p className="no-mobile">{variables[1].value}</p>
		</header>
	)
}

export default Header