import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import Link from 'react-router'
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/lib/fa'
import './footer.scss'

class Footer extends React.Component {
  render () {
    return (
      <div className='footer'>
        <a href='https://twitter.com/Kole_MANN' target='_blank'>
          <FaTwitter />
        </a>
	<a href='https://github.com/themezzilla' target='_blank'>
          <FaGithub />
        </a>
        <a href='https://twitter.com/Kole_MANN' target='_blank'>
          <FaLinkedin />
        </a>
      </div>
    )
  }
}

export default Footer
