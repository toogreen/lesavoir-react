import React from "react"

function Caricature(props) {

	return(
		<article>
			<h4>{props.header}</h4>
			<a href={props.img}><img key={props.key} src={props.img} alt={props.header} /></a>
		</article>
	)

}
export default Caricature