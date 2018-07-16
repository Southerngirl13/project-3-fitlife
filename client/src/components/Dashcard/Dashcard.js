import React, { Component } from 'react';
import nourish1 from './nourish1.jpg';
import "./Dashcard.css";
import { Link } from "react-router-dom";
import uploadphotos from './uploadphotos.jpg';
import workoutlogs from './workoutlogs.jpg';
import workoutvideos from './workoutvideos.jpg';
import trackingtools from './trackingtools.jpg';
import recipefinder from './recipefinder.jpg';
import shopfitlife from './shopfitlife.jpg';

class Shopcat extends Component {
    render() {
        return (
            <div>
                <div className="Shopcat section flex-container">
                    <div className="item">
                        <img src={trackingtools} alt={"protein powder"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                {/* <h3 className="shopcath3">TRACKING TOOLS</h3> */}
                                {/* <p className="shopcopy">Tracking Tools</p> */}
                                <p className="shopcta"><Link className="navbar-brand" to="/assessmentform">GO NOW!</Link> </p>   
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={recipefinder} alt={"shakes"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                {/* <h3>RECIPE FINDER</h3>
                                <p className="shopcopy">Recipe Finder</p> */}
                                <p className="shopcta"><Link className="navbar-brand" to="/recipes">GO NOW!</Link> </p>   
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={workoutvideos} alt={"granola"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                {/* <h3>WORKOUT VIDEOS</h3>
                                <p className="shopcopy">Workout Videos</p> */}
                                <p className="shopcta"><Link className="navbar-brand" to="/videopage">GO NOW!</Link> </p>   
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={uploadphotos} alt={"granola"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                {/* <h3>PHOTO PROGRESSION</h3>
                                <p className="shopcopy">Upload Photos</p> */}
                                <p className="shopcta"><Link className="navbar-brand" to="/photolog">GO NOW!</Link> </p>   
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={shopfitlife} alt={"granola"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                {/* <h3>SHOP FIT LIFE</h3>
                                <p className="shopcopy">Shop Fit Life</p> */}
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">GO NOW!</a> </p>   
                                
                            </div>
                        </div>
                    </div>

                   <div className="item">
                        <img src={workoutlogs} alt={"granola"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                {/* <h3>PHOTO PROGRESSION</h3>
                                <p className="shopcopy">Upload Photos</p> */}
                                <p className="shopcta"><Link className="navbar-brand" to="/workout">GO NOW!</Link> </p>   
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Shopcat;