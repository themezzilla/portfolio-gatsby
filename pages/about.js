import React from "react";
import { prefixLink } from "gatsby-helpers";
import { Link } from "react-router";
import Helmet from "react-helmet";

import "../css/about.scss";

// Get logo images
import angular from "../img/logos/angular-icon.svg";
import ansible from "../img/logos/ansible.svg";
import babel from "../img/logos/babel.svg";
import bash from "../img/logos/bash.svg";
import css from "../img/logos/css-3.svg";
import dig from "../img/logos/digital-ocean.svg";
import drupal from "../img/logos/drupal.svg";
import es6 from "../img/logos/es6.svg";
import flask from "../img/logos/flask.svg";
import git from "../img/logos/git-icon.svg";
import gulp from "../img/logos/gulp.svg";
import html from "../img/logos/html-5.svg";
import js from "../img/logos/javascript.svg";
import jq from "../img/logos/jquery.svg";
import node from "../img/logos/nodejs-icon.svg";
import php from "../img/logos/php.svg";
import python from "../img/logos/python.svg";
import react from "../img/logos/react.svg";
import sass from "../img/logos/sass.svg";
import ubuntu from "../img/logos/ubuntu.svg";
import webpack from "../img/logos/webpack.svg";
import yarn from "../img/logos/yarn.svg";

class About extends React.Component {
  render() {
    const about = "About Coleman Rollins";
    return (
      <div className="about">
        <Helmet
          title={about}
          meta={[
            { name: "description", content: "Coleman Rollins portfolio site" },
            {
              name: "keywords",
              content:
                "blog, development, engineer, web developer, react, gatsby, javascript"
            }
          ]}
        />
        <h4>who I am</h4>
        <p>
          I'm Coleman, born and raised in chilly Minneapolis and now a resident
          of Chicago. I'm primarily a front-end engineer and have been making a
          strong effort to become full-stack. I've worked in a number of
          different environments throughout my career, from small development
          shops to a prop trading firm. I take pride in my high standards of
          work and creating quality code that lasts.
        </p>

        <h4>what I'm working on</h4>
        <p>
          My efforts to become a full-stack developer include working on
          projects using Golang, Python and multiple Linux tools. I've recently
          been exposed to the world of data encryption which has been a great
          learning experience in web security.
        </p>

        <h4>what I'm interested in</h4>
        <p>
          This is my first summer with a garden, so I've been growing some herbs
          and small vegetables. In addition to that, I've been experimenting
          with cooking lots of asian flavors and exploring other tastes from
          foreign markets. I'm also reading a few books on machine learning,
          which I hope to use in a side project soon.
        </p>

        <h4>what I know</h4>
        <p className="logos">
          <img className="logo" src={html} />
          <img className="logo" src={js} />
          <img className="logo" src={es6} />
          <img className="logo" src={css} />
          <img className="logo" src={sass} />
          <img className="logo" src={git} />
          <img className="logo" src={jq} />
          <img className="logo" src={php} />
          <img className="logo" src={python} />
          <img className="logo" src={react} />
          <img className="logo" src={angular} />
          <img className="logo" src={ansible} />
          <img className="logo" src={babel} />
          <img className="logo" src={bash} />
          <img className="logo" src={dig} />
          <img className="logo" src={flask} />
          <img className="logo" src={webpack} />
          <img className="logo" src={gulp} />
          <img className="logo" src={node} />
          <img className="logo" src={yarn} />
          <img className="logo" src={ubuntu} />
          <img className="logo" src={drupal} />
        </p>
      </div>
    );
  }
}

export default About;
