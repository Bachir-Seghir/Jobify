import { Fragment, useContext } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
const menuLinks = [
  { name: "Home", path: "/" },
  { name: "Jobs", path: "/jobs" },
  { name: "Condidates", path: "/condidates" },
  { name: "Employers", path: "/employers" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];
export default function Navbar() {
  const { user, setIsAuth } = useContext(UserContext);
  const location = useLocation();
  const path = location.pathname;
  return (
    <Disclosure as="nav" className="bg-white shadow fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-14">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-between">
                <div className="flex-shrink-0 flex items-center">
                  <Link to="/">
                    <img
                      className="block lg:hidden h-8 w-auto"
                      src="https://drive.google.com/uc?export=view&id=1UsbTcP9u-KK7lJYDjSD3HgcuWiP5laLF"
                      alt="Jobify logo"
                    />
                  </Link>
                  <Link to="/">
                    <img
                      className="hidden lg:block h-10 w-auto"
                      src="https://drive.google.com/uc?export=view&id=1UsbTcP9u-KK7lJYDjSD3HgcuWiP5laLF"
                      alt="Workflow"
                    />
                  </Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {menuLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.path}
                      className={`${
                        link.path === path
                          ? "border-sky-600 text-sky-600"
                          : "border-transparent text-gray-700 hover:border-sky-600 hover:text-sky-600"
                      }  inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium upercase`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  {user ? (
                    <div>
                      <Menu.Button className="bg-white  flex text-sm focus:outline-none focus:ring-0 items-center">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-10 w-10 rounded-full shadow object-contain"
                          src={
                            user.avatar ||
                            "https://fromlittlethings.com/wp-content/plugins/wp-social-reviews/assets/images/template/review-template/placeholder-image.png"
                          }
                          alt=""
                        />
                        <h4
                          to="/profile"
                          className="border-transparent text-gray-700 hover:border-sky-600 hover:text-sky-60 inline-flex items-center px-2   text-sm font-medium "
                        >
                          Hello{", "}
                          <span className="ml-1 text-sky-600 capitalize">
                            {user.username}
                          </span>
                        </h4>
                      </Menu.Button>
                    </div>
                  ) : (
                    <Link
                      to="/signin"
                      className="text-sm font-medium px-4 py-2 border border-sky-600 rounded-sm text-sky-600 bg-transparent hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-600 lg:w-[100px]"
                    >
                      Sign in
                    </Link>
                  )}
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <Link
                            to="#"
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700"
                            )}
                          >
                            Your Profile
                          </Link>
                        )}
                      </Menu.Item>

                      <Menu.Item>
                        {({ active }) => (
                          <button
                            onClick={() => setIsAuth(false)}
                            className={classNames(
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm text-gray-700 w-full text-left"
                            )}
                          >
                            Sign out
                          </button>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {menuLinks.map((link) => (
                <Link
                  to={link.path}
                  key={link.name}
                  className={`${
                    link.path === path
                      ? "bg-sky-50 border-sky-500 text-sky-600"
                      : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700"
                  } block pl-3 pr-4 py-2 border-l-4 text-base font-medium`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
