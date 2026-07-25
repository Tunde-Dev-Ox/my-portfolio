import Image from "next/image";

const ToolsCard = ({
    img,
    title,
    subtitle,
}: {
    img: string;
    title: string;
    subtitle?: string;
}) => {
    return (
        <div className="min-w-[200px] rounded-[28px] border-2 border-black bg-[#F5F5F5] shadow-[4px_4px_0px_#000] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_#000] snap-start">
            <figure className="h-[120px] w-full border-b-2 border-black bg-white rounded-t-[28px]">
                <Image
                    src={img}
                    alt={title}
                    width={300}
                    height={300}
                    className="h-full w-full object-contain p-3"
                />
            </figure>

            <div className="p-4 pb-2 w-full">
                <h3 className="text-xl font-bold leading-none">
                    {title}
                </h3>

                <p className="mt-1 text-sm text-[#666666]">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default ToolsCard;