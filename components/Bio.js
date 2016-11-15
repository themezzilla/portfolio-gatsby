import React from 'react'
import { config } from 'config'
import { rhythm } from 'utils/typography'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './profile-pic.jpg'
import { Link } from 'react-router'

class Bio extends React.Component {
  render () {
    return (
      <div>
        I develop and lead web projects for <Link to={'https://drw.com'} target='_blank'>DRW Trading</Link> and have previously been at <Link to={'http://50000feet.com'} target='_blank'>50,000</Link> Feet and <Link to={'https://ten7.com'} target='_blank'>TEN7</Link>. Feel free to get in touch!
      </div>
    )
  }
}

export default Bio
