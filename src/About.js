import React, { Component } from 'react';
import FrozenyogurtIcon from '../public/img/frozen-yogurt.svg';
import $ from 'jquery';

const styles={
  aboutWrapper:{
    textAlign: 'center',
    fontFamily: 'Fredoka One',
    color: '#413c3c',
    marginLeft: '20%',
    marginRight: '20%',
    lineHeight: '1.8',
    paddingBottom: '40px',
    minHeight: '100%'
  },
  icons:{
    width: '110px',
    paddingTop: '20px'
  }
}

export default class About extends Component{

  componentDidMount = () =>{
    $('img').mouseover(function(){
  	   $(this).addClass('animated wobble').one("animationend", function(){
         $(this).removeClass('animated wobble');
       });
    });
  }

  render(){
    return(
      <div className="aboutWrapper" style={styles.aboutWrapper}>
        <h2 style={{marginTop: '12px'}}><span style={{borderBottom: '7px solid #CC6F9F'}}>About</span></h2>
        <p>Candyshop is a family run candy shop, nestled in Göteborg.
          Candyshop has been helping you to celebrate your most
          memorable events with sweets and snacks since 1789. Candyshop
          has all of the sweet treats you need to make the special occasions of your life exceptional.</p>
        <img src={FrozenyogurtIcon} alt="frozenyogurticon" style={styles.icons}/>
      </div>
    )
  }
}
