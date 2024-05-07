import React from "react";
import {motion} from "framer-motion";
const About = () => {
   return (
      <div>
         <div className="bg-[#AA0000] min-h-[100vh] h-[100vh] flex justify-center flex-col ">
            <motion.p
               initial={{opacity: 0}}
               animate={{opacity: 1}}
               transition={{duration: 1.5, delay: 0.5}}
               className="sora text-3xl sm:text-6xl font-extrabold text-[#cccccc] text-center"
            >
               HELLO!
            </motion.p>
         </div>
      </div>
   );
};

export default About;
