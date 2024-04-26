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
    prop3: number
}

export const MenuItem: React.FC<MenuItemProps> = ({ prop1, prop2, prop3 }) => {
    const targetRef = React.useRef<HTMLLIElement>(null);

    function goTo(nr) {
        // Calculate the target scroll position as a percentage of the total scrollable height
        const targetPercentage = nr; // Change this to your desired percentage
        const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const targetScrollPosition = (totalScrollHeight * targetPercentage) / 100;

        // Scroll smoothly to the target position
        window.scrollTo({
            top: targetScrollPosition
        });
    }

    const style1 = { border: `2px solid #FFB247` };
    const style2 = { border: `2px solid #FFB247`, fontSize: "0.3em", padding: "2px", color: "#0C2717" };
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => { goTo(prop3) }}
        >
            <div className="icon-placeholder" style={style1} ><motion.img src={prop1} /> </div>
            <div className="text-placeholder" style={style2} >{prop2}</div>
        </motion.li>
    );
};

