import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/lib/fa'
import './footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <FaTwitter />
        <FaGithub />
        <FaLinkedin />
      </div>
    )
  }
}

export default Footer
