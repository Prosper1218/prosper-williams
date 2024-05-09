import React from "react";
import "../App.css";
const ReachOut = ({bg, h, Tcolor, pt}) => {
   return (
      <div>
         <div className={`min-h-[80vh] ${h} ${bg} ${Tcolor} ${pt} border `}>
            <section className="animation h-auto font-extrabold border">
               <div className="first  flex flex-col justify-center h-full">
                  <h3 className="text-2xl cinzel font-bold px-4 sm:px-20 py-1">have a question?</h3>
               </div>
               <div className="second  flex flex-col justify-center h-full">
                  <h3 className="text-2xl cinzel font-bold px-4 sm:px-20 py-1">keen to collaborate?</h3>
               </div>
               <div className="third  flex flex-col justify-center h-full">
                  <h3 className="text-2xl cinzel font-bold px-4 sm:px-20 py-1 ">curious about costing?</h3>
               </div>
               <div className="third  flex flex-col justify-center h-full">
                  <h3 className="text-2xl cinzel font-bold px-4 sm:px-20 py-1 ">feel like chatting?</h3>
               </div>
               <div className="third  flex flex-col justify-center h-full">
                  <h3 className="text-2xl cinzel font-bold px-4 sm:px-20 py-1 ">want some advice?</h3>
               </div>
               <div className="third  flex flex-col justify-center h-full">
                  <h3 className="text-2xl cinzel font-bold px-4 sm:px-20 py-1 ">project in mind?</h3>
               </div>
            </section>

            <div className="h-full mt-4 flex flex-col justify-center">
               <p className="sora capitalize px-4 sm:px-16 text-[1.5rem] ">just say</p>
               <a
                  className="text-[1.8rem] sm:text-[2.5rem]  md:text-[3rem] lg:text-[4.5rem] xl:text-[5.8rem] 2xl:text-[7rem] cursor-pointer  font-extrabold text-left px-4 sm:px-20 "
                  href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWsLPtkMkPrTWjrggBBtMMjbSZRfQbcpzmXQnNbGRtthpKCTjJFjcxgtpTBhmtXSPTCRzGzqg"
                  target="blank"

               >
                  hello@<span className="text-gray-300 lilita">wprosper92@gmail.com</span>
               </a>
            </div>
         </div>
      </div>
   );
};

export default ReachOut;
