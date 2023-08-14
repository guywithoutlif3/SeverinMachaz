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
            <motion.div class="parent2">
                <motion.div class="div12"><motion.p className='ImageTitles'>Mountains</motion.p> <motion.img className='Mountains' src={MountainsMobile}></motion.img> </motion.div>
                <motion.div class="div22"><motion.p className='ImageTitles'>Sports</motion.p> <motion.img className='Mountains' src={SportsMobile}></motion.img></motion.div>
                <motion.div class="div32"><motion.p className='ImageTitles'>Zürich</motion.p> <motion.img className='Mountains' src={ZürichMobile}></motion.img>  </motion.div>
                <motion.div class="div42"><motion.p className='ImageTitles'>Wildlife</motion.p> <motion.img className='Mountains' src={WildlifeMobile}></motion.img> </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default PhotosMobile;
