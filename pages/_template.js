import React from 'react'
import { Link } from 'react-router'
import { Container } from 'react-responsive-grid'
import { prefixLink } from 'gatsby-helpers'
import { rhythm, scale } from 'utils/typography'
import { config } from 'config'
import Navigation from '../components/Navigation/Navigation'
import Footer from '../components/Footer/Footer'
import '../css/global.scss'

class Template extends React.Component {
  render () {
    const { location, children } = this.props
    let header
    header = (
      <div className='header'>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={prefixLink('/')}
          >
            <h1>
              {config.blogTitle}
            </h1>
          </Link>
        <Navigation />
      </div>
    )
    return (
      <Container>
        {header}
        {children}
        <Footer />
      </Container>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
