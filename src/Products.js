import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import {pink200} from 'material-ui/styles/colors';
import './App.css';
import $ from 'jquery';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const styles={
  productsContainer: {
    textAlign: 'center',
    fontFamily: 'Fredoka One',
    color: '#413c3c'
  },
  buttons:{
    backgroundColor: 'black',
    color: 'yellow'
  },
  underlineStyle:{
    borderColor: pink200
  }
}

function searchingFor(term){
  return function(x){
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

$(document).ready(function() {
  $(window).keydown(function(event){
    if(event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  });
});

export default class Products extends Component{

  componentDidMount = () =>{
    $('img').mouseover(function(){
  	   $(this).addClass('animated rubberBand').one("animationend", function(){
         $(this).removeClass('animated rubberBand');
       });
    });
    $('img').addClass('animated bounceIn').one('animationend', function(){
      $(this).removeClass('animated bounceIn');
    })
  }

  handleSort = () => {
    var x = document.getElementById("mySelect").value;
    this.props.onSort(x);
  }

  render() {
    var produkterna = this.props.produkter;
    var termState = this.props.termState;
    produkterna = produkterna.filter(searchingFor(termState)).map(function(item){
      if(item.inStock){
        return (
            <div key={item.id} className="item-container">
              <img src={item.imageUrl} alt="candy" style={{width: '180px', padding: '14px', opacity: '0.95'}} />
              <p style={{color: '#CC6F9F', fontSize: '21px'}}>{item.name}</p>
              <p style={{fontSize: '19px'}}>{item.consumerPrice} kr</p>
              <MuiThemeProvider>
                <RaisedButton label="Buy!" secondary={true} />
              </MuiThemeProvider>
            </div>
        )
      } else{
        return (
            <div key={item.id} className="item-container">
              <img src={item.imageUrl} alt="candy" style={{width: '180px', padding: '14px', opacity: '0.95'}} />
              <p style={{color: '#CC6F9F', fontSize: '21px'}}>{item.name}</p>
              <p style={{fontSize: '19px'}}>{item.consumerPrice} kr</p>
              <MuiThemeProvider>
                <RaisedButton label="Sold out!" disabled={true} />
              </MuiThemeProvider>
            </div>
        )
      }
    }
  )

  return(
    <div className="section-wrapper" style={styles.productsContainer}>
      <h2 style={{paddingBottom: '20px'}}><span style={{borderBottom: '7px solid #CC6F9F'}}>Products</span></h2>
      <div className="search-select">
        <form>
          <MuiThemeProvider>
            <TextField id="textfield" style={{width: '170px', textAlign: 'center'}} underlineFocusStyle={styles.underlineStyle} hintText="Search here..." onChange={this.props.searchHandler} />
          </MuiThemeProvider>
        </form>
        <div>
          <select className="styled-select" onChange={this.handleSort} id="mySelect">
            <option>Sort by</option>
            <option value="instock">In stock</option>
            <option value="dyr">$$-$</option>
            <option value="billig">$-$$</option>
            <option value="AZ">A-Z</option>
            <option value="ZA">Z-A</option>
          </select>
        </div>
      </div>
      <div className="products-wrapper">{produkterna}</div>
    </div>
    )
  }
}
