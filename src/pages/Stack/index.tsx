import React, { useEffect } from "react"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from "react-intersection-observer";
import { stacks } from "./constants";

export const Stack = () => {
    const controls = useAnimation();

    const [ref, inView] = useInView({
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView])

    return (
        <section className="py-24 md:py-64 max-w[1200px] mx-auto text-center" id="stack">
            <h2 className="text-7xl text-gray-100 font-bold mb-20">My Stack</h2>

            <div className="flex flex-wrap justify-center gap-8" ref={ref}>
                {stacks.map((stack, index) => (
                    <motion.div
                        key={index}
                        custom={index}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            hidden: (index) => ({
                                opacity: 0,
                                y: index % 2 === 0 ? -100 : 100,
                            }),
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1.5
                                }
                            }
                        }}
                        className="bg-white/10 flex flex-col items-center justify-center w-[200px] h-[200px] rounded-xl p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    >
                        <div className={`mb-4 ${stack.color}`}>
                            {stack.icon}
                        </div>

                        <p className="text-white/20 text-xl">{stack.name}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}