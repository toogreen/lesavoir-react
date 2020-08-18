import React from "react"
import variables from "./variables"

function Header() {
	return(
		<header>
			<div id="logo"></div>
			<p>{variables[1].value}</p>
		</header>
	)
}

export default Header