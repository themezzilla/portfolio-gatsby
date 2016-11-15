import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class Navigation extends React.Component {
  render() {
    return (
      <div>
        This is the nav.
        <Link to={prefixLink('blog/')}>Blog</Link>
      </div>
    )
  }
}

export default Navigation
