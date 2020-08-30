import React, {Component} from "react"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
//import newsDb from "./newsDb"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
import Clock from "react-live-clock"

//import VariablesList from "./VariablesList"

class Main extends Component {

	constructor() {
		super()
		this.state = {	
			NewsData: [],
			count: 0,
		}
	}


	componentDidMount() {
		this.setState({loading: true})
		fetch("https://my-json-server.typicode.com/toogreen/myjsondata/db")
			.then(response => response.json())
			.then(response => {
				
				const newsDb = response.newsDb

				this.setState({ NewsData: newsDb })
				
				console.log(newsDb[1].col)
			})

	}

	componentWillUnmount() {
        // make fetch request
    }


	render() {

		// const test = this.state.NewsData[1]

		return(

			<main class="container">
				
				<div className="date">
					<Clock 
						format={'dddd, MMMM Do, YYYY'}
						ticking={true}
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

						{/* <h1>{test.title}</h1> */}
	
						<ArticleList 
							db={this.state.NewsData}
							col="left"
						/>

					</div>


					{ 
					//MIDDLE COLUMN 
					}
					<div class="middle-column">

						<ArticleList 
							db={this.state.NewsData}
							col="middle"
						/>
					</div>

					{
						//RIGHT COLUMN 
					}
					<div class="right-column">
						<ArticleList 
							db={this.state.NewsData}
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
		