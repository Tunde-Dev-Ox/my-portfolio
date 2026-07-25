"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import { AboutCategoryData } from "@/app/data";
import SkillCard from "@/app/components/SkillCard";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { GoBriefcase, GoStar, GoGear, GoGoal, GoLightBulb, GoRocket, GoHeart } from "react-icons/go";
import { trajectorySteps } from "@/app/data";
import { workHistory } from "@/app/data";
import {valueDrivers} from "@/app/data";
import {operatingPrinciples} from "@/app/data";
import { focusGroups } from "@/app/data";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const About = () => {
    return (
        <div>
            <Header />
            <main className="" role="main">
                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px]">
                        <div className="flex flex-col md:flex-row items-start justify-between w-full p-6 gap-6">
                            <div className="flex items-start justify-start flex-col w-full gap-3">
                                <span className="text-sm font-semibold">💠About me</span>
                                <h1 className="text-3xl sm:text-4xl leading-[1.1] font-medium tracking-tight">
                                    Building products through curiosity, strategy, and technology
                                </h1>
                                <p className="text-[1rem] text-[#666666] max-w-[550px]">
                                    I didn&apos;t start my career in tech. I studied music at the University of Lagos, spent years in creative work, and developed a deep appreciation for how people think, feel, and interact with experiences. Over time, that curiosity led me to product management, where I combine creativity, strategy, and problem-solving to build delightful products.
                                </p>
                            </div>
                            <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] shrink-0 mx-auto md:mx-0">
                                <div className="p-4">
                                    <Image src="/aboutme.jpeg" alt="" width={100} height={100} unoptimized className="object-cover w-full h-[200px] sm:h-[250px] rounded-md" />
                                    <span className="text-center text-[12px] font-bold block">Joseph Olatunde, but you can call me JOT 😊</span>
                                </div>
                            </div>
                        </div>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-6 pt-0"
                        >
                            {
                                AboutCategoryData.map((item, index) => (
                                    <motion.div key={index} variants={fadeUpItem}>
                                        <SkillCard
                                            icon={item.icon}
                                            title={item.title}
                                            header={item.header}
                                            description={item.description}
                                        />
                                    </motion.div>
                                ))
                            }
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <GoStar className="w-6 h-6" />
                            <span className="text-[1rem] font-semibold">Where I create impact</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">Where do I generate the most value?</h4>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            {valueDrivers.map((item, index) => (
                                <motion.div key={index} variants={fadeUpItem} className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="border-2 border-black rounded-full p-2 bg-violet-100 text-violet-600">
                                            {item.icon}
                                        </div>
                                        <h5 className="font-bold text-[1rem]">{item.title}</h5>
                                    </div>
                                     <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <GoGear className="w-6 h-6" />
                            <span className="text-[1rem] font-semibold">My workflow</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">How I operate</h4>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            {operatingPrinciples.map((item, index) => (
                                <motion.div key={index} variants={fadeUpItem} className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]">
                                    <span className="text-3xl font-bold text-teal-400 border-2 border-teal-500 rounded-full p-2 block mb-2 w-fit">{item.step}</span>
                                    <h5 className="font-bold text-[1rem] mb-2">{item.title}</h5>
                                    <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <GoBriefcase className="w-6 h-6" />
                            <span className="text-[1rem] font-semibold">Work history</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">Where I have worked</h4>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="flex flex-col gap-4"
                        >
                            {workHistory.map((item, index) => (
                                <motion.div key={index} variants={fadeUpItem} className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]">
                                    <div className="flex flex-col sm:flex-row items-start gap-4">
                                        <div className="shrink-0 border-2 border-black rounded-xl overflow-hidden bg-black flex items-center justify-center p-1.5 w-[120px] sm:w-[150px]">
                                            <Image src={item.img} alt={item.company} width={100} height={100} unoptimized className="w-full h-full object-contain" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-2 flex-col">
                                                <span className="text-xs text-[#666666] font-medium whitespace-nowrap">{item.date}</span>
                                                <p className="text-[1rem] font-semibold">
                                                    {item.role}
                                                </p>
                                            </div>
                                            <p className="text-sm text-[#666666] mt-2 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] p-6">
                        <div className="flex items-center gap-2 mb-1">

                            <GoGoal className="w-6 h-6" />
                            <span className="text-[1rem] font-semibold">Current focus</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">My focus areas</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {focusGroups.map((group, index) => (
                                <div key={index}>
                                    <h5 className="font-semibold text-[1rem] mb-3 underline">{group.category}</h5>
                                    <div className="flex flex-wrap gap-2">
                                        {group.items.map((item, i) => (
                                            <span
                                                key={i}
                                                className={`px-3 py-1.5 ${group.color} border-2 border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]`}
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <GoLightBulb className="w-6 h-6" />
                            <span className="text-[1rem] font-semibold">My philosophy</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">How I think and approach problems</h4>
                        <div className="bg-teal-300 border-[1.5px] border-black rounded-[14px] p-6 shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">
                            <div className="max-w-3xl">
                                <p className="text-lg font-semibold italic mb-4">
                                    &ldquo;Products are not built in a vacuum, they&apos;re built at the intersection of user needs, business goals, and technical possibility. My job is to find the overlap.&rdquo;
                                </p>
                                <p className="text-sm text-[#333333] leading-relaxed">
                                    I approach every problem by first understanding the context. What are the users struggling with? What does the business need to achieve? What&apos;s technically feasible? I don&apos;t jump to solutions, I dwell on the problem until the right path becomes clear. This means asking uncomfortable questions, challenging assumptions, and running small experiments before committing to big bets. I believe that good product management is less about having all the answers and more about asking the right questions.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] p-6">
                        <div className="flex items-center gap-2 mb-1">
                            <GoRocket className="w-6 h-6" />
                            <span className="text-[1rem] font-semibold">My trajectory</span>
                        </div>
                        <h4 className="text-2xl font-bold mb-6">Where I am going</h4>
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-40px" }}
                            className="grid grid-cols-1 md:grid-cols-3 gap-4"
                        >
                            {trajectorySteps.map((item, index) => (
                                <motion.div key={index} variants={fadeUpItem} className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]">
                                    <span className="inline-block px-3 py-1 bg-violet-500 text-white text-xs font-bold rounded-md mb-3">{item.period}</span>
                                    <h5 className="font-bold text-[1rem] mb-2">{item.title}</h5>
                                     <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </motion.section>

                <motion.section
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className="pt-8 px-4"
                >
                    <div className="max-w-5xl mx-auto w-full border-2 border-black rounded-[14px] p-8 bg-zinc-50 flex flex-col items-center text-center gap-4">
                        <GoHeart className="w-8 h-8 text-violet-600" />
                        <h4 className="text-3xl font-bold tracking-tight">Let&apos;s build something great together</h4>
                        <p className="text-[1rem] text-[#666666] max-w-md">
                            I&apos;m always open to interesting conversations, collaborations, and opportunities globally. If you think I&apos;d be a good fit for your team or project, let&apos;s talk.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
                            <a
                                href="mailto:iamjosephtunde@gmail.com"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 text-white border-2 border-black rounded-md font-semibold shadow-[3px_3px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]"
                            >
                                Send me an email
                                <MdArrowOutward className="w-4 h-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/josephtunde/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-black rounded-md font-semibold shadow-[3px_3px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]"
                            >
                                Connect on LinkedIn
                                <MdArrowOutward className="w-4 h-4" />
                            </a>
                            <a
                                href="/JosephTunde_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-400 text-white border-2 border-black rounded-md font-semibold shadow-[3px_3px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]"
                            >
                                Download my CV
                                <MdArrowOutward className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    )
}

export default About;
