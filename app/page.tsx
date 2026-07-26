"use client"
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import SkillCard from "@/app/components/SkillCard"
import { HomeCategoryData } from "./data";
import { SpecializationData } from "./data";
import ToolsCard from "@/app/components/ToolsCard"
import { ToolsData } from "./data"
import ProjectCard from "@/app/components/ProjectCard"
import BlogCard from "@/app/components/BlogCard"
import { BlogCardData } from "./data";
import Footer from "@/app/components/Footer"
import Header from "@/app/components/Header"
import { GoChevronRight } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import { useRef } from "react";


const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 280;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

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
                <span className="text-sm font-semibold">💠Product manager, UX Specialist, Software Developer</span>
                <h1 className="text-3xl sm:text-4xl leading-[1.1] font-medium tracking-tight">
                  I build delightful products that solve real world problems and drive business growth
                </h1>
                <div className="flex flex-wrap gap-2 mt-4">
                  {SpecializationData.map((item, index) => (
                    <span key={index} className={`px-2 py-1 ${item.color} border-2 border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] text-xs sm:text-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]`}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="border-2 border-black rounded-md shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] shrink-0 mx-auto md:mx-0">
                <div className="p-4">
                  <Image src="/me.jpeg" alt="" width={100} height={100} unoptimized className="object-cover w-[200px] sm:w-[250px] h-[200px] sm:h-[250px] rounded-md" />
                  <span className="text-center text-[12px] font-bold block">Based in Lagos, Nigeria.</span>
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
                HomeCategoryData.map((item, index) => (
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
          <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px]">
            <div className="p-6">
              <div className="flex items-center gap-2">
                <Image src="/translate.svg" alt="AI Product" width={30} height={30} />
                <span className="text-[1rem] font-semibold">
                  An AI work experience translator
                </span>
              </div>
              <h4 className="text-2xl font-bold">Goover</h4>
              <p className="text-[1rem] text-[#666666] max-w-xl">
                Goover translates your local market experience into the language global hiring managers immediately understand, so you can compete anywhere.
              </p>
            </div>
            <div className="p-6 pt-0">
              <div className="bg-teal-300 border-[1.5px] border-black rounded-[14px] p-4 shadow-[2px_2px_0px_#000] flex flex-col sm:flex-row items-start justify-between w-full gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">
                <ul className="flex flex-col gap-1 ml-4 list-disc">
                  <li>Fit score analysis</li>
                  <li>Experience translation</li>
                  <li>Gap analysis</li>
                  <li>Cover letter generator</li>
                </ul>
                <div className="flex flex-wrap items-center gap-2">
                  <Link href="https://wegoover.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-violet-600 text-white border border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] text-xs sm:text-sm">Learn about the project</Link>
                  <Link href="https://lnkd.in/p/eCXFgUBR" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-white border border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] text-xs sm:text-sm">LinkedIn post</Link>
                  <Link href="https://wegoover.vercel.app/" target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-violet-600 text-white border border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] text-xs sm:text-sm">Access Goover</Link>
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
          <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px]">
            <div className="px-4 sm:px-6 pt-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
              <div className="flex items-start gap-2 flex-col">
                <div className="flex items-center gap-2">
                  <Image src="/tools.svg" alt="AI Product" width={30} height={30} />
                  <span className="text-[1rem] font-semibold">
                    My product management toolkit
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold">Tools and skills.</h4>
              </div>
              <div className="flex items-center gap-2 self-end sm:self-auto">
                <GoChevronLeft onClick={() => scroll("left")} className="border border-black rounded-full w-8 h-8 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:scale-110" />
                <GoChevronRight onClick={() => scroll("right")} className="border border-black rounded-full w-8 h-8 cursor-pointer transition-all duration-300 hover:bg-gray-200 hover:scale-110" />
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              ref={scrollRef}
              className="py-6 pr-1 flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 mx-4 items-baseline justify-between"
              style={{
                scrollbarWidth: "none",
              }}
            >
              {ToolsData.map((item, index) => (
                <motion.div key={index} variants={fadeUpItem} className="snap-start shrink-0 max-w-62.5 h-full">
                  <ToolsCard
                    img={item.img}
                    title={item.title}
                    subtitle={item.subtitle}
                  />
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
          <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px]">
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
              <div className="flex items-start gap-2 flex-col">
                <div className="flex items-center gap-2">
                  <Image src="/project.svg" alt="AI Product" width={30} height={30} />
                  <span className="text-[1rem] font-semibold">
                    Featured projects
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold">Products I have worked on over time.</h4>
              </div>
              <div className="flex items-center gap-2">
                <Link href="/projects" className="px-4 py-1 bg-teal-400 text-white border border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">See all projects</Link>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="px-6 pt-2 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-start justify-start"
            >
              <motion.div variants={fadeUpItem}>
                <ProjectCard
                  img="/keru.png"
                  title="Keru"
                  description="Led the end-to-end development of Keru, a logistics product that connects cargo van owners with businesses needing to move goods."
                  link="/projects/keru"
                />
              </motion.div>
              <motion.div variants={fadeUpItem}>
                <ProjectCard
                  img="/brooi.png"
                  title="Brooi"
                  description="Joined as the founding PM at an early-stage vacation rental startup. Built product culture, delivery processes, and shipped an MVP from scratch."
                  link="/projects/brooi"
                />
              </motion.div>
              <motion.div variants={fadeUpItem}>
                <ProjectCard
                  img="/pj.png"
                  title="Pizza Jungle"
                  description="Managed the iteration of Pizza Jungle, a product with over 40k+ users and growing, where users can order the finest pizzas in Nigeria."
                  link="/projects/pizza-jungle"
                />
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="pt-8 px-4" id="articles"
        >
          <div className="max-w-5xl mx-auto w-full border-[1.5] border-black rounded-[14px] pb-4">
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3">
              <div className="flex items-start gap-2 flex-col">
                <div className="flex items-center gap-2">
                  <Image src="/pen.svg" alt="AI Product" width={20} height={20} />
                  <span className="text-[1rem] font-semibold">
                    Featured articles about product, business, and my ventures
                  </span>
                </div>
                <h4 className="text-xl sm:text-2xl font-bold">I write for passion</h4>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <Link href="https://www.mindtheproduct.com/author/joseph-olatunde/" className="px-3 py-1 bg-violet-600 text-white border border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] text-xs sm:text-sm">Mind The Product</Link>
                <Link href="https://everythingisaproduct.substack.com/" className="px-3 py-1 bg-white border border-black rounded-md font-semibold shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000] text-xs sm:text-sm">My blog</Link>
              </div>
            </div>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="px-6 py-2 flex flex-col gap-4 items-start justify-start"
            >
              {BlogCardData.map((item, index) => (
                <motion.div key={index} variants={fadeUpItem} className="w-full">
                  <BlogCard
                    img={item.img}
                    date={item.date}
                    title={item.title}
                    description={item.description}
                    link={item.link}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
}