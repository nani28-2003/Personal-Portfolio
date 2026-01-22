import React from "react";
import { motion } from "motion/react";

const Scrolling = () => {
  return (
    <div className="relative w-full overflow-hidden bg-[#004D43] border-gray-700 rounded-xl">
      <div className="flex whitespace-nowrap text-white text-9xl py-10 gap-2 ">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className=" border-t-2 border-b-2 border-white"
        >
          CHARANDAS TALARI – FRONTEND DEVELOPER
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className=" border-t-2 border-b-2 border-white"
        >
          CHARANDAS TALARI – FRONTEND DEVELOPER
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            ease: "linear",
            duration: 10,
            repeat: Infinity,
          }}
          className=" border-t-2 border-b-2 border-white"
        >
          CHARANDAS TALARI – FRONTEND DEVELOPER
        </motion.div>
      </div>
    </div>
  );
};

export default Scrolling;
