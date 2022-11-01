import React, {Component} from "react"
import CaricatureList from "./CaricatureList"
import Ad from "./Ad"
//import newsDb from "./newsDb"
import ArticleList from "./ArticleList"
import CaricaturesDb from "./CaricaturesDb"
import Clock from "react-live-clock"

//import VariablesList from "./VariablesList"

class Main extends Component {

	// Interval for refresh of data
	interval = null;
	
	constructor() {
		super()
		this.state = {	
			NewsData: [],
			count: 0,
		}
	}


	componentDidMount() {
		// Every 60 seconds this fetch a new version of the data
		this.interval = setInterval(this.getData, 60000);

		// Fetch data from getData function lower down
    	this.getData();
	}	

	componentWillUnmount() {
		clearInterval(this.interval);
	}


	getData = () => {

		//fetch("https://my-json-server.typicode.com/toogreen/myjsondata/db")
		fetch("http://localhost:3001/newsDb")
			.then(response => response.json())
			.then(response => {
				
				//const newsDb = response
				const newsDb = response.newsDb
				

				this.setState({ NewsData: newsDb })
				
				console.log(newsDb[1].col)
			})

	}



	render() {

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
								data={this.state.NewsData}
								col="caricatures"
							/>				
						</div>

					</div>
				</div>

			</main>
		)
	}
}

export default Main
		