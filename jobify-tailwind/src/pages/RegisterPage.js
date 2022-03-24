import React, { useState } from "react";
import { Link } from "react-router-dom";
import { RadioGroup } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/solid";

const modes = [
  {
    id: 1,
    type: "Condidate",
    description: "Register as a Condidate for free",
  },
  {
    id: 2,
    type: "Employer",
    description: "Register as an Employer and See Plans",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function RegisterPage() {
  const [selectedMode, setSelectedMode] = useState(modes[0].type);
  return (
    <div>
      <div className="flex h-screen">
        <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <Link to="/">
                <img
                  className="hidden lg:block h-12 w-auto"
                  src="https://drive.google.com/uc?export=view&id=1UsbTcP9u-KK7lJYDjSD3HgcuWiP5laLF"
                  alt="Workflow"
                />
              </Link>
              <h2 className="mt-6 text-3xl font-extrabold text-slate-700">
                Sign Up
              </h2>
            </div>

            <RadioGroup value={selectedMode} onChange={setSelectedMode}>
              <RadioGroup.Label className="text-base font-medium text-gray-900">
                Select Account type
              </RadioGroup.Label>

              <div className="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                {modes.map((mode) => (
                  <RadioGroup.Option
                    key={mode.id}
                    value={mode.type}
                    className={({ checked, active }) =>
                      classNames(
                        checked ? "border-transparent" : "border-gray-300",
                        active ? "border-sky-600 ring-2 ring-sky-600" : "",
                        "relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none"
                      )
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex-1 flex">
                          <div className="flex flex-col">
                            <RadioGroup.Label
                              as="span"
                              className="block text-sm font-medium text-sky-600"
                            >
                              {mode.type}
                            </RadioGroup.Label>
                            <RadioGroup.Description
                              as="span"
                              className="mt-1 flex items-center text-sm text-gray-500"
                            >
                              {mode.description}
                            </RadioGroup.Description>
                          </div>
                        </div>
                        <CheckCircleIcon
                          className={classNames(
                            !checked ? "invisible" : "",
                            "h-5 w-5 text-sky-600"
                          )}
                          aria-hidden="true"
                        />
                        <div
                          className={classNames(
                            active ? "border" : "border-2",
                            checked ? "border-sky-600" : "border-transparent",
                            "absolute -inset-px rounded-lg pointer-events-none"
                          )}
                          aria-hidden="true"
                        />
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>

            <div className="mt-8">
              <div className="mt-6">
                <form method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        autoComplete="username"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-600 focus:border-sky-600 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-600 focus:border-sky-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-sky-600 focus:border-sky-600 sm:text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-sky-600 hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                    >
                      Register Your Account
                    </button>
                  </div>
                </form>
                <div className="mt-10 relative">
                  <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">
                      Already have an account ?
                      <Link
                        to="/signin"
                        className="font-medium text-sky-600 hover:text-sky-600 ml-2 "
                      >
                        Sign in
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block relative w-0 flex-1">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1646617747561-9b91464e780a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
