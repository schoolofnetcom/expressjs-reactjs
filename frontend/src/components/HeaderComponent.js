import React, { Component } from 'react'
import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Collapse } from 'reactstrap'

class HeaderComponent extends Component {
	constructor(props) {
		super(props)

		this.state = { isOpen : false }
		this.toggleNavbar = this.toggleNavbar.bind(this)
	}

	toggleNavbar() {
		this.setState({
			isOpen: !this.state.isOpen
		})
	}

	render() {
		let { isOpen } = this.state
		return (
			<header>
				<Navbar color="faded" toggleable inverse className="navbar-custom bg-primary navbar-expand-sm navbar-dark">
					<NavbarToggler right onClick={this.toggleNavbar} />
					<NavbarBrand href="/">Finch</NavbarBrand>
					<Collapse isOpen={isOpen} navbar>
						<Nav navbar> 
							<NavItem>
								<NavLink href="/category">Category</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href="/bill">Bill</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Navbar>
			</header>
		)
	}
}

export default HeaderComponent