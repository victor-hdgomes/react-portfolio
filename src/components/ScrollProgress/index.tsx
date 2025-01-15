
import React from "react"
import { motion, useScroll } from 'framer-motion';

export const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            id="scroll-indicator"
            style={{
                scaleX: scrollYProgress,
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                height: 10,
                originX: 0,
                backgroundColor: "#34d399",
                zIndex: 100
            }}
        />
    )
}