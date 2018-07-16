import React, { Component } from 'react';
import nourish1 from '../images/nourish1.jpg';
import monitor from '../images/monitor.jpg';
import train from '../images/train.jpg';
import "./Blog.css";


class Blog extends Component {
  render() {
    return (
      <div>
        <div className="Blog section flex-container">
          <div className="item">
            <img src={nourish1} alt={"nourish"} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3 className="blogh3">Nourish The Body.<br />Nourish The Mind.</h3>
                <p className="pcopy2">Supplying key nutritional products <br />to support the demands of training and <br />healthy is imperative to a healthy lifestyle.</p>
                <p className="blogp"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">Get Started On Your Fit Life Now!<i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={train} alt={"train"} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>Get Moving. <br />Stay Motivated.</h3>
                <p className="pcopy2">Staying on track to meet your goals is <br />often....</p>
                <p className="blogp"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">Get Started On Your Fit Life Now!<i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

    <div className="item">
            <img src={monitor} alt={"train"} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>Monitor Your Progress. <br /> Stay On Course.</h3>
                <p className="pcopy2">Staying on track to meet your goals is often....</p>
                <p className="blogp"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">Get Started On Your Fit Life Now!<i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Blog;