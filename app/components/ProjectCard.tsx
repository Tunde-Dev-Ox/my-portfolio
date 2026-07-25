import Image from "next/image";
import { GoChevronRight } from "react-icons/go";
import Link from "next/link";

const ProjectCard = ({ img, title, description, link, metric, metricColor }: { img: string, title: string, description: string, link: string, metric?: string, metricColor?: string }) => {
    return (
        <Link href={link} className="group flex items-start gap-4 border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] flex-col h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000] pb-2">
            <figure className="w-full h-auto">
                <Image
                    src={img}
                    alt={title}
                    width={300}
                    height={300}
                    className="h-full w-full object-cover p-3 rounded-[18px] unoptimized"
                />
            </figure>
            <div className="px-4 pb-2 w-full">
                <h4 className="text-xl font-bold">{title}</h4>
                {metric && (
                  <div className={`mt-1.5 mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 border-[1.5px] border-black rounded-md shadow-[1.5px_1.5px_0px_#000] ${metricColor || "bg-teal-100"}`}>
                    <span className="text-xs font-bold">{metric}</span>
                  </div>
                )}
                <p className="text-sm text-[#666666]">{description}</p>
                <div className="flex justify-start items-center w-full gap-1 mt-1">
                    <span className="text-sm text-[#666666] underline block transition-all duration-300 hover:text-black">View Project</span>
                    <GoChevronRight className="text-[#666666] transition-all duration-300 group-hover:translate-x-1" />
                </div>
            </div>
        </Link>
    )
}

export default ProjectCard;