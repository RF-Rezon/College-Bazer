import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import ActiveLink from "../ActiveLink/ActiveLink";

const Navbar = () => {
  // TODO: fix user
  const { user, logOut } = useContext(AuthContext);
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
        <nav className="rounded-lg mt-4 mb-6 flex sm:w-full items-center justify-between bg-neutral-100 py-2 dark:shadow-black w-full">
          <div className="p-5 w-full">
            <div className="flex flex-col md:flex-row items-center justify-evenly">

              <div className="flex basis-1/3 items-center justify-center gap-4">
                <Link
                  to={"/"}
                  className="text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0 "
                
                >
                  <svg role="img" viewBox="0 0 24 24" height="36" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg>
                </Link>
                  <Link to={"/"}>
                    <div className="mb-4 lg:mb-0 lg:pr-2 ">
                      <p className="text-black text-4xl font-bold cursor-pointer">College Bazar</p>
                    </div>
                  </Link>
              </div>

              <div className="flex flex-col items-center justify-between">

                <div className="md:flex items-center justify-between space-x-5">
                <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    
                    >
                      Home
                    </ActiveLink>
                  </div>
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/allcollege"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    
                    >
                      College
                    </ActiveLink>
                  </div>
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/admission"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    
                    >
                      Admission
                    </ActiveLink>
                  </div>
                  <div className="p-3 lg:pr-2 my-auto">
                    <ActiveLink
                      to={"/pages/my_college"}
                      className="text-neutral-500 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                    
                    >
                      My College
                    </ActiveLink>
                  </div>

                  <div className="flex items-center justify-between mx-auto">
                    {user ? (
                      <div className="flex gap-x-4">
                        <div className="relative">{user && <Link to={`/user/${user?.email}`}>{user?.displayName}</Link>}</div>

                        <button
                          onClick={submitLogout}
                          type="button"
                          className="inline-block rounded bg-neutral-50 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-neutral-800 shadow-[0_4px_9px_-4px_#cbcbcb] transition duration-150 ease-in-out hover:bg-neutral-100 hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:bg-neutral-100 focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:outline-none focus:ring-0 active:bg-neutral-200 active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(251,251,251,0.3)] dark:hover:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:focus:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)] dark:active:shadow-[0_8px_9px_-4px_rgba(251,251,251,0.1),0_4px_18px_0_rgba(251,251,251,0.05)]"
                        >
                          Log Out
                        </button>
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
