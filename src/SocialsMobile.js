import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './SocialsMobile.scss';

import React, { useEffect, useState, useRef } from 'react';

import ReachOut from './imgs/ReachOut.svg'
import ReachOutDark from './imgs/ReachOutDark.svg'
import WordAnimatior from './WordAnimator';

import Instagram from './imgs/instagram.svg'
import Discord from './imgs/discord.svg'
import Linkedin from './imgs/linkedin.svg'
import CV from './imgs/cv.svg'
import Lightroom from './imgs/lightroom.svg'
import Mail from './imgs/mail.svg'

function SocialsMobile(props) {


    const renderItems = () => {
        const items = [];
        for (let i = 0; i < 12; i++) {  
            if (props.mode === true) {
                items.push(<><motion.img class="reachoutsMobile" src={ReachOutDark} key={i}></motion.img></>);
            } else {
                items.push(<><motion.img class="reachoutsMobile" src={ReachOut} key={i}></motion.img></>);
            }
        }
        return items;
    };

    return (
        <motion.div className='SocialsMobile'>
            <motion.div class="SocialTitleMobile">
                <WordAnimatior variant="YellowMobile" word="Social" />
            </motion.div>
            <motion.div class="SocialsParentMobile">
                <motion.div class="InstagramMobile"><motion.img className='socialLogos' src={Instagram}></motion.img> </motion.div>
                <motion.div class="DiscordMobile"><motion.img className='socialLogos' src={Discord}></motion.img> </motion.div>
                <motion.div class="CvMobile"><motion.img className='socialLogos' src={CV}></motion.img> </motion.div>
                <motion.div class="LinkedinMobile"><motion.img className='socialLogos' src={Linkedin}></motion.img> </motion.div>
                <motion.div class="LightroomMobile"><motion.img className='socialLogos' src={Lightroom}></motion.img> </motion.div>
                <motion.div class="MailMobile"><motion.img className='socialLogos' src={Mail}></motion.img> </motion.div>
            </motion.div>
            <motion.div class="parent4">
                <motion.div class="div14"> {renderItems()} </motion.div>
                <motion.div class="div24"> {renderItems()} </motion.div>
            </motion.div>
        </motion.div >
    );
}

export default SocialsMobile;
