import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import Bio from 'components/Bio'

class HomePage extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Sample blog"},
            {"name": "keywords", "content": "blog, articles"},
          ]}
        />
        <Bio />
        Welcome to my site
        <Link style={{boxShadow: 'none'}} to={prefixLink('blog/')}>Blog</Link>
      </div>
    )
  }
}

HomePage.propTypes = {
  route: React.PropTypes.object,
}

export default HomePage
