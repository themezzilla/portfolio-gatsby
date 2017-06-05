import React from 'react'
import { prefixLink } from 'gatsby-helpers'
import { Link } from 'react-router'
import Helmet from "react-helmet"

import '../css/about.scss'

// Get logo images
import angular from '../img/logos/angular-icon.svg';
import ansible from '../img/logos/ansible.svg';
import babel from '../img/logos/babel.svg';
import bash from '../img/logos/bash.svg';
import css from '../img/logos/css-3.svg';
import dig from '../img/logos/digital-ocean.svg';
import drupal from '../img/logos/drupal.svg';
import es6 from '../img/logos/es6.svg';
import flask from '../img/logos/flask.svg';
import git from '../img/logos/git-icon.svg';
import gulp from '../img/logos/gulp.svg';
import html from '../img/logos/html-5.svg';
import js from '../img/logos/javascript.svg';
import jq from '../img/logos/jquery.svg';
import mongo from '../img/logos/mongodb.svg';
import node from '../img/logos/nodejs-icon.svg';
import php from '../img/logos/php.svg';
import python from '../img/logos/python.svg';
import react from '../img/logos/react.svg';
import ruby from '../img/logos/ruby.svg';
import sass from '../img/logos/sass.svg';
import ubuntu from '../img/logos/ubuntu.svg';
import webpack from '../img/logos/webpack.svg';
import yarn from '../img/logos/yarn.svg';

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
          I'm Coleman, born and raised in chilly Minneapolis and now a resident of Chicago. I'm primarily a front-end engineer and have been making a strong effort to become full-stack. I've worked in a number of different environments throughout my career, from small development shops to a prop trading firm. I pride myself on high standards of work and quality code that lasts.
        </p>
         
         <h4>what I'm working on</h4>
         <p>
          My efforts to become a full-stack developer include working on projects using Golang, Python and multiple Linux tools. I'm also working on learning Redux and am looking for a project (aside from this one) to further practice my React skills. 
         </p>

         <h4>what I'm interested in</h4>
         <p>
          Lately I've taken a strong interest in algorithmic stock trading, and have been experimenting with a service called Quantopian. I also have been trading a lot on my own, working on learning about the market and working on how I can build wealth. On the code front, I'm making an effort to contribute to projects on GitHub, and have started learning TypeScript.
         </p>

         <h4>what I know</h4>
         <p className='logos'>
          <img className='logo' src={html} />
          <img className='logo' src={js} />
          <img className='logo' src={es6} />
          <img className='logo' src={css} />
          <img className='logo' src={sass} />
          <img className='logo' src={git} />
          <img className='logo' src={jq} />
          <img className='logo' src={php} />
          <img className='logo' src={python} />
          <img className='logo' src={ruby} />
          <img className='logo' src={react} />
          <img className='logo' src={angular} />
          <img className='logo' src={ansible} />
          <img className='logo' src={babel} />
          <img className='logo' src={bash} />      
          <img className='logo' src={dig} />  
          <img className='logo' src={flask} />
          <img className='logo' src={webpack} />
          <img className='logo' src={gulp} />
          <img className='logo' src={node} />
          <img className='logo' src={yarn} />
          <img className='logo' src={mongo} />
          <img className='logo' src={ubuntu} />    
          <img className='logo' src={drupal} />
         </p>
      </div>
    )
  }
}

export default About
