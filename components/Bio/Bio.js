import React from "react";
import { config } from "config";
import { prefixLink } from "gatsby-helpers";
import profilePic from "./me.jpg";
import { Link } from "react-router";
import "./bio.scss";

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <img
          className="me"
          src={profilePic}
          alt={`author ${config.authorName}`}
        />
        <div>
          <h2>
            I'm a full-stack web dev interested in all things internet. I
            develop and lead web projects for{" "}
            <Link to={"https://drw.com"} target="_blank">
              DRW Trading
            </Link>{" "}
            and have previously been at{" "}
            <Link to={"http://50000feet.com"} target="_blank">
              50,000feet
            </Link>{" "}
            and{" "}
            <Link to={"https://ten7.com"} target="_blank">
              TEN7
            </Link>
            .
          </h2>

          <p>
            Read <Link to="/about/">about</Link> me, or download{" "}
            <a href="/resume.pdf">my resume</a>. If you like to cook,{" "}
            <a href="http://amzn.to/2wqXviT" target="_blank">
              check out my Amazon Alexa skill
            </a>
            . I sometimes do freelance projects as well. If you're looking for
            help, <a href="mailto:hello@colemanrollins.io">email me</a> and we
            can talk.
          </p>
        </div>
      </div>
    );
  }
}

export default Bio;
