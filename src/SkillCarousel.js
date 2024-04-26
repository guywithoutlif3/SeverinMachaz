import logo from "./logo.svg";
import {
  motion,
  useScroll,
  useMotionValueEvent,
  MotionConfig,
  useTransform,
  useMotionValue,
  useCycle,
} from "framer-motion";
import "./SkillCarousel.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import React, { useEffect, useState, useRef } from "react";
import SkillItem from "./SkillItem";
import ReactLogo from "./imgs/react.svg";
import ReactSnippet from "./imgs/ReactSnippet.svg";
import JsLogo from "./imgs/javascript.svg";
import JsSnippet from "./imgs/jsSnippet.svg";
import JavaLogo from "./imgs/java.png";
import Spring from "./imgs/spring.svg";
import Quarkus from "./imgs/quarkus.svg";
import Node from "./imgs/node.svg";
import NodeSnippet from "./imgs/NodeSnippet.svg";
import Sql from "./imgs/sql.svg";
import SqlSnippet from "./imgs/sqlSnippet.svg";
import Figma from "./imgs/figma.svg";
import Php from "./imgs/php.svg";
import PhpSnippet from "./imgs/phpSnippet.svg";

function SkillCarousel() {
  let Skills = [
    {
      language: "React",
      content: (
        <motion.img
          loading="lazy"
          className="React"
          src={ReactSnippet}
          alt="CodeSnippet"
        />
      ),
      logo: ReactLogo,
    },
    {
      language: "JavaScript",
      content: (
        <motion.img
          loading="lazy"
          className="JavaScript"
          src={JsSnippet}
          alt="CodeSnippet"
        />
      ),
      logo: JsLogo,
    },
    {
      language: "Java",
      content: (
        <div className="JavaFDiv">
          <h5 className="titleFrameworks">Frameworks</h5>
          <div className="imgWrapper">
            <figure id="image1">
              <motion.img
                loading="lazy"
                className="Spring"
                src={Spring}
                alt="Spring"
              ></motion.img>
              <figcaption className="cap">Spring</figcaption>
            </figure>
            <figure id="image2">
              <motion.img
                loading="lazy"
                className="Quarkus"
                src={Quarkus}
                alt="Quarkus"
              ></motion.img>
              <figcaption className="cap">Quarkus</figcaption>
            </figure>
          </div>
        </div>
      ),
      logo: JavaLogo,
    },
    {
      language: "Node",
      content: (
        <>
          <motion.img
            loading="lazy"
            className="JavaScript"
            src={NodeSnippet}
            alt="CodeSnippet"
          />
          <br />
          <p className="expresss">I Also know Express.js :P</p>
        </>
      ),
      logo: Node,
    },
    {
      language: "SQL",
      content: (
        <>
          <motion.img
            loading="lazy"
            className="SQL"
            src={SqlSnippet}
            alt="CodeSnippet"
          />
        </>
      ),
      logo: Sql,
    },
    {
      language: "Figma",
      content: (
        <>
          <iframe
            className="Figma"
            width="800"
            height="450"
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fj1vn9h3v5N4QQ509dsDFhn%2FCV-Site%3Ftype%3Ddesign%26node-id%3D5%253A3%26mode%3Ddesign%26t%3DkqgKRnvza91SWTda-1"
            allowfullscreen
          ></iframe>
        </>
      ),
      logo: Figma,
    },
    {
      language: "PHP",
      content: (
        <>
          <motion.img
            loading="lazy"
            className="PHP"
            src={PhpSnippet}
            alt="CodeSnippet"
          />
        </>
      ),
      logo: Php,
    },
  ];

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
          type: "spring",
        },
      }}
      initial={{
        opacity: 0,
        scale: 0.5,
        y: 40,
      }}
      className="Skill"
    >
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {Skills.map((skill, index) => (
          <SwiperSlide className="swiperslide">
            <SkillItem
              key={index}
              language={skill.language}
              logo={skill.logo}
              content={skill.content}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  );
}

export default SkillCarousel;
