import React from "react"


function Article(props) {

	return(
		<article>
				<a id={props.key} href={props.url} target="_blank" rel="noopener noreferrer">
					<div id={props.key} className={props.classtype}>
						<h4>{props.header}</h4>
						<img id={props.key} src={props.img} alt={props.title} />
		 				<h1>{props.title}</h1>
						<h5><strong>Source:</strong> {props.source}</h5>
						<br />
						<p id={props.key}>{props.desc}</p>			
					</div>
				</a>
		</article>

	)

}
export default Article