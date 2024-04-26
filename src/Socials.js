import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './Socials.scss';

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


function Socials(props) {

    const handleDownload = () => {
        // Create a link and trigger the download
        const link = document.createElement('a');
        link.href = './imgs/CVEnglish.pdf';  // Adjust the path as necessary
        link.download = 'CVEnglish.pdf';  // This can be set to any filename you wish
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };

    const renderItems = () => {
        const items = [];
        for (let i = 0; i < 34; i++) {
            if (props.mode === true) {
                items.push(<><motion.img
                    initial={{ y: 100 }}
                    whileInView={{
                        y: 0,
                        transition: {
                            damping: 30, 
                            delay: 0.2,
                            mass: 1,
                            stiffness: 400,
                            type: "spring"
                        }
                    }}

                    class="reachouts" src={ReachOutDark} key={i}></motion.img></>);
            } else {
                items.push(<><motion.img
                    initial={{ y: 200 }}
                    whileInView={{
                        y: 0,
                        transition: {
                            damping: 30,
                            delay: i / 100,
                            mass: 1,
                            stiffness: 400,
                            type: "spring"
                        }
                    }}
                    class="reachouts" src={ReachOut} key={i}></motion.img></>);
            }
        }
        return items;
    };

    return (
        <motion.div className='Socials'>
            <motion.div class="SocialTitle">
                <WordAnimatior variant="Yellow" word="Social" />
            </motion.div>

            <motion.div class="SocialsParent">
                <motion.div onClick={() => { window.location.href = "https://www.instagram.com/severin.pdf/"; }} class="Instagram"><motion.img className='socialLogos' src={Instagram}></motion.img> </motion.div>
                <motion.div onClick={() => { window.location.href = "discordapp.com/users/466652601535037450"; }}  class="Discord"><motion.img className='socialLogos' src={Discord}></motion.img> </motion.div>
                <motion.a href="/CVEnglish.pdf" download class="Cv"><motion.img className='socialLogos' src={CV}></motion.img> </motion.a>
                <motion.div onClick={() => { window.location.href = "https://www.linkedin.com/in/severin-machaz-74219b202/"; }} class="Linkedin"><motion.img className='socialLogos' src={Linkedin}></motion.img> </motion.div>
                <motion.div class="Lightroom"><motion.img className='socialLogos' src={Lightroom}></motion.img> </motion.div>
                <motion.div onClick={() => { window.location.href = "mailto:severin.machaz@outlook.de?subject=Reaching Out"}}class="Mail"><motion.img className='socialLogos' src={Mail}></motion.img> </motion.div>
            </motion.div>
            <motion.div class="parent3">
                <motion.div class="div13"> {renderItems()} </motion.div>
                <motion.div class="div23"> {renderItems()} </motion.div>
                <motion.div class="div33"> {renderItems()} </motion.div>
            </motion.div>
        </motion.div >
    );
}

export default Socials;
