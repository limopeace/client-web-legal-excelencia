"use client";

import { motion } from "framer-motion";
import { teamMembers } from "@/constants";
import {
  fadeInUp,
  staggerContainer,
  cardItem,
  viewportOptions,
} from "@/utils/animations";

const Team = () => {
  return (
    <div id="team" className="flex flex-col mx-auto px-auto mt-10">
      <motion.div
        className="flex flex-col justify-center items-center mt-16 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={fadeInUp}
      >
        <h1 className="text-6xl">Meet our team</h1>
        <p className="text-slate-500 text-2xl lg:w-3/4">
          At LEGAL EXCELENCIA, our dynamic team combines seasoned expertise with
          fresh perspectives to deliver innovative, globally-informed legal
          solutions.
        </p>
      </motion.div>
      <motion.div
        className="flex flex-wrap gap-8 justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={staggerContainer}
      >
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            className="flex flex-col gap-2 mt-6 justify-center items-center p-4 border-2 rounded-xl hover:shadow-lg transition-shadow duration-200"
            variants={cardItem}
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
          >
            {/* <Image
              src={member.image}
              alt={member.name}
              className="w-full mx-auto md:h-96 h-60 rounded-xl object-cover"
            /> */}
            <h2 className="text-2xl text-blue-900">{member.name}</h2>
            <div className="flex flex-col h-auto w-80 m-auto">
              <p className="text-slate-500">{member.role}</p>
            </div>
            {/* <div className="mt-8 flex flex-wrap justify-center gap-6 text-slate-400">
              <a href={`${member.linkedin_id}`} target="_blank">
                {member.linkedin}
              </a>
              <a href={`${member.mail_id}`} target="_blank">
                {member.email}
              </a>
            </div> */}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Team;
