import React, { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { ArrowCircleRightIcon } from "@heroicons/react/outline";

function Search() {
  return (
    <form
      method="POST"
      className="w-[300px] flex flex-col mt-12 gap-y-4 gap-4 lg:flex-row lg:w-3/6"
    >
      <div className="w-full lg:grow max-w-[400px]">
        <input
          type="text"
          name="keyword"
          id="keyword"
          className="shadow-sm text-md font-medium px-4 py-3 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-sm"
          placeholder="Keywords : React, PHP, Designer..."
        />
      </div>

      <button
        type="submit"
        className="items-center text-md font-medium px-4 py-3 border border-transparent leading-4 rounded-sm text-sky-900 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 lg:w-[100px]"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
