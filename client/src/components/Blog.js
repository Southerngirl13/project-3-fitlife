import React, { Component } from 'react';
import standby2 from '../images/standby2.jpg'
import "./Blog.css";


class Blog extends Component {
  render() {
    return (
      <div>
        <div className="Blog section flex-container">
          <p className='section-paragraph'></p>
          <div className="item">
            <img src={standby2} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>Hi</h3>
                <p><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a feature  <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={standby2} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>I'm Testing</h3>
                <p><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a feature  <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={standby2} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>Dashboard</h3>
                <p><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a Section <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>

          <div className="item">
            <img src={standby2} className="thumb" />
            <div className="blog-overlay">
              <div className="text">
                <h3>Panels</h3>
                <p><a href="https://southerngirl13.github.io/kjs-portfolio/index.html" target="_blank" rel="noopener noreferrer">This would be a feature  <i className="fa fa-external-link"></i></a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blog;