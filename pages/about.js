import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import Helmet from "react-helmet"

import '../css/about.scss'

class About extends React.Component {
  render () {
    const about = 'About Coleman Rollins'
    return (
      <div className="about">
        <Helmet
          title={about}
          meta={[
             {"name": "description", "content": "Coleman Rollins portfolio site"},
            {"name": "keywords", "content": "blog, development, engineer, web developer, react, gatsby, javascript"},
          ]}
        />
        <h4>who I am</h4>
        <p>
          I'm Coleman, born and raised in chilly Minneapolis and now a resident of Chicago. I'm primarily a front-end engineer and have been making a strong effort to become full-stack. I've worked in a number of different environments throughout my career. From small development shops to a prop trading firm. I pride myself on high standards of work and quality code that lasts.
        </p>
         
         <h4>what I'm working on</h4>
         <p>
          My efforts to become a full-stack include working on projects using Golang, Python and multiple Linux tools. I'm also working on learning Redux and am looking for a project (aside from this one) to further practice my React skills. 
         </p>

         <h4>what I'm interested in</h4>
         <p>
          Lately I've taken a strong interest in algorithmic stock trading, and have been experimenting with a service called Quantopian. I also have been trading a lot on my own, working on learning about the market and working on how I can build wealth.
         </p>
      </div>
    )
  }
}

export default About
