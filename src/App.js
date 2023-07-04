import logo from './logo.svg';
import { motion, useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue,useCycle } from "framer-motion"
import './AppLight.css';
import pfp from './imgs/MainPfp.jpg'
import spinnyTxt from './imgs/circleText.svg'
import SM from './imgs/severinMachaz.svg'
import MobileTextArt from './imgs/MobileTextArt.svg'
import MobilePfp from './imgs/PFPMobile.svg'
import MainNav from './MainNav.tsx'
import React, { useEffect, useState,useRef } from 'react';




function App() {



  const { scrollY } = useScroll()
  const [x, setX] = useState(15);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [scrollYValue, setScrollYValue] = useState(0);
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollYValue(latest)
    setX(latest / 100)
    console.log("latest" + latest)
    console.log(x)
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
    console.log(screenWidth)
    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
    <MainNav/>
      <div>
        {/* View for Desktop */}
        {screenWidth > 500 ?
          <MotionConfig>

            <motion.div
            >
              <motion.img
                alt='NameArt'
                className='NameArt'
                src={SM}
              />


              <img alt='pfp' className='pfp' src={pfp} />
              <motion.img
                alt='circleText'
                className='circleText'
                src={spinnyTxt}
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: x,
                  ease: 'linear',
                }} />  </motion.div >
            <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

          </MotionConfig> : null}
        {/* View for Mobile */}
        {screenWidth < 500 ? <MotionConfig>

          <motion.div
          className='MobileStartContainer'>
            <motion.img
              alt='Mobile Pfp'
              className='MobilePfp'
              src={MobilePfp}
            />

            <motion.img
              alt='NameArt'
              className='MobileNameArt'
              src={MobileTextArt}
            />


          </motion.div >
          <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />

        </MotionConfig> : null}
      </div>

    </div >
  );
}

export default App;
