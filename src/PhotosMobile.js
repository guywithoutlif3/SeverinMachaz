import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './PhotosMobile.scss';

import React, { useEffect, useState, useRef } from 'react';

import MountainsMobile from './imgs/MountainMobile.svg'
import SportsMobile from './imgs/SportsMobile.svg'
import WildlifeMobile from './imgs/WildlifeMobile.svg'
import ZürichMobile from './imgs/ZürichMobile.svg'

function PhotosMobile() {



    return (
        <motion.div className='PhotosMobile'>
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
                className='PhotoTitle1'> Photo Albums</motion.div>
            <motion.div class="parent2">
                <motion.div class="div12"><motion.p className='ImageTitles1'>Mountains</motion.p> <motion.img className='Mountains' src={MountainsMobile}></motion.img> </motion.div>
                <motion.div class="div22"><motion.p className='ImageTitles1'>Sports</motion.p> <motion.img className='Mountains' src={SportsMobile}></motion.img></motion.div>
                <motion.div class="div32"><motion.p className='ImageTitles1'>Zürich</motion.p> <motion.img className='Mountains' src={ZürichMobile}></motion.img>  </motion.div>
                <motion.div class="div42"><motion.p className='ImageTitles1'>Wildlife</motion.p> <motion.img className='Mountains' src={WildlifeMobile}></motion.img> </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default PhotosMobile;
