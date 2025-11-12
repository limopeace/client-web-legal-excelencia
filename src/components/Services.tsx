"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  staggerContainer,
  cardItem,
  viewportOptions,
} from "@/utils/animations";

const Services = () => {
  return (
    <div id="law-services" className="mt-4 pt-16">
      <motion.h2
        className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wide font-semibold"
        initial="hidden"
        whileInView="visible"
        viewport={viewportOptions}
        variants={fadeInUp}
      >
        Services
      </motion.h2>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="flex flex-wrap -mx-4"
            initial="hidden"
            whileInView="visible"
            viewport={viewportOptions}
            variants={staggerContainer}
          >
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="corporate-law"
                />
              </div>
              <div className="flex items-start">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={18}
                    height={21}
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.98457 19.606C8.98457 19.606 16.6566 17.283 16.6566 10.879C16.6566 4.474 16.9346 3.974 16.3196 3.358C15.7036 2.742 9.99057 0.75 8.98457 0.75C7.97857 0.75 2.26557 2.742 1.65057 3.358C1.03457 3.974 1.31257 4.474 1.31257 10.879C1.31257 17.283 8.98457 19.606 8.98457 19.606Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38599 9.87463L8.27799 11.7696L12.176 7.86963"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Corporate Law
                  </h3>
                  <p className="text-base text-gray-500">
                    We provide expert advice on M&As, joint ventures,
                    restructuring, and compliance. Our team helps businesses
                    navigate complex legal landscapes with ease.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661317236301-a68cbbc645de?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="corporate-law"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
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
                      d="M10 0.750122C15.108 0.750122 19.25 4.89112 19.25 10.0001C19.25 15.1081 15.108 19.2501 10 19.2501C4.891 19.2501 0.75 15.1081 0.75 10.0001C0.75 4.89112 4.891 0.750122 10 0.750122Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.99512 6.20422V10.6232"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.995 13.7961H10.005"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Litigation
                  </h3>
                  <p className="text-base text-gray-500">
                    Our skilled litigators handle a wide range of cases
                    including civil, criminal, competition, environmental,
                    consumer, family, tax, and labor disputes. We have a proven
                    track record of success in courts across India.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29ycG9yYXRlJTIwbGF3fGVufDB8fDB8fHwy"
                  alt="alternative-dispute-resolution"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={22}
                    height={18}
                    viewBox="0 0 22 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.8877 7.89673C18.2827 7.70073 19.3567 6.50473 19.3597 5.05573C19.3597 3.62773 18.3187 2.44373 16.9537 2.21973"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.7285 11.2502C20.0795 11.4522 21.0225 11.9252 21.0225 12.9002C21.0225 13.5712 20.5785 14.0072 19.8605 14.2812"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8867 11.6638C7.67273 11.6638 4.92773 12.1508 4.92773 14.0958C4.92773 16.0398 7.65573 16.5408 10.8867 16.5408C14.1007 16.5408 16.8447 16.0588 16.8447 14.1128C16.8447 12.1668 14.1177 11.6638 10.8867 11.6638Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.8869 8.88788C12.9959 8.88788 14.7059 7.17888 14.7059 5.06888C14.7059 2.95988 12.9959 1.24988 10.8869 1.24988C8.7779 1.24988 7.0679 2.95988 7.0679 5.06888C7.0599 7.17088 8.7569 8.88088 10.8589 8.88788H10.8869Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4.88484 7.89673C3.48884 7.70073 2.41584 6.50473 2.41284 5.05573C2.41284 3.62773 3.45384 2.44373 4.81884 2.21973"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.044 11.2502C1.693 11.4522 0.75 11.9252 0.75 12.9002C0.75 13.5712 1.194 14.0072 1.912 14.2812"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Alternative Dispute Resolution
                  </h3>
                  <p className="text-base text-gray-500">
                    {" "}
                    We offer top-tier arbitration and mediation services, with a
                    team of experienced legal professionals adept at finding
                    efficient, cost-effective solutions to disputes.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1521791055366-0d553872125f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvcnBvcmF0ZSUyMGxhd3xlbnwwfHwwfHx8Mg%3D%3D"
                  alt="trademark"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4235 7.4478V5.3008C13.4235 2.7878 11.3855 0.7498 8.87249 0.7498C6.35949 0.7388 4.31349 2.7668 4.30249 5.2808V5.3008V7.4478"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.6832 19.2496H5.04224C2.94824 19.2496 1.25024 17.5526 1.25024 15.4576V11.1686C1.25024 9.07359 2.94824 7.37659 5.04224 7.37659H12.6832C14.7772 7.37659 16.4752 9.07359 16.4752 11.1686V15.4576C16.4752 17.5526 14.7772 19.2496 12.6832 19.2496Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.86304 12.2028V14.4238"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Trademarks
                  </h3>
                  <p className="text-base text-gray-500">
                    Our trademark experts safeguard your brand globally. We'll
                    guide you through India's Madrid Protocol benefits, handling
                    everything from registration to disputes. With coverage at
                    all five Indian Trademark Offices, we've got your brand
                    protection covered coast to coast.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://plus.unsplash.com/premium_photo-1661328067451-6f323f1ed5d7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="copyright"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={22}
                    height={20}
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.9026 6.8512L12.4593 10.4642C11.6198 11.1302 10.4387 11.1302 9.59919 10.4642L5.11841 6.8512"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.9089 19C18.9502 19.0084 21 16.5095 21 13.4384V6.57001C21 3.49883 18.9502 1 15.9089 1H6.09114C3.04979 1 1 3.49883 1 6.57001V13.4384C1 16.5095 3.04979 19.0084 6.09114 19H15.9089Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Copyrights
                  </h3>
                  <p className="text-base text-gray-500">
                    Our copyright wizards serve diverse industries, from tech to
                    entertainment. We'll handle everything from registrations to
                    disputes, with expert teams for arts, media, and e-commerce.
                    Let us navigate the complex world of copyright, so you can
                    focus on creating.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://plus.unsplash.com/premium_photo-1681823229808-5b83bbc6a922?q=80&w=1848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="patents"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={18}
                    height={21}
                    viewBox="0 0 18 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.98457 19.606C8.98457 19.606 16.6566 17.283 16.6566 10.879C16.6566 4.474 16.9346 3.974 16.3196 3.358C15.7036 2.742 9.99057 0.75 8.98457 0.75C7.97857 0.75 2.26557 2.742 1.65057 3.358C1.03457 3.974 1.31257 4.474 1.31257 10.879C1.31257 17.283 8.98457 19.606 8.98457 19.606Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6.38599 9.87463L8.27799 11.7696L12.176 7.86963"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Patents
                  </h3>
                  <p className="text-base text-gray-500">
                    {" "}
                    From idea to protection, we're your patent partners. We'll
                    help you secure rights for your inventions, guiding you
                    through the maze of patent law. For 20 years, we'll
                    safeguard your innovation, letting you focus on what you do
                    best - inventing the future.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://plus.unsplash.com/premium_photo-1698084059560-9a53de7b816b?q=80&w=2011&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="industrial-designs"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={18}
                    height={20}
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.4235 7.4478V5.3008C13.4235 2.7878 11.3855 0.7498 8.87249 0.7498C6.35949 0.7388 4.31349 2.7668 4.30249 5.2808V5.3008V7.4478"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M12.6832 19.2496H5.04224C2.94824 19.2496 1.25024 17.5526 1.25024 15.4576V11.1686C1.25024 9.07359 2.94824 7.37659 5.04224 7.37659H12.6832C14.7772 7.37659 16.4752 9.07359 16.4752 11.1686V15.4576C16.4752 17.5526 14.7772 19.2496 12.6832 19.2496Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8.86304 12.2028V14.4238"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Industrial Designs
                  </h3>
                  <p className="text-base text-gray-500">
                    {" "}
                    We protect your designs, from gadgets to jewelry. Our team
                    handles everything - prosecution, enforcement, and advice.
                    If someone copies your registered design, we'll fight for
                    you in court. Your creative work deserves strong protection.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 lg:w-1/3 px-4 mb-12 lg:mb-20"
              variants={cardItem}
            >
              <div className="hidden max-md:flex xl:flex h-52 w-96 mb-3 rounded-2xl">
                <img
                  className="h-52 w-full rounded-lg object-cover"
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGNvcHlyaWdodCUyMGxhd3xlbnwwfHwwfHx8MA%3D%3D"
                  alt="heropics"
                />
              </div>
              <div className="flex">
                <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 mr-6 border rounded-full text-gray-500">
                  <svg
                    width={24}
                    height={20}
                    viewBox="0 0 24 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M22.5 10.8055H1.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.6299 6.5951V5.0821C20.6299 3.0211 18.9589 1.3501 16.8969 1.3501H15.6919"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.37012 6.5951V5.0821C3.37012 3.0211 5.04112 1.3501 7.10312 1.3501H8.33912"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M20.6299 10.8046V14.8786C20.6299 16.9406 18.9589 18.6116 16.8969 18.6116H15.6919"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3.37012 10.8046V14.8786C3.37012 16.9406 5.04112 18.6116 7.10312 18.6116H8.33912"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="mb-4 text-2xl font-semibold font-heading">
                    Real Estate
                  </h3>
                  <p className="text-base text-gray-500">
                    From contract drafting to land title due diligence, we offer
                    comprehensive real estate legal services.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      <>
        <section className="relative py-20 overflow-hidden">
          <div className="absolute top-0 left-0 w-full inset-0 bg-blue-900 bg-opacity-50 z-10" />
          <img
            className="absolute top-0 left-0 w-full h-full object-cover"
            src="https://static.shuffle.dev/uploads/files/31/31993a7f1bea9fbb107ee5422dfe4ab6e063d82e/law-firm.jpg"
            alt="Law firm"
          />
          <div className="relative container px-4 mx-auto z-10">
            <motion.div
              className="max-w-md mx-auto lg:mx-0 p-8 bg-white rounded-lg"
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
              variants={fadeInUp}
            >
              <h3 className="mb-4 text-2xl font-semibold">
                The Law firm of the 21 century
              </h3>
              <p className="mb-6 text-gray-500 leading-loose">
                For over a decade, LEGAL EXCELENCIA has been at the forefront of
                legal innovation, helping clients navigate their legal
                obligations and simplify operations in an increasingly complex
                world. We leverage the latest technologies to ensure efficient
                handling of your matters, allowing you to focus on what matters
                most - your business growth. Our forward-thinking approach
                combines traditional legal expertise with modern solutions,
                making us the ideal partner for businesses of all sizes in the
                21st century. We understand that having a reliable and trusted
                legal partner is critical to your success in today's fast-paced
                world. With our help, you can confidently face legal challenges
                and seize new opportunities. Learn more about how we can propel
                your business forward.
              </p>
              <a
                className="text-red-500 font-medium underline hover:no-underline"
                href="#about"
              >
                Learn more
              </a>
            </motion.div>
          </div>
        </section>
      </>
    </div>
  );
};

export default Services;
