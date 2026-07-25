"use client";

import { motion } from "framer-motion";

const Footer = () => {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            id="footer"
            className="pt-8 pb-2 w-full border-[1.5] border-black rounded-t-[24px] mt-8 bg-teal-100"
        >
            <div className="max-w-5xl mx-auto w-full px-4 sm:px-6">
                <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
                    <li className="border-[1.5] border-black rounded-[14px] shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">
                        <a href="https://www.linkedin.com/in/josephtunde/" target="_blank" rel="noopener noreferrer" className="px-2 py-1 inline-block text-sm sm:text-base">LinkedIn</a>
                    </li>
                    <li className="border-[1.5] border-black rounded-[14px] shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">
                        <a href="mailto:iamjosephtunde@gmail.com" target="_blank" rel="noopener noreferrer" className="px-2 py-1 inline-block text-sm sm:text-base">Email</a>
                    </li>
                    <li className="border-[1.5] border-black rounded-[14px] shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">
                        <a href="/Joseph_Olatunde_CV.pdf" download target="_blank" rel="noopener noreferrer" className="px-2 py-1 inline-block text-sm sm:text-base">Download CV</a>
                    </li>
                    <li className="border-[1.5] border-black rounded-[14px] shadow-[2px_2px_0px_#000] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_#000]">
                        <a href="https://open.spotify.com/user/31pahxmbza66pmnvt6osyofoxo2e?si=121305abdd434920" target="_blank" rel="noopener noreferrer" className="px-2 py-1 inline-block text-sm sm:text-base">Listen to my playlists</a>
                    </li>
                </ul>
                <p className="text-center mt-4">Thank you for stopping by. I hope you found value in my work. Peace. ✌️</p>
            </div>
        </motion.footer>
    )
}

export default Footer;