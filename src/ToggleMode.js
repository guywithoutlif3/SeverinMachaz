import logo from './logo.svg';
import { motion, AnimatePresence } from 'framer-motion';
import './ToggleMode.scss';

import React, { useEffect, useState, useRef } from 'react';




function ToggleMode({ isOpen }) {
    const [isOn, setIsOn] = useState(false);


    if (!isOpen) {
        return null; // Return null if the sidebar is closed
    }

    return (
        <div
            className="container"
            data-darkmode={isOn}
            onClick={() => setIsOn(!isOn)}
            style={{ justifyContent: isOn ? 'flex-end' : 'flex-start' }}

        >
            <motion.div layout className="handle">
                <AnimatePresence initial={false}>
                    <motion.i
                        className={`icon far fa-${isOn ? 'moon' : 'sun'}`}
                        key={isOn ? 'moon' : 'sun'}
                        initial={{ y: -30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 30, opacity: 0 }}
                        transition={{ duration: .2 }}
                    />
                </AnimatePresence>
            </motion.div>
        </div>
    )
}

export default ToggleMode;
