import React, {Component} from "react"

function Caricature(props) {

	return(
		<article>
			<h4>{props.header}</h4>
			<a href={props.img}><img key={props.key} src={props.img} /></a>
		</article>
	)

}
export default Caricature