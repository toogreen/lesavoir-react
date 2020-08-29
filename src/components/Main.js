import React, {Component} from "react"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
import newsDb from "./newsDb"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
import Clock from "react-live-clock"

//import VariablesList from "./VariablesList"

class Main extends Component {

	constructor() {
		super()

		
		this.state = {
			count: 0,
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
						format={'dddd, MMMM Do, YYYY'}
						ticking={true}
						timezone={'Canada/Montreal'}
					/>
				</div>
				<div className="time">
					<Clock 
						format={'HH:mm:ss'}
						ticking={true}
					/>
				</div>

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
							col="middle"
						/>

					</div>

					{
						//RIGHT COLUMN 
					}
					<div class="right-column">
						<ArticleList 
							db={newsDb}
							col="right"
						/>
						<div className="caricatures">
							<CaricatureList 
								data={CaricaturesDb}
							/>				
						</div>

					</div>
				</div>

			</main>
		)
	}
}

export default Main
		