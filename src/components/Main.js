import React, {Component} from "react"
import Article from "./Article"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
import variables from "./variables"
import newsDb from "./newsDb"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
//import VariablesList from "./VariablesList"

class Main extends Component {

	constructor() {
		super()
		this.state = {
			count: 0
		}
	}

	componentDidMount() {
	//	this.setState({loading: true})
	//	fetch(newsDb)
	//		.then(response => response.json())
	//		.then(response => {
	//			const {memes} = response.data
	//
	//			this.setState({ allMemeImgs: memes })
	//			console.log(memes[0])
	//		})
	}

	render() {

		return(
			<main class="container">
				

				<Ad />


				<div class="grid">



					{ 
					// LEFT COLUMN -->
					}
					<div class="left-column">
	
						<ArticleList 
							db={newsDb}
							col="left"
						/>

					</div>


					{ 
					//MIDDLE COLUMN 
					}
					<div class="middle-column">

						<ArticleList 
							db={newsDb}
							col="right"
						/>

					</div>

					{
						//RIGHT COLUMN 
					}
					<div class="right-column">

						<CaricatureList 
							data={CaricaturesDb}
						/>					

					</div>
				</div>

			</main>
		)
	}
}

export default Main
		