import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './nav.scss'

class Navigation extends React.Component {
  render() {
    return (
      <div className="nav">
        <Link className='nav__link' to={prefixLink('/blog/')}>blog</Link>
        <Link className='nav__link' to={prefixLink('/about/')}>about</Link>
      </div>
    )
  }
}

export default Navigation
