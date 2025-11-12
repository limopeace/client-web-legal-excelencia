"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Caption from "@/assets/caption.png";
import whiteCaption from "@/assets/caption-white.png";
import logo from "@/assets/logo.png";
import { scaleIn, fadeInUp, fastStagger, buttonTap } from "@/utils/animations";
import "./styles.css";

const HeroSection = () => {
  return (
    <div className=" bg-white pt-10 lg:pb-16 max-md:px-8">
      <motion.div
        id="hero"
        className="flex flex-col items-center mt-6 lg:mt-10 gap-5"
        initial="hidden"
        animate="visible"
        variants={fastStagger}
      >
        <motion.div
          className="inline-block items-center rounded-md"
          variants={scaleIn}
        >
          <Image
            className="h-32 w-auto rounded-md"
            src={logo as unknown as string}
            alt={"caption"}
          />
        </motion.div>
        <motion.div
          className="inline-block items-center rounded-md border-[1px] border-blue-950"
          variants={scaleIn}
        >
          <Image
            className="h-16 w-auto rounded-md"
            src={whiteCaption as unknown as string}
            alt={"caption"}
          />
        </motion.div>
        <motion.h1
          className="custom-font text-4xl lg:text-7xl text-center tracking-wide text-[#1f3864] flex flex-col gap-2"
          variants={fadeInUp}
        >
          LEGAL EXCELENCIA <br />{" "}
          <span className="text-[#2f5496] lg:text-5xl">
            Allied for Excellence.
          </span>
        </motion.h1>
        <motion.p
          className="mt-10 text-lg text-center text-neutral-500 max-w-4xl"
          variants={fadeInUp}
        >
          Full-service corporate/commercial law firm with offices in Chandigarh,
          Delhi, Mumbai, and Kolkata.
          <br /> 30+ skilled lawyers provide multi-jurisdictional expertise
          across various practice areas.
          <br />
          <span className="bg-clip-text font-semibold">
            Committed to professionalism, credibility, and exceptional client
            care for individuals and corporations.
          </span>
        </motion.p>
        <motion.div
          className="flex max-md:flex-col max-md:w-full justify-center items-start my-10"
          variants={fadeInUp}
        >
          <motion.a
            className="flex w-full md:w-auto mb-2 md:mb-0 py-4 px-8 mr-4 text-sm font-medium leading-normal bg-red-500 hover:bg-red-300 text-white rounded transition duration-200 max-md:justify-center"
            href="#info"
            whileTap={buttonTap}
            whileHover={{ scale: 1.02 }}
          >
            Contact us
          </motion.a>
          <motion.a
            className="flex w-full md:w-auto py-4 px-8 mr-4 text-sm font-medium leading-normal border border-gray-300 hover:border-gray-400 rounded transition duration-200 max-md:justify-center"
            href="#about"
            whileTap={buttonTap}
            whileHover={{ scale: 1.02 }}
          >
            Learn more
          </motion.a>
        </motion.div>
      </motion.div>

      <div className="hidden lg:mt-28 lg:h-[200px] lg:flex lg:gap-10 lg:justify-center">
        {/* {testimonials.map((user, index) => (
          <div className="h-auto flex" key={index}>
            <Image
              className={`${
                index % 2 === 0 ? "h-44 w-32" : "h-32 w-24"
              } rounded-2xl`}
              src={user.image as StaticImageData}
              alt={user.company}
            />
          </div>
        ))} */}

        <div className="hidden md:flex absolute inset-x-0 mt-24 ">
          <motion.div
            className="flex p-4"
            initial="hidden"
            animate="visible"
            variants={fastStagger}
          >
            <motion.div className="w-4/5 px-4" variants={fadeInUp}>
              <img
                className="h-52 rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1752&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="heropics"
              />
            </motion.div>
            <motion.div className="w-3/5 px-4" variants={fadeInUp}>
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwbGF3fGVufDB8fDB8fHwy"
                alt="heropics"
              />
            </motion.div>
            <motion.div className="px-4 mt-12 w-80" variants={fadeInUp}>
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1555374018-13a8994ab246?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y3JpbWluYWwlMjBsYXd8ZW58MHx8MHx8fDI%3D"
                alt="heropics"
              />
            </motion.div>
            <motion.div className="w-1/5 flex-shrink-0 px-4" variants={fadeInUp}>
              <img
                className="h-64 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvcnBvcmF0ZSUyMGxhd3xlbnwwfHwwfHx8Mg%3D%3D"
                alt="heropics"
              />
            </motion.div>
            <motion.div className="w-3/5 px-4 mt-12" variants={fadeInUp}>
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29ycG9yYXRlJTIwbGF3fGVufDB8fDB8fHwy"
                alt="heropics"
              />
            </motion.div>
            <motion.div className="w-3/5 px-4" variants={fadeInUp}>
              <img
                className="h-40 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1601041084273-6114cad589d5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bGF3JTIwZmlybXxlbnwwfHwwfHx8Mg%3D%3D"
                alt="heropics"
              />
            </motion.div>
            <motion.div className="w-3/5 px-4" variants={fadeInUp}>
              <img
                className="h-52 w-full rounded-lg object-cover"
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvcHlyaWdodCUyMGxhd3xlbnwwfHwwfHx8MA%3D%3D"
                alt="heropics"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
