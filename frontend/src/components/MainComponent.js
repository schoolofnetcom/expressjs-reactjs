import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

class MainComponent extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<Container>
				<Row>
					<Col xs="12" sm="12" md="12" className="text-center m-1tbem">
						<h1>Fintch</h1>
						<h4>Simple financial system made with Node.js and React.js</h4>
						<Link className="btn btn-primary m-1lfem" to="/category">See Categories</Link>
						<Link className="btn btn-primary" to="/bill">See Bills</Link>
					</Col>
				</Row>	
			</Container>
		)
	}
}

export default MainComponent