import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div>
                <footer aria-label="Site Footer" className="bg-neutral-100">
                  <div className="px-4 md:px-0">
                    <div className="flex items-center flex-col md:flex-row">
                      <div
                        className="border-b border-gray-100 py-8 px-0 md:px-6 lg:order-last lg:border-b-0 lg:border-s lg:py-16 lg:ps-16 p-4 md:p-0"
                      >
                
                        <div className="mt-8 space-y-4 lg:mt-0">
                          <span className="hidden h-1 w-10 rounded bg-orange-500 lg:block"></span>
                
                          <div>
                <h2 className="text-2xl font-medium text-gray-900">You can email Us</h2>
                <p className="my-4 max-w-lg text-gray-700">
                  You can email us. We will email you back. Don't forget to give back you feedback to us! 💗
                </p>
                          </div>
                
                          <form className="mt-6 w-full">
                <label htmlFor="UserEmail" className="sr-only"> Email </label>
                <div
                  className="rounded-md border border-gray-100 py-2 focus-within:ring sm:flex sm:items-center sm:gap-4"
                >
                  <input
                    type="email"
                    id="User3Email"
                    placeholder="weLoveOurJhankerMahbubVai@phero.com"
                    className="w-full border-none focus:border-transparent focus:ring-transparent sm:text-sm p-5 rounded-lg"
                  />
                  <button
                    className="mt-10 w-full rounded bg-black px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-none hover:bg-black sm:mt-0 sm:w-auto sm:shrink-0"
                  >
                    Email
                  </button>
                </div>
                          </form>
                        </div>
                      </div>
                
                      <div className="py-8 px-0 md:px-6 lg:py-16 lg:pe-16">
                        
                
                        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
                          <div>
                <span className="text-2xl font-medium text-gray-900">Opening Hours</span>
                <nav aria-label="Footer Navigation - Services" className="mt-6">
                  <ul className="space-y-4 text-sm">
                    <li>
                      <p className="my-4 max-w-lg text-gray-700">
                        Monday - Friday <br /> 8 AM - 10 PM
                      </p>
                    </li>
                    <li>
                    <p className="my-4 max-w-lg text-gray-700">
                        Saturday - Friday <br /> 8 AM - 10 PM
                      </p>
                    </li>
                    <li>
                    <p className="my-4 max-w-lg text-gray-700">
                        Sunday - Friday <br /> 8 AM - 10 PM
                      </p>
                    </li>
                  </ul>
                </nav>
                          </div>
                
                          <div>
                <p className="text-2xl font-medium text-gray-900">Contact Us</p>
                <nav aria-label="Footer Navigation - Company" className="mt-6">
                  <ul className="space-y-4 text-sm">
                  <li>
                    <p className="my-4 max-w-lg text-gray-700">
                     Street: Vally street
                      </p>
                    </li>
                    <li>
                    <p className="my-4 max-w-lg text-gray-700">
                     City: Castel Vittorio, Italy
                      </p>
                    </li>
                    <li>
                    <p className="my-4 max-w-lg text-gray-700">
                      Contact number: <br /> 0345 0605957
                      </p>
                    </li>
                  </ul>
                </nav>
                          </div>
                        </div>
                
                        <div className="mt-8 border-t border-gray-100 pt-8">
                          <nav aria-label="Footer Navigation - Support">
                <ul className="flex flex-wrap gap-4 text-xs">
                  <li>
                    <Link href="#" className="text-gray-500 transition hover:opacity-75">
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 transition hover:opacity-75">
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-500 transition hover:opacity-75">
                      Cookies
                    </Link>
                  </li>
                </ul>
                          </nav>
                
                          <p className="mt-8 text-xs text-gray-500">
                &copy; 2023. College Bazar. All rights reserved.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </footer>
            </div>
        </>
    );
};

export default Footer;