"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, viewportOptions } from "@/utils/animations";

const About = () => {
  return (
    <div id="about" className="relative mt-10 pt-16 min-h-[800px]">
      <section className="relative py-20">
        <div className="container px-4 mx-auto">
          <div className="relative flex flex-wrap items-center -mx-4">
            <motion.div
              className="relative w-full lg:w-1/2 px-4 pb-12 lg:pb-0"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={slideInLeft}
            >
              <div className="w-auto">
                <h2 className="mb-10 lg:mb-16 text-4xl font-semibold font-heading">
                  Put yourself in the right hands
                </h2>
                <div className="flex items-start max-lg:w-full mb-10">
                  <div className="mt-2 mr-4">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                  </div>
                  <div className="max-lg:w-full">
                    <h3 className="mb-6 text-2xl font-semibold font-heading">
                      500+ trusting clients
                    </h3>
                    <p className="text-xl text-gray-500">
                      For over a decade, we've been providing comprehensive
                      legal services across various practice areas, building a
                      solid reputation for excellence and reliability. Strong
                      track record demonstrates commitment to client success.
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-10">
                  <div className="mt-2 mr-4">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                  </div>
                  <div className="max-lg:w-full">
                    <h3 className="mb-6 text-2xl font-semibold font-heading">
                      30+ lawyers and attorneys
                    </h3>
                    <p className="text-xl text-gray-500">
                      Our team of legal experts is equipped with multi-lingual
                      capabilities and diverse expertise. Each attorney brings a
                      wealth of experience and specialized knowledge to address
                      complex legal challenges effectively
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="mt-2 mr-4">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5.67 0H14.34C17.73 0 20 2.38 20 5.92V14.091C20 17.62 17.73 20 14.34 20H5.67C2.28 20 0 17.62 0 14.091V5.92C0 2.38 2.28 0 5.67 0ZM9.43 12.99L14.18 8.24C14.52 7.9 14.52 7.35 14.18 7C13.84 6.66 13.28 6.66 12.94 7L8.81 11.13L7.06 9.38C6.72 9.04 6.16 9.04 5.82 9.38C5.48 9.72 5.48 10.27 5.82 10.62L8.2 12.99C8.37 13.16 8.59 13.24 8.81 13.24C9.04 13.24 9.26 13.16 9.43 12.99Z"
                        fill="#45C1FF"
                      />
                    </svg>
                  </div>
                  <div className="max-lg:w-full">
                    <h3 className="mb-6 text-2xl font-semibold font-heading">
                      A reliable partner at a good price
                    </h3>
                    <p className="text-xl text-gray-500">
                      We know legal costs matter. Our seasoned team provides
                      tailored, budget-friendly solutions. We'll meet your
                      unique needs without emptying your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full lg:w-1/2 px-4"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={slideInRight}
            >
              <img
                className="w-full h-96 lg:h-128 mx-auto mb-6 md:mb-0 rounded-xl object-cover"
                src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/giammarco-zeH-ljawHtg-unsplash-2.jpg"
                alt="About us"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
