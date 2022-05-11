import React, { useEffect, useState } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CashIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  LocationMarkerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { format } from "timeago.js";
import Pagination from "./Pagination";

const positions = [
  {
    id: 1,
    title: "Back End Developer",
    type: "fullTime",
    expiryDate: new Date("2022-03-05T03:24:00"),
    featured: true,
    company: "Slack",
    minSalary: 2000,
    maxSalary: 3000,
    experienceLevel: "entry",
    place: "remote",
    aplicants: 10,
    active: true,
    minHourlyPrice: 20,
    maxHourlyPrice: 35,
    minHour: 40,
    user: 1,
    locations: "Poland, Canada, USA",
    description:
      "We're hiring a designer to shape and drive storytelling and communication of our product features and innovations.Designers at Slack work across every stage of product development, from discovery and ideation, prototyping, definition and build, while communicating internally and externally the customer value of such work.",
  },
  {
    id: 2,
    title: "Back End Developer",
    type: "partTime",
    expiryDate: new Date("2022-03-05T03:24:00"),
    featured: true,
    company: "Slack",
    minSalary: 2000,
    maxSalary: 3000,
    experienceLevel: "junior",
    place: "remote",
    aplicants: 10,
    active: true,
    minHourlyPrice: 20,
    maxHourlyPrice: 35,
    user: 1,
    locations: "Poland, Canada, USA",
    description:
      "We're hiring a designer to shape and drive storytelling and communication of our product features and innovations.Designers at Slack work across every stage of product development, from discovery and ideation, prototyping, definition and build, while communicating internally and externally the customer value of such work.",
  },
  {
    id: 3,
    title: "Back End Developer",
    type: "contract",
    expiryDate: new Date("2022-03-05T03:24:00"),
    featured: true,
    company: "Slack",
    minSalary: 2000,
    maxSalary: 3000,
    experienceLevel: "mid",
    place: "remote",
    aplicants: 10,
    active: true,
    minHourlyPrice: 20,
    maxHourlyPrice: 35,
    user: 1,
    locations: "Poland, Canada, USA",
    description:
      "We're hiring a designer to shape and drive storytelling and communication of our product features and innovations.Designers at Slack work across every stage of product development, from discovery and ideation, prototyping, definition and build, while communicating internally and externally the customer value of such work.",
  },
  {
    id: 4,
    title: "Back End Developer",
    type: "fullTime",
    expiryDate: new Date("2022-03-05T03:24:00"),
    featured: true,
    company: "Slack",
    minSalary: 2000,
    maxSalary: 3000,
    experienceLevel: "senior",
    place: "remote",
    aplicants: 10,
    active: true,
    minHourlyPrice: 20,
    maxHourlyPrice: 35,
    user: 1,
    locations: "Poland, Canada, USA",
    description:
      "We're hiring a designer to shape and drive storytelling and communication of our product features and innovations.Designers at Slack work across every stage of product development, from discovery and ideation, prototyping, definition and build, while communicating internally and externally the customer value of such work.",
  },
];
const borderColor = (type) => {
  switch (type) {
    case "contract":
      return "border-green-400";
    case "fullTime":
      return "border-sky-300";
    case "partTime":
      return "border-yellow-300";
    default:
      return;
  }
};
const bgColor = (type) => {
  switch (type) {
    case "contract":
      return "bg-green-400";
    case "fullTime":
      return "bg-sky-300";
    case "partTime":
      return "bg-yellow-300";
    default:
      return;
  }
};

