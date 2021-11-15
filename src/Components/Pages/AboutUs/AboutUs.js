import React from "react";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
const AboutUs = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16 bg-gray-50 mt-5">
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-indigo-500">
                <img
                  alt="..."
                  src="https://starmedspecialist.com/wp-content/uploads/2021/03/Why-Choose-StarMed-banner-01.png.webp"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-indigo-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    Why choose MDNHS Store?
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                    MDNHS Store specializes in the supply of high-end drones for
                    a variety of commercial, private, and recreational needs. A
                    leading DJI-authorized service center, we’re able to deliver
                    the highest quality drones at the highest quality service.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className=" flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-virus"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">COVID-19</h6>
                      <p className="mb-4 text-blueGray-500">
                        As we return to work, we worry about how vulnerable we
                        are to COVID-19.
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-bone"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Ultimate flying
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Whether you’re using them for recreation, to build an
                        aerial service business, or to integrate UAS into your
                        existing business or organization
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className=" flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-walking"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Freedom</h6>
                      <p className="mb-4 text-blueGray-500">
                        The onboard camera features a 1-inch 20MP CMOS sensor
                        and a mechanical shutter, eliminating rolling shutter
                        distortion. An advanced sensor
                      </p>
                    </div>
                  </div>
                  <div className=" flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-snowboarding"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Sports View
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        An enhanced video processing system allows videos to be
                        captured in Cinema 4K at 100 Mbps, enabling
                        high-resolution slow-motion shots. Record in D-Log mode
                        and H.265 codec to capture professional footage.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
