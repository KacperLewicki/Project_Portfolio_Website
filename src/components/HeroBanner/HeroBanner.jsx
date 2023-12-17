import { useRef } from "react";
import { motion } from "framer-motion";
import Wrapper from "../../common/Wrapper";
import gmailIcon from "../../assets/email-icon.png";
import { scrollTo } from "../../helper";
import { useFollowPointer } from "../../hooks/useFollowPointer";
import man from "../../assets/man.png";

const HeroBanner = () => {
    const ref = useRef(null);
    const { x, y } = useFollowPointer(ref);
    return (
        <div
            id="hero"
            className="w-full h-[104vh] relative bg-[] overflow-hidden"
        >  
            <motion.span
                ref={ref}
                animate={{ x, y }}
                className="hidden md:block sec-1-bg-gradient-1-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute md:left-[1000px] 2xl:left-[1309px] -top-[709px]"
            />
            <span className="hidden md:block sec-1-bg-gradient-2-desktop md:w-[1120px] 2xl:w-[1420px] md:h-[1119px] 2xl:h-[1419px] absolute left-[105px] top-[672px] md:top-[500px] 2xl:top-[672px]" />
        
            <span className="md:hidden sec-1-bg-gradient-1-mobile absolute w-[212px] h-[211px] left-[285px] -top-[25px]" />
            <span className="md:hidden sec-1-bg-gradient-2-mobile absolute w-[636px] h-[635px] -left-[334px] top-[672px]" />
            
            <Wrapper>
               
                <motion.div
                    className="hidden md:flex items-center justify-between mt-[40px] 2xl:mt-[63px] relative"
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                    <div className="flex items-center gap-[6px]">
                        <div className="w-[35px] h-[35px] rounded-full bg-[#252525] flex justify-center items-center">
                            <img src={gmailIcon} alt="" className="w-[18px]" />
                        </div>
                        <div>kacperlewicki.js@gmail.com</div>
                    </div>
                    <ul className="flex 2xl:text-[20px]">
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("about")}
                        >
                            About me
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("work")}
                        >
                            Projects
                        </li>
                        <li
                            className="cursor-pointer px-5 py-2 hover:bg-slate-900 transition active:scale-90 rounded-lg"
                            onClick={() => scrollTo("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                </motion.div>
               
                <motion.div
                    className="flex justify-center text-center mt-14 mb-10 relative"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-[50px] md:text-[120px] 2xl:text-[189px] leading-[50px] md:leading-[125px]  2xl:leading-[192px] font-oswald uppercase">
                        I Am Power Platform Developer 
                       
                    </h1>
                </motion.div>
                
                <motion.div
                    className="flex flex-col mb-10 text-center md:text-left text-[16px] md:text-[20px] leading-[24px] md:leading-[30px] relative"
                    initial={{ y: 200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
>
                <div className="font-light mb-6 flex items-center justify-center md:justify-start">
                    👋 Hi, I Am {" "}
                        <span className="font-semibold ml-2 flex items-center">
                             Kacper Lewicki <img className="w-16 ml-2" src={man} alt=""></img>
                        </span>
        
                </div>
                <div className="max-w-[610px]">
                    I've been programming in JavaScript for a long time. 
                    I am constantly enriching my knowledge 
                    not only through courses, but also by creating my own 
                    applications and websites.
                </div>
   
                </motion.div>

                 
                <motion.div
                    className="hidden md:flex gap-8 relative z-10"
                    initial={{ y: 300, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                >
                
                </motion.div>

               
            </Wrapper>
        </div>
    );
};

export default HeroBanner;
