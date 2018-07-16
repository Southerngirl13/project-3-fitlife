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
                <h3 className="blogh31">Nourish The Body.<br />Nourish The Mind.</h3>
                <p className="pcopy1">We believe real food is essential<br />for living a Fit Life because ultimately<br /> we are trying to change our<br /> lifestyle for life-long results.<br />and not merely diet</p>
                <p className="blogp1"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">Get Started On Your Fit Life Now!<i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={train} alt={"train"} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
              <h3 className="blogh31">Get Moving. <br />Stay Motivated.</h3>
                <p className="pcopy2">Exercise benefits everything from sleep<br />quality to energy levels, and even memory.<br /> From making us happier to helping<br /> us live longer, regular exercise is key<br /> to living a healthy, balanced life.</p>
                <p className="blogp2"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">Get Started On Your Fit Life Now!<i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

    <div className="item">
            <img src={monitor} alt={"train"} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
              <h3 className="blogh31">Monitor Your Progress. <br /> Stay On Course.</h3>
                <p className="pcopy2">Staying on track to meet our goals is often<br /> the greatest challenge we face when<br /> trying to change our lifestyle. We're more<br />likely to stick with training when we see<br />improvement which is why monitoring<br /> is so important</p>
                <p className="blogp3"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">Get Started On Your Fit Life Now!<i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default Blog;