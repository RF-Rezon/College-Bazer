import React from "react";
// import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import { Tooltip } from "react-tooltip";
// import "react-tooltip/dist/react-tooltip.css";
import ActiveLink from "../ActiveLink/ActiveLink";
// import { AuthContext } from "../../AuthProvider/AuthProvider";

// initTE({ Collapse, Dropdown });

const Navbar = () => {
  const user = true;
  // TODO: fix user
  //   const { user, logOut } = useContext(AuthContext);
  const submitLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <div>
        <nav className="flex-no-wrap rounded-lg mt-4 mb-6 relative flex sm:w-full items-center justify-between bg-neutral-100 py-2 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4 p-5">
          <div className="flex w-full flex-wrap items-center justify-between p-3 ">
            <div className="flex-grow basis-[100%] items-center lg:!flex lg:basis-auto" id="navbarSupportedContent1">
              <Link
                to={"/"}
                className="text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 "
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="64"
                  height="64"
                  id="restaurant"
                  className="mx-auto md:mr-3 mb-5 md:mb-0"
                >
                  <path
                    fillRule="evenodd"
                    d="M32 0A32 32 0 0 0 0 32a32 32 0 0 0 32 32 32 32 0 0 0 32-32A32 32 0 0 0 32 0zM20.74 15.834c.128 0 .256.049.354.146l3.537 3.536 3.181 3.181a1.484 1.484 0 0 1 .319 1.63l-.647 1.528L47.818 45.05a1.021 1.021 0 0 1 .022 1.465l-1.205 1.203a.962.962 0 0 1-1.381-.018L26.024 27.32l-1.532.647a1.484 1.484 0 0 1-1.627-.317l-1.062-1.06-2.121-2.123-3.182-3.182-.354-.353a.499.499 0 1 1 .708-.707l.353.353 3.182 3.182 2.123 2.12a.499.499 0 1 0 .707-.706l-2.12-2.12h-.005l-3.535-3.534a.499.499 0 1 1 .707-.707l3.537 3.535 2.12 2.12a.499.499 0 1 0 .708-.706L22.51 21.64l-3.537-3.536a.499.499 0 1 1 .707-.707l3.537 3.536 2.12 2.12a.499.499 0 1 0 .708-.706l-2.121-2.121-3.537-3.536a.499.499 0 0 1 .353-.853v-.004zm24.645 1.674c.76-.002 1.55.076 2.379.242l-13.31 13.313-3.64-3.432 5.99-5.99c2.586-2.586 5.288-4.12 8.58-4.131v-.002zm-16.33 14.486 2.17 2.297L19.48 46.035a1 1 0 0 1-1.414 0l-1.416-1.414a.952.952 0 0 1 .034-1.379l12.37-11.248z"
                  ></path>
                </svg>
              </Link>

              <div className="mr-auto flex flex-col pl-0 lg:flex-row items-center justify-between w-full">
                <Link to={"/"}>
                  <div className="mb-4 lg:mb-0 lg:pr-2 ">
                    <p className="text-black text-4xl font-bold cursor-pointer">IOR</p>
                  </div>
                </Link>

                <div className="flex items-center justify-between space-x-5 ">
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/home"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                    >
                      Home
                    </ActiveLink>
                  </div>
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/allcollege"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                    >
                      College
                    </ActiveLink>
                  </div>
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/admission"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                    >
                      Admission
                    </ActiveLink>
                  </div>
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/users_college"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                      href="#"
                    >
                      My College
                    </ActiveLink>
                  </div>
                    
                  <div className="p-3 lg:pr-2 my-auto cursor-default">
                    <p  className="text-neutral-700 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"> User Name </p>
                  </div>

                  <div className="flex items-center justify-between mx-auto">
                    {user ? (
                      <div id="sideed" className="flex gap-4">
                        <button
                          onClick={submitLogout}
                          type="button"
                          className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                        >
                          Log Out
                        </button>

                        {/* <div className="relative">
                          <Link
                            className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                            id="dropdownMenuButton2"
                            role="button"
                          >
                            {user && (
                              <span data-tooltip-id="my-tooltip" data-tooltip-content={user?.displayName}>
                                <img
                                  data-tooltip-target="tooltip-default"
                                  src={user.photoURL}
                                  className="rounded-full w-10 h-10"
                                  alt=""
                                  loading="lazy"
                                />
                              </span>
                            )}
                          </Link>
                          <Tooltip id="my-tooltip" />
                        </div> */}
                      </div>
                    ) : (
                      <Link to={"/login"}>
                        <button
                          type="button"
                          className="inline-block rounded bg-neutral-800 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-50 shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] transition duration-150 ease-in-out hover:bg-neutral-800 hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:bg-neutral-800 focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:bg-neutral-900 dark:shadow-[0_4px_9px_-4px_#030202] dark:hover:bg-neutral-900 dark:hover:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:focus:bg-neutral-900 dark:focus:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)] dark:active:bg-neutral-900 dark:active:shadow-[0_8px_9px_-4px_rgba(3,2,2,0.3),0_4px_18px_0_rgba(3,2,2,0.2)]"
                        >
                          Log In
                        </button>
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
