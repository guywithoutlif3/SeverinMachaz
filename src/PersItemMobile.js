
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './PersItemMobile.scss';

import React, { useEffect, useState, useRef } from 'react';
import Underline from './imgs/underline.svg'



function persItemMobile(props) {


    console.log(props);



    return (
        <motion.div
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    damping: 30,
                    delay: 0.2,
                    mass: 5,
                    stiffness: 200,
                    type: "spring"
                }
            }}
            initial={{
                opacity: 0, scale: 0.5, y: 40
            }}
            className="itemMobile">
            {props.side === 0 && <>
                <motion.div style={{ borderRadius: "2.1875rem 0rem 0rem 2.1875rem" }} className='textHalf'>
                    <motion.h2 className='TitlesMobile'>{props.title} </motion.h2>
                    <p className='PersonalParaMobile'>{props.text} </p>
                </motion.div>
                <motion.div style={{ borderRadius: " 0rem 2.1875rem 2.1875rem 0rem " }} className='imageHalf'>
                    <motion.img className='ContentImagesMobile' src={props.img}></motion.img>
                </motion.div>
            </>}
            {props.side === 1 && <>
                <motion.div style={{ borderRadius: "2.1875rem 0rem 0rem 2.1875rem" }} className='imageHalf'>
                    <motion.img className='ContentImagesMobile' src={props.img}></motion.img>
                </motion.div>
                <motion.div style={{ borderRadius: " 0rem 2.1875rem 2.1875rem 0rem " }} className='textHalf'>
                    <motion.h2 className='TitlesMobile' Mobile>{props.title} </motion.h2>
                    <p className='PersonalParaMobile'>{props.text} </p>
                </motion.div>
            </>}
        </motion.div>
    );
}

export default persItemMobile;
