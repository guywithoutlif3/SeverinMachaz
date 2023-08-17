
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue, useCycle } from "framer-motion"
import './App.scss';
import pfp from './imgs/MainPfp.jpg'
import spinnyTxt from './imgs/circleText.svg'
import spinnyTxtDark from './imgs/circleTextDark.svg'
import SM from './imgs/severinMachaz.svg'
import SMDark from './imgs/NameArtDark.svg'
import MobileTextArt from './imgs/MobileTextArt.svg'
import MobileTextArtDark from './imgs/MobileNameArtDark.svg'
import MobilePfp from './imgs/PFPMobile.svg'
import MobilePfpDark from './imgs/pfpMobileDark.svg'
import MainNav from './MainNav.tsx'
import React, { useEffect, useState } from 'react';
import SkillCarousel from './SkillCarousel';
import Personal from './Personal';
import PersonalMobile from './PersonalMobile';
import Photos from './Photos';
import PhotosMobile from './PhotosMobile';
import Socials from './Socials';
import SocialsMobile from './SocialsMobile';


function App() {



  const { scrollY } = useScroll()
  const [x, setX] = useState(15);
  const [mode, setMode] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollYValue, setScrollYValue] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYValue(latest)
    setX(latest / 100)
  })

  const duration = useTransform(
    scrollY,
    [0, 3000],
    [15, 1],

  )



  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggle = (isOn) => {
    setMode(isOn)
  };


  return (
    <div className="App" data-darkmode={mode}>
      <MainNav onToggle={handleToggle} />
      <div className='idfk'>
        {/* View for Desktop */}
        {screenWidth > 500 ?
          <MotionConfig>

            <motion.div
            >
              <motion.div
                animate={{ x: [-1000, 0] }}
                transition={{ duration: 1 }}
              >
                <motion.img

                  alt='NameArt'
                  className='NameArt'
                  src={mode ? SMDark : SM}
                />
              </motion.div>


              <motion.div
                animate={{ x: [1000, 0] }}
                transition={{ duration: 1 }}
              >
                <img alt='pfp' className='pfp' src={pfp} />
                <motion.img
                  alt='circleText'
                  className='circleText'
                  src={mode ? spinnyTxtDark : spinnyTxt}

                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: x,
                    ease: 'linear',
                  }} /> </motion.div>
              <motion.div>
                <motion.h2
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
                  className='WorkTitle'
                > Work</motion.h2>
                <motion.p
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
                  className='WorkSub'>Welcome to my Work page! Here, you'll find a concise display of my skills and the tools I proficiently utilize.</motion.p>
                <SkillCarousel id="work"></SkillCarousel>
              </motion.div>
            </motion.div >
            <Personal></Personal>
            <Photos></Photos>
            <Socials mode={mode}></Socials>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>         
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>

          </MotionConfig> : null}
        {/* View for Mobile */}
        {screenWidth < 500 ? <MotionConfig>

          <motion.div

            className='MobileStartContainer'>
            <motion.div
              animate={{ y: [1000, 0] }}
              transition={{ duration: 1 }}>
              <motion.img
                alt='Mobile Pfp'
                className='MobilePfp'
                src={mode ? MobilePfpDark : MobilePfp}
              />

              <motion.img
                alt='NameArt'
                className='MobileNameArt'
                src={mode ? MobileTextArtDark : MobileTextArt}
              />

              <motion.h2
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
                className='WorkTitleMobile'> Work</motion.h2>
              <motion.p
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
                className='WorkSubMobile'>Welcome to my Work page! Here, you'll find a concise display of my skills and the tools I proficiently utilize.</motion.p>
              <SkillCarousel ></SkillCarousel>
              <PersonalMobile></PersonalMobile>
              <PhotosMobile></PhotosMobile>
              <SocialsMobile mode={mode}></SocialsMobile>
            </motion.div>

          </motion.div >


          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </MotionConfig> : null}
      </div>

    </div >
  );
}

export default App;
