import React, { Component } from 'react'
import { Container, Row, Col, Button, Form, FormGroup, Input, Label } from 'reactstrap'
import NumberFormat from 'react-number-format'
import { create } from './BillAPI'
import { findAll as findAllCategories } from './../category/CategoryAPI'

class CreateBillComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { name: '', value: 0.00, type: '', category: '', categories: [] }
		
		this.handleChangeName = this.handleChangeName.bind(this)
		this.handleChangeCategory = this.handleChangeCategory.bind(this)
		this.handleChangeType = this.handleChangeType.bind(this)
		this.handleChangeValue = this.handleChangeValue.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	componentDidMount() {
		return findAllCategories().then(data => this.setState( { categories: data.results }))
	}

	handleChangeName(e) {
		return this.setState({
			name: e.target.value
		})
	}

	handleChangeCategory(e) {
		return this.setState({
			category: e.target.value
		})		
	}

	handleChangeType(e) {
		return this.setState({
			type: e.target.value
		})				
	}
	
	handleChangeValue(e, values) {
		let { floatValue } = values

		return this.setState({
			value: floatValue
		})
	}
	
	handleSubmit() {
		let { name, value, type, category } = this.state

		create(name, value, type, category).then(() => {
			this.props.history.push('/bill')
		})
	}

	render() {
		let { categories } = this.state

		return(
			<Container>
				<Row>
					<Col xs="12" sm="12" md="12" className="m-1tpem">	
						<Form>
							<FormGroup>
								<Label>Name:</Label>
								<Input type="name" name="name" placeholder="Enter bill name:" onChange={this.handleChangeName} />
							</FormGroup>
							<FormGroup>
								<Label>Value</Label>
								<NumberFormat value={this.state.value} thousandSeparator={true} prefix={'R$'} decimalPrecision={2} className="form-control" onChange={this.handleChangeValue} />
							</FormGroup>
							<FormGroup>
								<Label>Type:</Label>
								<Input type="select" name="type" onChange={this.handleChangeType}>
									<option value="-1" defaultValue="-1">Select Type</option>
									<option value="IN">Input</option>
									<option value="OU">Output</option>
								</Input>
							</FormGroup>
							<FormGroup>
								<Label>Category:</Label>
								<Input type="select" name="category" onChange={this.handleChangeCategory}>
									<option value="-1" defaultValue="-1">Select Category</option>
									{ categories.map((category, index) => (
										<option value={category._id} key={index}>{category.name}</option>
									)) }
								</Input>
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

export default CreateBillComponent