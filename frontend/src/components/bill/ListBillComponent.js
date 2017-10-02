import React, { Component } from 'react'
import { Container, Row, Col, Button, Table } from 'reactstrap'
import { Link } from 'react-router-dom'
import { findAll, deleteById } from './BillAPI'

class ListBillComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { bills: [] }

		this.handleDelete = this.handleDelete.bind(this)
	}

	componentDidMount() {
		return findAll().then(data => this.setState({ bills: data.results }))
	}

	handleDelete(bill) {
		deleteById(bill._id).then(() => {
			return findAll().then(data => this.setState({ bills: data.results }))
		})
	}

	render() {
		let { bills } = this.state
		return(
			<Container>
				<Row>
					<Col xs="12" sm="12" md="12" className="m-1tbem">
						<Link className="btn btn-primary" to="/bill/new">Create</Link>
					</Col>
				</Row>
				<Row>
					<Col xs="12" sm="12" md="12">
						<Table>
							<thead>
								<tr>
									<th>Name</th>
									<th>Value</th>
									<th>Type</th>
									<th>Action</th>
								</tr>
							</thead>
							<tbody>
								{ bills.map((bill, index) => (
									<tr>
										<td>{bill.name}</td>
										<td>{bill.value}</td>
										<td>{bill.type}</td>
										<td>
											<Button color="danger" onClick={() => this.handleDelete(bill) }>Remove</Button>
										</td>
									</tr>
								)) }
							</tbody>
						</Table>
					</Col>
				</Row>
			</Container>
		)
	}
}

export default ListBillComponent