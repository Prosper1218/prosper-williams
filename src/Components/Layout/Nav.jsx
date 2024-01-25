import React, {useEffect, useState} from "react";
import {useAnimation, motion} from "framer-motion";
import {Link} from "react-router-dom";
import {useNavProvider} from "../../Util/NavBarProvider";

const Nav = () => {
   const {Active, setActive} = useNavProvider();
   const links = [{name: "Home"}, {name: "About"}, {name: "Work"}, {name: "Contact"}, {name: "Services"}];
   const [Scrolled1, setScrolled1] = useState(false);
   const [Scrolled2, setScrolled2] = useState(false);

   const handleclick = () => {
      setActive(true);
   };
   // console.log(window.innerHeight + "px")
   useEffect(() => {
      const handleScroll = () => {
         const scrollTop = window.scrollY;
         const shouldHaveBackground = scrollTop > 703;

         setScrolled1(shouldHaveBackground);
      };
      const handleScroll2 = () => {
         const scrollTop = window.scrollY;
         const shouldHaveBackground = scrollTop > 1406; // Adjust the scroll threshold as needed

         setScrolled2(shouldHaveBackground);
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("scroll", handleScroll2);
      // Clean up the event listener
      return () => {
         window.removeEventListener("scroll", handleScroll);
         window.removeEventListener("scroll", handleScroll2);
      };
   }, []);
   return (
      <div className={`z-40 ${Active ? "overflow-y-hidden" : "max-h-[100vh]"}`}>
         {/* <h1 className="hidden sm:block xl:hidden pl-5">Prosper Williams</h1> */}
         <div className="flex justify-end mr-34">
            <motion.button className=" rubik tracking-tighter fixed text-white text-3xl font-bold mr-4 mt-2" onClick={handleclick} initial={{opacity: 0}} transition={{duration: 0.4}} animate={{opacity: 1}}>
               menu
            </motion.button>
         </div>
         <div
            className={`absolute  top-0 bottom-0 right-0 left-0 grid grid-cols-1 md:grid-cols-2 bg-black nav ${
               Active ? "translate-x-0 opacity-100 h-[100vh] overflow-y-hidden" : "translate-x-[130rem] opacity-0 "
            } `}
         >
            <button onClick={() => setActive(false)} className="text-3xl text-white  md:text-black float-right font-semibold fixed right-4 rubik tracking-tighter  pt-2">
               close
            </button>
            <div className=" flex flex-col justify-center h-[100vh] gap-4 pl-10 lg:pl-14">
               {links.map((link) => {
                  return (
                     <div key={link.name} className="h-24 text-white flex flex-col justify-center overflow-hidden">
                        <motion.h1 initial={{y: 70, opacity: 0}} whileInView={{y: 0, opacity: 1}} transition={{duration: 1.4}}>
                           <Link className="font-bold text-5xl sm:text-7xl">{link.name}</Link>
                        </motion.h1>
                     </div>
                  );
               })}
            </div>
            <div className=" hidden md:block bg-white text-black pr-14">
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
               <div className=" mt-[12rem] xl:mt-[12rem] float-left ml-14 flex flex-col items-start w-full text-gray-900">
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

               <p className="absolute bottom-2 text-[75%] font right-14">Prosper Williams 2024 </p>
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

//  ${Scrolled1 ? "" : "text-white"} ${Scrolled2 ? "text-white" : ""}
