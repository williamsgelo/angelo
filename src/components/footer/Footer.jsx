import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>ANGELO</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://linkedin.com/in/angelo-williams-100826252" target="_blank" rel="noreferrer"><BsLinkedin /></a>
                <a href="https://github.com/williamsgelo" target="_blank" rel="noreferrer"><FaGithub /></a>
                <a href="https://instagram.com/issa_gelo" target="_blank" rel="noreferrer"><FaInstagram /></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; ANGELO PORTFOLIO, All rights reserved.</small>
            </div>
        </footer>
    )
}

export default Footer
