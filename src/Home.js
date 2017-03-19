import React, { Component } from 'react';
import CandyShopLogo from '../public/img/candy-shop.svg';

const styles ={
  wrapper: {
    backgroundColor: '#ffddef',
    height: 'auto',
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginRight: '10%',
    marginLeft: '10%',
    alignItems: 'center'
  },
  icons:{
    width: '110px',
    padding: '29px'
  }
}

export default class Home extends Component{
  render(){
    return(
      <div style={styles.wrapper}>
        <img src={CandyShopLogo} alt="candyshoplogo" style={{width: '439px', paddingBottom: '45px'}} />
      </div>
    )
  }
}
