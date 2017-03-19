//import axios from 'axios';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import Home from './Home';
import About from './About';
import Brands from './Brands';
import Careers from './Careers';
import Products from './Products';
import data from './candyproducts.json';
import './animate';
import './index.css';

class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      produkter: data.products,
      term: "",
    }
  }

  // componentDidMount = () => {
  //   axios.get('https://www.hulabeck.se/html/temp/products.json')
  //     .then(res => {
  //       console.log(res.data.products);
  //       this.setState({
  //         produkter: res.data.products
  //       })
  //     });
  // }

  searchHandler = (event) =>{
    this.setState({
      term: event.target.value
    })
  }

  onSort = (x) =>{
    var sorted = this.state.produkter;
    if(x === "billig"){
      sorted = sorted.sort(function(a, b){
        if(a.consumerPrice > b.consumerPrice){
          return 1;
        } else{
          return -1;
        }
      });
    } else if(x === 'dyr'){
      sorted = sorted.sort(function(a, b){
        if(a.consumerPrice > b.consumerPrice){
          return -1;
        } else{
          return 1;
        }
      });
    } else if(x === 'AZ'){
      sorted = sorted.sort(function(a, b){
        if (a.name > b.name){
          return 1;
        } else{
          return -1;
        }
      })
    } else if(x === 'ZA'){
      sorted = sorted.sort(function(a, b){
        if(a.name > b.name){
          return -1;
        } else{
          return 1;
        }
      })
    } else if(x === 'instock'){
      sorted = sorted.sort(function(a, b){
        if(a.inStock > b.inStock){
          return -1;
        } else{
          return 1;
        }
      });
    }
    this.setState({
      produkter: sorted
    });
  }


  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}></IndexRoute>
          <Route path="/about" component={About}></Route>
          <Route path="/brands" component={Brands}></Route>
          <Route path="/careers" component={Careers}></Route>
          <Route path="/products" component={() => (<Products produkter={this.state.produkter} onSort={this.onSort} termState={this.state.term} searchHandler={this.searchHandler} />)}></Route>
        </Route>
      </Router>
    )
  }
}

ReactDOM.render(<Index />, document.getElementById('root'));
