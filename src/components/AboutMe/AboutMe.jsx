import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Wrapper from "../../common/Wrapper";

import pe1 from "../../assets/sec-2-p-e-1.png";
import pe2 from "../../assets/sec-2-p-e-2.png";
import Div from "../../common/Div";

const AboutMe = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [100, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 500], [0, -200], { clamp: false });
    return (
        <div
            id="about"
            className="w-full py-[50px] md:py-[100px] bg-blue text-white relative overflow-hidden"
        >
            
            <span className="sec-2-bg-gradient" />
            <motion.img className="sec-2-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-2-p-e-2" style={{ y: y2 }} src={pe2} />
            

            <Wrapper>
                
                <Div className="text-[40px] md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>About me</span>
                    <span className="flex items-center gap-2">
                        
                    </span>
                </Div>
               

               
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I studied mechatronics at the University of Technology and Life Sciences in Bydgoszcz. 
                I became interested in IT thanks to my Python programming classes.
                </Div>

                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] mb-[20px] md:mb-[30px] 2xl:mb-[50px] relative">
                I liked it and wanted to develop further in this direction. That led me to JavaScript. I started creating websites in this language. 
                Once I got the hang of it, it was time to master REACT, and later Node.js, TypeScript and many other frameworks.
                <br />
                </Div>
                
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                Many of the applications I create also include a backend part. 
                I use there knowledge of databases such as MongoDB or MySQL.
                Some of my projects are available on github, which I cordially invite you to visit.
                </Div>

                <Div className="text-[40px] mt-16 md:text-[90px] 2xl:text-[120px] leading-[52px] md:leading-[95px] 2xl:leading-[123px] font-oswald uppercase mb-[25px] md:mb-[40px] 2xl:mb-[60px] flex flex-col relative">
                    <span>Experience</span>
                    <span className="flex items-center gap-2">
                        
                    </span>
                </Div>
                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                As a Power Platform Developer, I specialize in designing and implementing advanced solutions for business applications. 
                My work primarily focuses on writing scripts in JavaScript and TypeScript, which are crucial for the functionality and efficiency 
                of applications built on Power Apps and Power Automate. 
                
                <br />
                </Div>

                <br />

                <Div className="max-w-[759px] 2xl:max-w-[959px] text-[16px] 2xl:text-[20px] leading-[24px] 2xl:leading-[32px] relative">
                My responsibilities include managing processes using Azure DevOps, ensuring effective version control and continuity in project development. 
                I am responsible for creating workflow processes (flows) and designing interactive tables and forms, enhancing business processes and user experiences. 
                My role requires not only technical skills but also a creative approach to problem-solving and the ability to 
                work in a dynamic environment, translating into delivering efficient and innovative solutions for the business.
                </Div>

                
            </Wrapper>
        </div>
    );
};

export default AboutMe;
