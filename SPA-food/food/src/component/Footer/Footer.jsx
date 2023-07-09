import React from 'react'
import './Footer.css'
export function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__icons">
        <img className='footer--icon' src='linkedin.svg' alt="" />
        <img className='footer--icon' src='twitter.svg' alt="" />
        <img className='footer--icon' src='facebook-filled.svg' alt="" />
        <img className='footer--icon' src='instagram.svg' alt="" />
       
      </div>
      <div className="footer__text">
        <p>@2023 Daneshkarfood.com</p>
      </div>

    </footer>
  )
}
