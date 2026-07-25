const SkillCard = ({ icon, title, header, description }: { icon: React.ReactNode, title: string, header: string, description: string }) => {
    return (
        <div className="border-[1.5px] border-black rounded-xl shadow-[2px_2px_0px_#000] p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-[4px_4px_0px_#000]">
            <div className="flex items-start justify-between w-full flex-col gap-2">
                {icon}
                <p className="font-bold text-sm">{title}</p>
                <h3 className="text-2xl font-bold tracking-wide">{header}</h3>
                <p className="font-normal text-sm text-[#666666]">{description}</p>
            </div>
        </div>
    )
}

export default SkillCard;