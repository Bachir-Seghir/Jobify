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
    title: "Senior Back End Developer",
    type: "Full-time",
    location: "Remote, USA",
    department: "Engineering",
    closeDate: new Date("2022-03-05T03:24:00"),
    yearlysalary: "$20k - $50k",
    hourlySalary: "$25 - $35",
    minHour: "35",
    featured: true,
    company: "Slack",
    excerpt:
      "We're hiring a designer to shape and drive storytelling and communication of our product features and innovations.Designers at Slack work across every stage of product development, from discovery and ideation, prototyping, definition and build, while communicating internally and externally the customer value of such work.",
  },
  {
    id: 2,
    title: "Junior Front End Developer",
    type: "Freelance",
    location: "Remote, Poland",
    department: "Engineering",
    closeDate: new Date("2022-03-10T03:24:00"),
    yearlysalary: "20k - 50k",
  },
  {
    id: 3,
    title: "User Interface Designer",
    type: "Internship",
    location: "Russia, Spain, Canada",
    department: "Design",
    closeDate: new Date("2022-02-28T03:24:00"),
    yearlysalary: "$20k - $50k",
    featured: true,
  },
  {
    id: 4,
    title: "Senior Full Stack Developer",
    type: "Part-time",
    location: "Remote, Worldwide",
    department: "Engineering",
    closeDate: new Date("2022-03-15T03:24:00"),
    yearlysalary: "$30k - $60k",
  },
  {
    id: 5,
    title: "Senior Full Stack Developer",
    type: "Temporary",
    location: "Remote, Worldwide",
    department: "Engineering",
    closeDate: new Date("2022-03-01T03:24:00"),
    yearlysalary: "50k - 100k",
    featured: true,
  },
  {
    id: 6,
    title: "Mid User Interface Designer",
    type: "Full-time",
    location: "Remote, Europa",
    department: "Design",
    closeDate: new Date("2022-02-11T03:24:00"),
    yearlysalary: "$20k - $50k",
  },
  {
    id: 7,
    title: "Mid User Interface Designer",
    type: "Full-time",
    location: "Remote, Europa",
    department: "Design",
    closeDate: new Date("2022-02-11T03:24:00"),
    yearlysalary: "$20k - $50k",
  },
];
const borderColor = (type) => {
  switch (type.toLowerCase()) {
    case "freelance":
      return "border-green-400";
    case "full-time":
      return "border-sky-300";
    case "temporary":
      return "border-orange-400";
    case "part-time":
      return "border-indigo-300";
    default:
      return;
  }
};
const bgColor = (type) => {
  switch (type.toLowerCase()) {
    case "freelance":
      return "bg-green-400";
    case "full-time":
      return "bg-sky-300";
    case "temporary":
      return "bg-orange-400";
    case "part-time":
      return "bg-indigo-300";
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
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-zinc-900 truncate">
                        {position.title}
                      </p>
                      <div
                        className={`ml-2 py-1 flex-shrink-0 flex rounded-sm ${bgColor(
                          position.type
                        )}`}
                      >
                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full text-slate-700">
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
                          {position.yearlysalary}
                        </p>
                        <p className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0 sm:ml-6">
                          <LocationMarkerIcon
                            className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                            aria-hidden="true"
                          />
                          {position.location}
                        </p>
                      </div>
                      <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                        <ClockIcon
                          className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                          aria-hidden="true"
                        />
                        <p>
                          Posted{" "}
                          <time dateTime={position.closeDate}>
                            {format(position.closeDate)}
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
                    className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold text-slate-700 ${bgColor(
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
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.company}
                    </p>
                    <p className="flex items-center text-sm text-gray-500">
                      <LocationMarkerIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.location}
                    </p>
                  </div>
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <CashIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.yearlysalary} / year
                    </p>
                  </div>
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <CashIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.hourlySalary} / hour
                    </p>
                  </div>
                  <div className="py-4 flex gap-4">
                    <p className="flex items-center text-sm text-gray-500">
                      <CashIcon
                        className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      {position.hourlySalary} / hour
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
                      <p>{position.excerpt}</p>
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
