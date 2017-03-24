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
        <img className='me' src={profilePic} alt={`author ${config.authorName}`} />
        <div>
         <h2>
          I'm a tech agnostic based in Chicago and I'm interested in all things internet. I develop and lead web projects for <Link to={'https://drw.com'} target='_blank'>DRW Trading</Link> and have previously been at <Link to={'http://50000feet.com'} target='_blank'>50,000feet</Link> and <Link to={'https://ten7.com'} target='_blank'>TEN7</Link>.
        </h2>

          <p>
           Read <Link to='/about/'>about</Link> me, check out my <Link to='/blog/'>blog</Link> or download <a href="/resume.pdf">my resume</a>.
          </p>
        </div>
      </div>
    )
  }
}

export default Bio
