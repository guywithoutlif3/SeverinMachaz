import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './PersonalMobile.scss';

import React, { useEffect, useState, useRef } from 'react';

import Underline from './imgs/underline.svg'
import Painting from './imgs/Painting.jpg'
import Photograhphy from './imgs/Photography.jpg'
import Travel from './imgs/Travel.jpg'
import Climbing from './imgs/Climbing.jpg'
import HumanConnection from './imgs/HumanConnection.jpg'
import Pet from './imgs/Pet.jpg'
import WordAnimatior from './WordAnimator';
import PersItemMobile from './PersItemMobile';



function PersonalMobile() {
    let Items = [
        {
            title: 'Painting',
            side: 0,
            text: "I may not be Van Gogh but painting keeps me relaxed and helps me to calm down, see the world from a different view and appriciating art ",
            img: Painting
        },
        {
            title: 'Photography',
            side: 1,
            text: "I always keep my camera close. I enjoy capturing the moment, the beauty of nature or cities aswell as people.",
            img: Photograhphy
        },
        {
            title: 'Human Connection',
            side: 0,
            text: "Even tho Im more of an introvert i genuenly enjoy meeting new people and  connectiing with them aswell as I appriciate hanging out with my friends and familly  ",
            img: HumanConnection
        },
        {
            title: 'Climbing',
            side: 1,
            text: "I may not be Van Gogh but painting keeps me relaxed and helps me to calm down, see the world from a different view and appriciating art ",
            img: Climbing
        },
        {
            title: 'Pets',
            side: 0,
            text: "I have four fluffy cats that keep me company or that just use me for food. Nomather, I love animals dearly. ",
            img: Pet
        },
        {
            title: 'Travel',
            side: 1,
            text: "Since i was a little boy i enjoyed a good adventure and im always thrilled about being in a foreign country, exploring. Enjoying time off and trueley living. ",
            img: Travel
        },

    ];


    return (
        <motion.div className='MobilePersContainer'>
            <h2 className='MobileTitlePersonal'><WordAnimatior word="Personal" /></h2>
            
            {Items.map((item, index) => (
                <PersItemMobile
                    key={index}
                    title={item.title}
                    side={item.side}
                    text={item.text}
                    img={item.img}
                />
            ))}
        </motion.div>
    );
}

export default PersonalMobile;
