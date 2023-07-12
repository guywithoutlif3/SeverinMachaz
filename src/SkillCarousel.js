import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './SkillCarousel.scss';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation } from 'swiper/modules';
import React, { useEffect, useState, useRef } from 'react';
import SkillItem from './SkillItem';



function SkillCarousel() {

    let Skills = [
        {
            language: 'JavaScript',
            logo: '<img src="javascript_logo.png" alt="JavaScript Logo">'
        },
        {
            language: 'Python',
            logo: '<img src="python_logo.png" alt="Python Logo">'
        },
        {
            language: 'Java',
            logo: '<img src="java_logo.png" alt="Java Logo">'
        },
        {
            language: 'C++',
            logo: '<img src="cpp_logo.png" alt="C++ Logo">'
        },
        // Add more languages and logos as needed
    ];

    return (
        <div className='Skill'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {Skills.map((skill, index) => (
                    <SwiperSlide className='swiperslide'>
                        <SkillItem key={index} language={skill.language} logo={skill.logo} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>);

}

export default SkillCarousel;
