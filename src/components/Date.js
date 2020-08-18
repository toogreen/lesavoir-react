import React, {Component} from "react"

class Date extends Component {

	constructor() {
		super()
		this.state = {
			date: ""
		}
	}

	componentDidMount() {

		this.getDate();

	}

	getDate = () => {
		var date = new Date().toDateString();
		this.setState({ date });
	}

	render() {

		const { date } = this.state

		return(

			<div>{date}</div>

		)
	}
}

export default Date
		