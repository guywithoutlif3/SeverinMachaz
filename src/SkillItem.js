
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './SkillItem.scss';
import { Carousel } from 'react-responsive-carousel';
import React, { useEffect, useState, useRef } from 'react';
import ReactCardFlip from 'react-card-flip';
import flipSVG from './imgs/flip.svg'


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
                    <motion.img className="SkillLogo" src={this.props.logo}></motion.img>
                    <button className="flip" onClick={this.handleClick}><motion.img loading="lazy" alt="flipBtn" src={flipSVG}></motion.img></button>
                </motion.div>

                <motion.div>
                    {this.props.content}
                    <button className="flip2" onClick={this.handleClick}><motion.img loading="lazy" alt="flipBtn" src={flipSVG}></motion.img></button>
                </motion.div>
            </ReactCardFlip>
        )
    }
}

export default SkillItem;
