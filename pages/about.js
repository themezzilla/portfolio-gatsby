import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import Helmet from "react-helmet"

class About extends React.Component {
  render () {
    const about = 'About Coleman Rollins'
    return (
      <div>
      <Helmet
        title={about}
        meta={[
          {"name": "description", "content": {about}},
          {"name": "keywords", "content": "blog, articles"},
        ]}
      />
        This is the about page
      </div>
    )
  }
}

export default About
