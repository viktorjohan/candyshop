import React, { Component } from 'react';
import { Link } from 'react-router';
import './App.css';

export default class Header extends Component{
  render(){
    return(
      <div>
        <div className="header">
          <h3 className="logoname"><Link style={{fontSize: '69px', color: '#CC6F9F'}} to="/">Candyshop</Link></h3>
          <div className="navbar">
            <Link to="products" activeStyle={{color: '#CC6F9F'}}>Products</Link>
            <Link to="about" activeStyle={{color: '#CC6F9F'}}>About</Link>
            <Link to="brands" activeStyle={{color: '#CC6F9F'}}>Brands</Link>
            <Link to="careers" activeStyle={{color: '#CC6F9F'}}>Careers</Link>
          </div>
        </div>
      </div>
    )
  }
}
