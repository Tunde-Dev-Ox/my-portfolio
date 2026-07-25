import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";

const BlogCard = ({ img, date, title, description, link }: { img: string, date: string, title: string, description: string, link: string }) => {
    return (
        <div className="group border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] h-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]">
            <div className="flex flex-col sm:flex-row items-start sm:items-center">
                <div className="w-full sm:w-[30%] shrink-0 p-3.5">
                    <Image src={img} alt="Blog" width={200} height={200} className="w-full h-full object-contain rounded-[14px]" />
                </div>
                <div className="w-full sm:w-[70%] p-4 pt-0 sm:pt-4">
                    <span className="text-xs sm:text-sm text-[#666666]">{date}</span>
                    <h3 className="text-[1.2rem] sm:text-[1.4rem] font-bold mt-1">{title}</h3>
                    <p className="text-sm text-[#666666] mt-1">{description}</p>
                    <div className="flex justify-start items-center w-full gap-1 mt-1">
                        <a href={link} className="text-sm text-[#666666] underline block transition-all duration-300 hover:text-black">Read more</a>
                        <MdArrowOutward className="text-[#666666] transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;