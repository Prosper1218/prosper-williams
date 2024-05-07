import React from "react";
import {motion} from "framer-motion";
import "../../../App.css";
const About = () => {
   return (
      <div>
         <div className="bg-[#AA0000] min-h-[100vh] h-[100vh] flex justify-center flex-col ">
            <motion.section
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 1.5, delay: 0.5}}
               viewport={{}}
               className="sora text-[400%] sm:text-[800%] font-extrabold text-[#cccccc] text-center hel h-auto flex justify-center flex-row gap-0 items-center"
            >
               <motion.div initial={{x: -100, opacity: 0}} whileInView={{opacity: 1, x: 0}} transition={{duration: 1.5, delay: 0.5}} className="">
                  HEL
               </motion.div>
               <motion.div initial={{x: 100, opacity: 0}} whileInView={{x: 0, opacity: 1}} transition={{duration: 1.5, delay: 0.5}} className="">
                  LO!
               </motion.div>
            </motion.section>
         </div>
         <div className="min-h-[100vh] h-[100vh] bg-[#0B1215]"></div>
      </div>
   );
};

export default About;
