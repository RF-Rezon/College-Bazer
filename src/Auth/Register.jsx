// Initialization for ES Users
import { updateProfile } from "firebase/auth";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Ripple, initTE } from "tw-elements";
import { AuthContext } from "./AuthProvider";


initTE({ Input, Ripple });

const RegisterPage = () => {
  const [warn, setWarn]  = useState("");
   const {createUser} = useContext(AuthContext);
   const navigate =  useNavigate();
   
   

   const handleSubmit = (event) => {
     event.preventDefault();
     const form = event.target;
     const name = form.name.value;
     const email = form.email.value;
     const password = form.password.value;
     const photo_url = form.photo_url.value;

   
     if(password.length < 6){
      setWarn("You cannot submit empty password field");
    }

    // console.log(name, email, password, photo_url);
    createUser(email, password)
    .then((userCredential) => {
      const success_user = userCredential.user;
      updateProfile(userCredential.user, {displayName: name, photoURL: photo_url});
      navigate("/");
    })
    .catch((error) => {
      const errorMessage = error.message;
      // ..
    })
      
    event.target.reset();
  };

 
  return (
    <div className="m-5 mb-80 md:mb-10">
      <section className="h-screen">
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
              <form onSubmit={handleSubmit}>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">Sign up with</p>

                 
                </div>

                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">Or</p>
                </div>
           <div className="mb-10">
                <div className="relative mb-6">
                  <label
                    htmlFor="UserName"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-sm font-medium text-gray-800"> Name </span>

                    <input
                      
                      type="text"
                      name="name"
                      id="UserName"
                      placeholder="Your name"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm" 
                      required
                    />
                  </label>
                </div>

                <div className="relative mb-6">
                  <label
                    htmlFor="UserEmail"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-sm font-medium text-gray-800"> Email </span>

                    <input
                      type="email"
                      id="User1Email"
                      name="email"
                      placeholder="Your email"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
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
                      name="password"
                      placeholder="Password"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      required
                    />
                  </label>
                </div>

                <div className="relative mb-8">
                  <label
                    htmlFor="UserPhoto"
                    className="block overflow-hidden rounded-md border border-gray-200 px-3 py-2 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600"
                  >
                    <span className="text-sm font-medium text-gray-800"> Photo Url </span>

                    <input
                      type="url"
                      id="UserPhotoUrl"
                      name="photo_url"
                      placeholder="Photo url"
                      className="mt-1 w-full border-none p-0 focus:border-transparent focus:outline-none focus:ring-0 sm:text-sm"
                      required
                    />
                  </label>
                </div>
                <p className="mb-0 text-base font-semibold">
                     { warn && <span
                      className="text-red-600 transition duration-150 ease-in-out hover:text-red-400 focus:text-red-400 active:text-red-500 pl-2"
                      >
                       {warn}
                      </span>}
                  </p>

                <div className="text-center lg:text-left mt-6">
                  <button
                    className="inline-block rounded bg-black px-7 pb-2.5 pt-3 my-2 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out "
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    type="submit"
                  >
                    Register
                  </button>
                  <p className="pt-2 md:mt-3 text-base font-semibold">Don't use the same email again.Didn't work with email verification method.</p>
                  <p className="md:mb-0 mt-2 mb-10 py-3 text-sm font-semibold">
                    Have an account?
                    <Link
                      to={"/login"}
                      className="text-orange-600 transition duration-150 ease-in-out hover:text-orange-400 focus:text-orange-400 active:text-orange-500 pl-2"
                    >
                      Login
                    </Link>
                  </p>
                </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterPage;