import React, {useState} from "react";
import {motion} from "framer-motion";
import {useNavProvider} from "../../../Util/NavBarProvider";
import {Link} from "react-router-dom";
import {Process} from "../../../Data.jsx";
import "../../../index.css";
import ReachOut from "../../../Components/ReachOut.jsx";

const Works = [
   {
      id: 1,
      name: "Dianne Rusell",
      to: "https://dianne.vercel.app/",
   },
   {
      id: 2,
      name: "Linkloom",
      to: "https://linkloom-zeta.vercel.app/",
   },

   {
      id: 3,
      name: "KryptHQ",
      to: "https://krypthqt.vercel.app",
   },
   {
      id: 4,
      name: "Country Rest Api",
      to: "https://country-rest-api-by-prosper.vercel.app/",
   },
];
const Home = () => {
   const {Active} = useNavProvider();

   return (
      <div className={`h-auto overflow-y-hidden ${Active ? " overflow-y-hidden max-h-[100vh]" : ""} overflow-x-hidden`}>
         <motion.div className="min-h-[100vh] h-[100vh] flex flex-col justify-end bg-[#AA0000]" initial={{opacity: 0}} animate={{opacity: 1}} transition={{duration: 3}}>
            <div className=" ">
               <motion.h2
                  className={`text-white text-4xl sm:text-6xl sora font-semibold sm:ml-20 tracking-tight block ml-8 z-20 h-56`}
                  initial={{y: 140, opacity: 0}}
                  animate={{y: 0, opacity: 1}}
                  transition={{duration: 1.5, delay: 0.5}}
               >
                  Strategic, <br />
                  Creative Solutions.
               </motion.h2>
            </div>
         </motion.div>

         <div className="min-h-[100vh] h-[100vh] bg-[#0B1215] text-white flex flex-col justify-center">
            <motion.h2
               className="sora text-center font-bold capitalize text-4xl md:text-7xl mx-4"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
            >
               truly great work <br />
               requires strategy.
            </motion.h2>
         </div>

         <div className="h-[100vh] bg-[#AA0000] flex flex-col justify-center text-white">
            <motion.h2
               className="sora text-center font-bold capitalize text-4xl md:text-7xl mx-4"
               initial={{opacity: 0, y: 100}}
               whileInView={{opacity: 1, y: 0}}
               transition={{duration: 2.3}}
            >
               let me help you stand out! <br />
               <p className=" rotate-90 "> :)</p>
            </motion.h2>
         </div>
         <div className="min-h-[100vh] h-auto bg-[#0B1215] text-white items-center pb-8 m-0">
            <h2 className="text-white text-2xl sm:text-[3.5rem] lg:text-[9rem] text-center cinzel extrabold  tracking-tighter px-4 leading-[11rem] ">The Process</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 px-4 items-start gap-8 md:px-10 lg:px-20">
               {Process.map((item) => {
                  return (
                     <motion.article key={item.id} className="" initial={{y: 80, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 2}} viewport={{once: "true"}}>
                        <p className="font-semibold p-2 text-[1.5rem] cinzel"> 0{item.id}</p>
                        <h2 className="py-2 font-bold cinzel text-[2rem] leading-7 ">
                           {item.title} <br /> {item.sub}
                        </h2>
                        <p className="font mb-[0.75rem] leading-[140%] font-medium block pp pr-6 md:pr-8 xl:pr-24 tracking-tight">{item.talk}</p>
                     </motion.article>
                  );
               })}
            </div>
         </div>
         <div className=" bg-[#0B1215] min-h-[100vh] h-[101vh] m-0" id="work">
            <h2 className="cinzel text-left pl-4 sm:pl-20 font-bold capitalize text-1xl text-white py-4 border-b-[1px] border-white border-solid">Some of my works</h2>
            <ul className="list-non flex flex-col justify-center h-[98vh] cinzel">
               {Works.map((work) => {
                  return (
                     <li
                        key={work.id}
                        className="text-white text-5xl sm:text-7xl border-b-[1px] border-b-white border-solid  pl-4 sm:pl-20 h-[22vh] tracking-tight  flex flex-col justify-center overflow-hidden"
                     >
                        <Link className=" hover:text-[3.2rem]  sm:hover:text-[4.6rem] font-bold transition-all" to={work.to} target="blank">
                           {work.name}
                        </Link>
                     </li>
                  );
               })}
            </ul>
         </div>

         {/*  */}
         <div className="">
            {" "}
            <ReachOut h={"h-[70vh]"} bg={"bg-white]"} Tcolor={"text-black"} />
         </div>
      </div>
   );
};

export default Home;
