import React, { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
// Initialization for ES Users
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input, Ripple, initTE } from "tw-elements";
import { AuthContext } from "./AuthProvider";


initTE({ Input, Ripple });

const LogInPage = () => {
  const { signInUser } = useContext(AuthContext);
  const { signInWithGoogle } = useContext(AuthContext);
  const { signInWithGitHub } = useContext(AuthContext);
  
  const [wrongUser, setWrongUser] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    if(password.length < 6){
      return setWrongUser("You cannot submit empty password field");
    }

    signInUser(email, password)
      .then((userCredential) => {
        setWrongUser("");
        const success_user = userCredential.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        setWrongUser(errorMessage);
      });
    event.target.reset();
  };

  const handleGoogleSubmit = () => {
    signInWithGoogle()
      .then((result) => {
        const loggedUser = result.user;

        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  const handleGithubSubmit = () => {
    signInWithGitHub()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <div>
        <section className="h-screen mb-28 md:mb-10">
          <div className="h-full">
            <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
              <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
                <img
                  src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                  className="w-full"
                  alt="Sample image"
                />
              </div>

              <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">Sign in with</p>
                  <button
                    onClick={handleGoogleSubmit}
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-black uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                  >
                    <div className="flex items-center justify-center">
                      <FaGoogle />
                    </div>
                  </button>

                  <button
                    onClick={handleGithubSubmit}
                    type="button"
                    data-te-ripple-color="light"
                    className="mx-1 h-9 w-9 rounded-full bg-orange-500 uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out"
                  >
                    <div className="flex items-center justify-center">
                      <FaGithub />
                    </div>
                  </button>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
                  </div>

                  <div className="relative mb-6">
                    <label
                      htmlFor="UserEmail"
                      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <span className="text-sm font-medium text-gray-800"> Email </span>

                      <input
                        type="email"
                        id="User2Email"
                        placeholder="Your email"
                        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        name="email"
                        required
                      />
                    </label>
                  </div>

                  <div className="relative mb-6">
                    <label
                      htmlFor="UserPassword"
                      className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                    >
                      <span className="text-sm font-medium text-gray-800"> Password </span>

                      <input
                        type="password"
                        id="UserPassword"
                        placeholder="Password"
                        className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                        name="password"
                        required
                      />
                    </label>
                  </div>

                  <div className="mb-0 text-base font-semibold">
                    {wrongUser && (
                      <span className="text-red-600 transition duration-150 ease-in-out hover:text-red-400 focus:text-red-400 active:text-red-500 pl-2">
                        {wrongUser}
                      </span>
                    )}
                  </div>

                  <div className="text-center lg:text-left mt-6">
                   <button
                      type="submit"
                      className="inline-block rounded bg-black px-7 pb-2.5 pt-3 my-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                      data-te-ripple-color="light"
                    >
                      Login
                    </button>
                    <p className="mb-0 mt-2 py-3 text-sm font-semibold">
                      Don't have an account?
                      <Link
                        to={"/register"}
                        className="text-orange-600 transition duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 active:text-orange-500 pl-2"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LogInPage;
