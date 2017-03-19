import React, { Component } from 'react';
import CandyIcon from '../public/img/candyicon.svg';
import $ from 'jquery';

const styles={
  careersWrapper:{
    textAlign: 'center',
    fontFamily: 'Fredoka One',
    color: '#413c3c',
    marginLeft: '20%',
    marginRight: '20%',
    lineHeight: '1.8',
    paddingBottom: '30px'
  },
  icons:{
    width: '110px',
    paddingTop: '20px'
  }
}

export default class Careers extends Component{

  componentDidMount = () =>{
    $('img').mouseover(function(){
  	   $(this).addClass('animated bounce').one("animationend", function(){
         $(this).removeClass('animated bounce');
       });
    });
  }

  render(){
    return(
      <div className="careersWrapper" style={styles.careersWrapper}>
        <h2 style={{marginTop: '12px'}}><span style={{borderBottom: '7px solid #CC6F9F'}}>Careers</span></h2>
        <p>Imagine yourself working with some of the sharpest and most
          creative brains in the candy industry,
          making cutting-edge sweets that will change the future of society.</p>
        <p>We have no positions available at the moment.</p>
        <img src={CandyIcon} alt="candyicon" style={styles.icons}/>
      </div>
    )
  }
}
