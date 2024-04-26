import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './Personal.scss';

import React, { useEffect, useState, useRef } from 'react';

import Underline from './imgs/underline.svg'
import Painting from './imgs/Painting.jpg'
import Photograhphy from './imgs/Photography.jpg'
import Travel from './imgs/Travel.jpg'
import Climbing from './imgs/Climbing.jpg'
import HumanConnection from './imgs/HumanConnection.jpg'
import Pet from './imgs/Pet.jpg'
import WordAnimatior from './WordAnimator';




function Personal() {

    const [hover, setHover] = useState(false);
    const [hoverId, setHoverId] = useState(0);
    const onHover = (id) => {

        setHoverId(id)
        setHover(true);
    };

    const onLeave = () => {
        setHover(false);
    };

    return (
        <motion.div
            whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    damping: 30,
                    mass: 5,
                    stiffness: 200,
                    type: "spring"
                }
            }}
            initial={{
                opacity: 0, scale: 0.5, y: 40
            }}
            class="parent">
            <motion.div
                onMouseEnter={() => { onHover(1) }}
                onMouseLeave={onLeave}
                class="div1">{hover && hoverId === 1 ?
                    <motion.div style={{ backgroundImage: "url(" + Painting + ")", backgroundSize: "cover", backgroundPosition: " center" }} className='PersonalContent'>
                        <motion.h2 transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='Titles'>Painting </motion.h2>
                        <motion.img className='underline' alt="underline" src={Underline} />
                        <motion.p transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='PersonalPara'>I may not be Van Gogh but painting keeps me relaxed and helps me to calm down, see the world from a different view and appriciating art </motion.p>
                    </motion.div>
                    :
                    <motion.div className='PersonalImage'><motion.img loading="lazy" className='ContentImages' src={Painting}></motion.img></motion.div>}</motion.div>
            <motion.div
                onMouseEnter={() => { onHover(2) }}
                onMouseLeave={onLeave}
                class="div2">{hover && hoverId === 2 ?
                    <motion.div style={{ backgroundImage: "url(" + Photograhphy + ")", backgroundSize: "cover", backgroundPosition: " center" }} className='PersonalContent'>
                        <motion.h2 transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='Titles'>Photography </motion.h2>
                        <motion.img className='underline' alt="underline" src={Underline} />
                        <motion.p transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='PersonalPara'>I always keep my camera close. I enjoy capturing the moment, the beauty of nature or cities aswell as people. </motion.p>
                    </motion.div>
                    :
                    <motion.div className='PersonalImage'><motion.img loading="lazy" className='ContentImages' src={Photograhphy}></motion.img></motion.div>}</motion.div>
            <motion.div
                class="div3"><WordAnimatior word="Personal" /></motion.div>
            <motion.div
                onMouseEnter={() => { onHover(3) }}
                onMouseLeave={onLeave}
                class="div4">{hover && hoverId === 3 ?
                    <motion.div style={{ backgroundImage: "url(" + HumanConnection + ")", backgroundSize: "cover", backgroundPosition: " center" }} className='PersonalContent'>
                        <motion.h2 transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='Titles'>Human Connection </motion.h2>
                        <motion.img className='underline' alt="underline" src={Underline} />
                        <motion.p transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='PersonalPara'>Even tho Im more of an introvert i genuenly enjoy meeting new people and  connectiing with them aswell as I appriciate hanging out with my friends and familly </motion.p>
                    </motion.div>
                    :
                    <motion.div className='PersonalImage'><motion.img loading="lazy" className='ContentImages' src={HumanConnection}></motion.img></motion.div>}</motion.div>
            <motion.div
                onMouseEnter={() => { onHover(4) }}
                onMouseLeave={onLeave}
                class="div5">{hover && hoverId === 4 ?
                    <motion.div style={{ backgroundImage: "url(" + Climbing + ")", backgroundSize: "cover", backgroundPosition: " center" }} className='PersonalContent'>
                        <motion.h2 transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='Titles'>Climbing </motion.h2>
                        <motion.img className='underline' alt="underline" src={Underline} />
                        <motion.p transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='PersonalPara'>Nomather indoor on plastic or on some good rock, its my biggest passion to climb and keeps me healthy and connected to the amazing Climbing Community. </motion.p>
                    </motion.div>
                    :
                    <motion.div className='PersonalImage'><motion.img loading="lazy" className='ContentImages' src={Climbing}></motion.img></motion.div>}</motion.div>
            <motion.div
                onMouseEnter={() => { onHover(5) }}
                onMouseLeave={onLeave}
                class="div6">{hover && hoverId === 5 ?
                    <motion.div style={{ backgroundImage: "url(" + Pet + ")", backgroundSize: "cover", backgroundPosition: " center" }} className='PersonalContent'>
                        <motion.h2 transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='Titles'>Pets </motion.h2>
                        <motion.img className='underline' alt="underline" src={Underline} />
                        <motion.p transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='PersonalPara'>I have four fluffy cats that keep me company or that just use me for food. Nomather, I love animals dearly.  </motion.p>
                    </motion.div>
                    :
                    <motion.div className='PersonalImage'><motion.img loading="lazy" className='ContentImages' src={Pet}></motion.img></motion.div>}</motion.div>
            <motion.div
                onMouseEnter={() => { onHover(6) }}
                onMouseLeave={onLeave}
                class="div7"> {hover && hoverId === 6 ?
                    <motion.div style={{ backgroundImage: "url(" + Travel + ")", backgroundSize: "cover", backgroundPosition: " center" }} className='PersonalContent'>
                        <motion.h2 transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='Titles'>Travel </motion.h2>
                        <motion.img className='underline' alt="underline" src={Underline} />
                        <motion.p transition={{duration: 0.36}} initial={{scale: 0}}  whileInView={{scale:1}} className='PersonalPara'>Since i was a little boy i enjoyed a good adventure and im always thrilled about being in a foreign country, exploring. Enjoying time off and trueley living.  </motion.p>
                    </motion.div>
                    :
                    <motion.div className='PersonalImage'><motion.img loading="lazy" className='ContentImages' src={Travel}></motion.img></motion.div>}</motion.div>
        </motion.div>
    );
}

export default Personal;
