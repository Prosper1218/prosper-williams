import React from "react";
import {motion} from "framer-motion";
import "../../../App.css";
import {useNavProvider} from "../../../Util/NavBarProvider";
import { useNavigate } from "react-router-dom";
const About = () => {
   const {Active} = useNavProvider();
   const navigate = useNavigate()
   return (
      <div className={` h-auto ${Active ? " overflow-y-hidden max-h-[100vh]" : ""}`} >
         <motion.div className="bg-[#AA0000] min-h-[100vh] h-[100vh] flex justify-center flex-col "  initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}}>
            <motion.section
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 1.5, delay: 0.5}}
               className="sora text-[400%] sm:text-[800%] font-extrabold text-[#cccccc] text-center hel h-auto flex justify-center flex-row gap-0 items-center"
            >
               <motion.div initial={{x: -100, opacity: 0}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.5, delay: 0.5}} viewport={{once: "true"}} className="">
                  HEL
               </motion.div>
               <motion.div initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.5, delay: 0.5}} viewport={{once: "true"}} className="">
                  LO!
               </motion.div>
            </motion.section>
         </motion.div>
         <div className="min-h-[100vh] h-[80vh] bg-[#0B1215] flex flex-col justify-center">
            <motion.h2
               className="sora text-center font-bold capitalize text-4xl md:text-[600%] mx-4 text-white"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
               viewport={{once: "true"}}
            >
               Let's get acquainted
            </motion.h2>
         </div>

         <div className="min-h-[100vh] h-auto bg-[#0B1215] flex flex-col justify-center">
            <motion.div
               className="sora text-center font-bold capitalize text-3xl sm:text-5xl mx-4 text-[#cccccc]"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
            >
               <h1 className=" leading-[3rem] sm:leading-[3.5rem]">
                  in 2023 I graduated as a frontend developer @Roothub <br />
                  where i laid the foundation of my career. <br />
                  Since then,I've been working remotely and I've had the privilege of contributing to several innovative projects across various companies, each experience
                  enriching my expertise. <br />
               </h1>
            </motion.div>
         </div>

         <div className="min-h-[100vh] h-auto bg-[#AA0000] flex flex-col justify-center">
            <motion.div
               className="sora text-center font-bold capitalize text-3xl sm:text-5xl mx-4 text-[#cccccc]"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
            >
               <h1 className=" leading-[3rem] sm:leading-[3.5rem]">
                  In my quest for excellence, I didn't stop at development alone—I delved into the world of, Website content writing, Seo, and ui/ux design, mastering tools like
                  Figma to create captivating and user-friendly websites. <br />
               </h1>
            </motion.div>
         </div>

         <div className="min-h-[100vh] h-auto bg-[#0B1215] flex flex-col justify-center">
            <motion.div
               className="sora text-center font-bold capitalize text-3xl sm:text-5xl mx-4 text-[#cccccc]"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
            >
               <h1 className=" leading-[3rem] sm:leading-[3.5rem]">
                  marked by challenges conquered and skills polished. I'm passionate about crafting seamless digital experiences that not only meet but exceed user expectations{" "}
               </h1>
            </motion.div>
         </div>
         <div className="min-h-[100vh] h-[100vh] bg-[#AA0000] flex flex-col justify-center">
            <motion.div
               className="sora text-center font-bold capitalize text-3xl sm:text-5xl mx-4 text-[#cccccc]"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
            >
               <h1 className=" leading-[3rem] sm:leading-[3.5rem]">
                  Let's collaborate and <br /> bring your ideas to life! <br />
               </h1>
            </motion.div>
            <br />
            <br />
            <br />
            <button className="sora capitalize text-2xl sm:text-3xl border-[#cccccc] border-4 border-solid font-bold text-white mx-auto w-[11rem] sm:w-[20rem] py-6" onClick={()=>{navigate("/Contact")}}>
               Contact Me
            </button>
         </div>
         {/* <div className="bg-black h-50vh">hi</div> */}
      </div>
   );
};

export default About;
