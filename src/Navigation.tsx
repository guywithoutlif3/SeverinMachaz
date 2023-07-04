import * as React from "react";
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

export const Navigation = () => (
    <motion.ul variants={variants}>
        {items.map((item, index) => (
            <MenuItem prop1={item.prop1} prop2={item.prop2} key={index} />
        ))}
    </motion.ul>
);
const items = [
    { prop1: v3, prop2: "Work" },
    { prop1: v2, prop2: "About Me" },
    { prop1: v1, prop2: "Photos" },
    { prop1: v4, prop2: "Reach Out!" }
];
