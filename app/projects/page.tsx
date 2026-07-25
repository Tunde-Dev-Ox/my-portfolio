"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import { ProjectsData } from "@/app/data";
import ProjectCard from "@/app/components/ProjectCard";
import Image from "next/image";

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

const Projects = () => {
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
            <div className="p-6">
              <div className="flex items-center gap-2 mb-1">
                <Image src="/project.svg" alt="Projects" width={25} height={25} />
                <span className="text-[1rem] font-semibold">Featured work</span>
              </div>
              <h1 className="text-4xl leading-[1.1] font-medium tracking-tight">Products I have built and managed</h1>
              <p className="text-[1rem] text-[#666666] mt-3 max-w-2xl">
                A collection of products I&apos;ve shipped across logistics, food delivery, fintech, AI, and marketplaces — from zero-to-one launches to scaling existing products, and the ones I developed for fun or for hackathons.
              </p>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="px-6 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-start"
            >
              {ProjectsData.map((item, index) => (
                <motion.div key={index} variants={fadeUpItem}>
                  <ProjectCard
                    img={item.img}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                    metric={item.metric}
                    metricColor={item.metricColor}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  )
}

export default Projects;
