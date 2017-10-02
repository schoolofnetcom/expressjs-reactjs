import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import { Link } from 'react-router-dom'
import { create } from './CategoryAPI'

class ListCategoryComponent extends Component {
	constructor(props) {
		super(props)
		
		this.state = { name: '' }
		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange(e) {
		return this.setState({ name: e.target.value })
	}

	handleSubmit() {
		let { name } = this.state
		create(name).then(() => {
			this.props.history.push('/category')
		})
	}

	render() {
		return(
			<Container>
				<Row>
					<Col xs="12" sm="12" md="12" className="m-1tbem"> 
						<Form>
							<FormGroup>
								<Label>Name:</Label>
								<Input type="text" name="name" placeholder="Enter Category Name: " onChange={this.handleChange} />
							</FormGroup>
							<FormGroup>
								<Button color="primary" onClick={this.handleSubmit}>Create</Button>
							</FormGroup>
						</Form>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default ListCategoryComponent