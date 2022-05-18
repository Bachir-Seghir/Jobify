import React, { useEffect, useState } from "react";
import { MailIcon, PhoneIcon } from "@heroicons/react/solid";
import PageHeader from "../components/PageHeader";
import LoadingSpinner from "../components/LoadingSpinner";
import axios from "axios";
import { API_URL } from "../utils/urls";
import { Link } from "react-router-dom";

function CondidatesPage() {
  const [condidates, setCondidates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      axios.get(`${API_URL}/users`).then((res) => {
        setCondidates(
          res.data.filter((user) => user.accountType === "condidate")
        );
        setLoading(false);
      });
    };
    fetchUsers();
  }, []);

  // Returns
  if (loading)
    return (
      <div className="py-40">
        <LoadingSpinner />
      </div>
    );

  return (
    <div className="">
      <header className="w-full pt-32 pb-10 px-28 bg-slate-50">
        <PageHeader title="All Condidates" />
      </header>
      <ul
        role="list"
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-24 px-16 xl:px-28"
      >
        {condidates.map((user) => (
          <li
            className="col-span-1 flex flex-col text-center bg-white rounded-sm shadow divide-y divide-gray-200"
            key={user.id}
          >
            <Link
              to={`/condidate/${user.id}`}
              state={user.id}
              className="flex-1 flex flex-col p-8"
            >
              <img
                className={`w-32 h-32 flex-shrink-0 mx-auto rounded-full`}
                src={user.avatar}
                alt=""
              />
              <h3 className="flex items-center justify-center mt-6 -ml-2 text-gray-900 text-sm font-medium">
                <div
                  className={`w-2 h-2 rounded-full mr-2 ${
                    user.available ? "bg-green-400" : "bg-red-500"
                  }`}
                />
                {user.fullname}
              </h3>
              <dl className="mt-1 flex-grow flex flex-col justify-between">
                <dt className="sr-only">Title</dt>
                <dd className="text-gray-500 text-sm">{user.title}</dd>
              </dl>
            </Link>
            <div>
              <div className="-mt-px flex flex-col divide-y divide-gray-200">
                <div className="flex-1 flex">
                  <a
                    href={`mailto:${user.email}`}
                    className="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
                  >
                    <MailIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{user.email}</span>
                  </a>
                </div>
                <div className="flex-1 flex">
                  <a
                    href={`tel:${user.phone}`}
                    className="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
                  >
                    <PhoneIcon
                      className="w-5 h-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">{user.phone}</span>
                  </a>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CondidatesPage;
