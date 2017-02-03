import React from 'react'
import moment from 'moment'
import Helmet from "react-helmet"
import ReadNext from '../components/ReadNext'
import { rhythm } from 'utils/typography'
import { config } from 'config'
import '../css/zenburn.css'
import '../css/post.scss'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

class MarkdownWrapper extends React.Component {
  render () {
    const { route } = this.props
    const post = route.page.data

    return (
      <div className="markdown">
        <Helmet
          title={`${post.title} | ${config.blogTitle}`}
        />
        <h1 className="post__title" style={{marginTop: 0}}>{post.title}</h1>
        <em
          style={{
            display: 'block',
            marginBottom: rhythm(1),
          }}
        >
          Posted {moment(post.date).format('MMMM D, YYYY')}
        </em>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />
        
        <Link className='' to={prefixLink('/blog/')}>Back To Blog</Link>
        {/* <ReadNext post={post} pages={route.pages} /> */}
      </div>
    )
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object,
}

export default MarkdownWrapper
