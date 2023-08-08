import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './SkillCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import React, { useEffect, useState, useRef } from 'react';
import SkillItem from './SkillItem';
import ReactLogo from './imgs/react.svg';
import ReactSnippet from './imgs/ReactSnippet.svg'
import JsLogo from './imgs/javascript.svg';
import JsSnippet from './imgs/jsSnippet.svg'
import JavaLogo from './imgs/java.png';
import Spring from './imgs/spring.svg';
import Quarkus from './imgs/quarkus.svg';
import Node from './imgs/node.svg';
import NodeSnippet from './imgs/NodeSnippet.svg';
import Sql from './imgs/sql.svg';
import SqlSnippet from './imgs/sqlSnippet.svg';
import Figma from './imgs/figma.svg';
import Tosca from './imgs/tosca.png';

function SkillCarousel() {

    let Skills = [
        {
            language: 'React',
            content: <img className='React' src={ReactSnippet} alt='CodeSnippet' />,
            logo: ReactLogo
        },
        {
            language: 'JavaScript',
            content: <img className='JavaScript' src={JsSnippet} alt='CodeSnippet' />,
            logo: JsLogo
        },
        {
            language: 'Java',
            content:
                <div className='JavaFDiv'>
                    <h5 className='titleFrameworks'>Frameworks</h5>
                    <div className='imgWrapper'>
                        <figure className='image'>
                            <img className='Spring' src={Spring} alt='Spring'></img><figcaption className='cap'>Spring</figcaption>
                        </figure>
                        <figure className='image'>
                            <img className='Quarkus' src={Quarkus} alt='Quarkus'></img><figcaption className='cap'>Quarkus</figcaption>
                        </figure>
                    </div>
                </div>,
            logo: JavaLogo
        },
        {
            language: 'Node',
            content:<><img className='JavaScript' src={NodeSnippet} alt='CodeSnippet' /><br/><p className='expresss'>I Also know Express.js :P</p></> ,
            logo: Node
        },
        {
            language: 'SQL',
            content: <img className='SQL' src={SqlSnippet} alt='CodeSnippet' />,
            logo: Sql
        },
        {
            language: 'Figma',
            content:
                <>
                    <iframe className='Figma' width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fj1vn9h3v5N4QQ509dsDFhn%2FCV-Site%3Ftype%3Ddesign%26node-id%3D5%253A3%26mode%3Ddesign%26t%3DkqgKRnvza91SWTda-1" allowfullscreen></iframe>
                </>,
            logo: Figma
        },
        {
            language: 'PHP',
            content: '',
            logo: '<img src="cpp_logo.png" alt="C++ Logo">'
        }

    ];

    return (
        <div className='Skill'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {Skills.map((skill, index) => (
                    <SwiperSlide className='swiperslide'>
                        <SkillItem key={index} language={skill.language} logo={skill.logo} content={skill.content} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>);

}

export default SkillCarousel;
