import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './nav.scss'

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
	 <Link className='nav__link' to={prefixLink('/blog/')}>Blog</Link>
	 <Link className='nav__link' to={prefixLink('/about/')}>About</Link>
	 <Link className='nav__link' to={prefixLink('/resume/')}>Resume</Link>
      </div>
    )
  }
}

export default Navigation
