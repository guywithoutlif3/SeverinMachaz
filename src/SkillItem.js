
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './SkillItem.scss';
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';




class SkillItem extends React.Component {
    constructor() {
        super();
        this.state = {
            isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
    }

    render() {
        return (
            <ReactCardFlip className='cardItem' isFlipped={this.state.isFlipped} flipDirection="vertical">
                <motion.div>
                    <div className="LangTitle">{this.props.language}</div>
                    <motion.img src={this.props.logoSrc}></motion.img>
                    <button className="flip" onClick={this.handleClick}>Click to flip</button>
                </motion.div>

                <motion.div>
                    This is the back of the card.
                    <button className="flip" onClick={this.handleClick}>Click to flip</button>
                </motion.div>
            </ReactCardFlip>
        )
    }
}

export default SkillItem;
