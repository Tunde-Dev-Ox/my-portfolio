"use client"
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { motion } from "motion/react";
import { ProjectDetailsData } from "@/app/data";
import Image from "next/image";
import Link from "next/link";
import {
  GoArrowLeft,
  GoLinkExternal,
  GoPerson,
  GoClock,
  GoPeople,
  GoDeviceMobile,
  GoAlertFill,
  GoLightBulb,
  GoRocket,
  GoGraph,
  GoBook,
} from "react-icons/go";
import { notFound } from "next/navigation";
import { use } from "react";

const sectionVariants = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, ease: "easeOut" },
};

const ProjectDetail = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const project = ProjectDetailsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const meta = [
    { icon: GoPerson, label: project.role },
    { icon: GoClock, label: project.timeline },
    { icon: GoPeople, label: project.teamSize },
    { icon: GoDeviceMobile, label: project.platform },
  ];

  const sections = [
    {
      id: "problem",
      icon: GoAlertFill,
      title: "The Problem",
      text: project.problem,
      bg: "bg-rose-50",
      border: "border-l-rose-400",
      iconColor: "text-rose-500",
    },
    {
      id: "approach",
      icon: GoLightBulb,
      title: "My Approach",
      text: project.approach,
      bg: "bg-violet-50",
      border: "border-l-violet-400",
      iconColor: "text-violet-500",
    },
    {
      id: "solution",
      icon: GoRocket,
      title: "The Solution",
      text: project.solution,
      bg: "bg-blue-50",
      border: "border-l-blue-400",
      iconColor: "text-blue-500",
    },
    {
      id: "outcomes",
      icon: GoGraph,
      title: "Outcomes & Impact",
      text: project.outcomes,
      bg: "bg-teal-50",
      border: "border-l-teal-400",
      iconColor: "text-teal-500",
    },
    {
      id: "lessons",
      icon: GoBook,
      title: "Lessons Learned",
      text: project.lessons,
      bg: "bg-amber-50",
      border: "border-l-amber-400",
      iconColor: "text-amber-500",
    },
  ];

  return (
    <div>
      <Header />
      <main role="main">
        <div className="max-w-5xl mx-auto pt-8 px-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1 text-sm text-[#666666] hover:text-black transition-colors duration-200 mb-6"
          >
            <GoArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="border-[1.5px] border-black rounded-xl overflow-hidden mb-6 bg-white shadow-[2px_2px_0px_#000]">
              <Image
                src={project.img}
                alt={project.title}
                width={500}
                height={300}
                unoptimized
                className="w-full h-auto object-contain p-8 md:p-14"
              />
            </div>

            <div className="border-[1.5px] border-black rounded-[14px] p-6 md:p-8 shadow-[2px_2px_0px_#000] mb-8">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                    {project.title}
                  </h1>
                  <p className="text-base text-[#666666] mt-2 max-w-2xl leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>
                <span className="inline-flex px-4 py-1.5 bg-violet-500 text-white text-sm font-semibold rounded-md shadow-[2px_2px_0px_#000] shrink-0 self-start">
                  {project.timeline}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {meta.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-2 px-3 py-2 border-[1.5px] border-black rounded-lg bg-white shadow-[1.5px_1.5px_0px_#000]"
                    >
                      <Icon className="w-4 h-4 text-[#666666] shrink-0" />
                      <span className="text-sm font-medium text-[#444] leading-tight">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm font-semibold border-2 border-black rounded-md shadow-[2px_2px_0px_#000] bg-blue-400 text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.section>

          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.section
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.05 }}
                className="mb-6"
              >
                <div
                  className={`border-[1.5px] border-black rounded-[14px] p-6 md:p-8 ${section.bg} shadow-[2px_2px_0px_#000] border-l-[6px] ${section.border}`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <Icon className={`w-5 h-5 ${section.iconColor}`} />
                    <h2 className="text-xl font-bold">{section.title}</h2>
                  </div>
                  <p className="text-[0.95rem] text-[#444] leading-relaxed">
                    {section.text}
                  </p>
                </div>
              </motion.section>
            );
          })}

          {project.links.live && project.links.live !== "#" && (
            <motion.section
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
              className="mb-8"
            >
              <div className="border-[1.5px] border-black rounded-[14px] p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-teal-100 shadow-[2px_2px_0px_#000]">
                <div className="flex-1">
                  <h4 className="text-lg font-bold">View the project</h4>
                  <p className="text-sm text-[#666666]">
                    Check out the live project to see it in action.
                  </p>
                </div>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-400 text-white border-2 border-black rounded-md font-semibold shadow-[3px_3px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#000]"
                >
                  Visit live site
                  <GoLinkExternal className="w-4 h-4" />
                </a>
              </div>
            </motion.section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
