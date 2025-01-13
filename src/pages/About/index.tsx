import React from "react"
import { motion } from 'framer-motion';
import project1 from '../../assets/images/projects/fizzi.png';

export const About = () => {
    return (
        <section id="about" className="text-white p-8">
            <h2 className="text-6xl font-bold mb-8">
                About <span className="text-emerald-300">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <motion.div
                    className="border border-white/20 rounded-lg p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-2">01. Background</h3>

                    <p className="text-white/50 mb-6">
                        I'm a passionate full-stack developer with a strong foundation in computer science and a love for creating innovative web and mobile solutions. My journey in tech started with a curiosity about how things work, which led me to pursue a career in web development.
                    </p>

                    <div className="rounded-lg p-4 mb-4 border border-white/20">
                        <code className="text-emerald-200/50">
                            const skills = [
                            <br />
                            &nbsp;&nbsp;'JavaScript',
                            <br />
                            &nbsp;&nbsp;'React',
                            <br />
                            &nbsp;&nbsp;'React Native',
                            <br />
                            &nbsp;&nbsp;'NextJs',
                            <br />
                            &nbsp;&nbsp;'Node.js',
                            <br />
                            &nbsp;&nbsp;'SQL',
                            <br />
                            ];
                        </code>
                    </div>
                </motion.div>

                <motion.div
                    className="border border-white/20 rounded-lg p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-2">02. Expertise</h3>

                    <p className="text-white/50">
                        I specialize in building robust and scalable web applications using modern technologies. My expertise spans both front-end, back-end and mobile development, allowing me to create seamless, end-to-end solutions.
                    </p>

                    <div className="mt-4 relative border border-white/20 rounded-lg p-4 h-[220px] overflow-hidden">
                        <motion.img 
                            src={project1} 
                            alt="Project 1" 
                            className="absolute inset-0 w-full h-full object-cover" 
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>

                <motion.div
                    className="border border-white/20 rounded-lg p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-2">03. Skills</h3>

                    <p className="text-white/50 mb-4">
                        I'm proficient in a wide range of technologies and constantly expanding my skill set to stay at the forefront of web development.
                    </p>

                    <div className="grid grid-cols-1 text-center gap-4">
                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Frontend / Mobile</h4>

                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>React/Next.js</li>
                                <li>React Native</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>

                        <div className="border border-white/20 rounded-lg p-3">
                            <h4 className="text-emerald-300 font-medium mb-2">Backend</h4>

                            <ul className="text-white/50 space-y-1 text-sm">
                                <li>Node.js</li>
                                <li>SQL</li>
                                <li>Firebase</li>
                                <li>Mongodb</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <motion.div
                    className="border border-white/20 rounded-lg p-6"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <h3 className="text-2xl font-bold mb-2">04. Approach</h3>
                    <p className="text-white/50 mb-4">
                        I believe in writing clean, maintainable code and following best practices. My approach involves understanding client needs, planning thoroughly, and delivering high-quality solutions on time.
                    </p>

                    <div className="space-y-4">
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 2 }}
                        >
                            <label className="block text-sm font-medium mb-1">Mobile</label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-emerald-300 h-2 rounded-full" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "90%" }}
                            transition={{ duration: 2 }}
                        >
                            <label className="block text-sm font-medium mb-1">Front-end</label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-emerald-300 h-2 rounded-full" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "75%" }}
                            transition={{ duration: 2 }}
                        >
                            <label className="block text-sm font-medium mb-1">Back-end</label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-emerald-300 h-2 rounded-full" />
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "30%" }}
                            transition={{ duration: 2 }}
                        >
                            <label className="block text-sm font-medium mb-1">DevOps</label>
                            <div className="w-full bg-white/10 rounded-full h-2">
                                <div className="bg-emerald-300 h-2 rounded-full" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                <motion.div
                    className="border border-white/20 rounded-lg p-6 flex flex-col justify-between"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="mb-4">
                        <h3 className="text-2xl font-bold mb-2">05. Goals</h3>

                        <p className="text-white/50">
                            My goal is to continue growing as a developer, tackling challenging projects, and contributing to the tech community. I'm always excited to learn new technologies and push the boundaries of what's possible in web development.
                        </p>
                    </div>

                    <div className="relative border border-white/20 rounded-lg p-4 h-[200px] overflow-hidden">
                        <motion.img
                            src={project1}
                            alt="Project 1"
                            className="absolute inset-0 w-full h-full object-cover"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
