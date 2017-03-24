import React from 'react'
import { Link } from 'react-router'
import sortBy from 'lodash/sortBy'
import { prefixLink } from 'gatsby-helpers'
import { rhythm } from 'utils/typography'
import Helmet from "react-helmet"
import access from 'safe-access'
import { config } from 'config'
import include from 'underscore.string/include'
import { prune, include as includes } from 'underscore.string'
import '../css/blogIndex.scss'

class BlogIndex extends React.Component {
  render () {
    const pageLinks = []
    let body
    let title
    // Sort pages.
    const sortedPages = sortBy(this.props.route.pages, (page) =>
      access(page, 'data.date')
    ).reverse()
    sortedPages.forEach((page) => {
      if (access(page, 'file.ext') === 'md' && !include(page.path, '/404')) {
        title = access(page, 'data.title') || page.path
        body = prune(page.data.body.replace(/<[^>]*>/g, ''), 200)
        pageLinks.push(
          <li
            className='post'
            key={page.path}
            style={{
              marginBottom: rhythm(1/4),
            }}
          >
            <Link style={{boxShadow: 'none'}} to={prefixLink(page.path)}>{title}</Link>
            <p>
              {body}
            </p>
          </li>
        )
      }
    })
    return (
      <div>
        <Helmet
          title={config.blogTitle}
          meta={[
            {"name": "description", "content": "Coleman Rollins portfolio site"},
            {"name": "keywords", "content": "blog, development, engineer, web developer, react, gatsby, javascript"},
          ]}
        />
        <ul className='blog__posts'>
          {pageLinks}
        </ul>
      </div>
    )
  }
}

BlogIndex.propTypes = {
  route: React.PropTypes.object,
}

export default BlogIndex
