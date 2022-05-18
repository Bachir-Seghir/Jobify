import React, { Fragment, useEffect, useState } from "react";
import {
  BriefcaseIcon,
  LocationMarkerIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { useLocation } from "react-router-dom";
import axios from "axios";
import LoadingSpinner from "../components/LoadingSpinner";
import { API_URL } from "../utils/urls";
import { format } from "timeago.js";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Condidate() {
  const location = useLocation();
  const userId = location.state;
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      axios.get(`${API_URL}/users/${userId}`).then((res) => {
        setUser(res.data);
        setLoading(false);
      });
    };
    userId && fetchUser();
  }, [userId]);

  // Returns
  if (loading)
    return (
      <div className="py-40">
        <LoadingSpinner />
      </div>
    );

  return (
    <main className="py-32">
      {/* Page header */}
      <div className=" px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:px-16 ">
        <div className="flex items-center w-full">
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                className="h-32 w-32 rounded-full"
                src={user?.avatar}
                alt=""
              />
              <div
                className={`border-2 border-white top-[100px] left-[100px] h-5 w-5 absolute inset-0 shadow-inner rounded-full 
                ${user?.available ? "bg-green-400" : "bg-red-500"}`}
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900 ml-8">
              {user?.fullname}
            </h1>
            <p className="flex items-center text-sm font-medium text-gray-500 ml-8 capitalize">
              <BriefcaseIcon className="h-4 w-4 mr-2" />
              {user?.title}
              <span className="flex items-center text-sm font-medium text-gray-500 ml-4 capitalize">
                <LocationMarkerIcon className="h-4 w-4 mr-2" />
                {user?.country}
              </span>
            </p>
          </div>
          <button
            type="button"
            className="ml-auto px-8 py-2 border border-transparent text-md font-medium rounded-md shadow-sm text-white bg-sky-600 hover:bg-sky-700 focus:outline-none "
          >
            Hire
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:px-6 lg:grid-flow-col-dense lg:grid-cols-3 lg:px-16">
        <div className="space-y-6 lg:col-start-1 lg:col-span-2">
          {/* Description list*/}
          <section aria-labelledby="applicant-information-title">
            <div className="bg-white shadow sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  className="text-lg leading-6 font-medium text-gray-900"
                >
                  Condidate Information
                </h2>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Application for
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      Backend Developer
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.email}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Salary expectation
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      ${user?.salary}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Phone</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.phone}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Birthday
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.birthday}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Website
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.website}
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-gray-500">About</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {user?.about}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </section>

          {/* Comments*/}
          <section aria-labelledby="notes-title">
            <div className="bg-white shadow sm:rounded-lg sm:overflow-hidden">
              <div className="divide-y divide-gray-200">
                <div className="px-4 py-5 sm:px-6">
                  <h2
                    id="notes-title"
                    className="text-lg font-medium text-gray-900"
                  >
                    Testimonials
                  </h2>
                </div>
                <div className="px-4 py-6 sm:px-6">
                  <ul role="list" className="space-y-8">
                    {user?.testimonials?.map((item) => (
                      <li key={item.id}>
                        <div className="flex space-x-3">
                          <div className="flex-shrink-0">
                            <img
                              className="h-10 w-10 rounded-full shadow-md"
                              src={item.user.avatar}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm">
                              <a href="#" className="font-medium text-gray-900">
                                {item.user.fullname || item.user.username}
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-gray-700">
                              <p>{item.note}</p>
                            </div>
                            <div className="mt-2 text-sm space-x-2">
                              <span className="text-gray-500 font-medium">
                                {format(item.creationDate)}
                              </span>
                              <div className="ml-1 flex items-center">
                                {[0, 1, 2, 3, 4].map((rating) => (
                                  <StarIcon
                                    key={rating}
                                    className={classNames(
                                      item.stars > rating
                                        ? "text-yellow-400"
                                        : "text-gray-200",
                                      "h-5 w-5 flex-shrink-0"
                                    )}
                                    aria-hidden="true"
                                  />
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-6 sm:px-6">
                <div className="flex space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={user?.imageUrl}
                      alt=""
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <form action="#">
                      <div>
                        <label htmlFor="comment" className="sr-only">
                          About
                        </label>
                        <textarea
                          id="comment"
                          name="comment"
                          rows={3}
                          className="shadow-sm block w-full focus:ring-blue-500 focus:border-blue-500 sm:text-sm border border-gray-300 rounded-md"
                          placeholder="Add a note"
                          defaultValue={""}
                        />
                      </div>
                      <div className="mt-3 flex items-center justify-end">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        >
                          Comment
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <section
          aria-labelledby="timeline-title"
          className="lg:col-start-3 lg:col-span-1"
        >
          <div className="bg-white px-4 py-5 shadow sm:rounded-lg sm:px-6">
            <h2
              id="timeline-title"
              className="text-lg font-medium text-gray-900"
            >
              Skills
            </h2>

            {/* Skills */}
            <div className="mt-6 flow-root">
              <span className="mr-0.5">
                {user?.skills?.map((skill) => (
                  <Fragment key={skill.id}>
                    <a
                      href={skill.href}
                      className="m-1 relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5 text-sm"
                    >
                      <span className=" font-medium text-gray-900">
                        {skill.name}
                      </span>
                    </a>{" "}
                  </Fragment>
                ))}
              </span>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Condidate;
