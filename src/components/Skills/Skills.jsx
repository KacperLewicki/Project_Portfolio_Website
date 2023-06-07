import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Wrapper from "../../common/Wrapper";
import SkillIcon from "../Skills/SkillIcon";
import Service from "./Service";
import Portfolio from "./Portfolio";
import Achievements from "../Achievements/Achievements";
import Div from "../../common/Div";

// IMAGES
import sk1 from "../../assets/sk-1.png";
import sk2 from "../../assets/sk-2.png";
import sk3 from "../../assets/sk-3.png";
import sk4 from "../../assets/sk-4.png";
import sk5 from "../../assets/sk-5.png";
import sk6 from "../../assets/sk-6.png";
import sk7 from "../../assets/sk-7.png";

import pe1 from "../../assets/sec-3-p-e-1.png";
import pe2 from "../../assets/sec-3-p-e-2.png";
import pe3 from "../../assets/sec-3-p-e-3.png";

/*<a href="https://www.flaticon.com/free-icons/node-js" title="node js icons">Node js icons created by Freepik - Flaticon</a>*/
/*<a href="https://www.flaticon.com/free-icons/typescript" title="typescript icons">Typescript icons created by Freepik - Flaticon</a>*/
/* <a href="https://www.flaticon.com/free-icons/database" title="database icons">Database icons created by Freepik - Flaticon</a>*/

const Skills = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 1500], [1000, 0], { clamp: false });
    const y2 = useTransform(scrollY, [0, 2200], [1500, 0], { clamp: false });
    const y3 = useTransform(scrollY, [0, 2700], [2000, 0], { clamp: false });
    return (
        <div
            id="skills"
            className="blue py-[50px] md:py-[100px] relative overflow-hidden"
        >
            
            <div className="sec-3-bg-gradient-1" />
            <div className="sec-3-bg-gradient-2" />
            <motion.img className="sec-3-p-e-1" style={{ y: y1 }} src={pe1} />
            <motion.img className="sec-3-p-e-2" style={{ y: y2 }} src={pe2} />
            <motion.img className="sec-3-p-e-3" style={{ y: y3 }} src={pe3} />
           
            <Wrapper>
               
                <Div className="grid grid-cols-4 gap-3 md:grid-cols-11 relative">
                    <SkillIcon path={sk1} />
                    <SkillIcon path={sk2} />
                    <SkillIcon path={sk3} />
                    <SkillIcon path={sk4} />
                    <SkillIcon path={sk5} />
                    <SkillIcon path={sk6} />
                    <SkillIcon path={sk7} />
                </Div>
                

              
                <div className="flex items-end justify-between flex-wrap-reverse py-[50px] md:py-[100px] relative">
                    
                    <div className="md:max-w-[65%] flex flex-col gap-6 md:gap-10">
                        <Service
                            num="1"
                            title="CMS-app-in-express-mongodb"
                            desc="The webpage for storing data and quizzes is based on PUGjs templates, 
                            which are used to create frontend layout on backend side with usage of express.js and MongoDB."
                            data={[
                                "Javascript",
                                "Express.js",
                                "MongoDB",
                                
                            ]}
                        />
                        <Service
                            num="2"
                            title="Registration form and login on the website"
                            desc="One of my projects is a login page that communicates via API. 
                            On Backend, a logic validating the input data with usage of MySQL, express.js and cors is implemented. 
                            If correct data is provided, you are redirected to a home page of a project."
                            data={[
                                "Javascript",
                                "React",
                                "Express.js",
                                "MySQL",
                                "Bootstrap",
                                "Cors",
                                "Axios",
                                
                            ]}
                        />
                        <Service
                            num="3"
                            title="Diamonds-game"
                            desc="The Diamonds game project is about moving rows and columns of diamonds. 
                            If you connect enough of one kind of them, they will disappear and you will get points. Empty fields will refill."
                            data={[
                                "Javascript",
                                "OOP"
                                
                            ]}
                        />
                        
                    </div>
                   

                  
                    <div className="flex flex-wrap justify-center gap-2 md:gap-0 md:flex-col text-[40px] md:text-[90px] 
                    2xl:text-[110px] 
                    leading-[40px] md:leading-[95px] 2xl:leading-[123px] 
                    font-oswald uppercase text-gradient mb-10 md:mb-0 md:sticky top-2">
                        <span>My Skills</span>
                        <span>and</span>
                        <span className="flex items-center gap-2">
                            Projects
                         
                        </span>
                
                       
                    </div>
                   
                </div>
                

                <Portfolio />
                <Achievements />
            </Wrapper>
        </div>
    );
};

export default Skills;
