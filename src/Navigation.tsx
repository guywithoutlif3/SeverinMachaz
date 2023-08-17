import React, { useEffect, useState } from 'react';

import { motion } from "framer-motion";
import { MenuItem } from './MenuItem.tsx';
import v1 from './imgs/camera.svg';
import v2 from './imgs/workIcon1.svg';
import v3 from './imgs/workIcon.svg';
import v4 from './imgs/imgIcon.svg';
const variants = {
    open: {
        transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
        transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
};

export const Navigation = () => {
    const isMobile = window.innerWidth < 500; // Check if screen size is smaller than 500

    const itemsToRender = isMobile ? itemsMobile : items; // Conditionally choose the array

    return (
        <motion.ul variants={variants}>
            {itemsToRender.map((item, index) => (
                <MenuItem prop1={item.prop1} prop2={item.prop2} prop3={item.prop3} key={index} />
            ))}
        </motion.ul>
    );
};
const items = [
    { prop1: v3, prop2: "Work", prop3: 25 },
    { prop1: v2, prop2: "About Me",prop3: 50 },
    { prop1: v1, prop2: "Photos",prop3: 75 },
    { prop1: v4, prop2: "Reach Out!",prop3: 100 }
];

const itemsMobile = [
    { prop1: v3, prop2: "Work", prop3: 20 },
    { prop1: v2, prop2: "About Me",prop3: 37 },
    { prop1: v1, prop2: "Photos",prop3: 85 },
    { prop1: v4, prop2: "Reach Out!",prop3: 100 }
];
