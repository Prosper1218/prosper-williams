import React from "react";
import ReachOut from "../../../Components/ReachOut";
import {motion} from "framer-motion";
const Contact = () => {
   return (
      <motion.div className="bg-black overflow-y-hidden overflow-x-hidden max-h-[100vh]" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}}>
         {" "}
         <ReachOut h={"h-[100vh] "} bg={"bg-[#0B1215]"} Tcolor={"text-white"} pt={"pt-[10rem]"} />
         <p className="absolute bottom-4 text-[75%] text-[#cccccc] font right-14">Prosper Williams 2024 </p>
      </motion.div>
   );
};

export default Contact;
