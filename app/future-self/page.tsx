"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { GoLightBulb, GoRocket, GoHeart, GoClock, GoTelescopeFill } from "react-icons/go";
import { futureBeliefs, futureBuilds, trajectorySteps } from "@/app/data";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const FutureSelf = () => {
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
          <div className="max-w-5xl mx-auto w-full border-[1.5px] border-black rounded-[14px]">
            <div className="flex flex-col md:flex-row items-start justify-between w-full p-6 gap-6">
              <div className="flex items-start justify-start flex-col w-full gap-3">
                <div className="flex items-center gap-2">
                  <Image src="/globe.svg" alt="Future" width={25} height={25} />
                  <span className="text-sm font-semibold">My future self</span>
                </div>
                <h1 className="text-3xl sm:text-4xl leading-[1.1] font-medium tracking-tight">
                  What I believe in, and what I&apos;m building toward
                </h1>
                <p className="text-[1rem] text-[#666666] max-w-137.5">
                  I think a lot about where product management, technology, and emerging markets are heading. This page is a living document of the beliefs that guide my decisions and the things I want to build in the years ahead.
                </p>
              </div>
              <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] shrink-0 mx-auto md:mx-0">
                <div className="p-4">
                  <GoTelescopeFill className="w-50 sm:w-62.5 h-30 sm:h-35 text-violet-500 mx-auto" />
                  <span className="text-center text-[12px] font-bold block">Always looking forward.</span>
                </div>
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
          <div className="max-w-5xl mx-auto w-full border-[1.5px] border-black rounded-[14px] p-6">
            <div className="flex items-center gap-2 mb-1">
              <GoLightBulb className="w-6 h-6 text-amber-500" />
              <span className="text-[1rem] font-semibold">My beliefs</span>
            </div>
            <h4 className="text-2xl font-bold mb-6">What I believe in</h4>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {futureBeliefs.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`border-2 border-black rounded-full p-2 ${item.color}`}>
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
          <div className="max-w-5xl mx-auto w-full border-[1.5px] border-black rounded-[14px] p-6">
            <div className="flex items-center gap-2 mb-1">
              <GoRocket className="w-6 h-6 text-violet-500" />
              <span className="text-[1rem] font-semibold">My roadmap</span>
            </div>
            <h4 className="text-2xl font-bold mb-6">What I&apos;ll be building</h4>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {futureBuilds.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`border-2 border-black rounded-full p-2 ${item.color}`}>
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
          <div className="max-w-5xl mx-auto w-full border-[1.5px] border-black rounded-[14px] p-6">
            <div className="flex items-center gap-2 mb-1">
              <GoClock className="w-6 h-6 text-teal-500" />
              <span className="text-[1rem] font-semibold">The journey</span>
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
                <motion.div
                  key={index}
                  variants={fadeUpItem}
                  className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]"
                >
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
            <h4 className="text-3xl font-bold tracking-tight">Let&apos;s build the future together</h4>
            <p className="text-[1rem] text-[#666666] max-w-md">
              If any of this resonates — whether you&apos;re building in emerging markets, working on AI products, or backing founders — I&apos;d love to talk.
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
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

export default FutureSelf;
