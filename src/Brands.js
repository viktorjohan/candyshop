import React, { Component } from 'react';
import RingpopIcon from '../public/img/ring-pop.svg';
import $ from 'jquery';

const styles = {
  brands:{
    fontFamily: 'Fredoka One',
    color: '#413c3c',
    height: 'auto',
    display: "flex",
    justifyContent: 'space-around',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: '30px',
    paddingBottom: '40px'
  },
  brandsh2:{
    fontFamily: 'Fredoka One',
    color: '#413c3c',
    textAlign: 'center'
  }
}

export default class Brands extends Component{

  componentDidMount = () =>{
    $('img').mouseover(function(){
  	   $(this).addClass('animated swing').one("animationend", function(){
         $(this).removeClass('animated swing');
       });
    });
  }

  render(){
    return(
      <div style={{marginRight: '20%', marginLeft: '20%'}}>
        <h2 style={styles.brandsh2}><span style={{borderBottom: '7px solid #CC6F9F'}}>Brands</span></h2>
        <p style={{textAlign: 'center', fontFamily: 'Fredoka One', color: '#413c3c', lineHeight: '1.8'}}>Shop by brand here to find the candy you need by the candy makers you love. Sometimes it's easier to search for what you want by looking under the manufacturer, so check out the companies whose products we sell below.</p>
        <div style={styles.brands}>
          <img src={RingpopIcon} alt="ringpopicon" style={{width: '110px'}} />
        </div>
      </div>
    )
  }
}
