import {motion} from "framer-motion";
import React from "react";
import "../../../index.css";
import {services} from "../../../Data";

const Services = () => {
   return (
      <div className="bg-black min-h-[100vh]">
         <motion.div className="bg-[#AA0000] min-h-[100vh] h-[100vh] " initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}}>
            <motion.h2
               className="sora text-left font-bold capitalize text-2xl md:text-4xl text-white px-4 pt-[7rem] overflow-y-hidden"
               initial={{opacity: 0}}
               whileInView={{opacity: 1}}
               transition={{duration: 2.3}}
               viewport={{once: "true"}}
            >
               what i offer
            </motion.h2>
            <p className="sora text-[#0B1215] font-bold pl-5 ">
               I'm here to help you achieve your goals. <br />
               Whether you're seeking web development, design solutions, or strategic consulting. <br />
               You've come to the right place.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 mx-auto md:max-w-[80%] xl:max-w-[70%] items-start">
               {services.map((info) => {
                  return (
                     <div className="border px-4 py-8 rounded-[9px] bg-[#aa0000de]" key={info.id}>
                        {info.servi}
                     </div>
                  );
               })}
            </div>
         </motion.div>
      </div>
   );
};

export default Services;
