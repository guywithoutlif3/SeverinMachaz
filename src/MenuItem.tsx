import * as React from "react";
import { motion } from "framer-motion";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

interface MenuItemProps {
    prop1: string;
    prop2: string;
}
export const MenuItem: React.FC<MenuItemProps> = ({ prop1, prop2 }) => {
    const style1 = { border: `2px solid #FFB247` };
    const style2 = { border: `2px solid #FFB247`, fontSize: "0.4em",padding: "2px",};
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
        >
            <div className="icon-placeholder" style={style1} ><img src={prop1} /> </div>
            <div className="text-placeholder" style={style2} >{prop2}</div>
        </motion.li>
    );
};