function JobsFeed() {
  const perPage = 6;
  let skip = 0;
  const pageCount = Math.ceil(positions.length / perPage);
  const [currentFeatIdx, setCurrentFeatIdx] = useState(0);
  const [featuredPos, setFeaturedPos] = useState([]);

  useEffect(() => {
    setFeaturedPos(positions.filter((item) => item.featured));
  }, []);

  const handleClick = (e, action) => {
    e.preventDefault();
    if (action === "next" && currentFeatIdx < featuredPos.length - 1) {
      setCurrentFeatIdx(currentFeatIdx + 1);
    } else if (action === "prev" && currentFeatIdx > 0) {
      setCurrentFeatIdx(currentFeatIdx - 1);
    }
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 py-12 px-16 xl:px-28">
      <div className="order-2 lg:order-1 lg:col-span-2 flex flex-col py-6">
        <h3 className="text-2xl font-medium text-gray-900 text-left pb-8">
          Recent Jobs
        </h3>
        <div className="bg-white border border overflow-hidden rounded-md">
          <ul role="list" className="divide-y divide-gray-200">
            {positions.slice(skip, skip + perPage).map((position) => (
              <li key={position.id}>
                <a
                  href="#"
                  className={`block hover:bg-gray-50 border-l-4 ${borderColor(
                    position.type
                  )}`}
                >
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center">
                      <p className="text-sm font-medium text-zinc-900 truncate capitalize">
                        {position.title}
                      </p>
                      <div
                        className={`ml-2 py-1 flex-shrink-0 flex rounded-sm ${bgColor(
                          position.type
                        )}`}
                      >
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-slate-700 capitalize">
                          {position.experienceLevel}
                        </p>
                      </div>
                      <div
                        className={`ml-auto py-1 flex-shrink-0 flex rounded-sm ${bgColor(
                          position.type
                        )}`}
                      >
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-slate-700 capitalize">
                          {position.type}
                        </p>
                      </div>
                    </div>
                    <div className="mt-2 sm:flex sm:justify-between">
                      <div className="sm:flex">
                        <p className="flex items-center text-sm text-gray-500">
                          <CashIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          ${position.minSalary} -- ${position.maxSalary}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6 capitalize">
                          <LocationMarkerIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.place} / {position.locations}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <ClockIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Posted{" "}
                          <time dateTime={position.expiryDate}>
                            {format(position.expiryDate)}
                          </time>
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <Pagination pageCount={pageCount} />
      </div>
      <div className="order-1 lg:order-2 py-6 overflow-hidden relative">
        <div className="flex justify-between pb-8">
          <h3 className="text-2xl font-medium text-gray-900 text-left ">
            Featured Jobs
          </h3>
          <div className="flex items-start gap-1">
            <span>
              <ChevronLeftIcon
                className="h-8 w-8 text-gray-500 bg-gray-100 rounded-sm cursor-pointer hover:bg-gray-500 hover:text-white"
                aria-hidden="true"
                onClick={(e) => handleClick(e, "prev")}
              />
            </span>
            <span>
              <ChevronRightIcon
                className=" h-8 w-8 text-gray-500 bg-gray-100 rounded-sm cursor-pointer hover:bg-gray-500 hover:text-white"
                aria-hidden="true"
                onClick={(e) => handleClick(e, "next")}
              />
            </span>
          </div>
        </div>
        <div className="w-max flex overflow-hidden h-[640px]">
          {featuredPos.map((position, i) => (
            <div
              key={i}
              className={`${
                currentFeatIdx === i ? "block" : "hidden"
              }  bg-white border overflow-hidden rounded-md h-auto w-full absolute`}
            >
              <div className="px-4 py-5 sm:px-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  {position.title}
                </h3>
                <div className="mt-2 flex-shrink-0 flex rounded-sm">
                  <p
                    className={` capitalize px-2 py-1 inline-flex text-xs leading-5 font-semibold text-slate-700 ${bgColor(
                      position.type
                    )}`}
                  >
                    {position.type}
                  </p>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-5 sm:p-0">
                <dl className="px-6 pt-4 pb-8">
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <BriefcaseIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400 capitalize"
                        aria-hidden="true"
                      />
                      {position.company}
                    </p>
                    <p className="flex items-center text-sm text-gray-500 capitalize">
                      <LocationMarkerIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.place} / {position.locations}
                    </p>
                  </div>
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <CashIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      ${position.minSalary} -- ${position.maxSalary} / year
                    </p>
                  </div>
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <CashIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      ${position.minHourlyPrice} / hour
                    </p>
                  </div>
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <CashIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      ${position.maxHourlyPrice} / hour
                    </p>
                    <p className="flex items-center text-sm text-gray-500">
                      <ClockIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.minHour}h / week
                    </p>
                  </div>

                  <div className="py-5">
                    <dd className="text-md text-gray-600 mt-0 line-clamp-6">
                      <p>{position.description}</p>
                    </dd>
                  </div>
                  <button
                    type="submit"
                    className="w-full items-center text-md font-semibold px-4 py-3 border border-transparent leading-4 rounded-sm text-white bg-green-500 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                  >
                    Apply For This Job
                  </button>
                </dl>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobsFeed;
