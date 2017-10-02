import React, { Component } from 'react'
import logo from './logo.svg'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent'
import MainComponent from './components/MainComponent'
import ListCategoryComponent from './components/category/ListCategoryComponent'
import CreateCategoryComponent from './components/category/CreateCategoryComponent'
import ListBillComponent from './components/bill/ListBillComponent'
import CreateBillComponent from './components/bill/CreateBillComponent'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <HeaderComponent />
        <Router>
          <div>
            <Route exact path="/" component={MainComponent} />
            <Route exact path="/category" component={ListCategoryComponent} />
            <Route path="/category/new" component={CreateCategoryComponent} />
            <Route exact path="/bill" component={ListBillComponent} />
            <Route path="/bill/new" component={CreateBillComponent} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App
