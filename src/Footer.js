import React, { Component } from 'react';
import CandyshopLogo from '../public/img/candy-shop.svg';
import { Link } from 'react-router';

const styles = {
  footer: {
    height: "auto",
    width: "100%",
    backgroundColor: "#413c3c",
    display: "flex",
    color: "#7F6B76",
    justifyContent: "space-around",
    fontFamily: 'Fredoka One',
  }
}

export default class Footer extends Component{
  render(){
    return(
      <div style={styles.footer} className="footer">
        <div className="companyInfo" style={styles.companyInfo}>
          <ul>
            <li><span style={{fontWeight: 'bold', color: '#CC6F9F', fontFamily: 'Pacifico', fontSize: '24px'}}>Candyshop&#169;</span></li>
            <li><Link to="/brands">Brands</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/about">Our story</Link></li>
            <li><Link to="">Meet the team</Link></li>
          </ul>
        </div>
        <div className="social-media" style={{paddingTop: '54px'}}>
          <ul>
            <li><Link to="">Facebook</Link></li>
            <li><Link to="">Twitter</Link></li>
            <li><Link to="">Instagram</Link></li>
            <li><Link to="">Candygram</Link></li>
          </ul>
        </div>
        <img src={CandyshopLogo} alt="candyshoplogo" style={{width: '80px', paddingTop: '30px'}} />
      </div>
    )
  }
}
