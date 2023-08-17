import React, { useEffect, useState, useRef } from 'react';
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions.ts";
import { MenuToggle } from "./MenuToggle.tsx";
import { Navigation } from "./Navigation.tsx";
import { useScroll, useMotionValueEvent, MotionConfig, useTransform, useMotionValue } from "framer-motion"
import ToggleMode from "./ToggleMode.js";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

interface Props {
    isOpenToMain: boolean;
    onToggle: (isOn: boolean) => void;
}

export const MainNav = ({ isOpenToMain, onToggle }: Props) => {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const { height } = useDimensions(containerRef);
    const { scrollY } = useScroll()

    const [isOnValue, setIsOnValue] = useState(false);

    useEffect(() => {
        onToggle(isOnValue); // Call the onToggle function whenever isOn value changes
    }, [isOnValue, onToggle]);
    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 1) {
            if (isOpen) {
                toggleOpen()
            }
        }
    })

    const handleToggle = (isOn) => {
        setIsOnValue(isOn); // Receive the isOn value from ToggleMode component
    };

    return (
        <motion.nav
            initial={false}
            animate={isOpen ? "open" : "closed"}
            custom={height}
            ref={containerRef}
        >


            <motion.div className="background" variants={sidebar} />
            <Navigation />
            <MenuToggle toggle={() => toggleOpen()} />
            <ToggleMode isOpen={isOpen} onToggle={handleToggle} />
        </motion.nav>
    );
};

export default MainNav;