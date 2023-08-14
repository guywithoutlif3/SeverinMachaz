import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './Photos.scss';

import React, { useEffect, useState, useRef } from 'react';

import Mountains from './imgs/Mountains.svg'
import Sports from './imgs/Sports.svg'
import Wildlife from './imgs/Wildlife.svg'
import Zürich from './imgs/Zürich.svg'

function Photos() {



    return (
        <motion.div className='Photos'>
            <motion.div
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        damping: 30,
                        delay: 0.2,
                        mass: 1,
                        stiffness: 400,
                        type: "spring"
                    }
                }}
                initial={{
                    opacity: 0, rotate: 0, scale: 1, x: 0, y: 40
                }}
                className='PhotoTitle'> Photo Albums</motion.div>
            <motion.div class="parent1">
            <motion.div onClick={() => {window.location.href = "";}} class="div11">  <motion.p className='ImageTitles'>Mountains</motion.p> <motion.img className='Mountains' src={Mountains}></motion.img> </motion.div>
            <motion.div onClick={() => {window.location.href = "";}} class="div21"> <motion.p className='ImageTitles'>Sports</motion.p>  <motion.img className='Sports' src={Sports}></motion.img> </motion.div>
            <motion.div onClick={() => {window.location.href = "";}}  class="div31"> <motion.p className='ImageTitles'>Wildlife</motion.p>  <motion.img className='Wildlife' src={Wildlife}></motion.img> </motion.div>
            <motion.div onClick={() => {window.location.href = "";}} class="div41"> <motion.p className='ImageTitles'>Zürich</motion.p>  <motion.img className='Zürich' src={Zürich}></motion.img> </motion.div>
        </motion.div>
        </motion.div >
    );
}

export default Photos;
