import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Link from 'react-router'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/lib/fa'
import './footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <a href="mailto:hello@colemanrollins.io">hello@colemanrollins.io</a>
        <div className="icons">
          <a href='https://twitter.com/Kole_MANN' target='_blank'>
          <FaTwitter />
        </a>
	      <a href='https://github.com/jewbetcha' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://www.linkedin.com/in/coleman-rollins-87384556' target='_blank'>
          <FaLinkedin />
        </a>
        </div>
        <p>© 2017 Coleman Rollins</p>
      </div>
    )
  }
}

export default Footer
