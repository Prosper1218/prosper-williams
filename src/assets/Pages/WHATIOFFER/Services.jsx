import {motion} from "framer-motion";
import React from "react";
import "../../../index.css";
import {services} from "../../../Data";

const Services = () => {
   return (
      <div className="bg-black min-h-[100vh]">
         <motion.div className="bg-[#AA0000] min-h-[100vh] h-[100vh] " initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}}>
            <motion.h2
               className="sora text-left font-bold capitalize text-2xl py-4 md:text-4xl text-white px-4 pt-[7rem] overflow-y-hidden"
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
            <div className="grid grid-cols-1 px-4 sm:grid-cols-3 gap-4 mt-12 mx-auto lg:max-w-[80%] xl:max-w-[70%] items-start">
               {services.map((info) => {
                  return (
                     <div
                        className=" px-4 py-8 rounded-[9px] bg-[#aa0000de] shadow-[0px_4px_30px_rgba(35,35,35,0.1),_0px_8px_30px_rgba(35,35,35,0.1),_0px_8px_30px_rgba(35,35,35,0.1)]"
                        key={info.id}
                     >
                        <h4 className="text-[#cccccc] sora text-xl font-bold capitalize"> {info.servi}</h4>
                        <h5 className="text-[#0B1215] font text-sm font-semibold capitalize">{info.Tech}</h5>
                        <p className="text-[#cccccc] text-xs sora">{info.talk}</p>
                     </div>
                  );
               })}
            </div>
         </motion.div>
      </div>
   );
};

export default Services;
