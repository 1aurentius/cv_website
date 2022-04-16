import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'

function Hero() {
  return (
    <div id="about">
      <div className='hero-container'>
        <div className='hero-text'>
          <h1 id='hero-title'>Frontend developer.</h1>
          <div className='text-block'>
            <p>
              Looking for my next challenge as a frontend developer!
            </p>
            <p>
              20 year old computer science student from the Univeristy of Tampere. Prior experience with working on some web projects. I have also built web crawlers with selenium.
            </p>
            <p>
              Stack: Python, Javascript, React, html, css, sql
            </p>
          </div>
          {/* <div className='multi-button'>
            <a href='#about'>about</a>
            <a href='#work'>work</a>
            <a href='#contact'>contact</a>
          </div> */}
        </div>
        <div className='hero-image'>
          <img src='slush-pic-2021.jpg' id="profile-pic" />
        </div>
      </div>

    </div >
  )
}

export default Hero