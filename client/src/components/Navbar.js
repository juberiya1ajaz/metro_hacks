import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { isAuthenticated, login, logout } from "../utils/auth";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [auth, setAuth] = React.useState(isAuthenticated());
  console.log(auth);

  const handleAuth = async (accessLevel, isLogin) => {
    isLogin ? login(accessLevel) : logout();
    setAuth(isAuthenticated());
  };

  return (
    <div>
      <nav className="flex items-center py-2 flex-wrap px-4 text-fontColor tracking-wider">
        <Link to="/">
          <span className="p-2 mr-4 inline-flex items-center text-4xl md:text-5xl cursor-pointer font-base text-white">
            Lung'Sclinic
          </span>
        </Link>
        <button
          className="lg:hidden right-0 absolute md:px-8 px-6 mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowNavbar(true)}
          aria-hidden="false"
          aria-label="button"
        >
          <HiOutlineMenuAlt3 className="h-7 w-7" aria-hidden="false" />
        </button>
        {showNavbar ? (
          <div>
            <div className=" flex overflow-x-hidden mx-4 md:mx-8 h-screen overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none md:hidden">
              <div className="relative my-6 mx-auto w-screen">
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-secondary outline-none focus:outline-none">
                  <div className="flex items-start justify-between p-5 border-solid rounded-t">
                    <Link
                      activeClass="active"
                      to="about"
                      spy={true}
                      smooth={true}
                      offset={-150}
                      duration={250}
                    >
                      <div className="text-2xl font-base tracking-wide cursor-pointer">
                        Lung'Sclinic
                      </div>
                    </Link>

                    <button
                      className="absolute right-6"
                      onClick={() => setShowNavbar(false)}
                      aria-hidden="false"
                      aria-label="button"
                    >
                      <HiX className="h-7 w-7" aria-hidden="false" />
                    </button>
                  </div>

                  <div className="grid justify-center">
                    <div className="inline-flex w-64 h-1 bg-indigo-500 rounded-full"></div>
                  </div>

                  <div className="grid place-items-center text-xl py-2 gap-2 w-full mb-4">
                    <Link to="/">
                      <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">
                        Home
                      </span>
                    </Link>

                    <Link to="/lungCancerPrediction">
                      <span className="lg:inline-flex px-3 mx-3 py-2 rounded items-center justify-center dark:hover:bg-navHover hover:bg-secondary cursor-pointer text-white">
                        Lung Cancer Prediction
                      </span>
                    </Link>

                    <button
                      className="bg-blue-600 text-white py-2 px-8 rounded-md ml-2"
                      onClick={() => handleAuth(4, false)}
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="opacity-25 fixed inset-0 z-40 h-screen bg-black md:hidden"></div>
          </div>
        ) : null}

        <div className="hidden top-navbar w-full lg:inline-flex lg:flex-grow lg:w-auto">
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full text-xl lg:items-center items-start flex flex-col lg:h-auto space-x-2 mr-12">
            <Link to="/">
              <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                  Home
                </span>
              </button>
            </Link>

            <Link to="/lungCancerPrediction">
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Lung Cancer Prediction
  </span>
</button>
            </Link>

            {/* <button
              className="bg-[#6F5DE0] text-white py-2 px-8 rounded-md"
              onClick={() => handleAuth(4, false)}
            >
              Logout
            </button> */}

            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-500 to-pink-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800" onClick={() => handleAuth(4, false)}>
  <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Logout
  </span>
</button>
          </div>
        </div>
      </nav>
    </div>
  );
}
