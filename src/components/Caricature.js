import React, {Component} from "react"

function Caricature(props) {

	return(
		<article>
			<h4>{props.header}</h4>
			<img key={props.key} src={props.img} />
		</article>
	)

}
export default Caricature