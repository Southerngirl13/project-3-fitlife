import React, { Component } from 'react';
import standby2 from '../images/standby2.jpg';
import homeexer from '../images/homeexer.jpg';
import nourish from '../images/nourish.jpg';
import nourish1 from '../images/nourish1.jpg';
import monitor from '../images/monitor.jpg';
import monitor2 from '../images/monitor2.jpg';
import train2 from '../images/train2.jpg';
import "./Blog.css";


class Blog extends Component {
  render() {
    return (
      <div>
        <div className="Blog section flex-container">
          <div className="item">
            <img src={nourish1} className="thumb" />
            {/* function SomeImageComponent(props) { 
  return <img src={props.imgSrc} alt="" />; */}
{/* } */}
            <div className="blog-overlay">
              <div className="text">
                <h3 className="blogh3">Hi</h3>
                <p className="blogp"><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a feature  <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={train2} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>I'm Testing</h3>
                <p><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a feature  <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={monitor2} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>Dashboard</h3>
                <p><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a Section <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;