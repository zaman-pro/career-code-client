import React from "react";
import { motion } from "motion/react";
import team1 from "../../assets/team/team-1.jpg";
import team2 from "../../assets/team/team-2.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={team2}
            animate={{ y: [100, 150, 100] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="max-w-sm shadow-2xl border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px]"
          />
          <motion.img
            src={team1}
            animate={{ x: [100, 150, 100] }}
            transition={{ duration: 10, delay: 5, repeat: Infinity }}
            className="max-w-sm shadow-2xl border-s-8 border-b-8 border-blue-500 rounded-t-[40px] rounded-br-[40px]"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Remote{" "}
            <motion.span
              animate={{
                color: ["#ff5733", "#9a33ff", "#ff33d5"],
                transition: { duration: 4, repeat: Infinity },
              }}
            >
              Jobs
            </motion.span>{" "}
            For you!
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
