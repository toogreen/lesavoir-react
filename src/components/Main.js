import React, {Component} from "react"
import Article from "./Article"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
import variables from "./variables"
import newsDb from "./newsDb"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
import Clock from "react-live-clock"
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
				
				<div className="date">
					<Clock 
						format={'dddd, MMMM Mo, YYYY'}
						ticking={true}
						timezone={'Canada/Montreal'}
					/>
				</div>
				<div className="time">
					<Clock 
						format={'h:mm:ssa'}
						ticking={true}
					/>
				</div>

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
							col="middle"
						/>

					</div>

					{
						//RIGHT COLUMN 
					}
					<div class="right-column">

						<div className="caricatures">
							<CaricatureList 
								data={CaricaturesDb}
							/>				
						</div>
						<ArticleList 
							db={newsDb}
							col="right"
						/>
					</div>
				</div>

			</main>
		)
	}
}

export default Main
		