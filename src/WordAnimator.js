
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './WordAnimator.scss';
import React, { useEffect, useState, useRef, Component } from 'react';



class WordAnimatior extends Component {
    render() {

        const word = this.props.word;
        let delay = 0.2;


        // Split the word into individual letters
        const letters = word?.split('');


        // Map through each letter and create a React component for it
        const letterComponents = letters?.map((letter, index) => (
            <motion.div
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        delay: delay = delay + 0.1,
                        type: "spring viewport={{ once: true }}",
                        bounce: 0.4,
                        duration: 0.5
                    }
                }}
                initial={{
                    y: 150,
                    opacity: 0 
                }}

                className="letters" key={index}>{letter}</motion.div>
        ));

        return (
            <motion.div className="word-renderer">
                {letterComponents}
            </motion.div>
        );
    }
}

export default WordAnimatior;
