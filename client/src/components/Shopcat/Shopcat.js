import React, { Component } from 'react';
import protein1 from './protein1.jpg';
import granola from './granola.jpg';
import bars from './bars.jpg';
import butter from './butter.jpg';
import sweets from './sweets.jpg';
import shakes from './shakes.jpg';
import "./Shopcat.css";


class Shopcat extends Component {
    render() {
        return (
            <div>
                <div className="Shopcat section flex-container">
                    <div className="item">
                        <img src={protein1} alt={"protein powder"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                <h3>PROTEIN POWDERS</h3>
                                <p className="shopcopy">In an ideal world, we’d get all of the <br />important nutrients our bodies need, <br />including protein. But there are always <br />situations where it’s useful to have <br />protein shakes. It’s just convenient <br />and easy!”</p>
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">Shop Protein Powders<i className="fa fa-external-link"></i></a></p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={shakes} alt={"shakes"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                <h3>PROTEIN SHAKES</h3>
                                <p className="shopcopy">In an ideal world, we’d get all of the <br />important nutrients our bodies need, <br />including protein. But there are always <br />situations where it’s useful to have  <br />protein shakes. It’s just convenient <br />and easy!”</p>
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">Shop Protein Shakes <i className="fa fa-external-link"></i></a></p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={granola} alt={"granola"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                <h3>GRANOLA</h3>
                                <p className="shopcopy">Granola is an extremely popular breakfast <br />and snack food with a wealth of <br />health benefits, including its ability <br />to lower cholesterol, regulate digestion, <br />aid in weight loss, and improve heart health.</p>
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">Shop Granola <i className="fa fa-external-link"></i></a></p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <img src={bars} alt={"granola bars"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                <h3>GRANOLA BARS</h3>
                                <p className="shopcopy">Granola bars make on-the-go <br />eating easy! At Fit Life, we're committed <br />to making sure they're also good for you.<br />Made with the freshest..</p>
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">Shop Granola Bars <i className="fa fa-external-link"></i></a></p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={butter} alt={"nut butters"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                <h3>NUTBUTTERS</h3>
                                <p className="shopcopy">Start spreading the nut butter news! <br /> This superfood is packed with health perks, <br />from improving breast health <br />to lowering bad cholesterol. .</p>
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">Shop Nut Butters <i className="fa fa-external-link"></i></a></p>
                            </div>
                        </div>
                    </div>

                    <div className="item">
                        <img src={sweets} alt={"sweets"} className="thumb" />
                        <div className="shopcat-overlay">
                            <div className="text">
                                <h3>SWEET TREATS</h3>
                                <p className="shopcopy">We put natural sweetness into every...</p>
                                <p className="shopcta"><a href="https://fitlifestore.herokuapp.com/" target="_blank" rel="noopener noreferrer">Shop Treats<i className="fa fa-external-link"></i></a></p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
}

export default Shopcat;