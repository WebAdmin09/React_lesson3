import React, { Component } from 'react'
import style from "./navbar.module.css";
import github from "../../assets/github.svg"
import twitter from "../../assets/twitter.svg"

export class Navbar extends Component {
  render() {
    return (
      <nav className={style['navbar']}>
        <div className='container'>
          <div className={style['wrapper']}>
            <h2 className={style['navbar__heading']}>
              Contact Form
            </h2>
            <div className={style['images']}>
              <a className={style['linkimg']} href="https://github.com/"><img className={style['gitimg']} src={github} alt="git" /></a> 
              <a className={style['linkimg']} href="https://twitter.com/i/flow/login"><img className={style['twitterimg']} src={twitter} alt="twitter" /></a> 
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar
