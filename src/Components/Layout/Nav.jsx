import React, {useState} from "react";
import {useAnimation, motion} from "framer-motion";
import {Link} from "react-router-dom";

const Nav = () => {
   const [Active, setActive] = useState(false);

   const links = [{name: "Home"}, {name: "About"}, {name: "Work"}, {name: "Contact"}];
   return (
      <div className="z-50">
         <motion.button
            className="fixed right-5 pt-2 text-3xl text-white font-semibold"
            onClick={() => setActive(true)}
            initial={{opacity: 0}}
            transition={{duration: 0.4}}
            animate={{opacity: 1}}
         >
            menu
         </motion.button>
         <div
            className={`absolute  top-0 bottom-0 right-0 left-0 grid grid-cols-1 lg:grid-cols-2 bg-black nav ${
               Active ? "translate-x-0 opacity-100 max-h-[100vh] overflow-y-hidden " : "translate-x-[100rem] opacity-0"
            } `}
            style={{border: "1px solid green"}}
         >
            <button onClick={() => setActive(false)} className="text-3xl text-white  lg:text-black float-right font-semibold fixed right-4  pt-2">
               close
            </button>

            <div className=" flex flex-col justify-center h-[100vh] gap-6 pl-10 lg:pl-14">
               {links.map((link) => {
                  return (
                     <div key={link.name} className="h-28 text-white flex flex-col justify-center overflow-hidden">
                        <motion.h1 initial={{y: 70, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1.4}}>
                           <Link className="font-bold text-7xl">{link.name}</Link>
                        </motion.h1>
                     </div>
                  );
               })}
            </div>
            <div className="bg-white text-black hidden lg:block pr-14">
               <div className="mt-36 float-right flex flex-col items-end font">
                  <div className="overflow-y-hidden h-6 flex flex-col justify-center">
                     <motion.p className="text-sm font-medium " initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1.4, delay: 0.5}}>
                        +234 9034879783
                     </motion.p>
                  </div>
                  <div className="overflow-y-hidden h-6 flex flex-col justify-center">
                     <motion.p className="text-sm font-medium" initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1.4, delay: 0.5}}>
                        wprosper92@gmail.com
                     </motion.p>
                  </div>
                  <div className="overflow-y-hidden h-6 flex flex-col justify-center">
                     <motion.p
                        className="text-xs font-medium text-gray-500"
                        initial={{y: 15, opacity: 0}}
                        whileInView={{y: 0, opacity: 1}}
                        transition={{duration: 1.4, delay: 0.5}}
                     >
                        if in doubt, Reach out!
                     </motion.p>
                  </div>
               </div>

               <br />
               <div className="mt-[14rem] float-left ml-14 flex flex-col items-start w-full text-gray-900">
                  <div className="overflow-y-hidden h-20 flex flex-col justify-center">
                     <motion.p className="font-bold text-5xl " initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 1.4}}>
                        Instagram
                     </motion.p>
                  </div>
                  <div className="overflow-y-hidden first-line:h-20 flex flex-col justify-center">
                     <motion.p className="font-bold text-5xl" initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 1.4}}>
                        IinkedIn
                     </motion.p>
                  </div>
                  <div className="overflow-y-hidden h-20 flex flex-col justify-center">
                     <motion.p className="font-bold text-5xl" initial={{y: 15, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{delay: 0.5, duration: 1.4}}>
                        Twitter
                     </motion.p>
                  </div>
               </div>

               <p className="absolute bottom-0 text-[75%] font right-14">Prosper Williams 2024 </p>
            </div>
         </div>
      </div>
   );
};

export default Nav;
{
   /* <div> */
}
{
   /* <button onClick={handleToggle}>Toggle Animation</button>
            <motion.div
               animate={controls}
               initial="collapsed"
               variants={{
                  expanded: {height: "200px", opacity: 1},
                  collapsed: {height: "0px", opacity: 0},
               }}
               transition={{duration: 0.5}}
            >
               <p>This content animates!</p>
            </motion.div> */
}
{
   /* </div> */
}
