import React from 'react'
import { config } from 'config'
import { prefixLink } from 'gatsby-helpers'
import profilePic from './me.jpg'
import { Link } from 'react-router'
import './bio.scss'

class Bio extends React.Component {
  render () {
    return (
      <div className='bio'>
        <img className='me' src={prefixLink(profilePic)} alt={`author ${config.authorName}`} />
        <h3>
          I'm an engineer with a passion for front-end and aspirations to be full-stack. I develop and lead web projects for <Link to={'https://drw.com'} target='_blank'>DRW Trading</Link> and have previously been at <Link to={'http://50000feet.com'} target='_blank'>50,000feet</Link> and <Link to={'https://ten7.com'} target='_blank'>TEN7</Link>.
        </h3>
      </div>
    )
  }
}

export default Bio
