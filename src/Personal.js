import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './Personal.scss';

import React, { useEffect, useState, useRef } from 'react';




function Personal() {

    const [hover, setHover] = useState(false);
    const onHover = () => {
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };




    //TODO: only make one on hover


    return (
        <motion.div class="parent">
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div1">{hover ? "SKILLS" : <motion.div>img</motion.div>}</motion.div>
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div2">{hover ? "SKILLS" : <motion.div>img</motion.div>}</motion.div>
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div3">Personal</motion.div>
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div4">{hover ? "SKILLS" : <motion.div>img</motion.div>}</motion.div>
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div5">{hover ? "SKILLS" : <motion.div>img</motion.div>}</motion.div>
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div6">{hover ? "SKILLS" : <motion.div>img</motion.div>}</motion.div>
            <motion.div
                onMouseEnter={onHover}
                onMouseLeave={onLeave}
                class="div7"> {hover ? "SKILLS" : <motion.div>img</motion.div>}</motion.div>
        </motion.div>
    );
}

export default Personal;
