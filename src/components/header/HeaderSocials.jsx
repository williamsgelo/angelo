import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://linkedin.com/in/angelo-williams-100826252" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://github.com/williamsgelo" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://instagram.com/issa_gelo" target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
    )
}

export default HeaderSocials
