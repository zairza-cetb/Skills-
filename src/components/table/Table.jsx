import React, { useState } from "react";
import ReviewModal from "../modal/ReviewModal";
import "./Table.scss";

const Table = () => {
  const [isClicked, setIsClicked] = useState(false);

  const domains = [
    "Web Development",
    "App Development",
    "UI/UX",
    "Graphics Designing",
    "Competitive Coding",
    "AI/ML",
    "Game Development",
    "Embedded System & IOT",
    "ROS",
    "3D and Motion Graphics",
    "Cybersecurity",
    "Blockchain",
    "Devops",
  ];
  return (
    <div className="admin-table">
      {/* <div className="admin-table-header">
        <button>Zairza Admin</button>
        <img src="logo" alt="image" />
      </div> */}
      <div className="admin-table-top-center">
        <p className="domainName">Domain</p>
        <select className="domain-option">
          {domains.map((domain) => (
            <option value={domain}>{domain}</option>
          ))}
        </select>
      </div>
      <div className="admin-table-center">
        <div className="container mx-auto px-4 sm:px-8">
          <div className="py-8">
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow-md rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        REGISTRATION ID
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        SUBMISSION LINK
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        WEEK
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-700 uppercase tracking-wider">
                        ACTIONS
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div>
                          <div className="ml-3">
                            <p className="text-gray-600 whitespace-no-wrap">
                              000004
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a className="whitespace-no-wrap" href="/">
                          LINK
                        </a>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <div>
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            WEEK 1
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">ACTIVE</span>
                        </span>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center gap-5">
                          <button
                            type="button"
                            className="inline-block text-white bg-green-400 hover:bg-green-600 rounded-full"
                            onClick={() => setIsClicked(true)}
                          >
                            <svg
                              className="inline-block h-6 w-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="inline-block text-white bg-red-400 hover:bg-red-600 rounded-full"
                            onClick={() => alert("Rejected")}
                          >
                            <svg
                              className="inline-block h-6 w-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>

                    <tr>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div>
                          <div className="ml-3">
                            <p className="text-gray-600 whitespace-no-wrap">
                              000004
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <a className="whitespace-no-wrap" href="/">
                          LINK
                        </a>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <div>
                          <p className="text-gray-900 whitespace-no-wrap text-center">
                            WEEK 1
                          </p>
                        </div>
                      </td>
                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                          <span
                            aria-hidden
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">ACTIVE</span>
                        </span>
                      </td>

                      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                        <div className="flex justify-center gap-5">
                          <button
                            type="button"
                            className="inline-block text-white bg-green-400 hover:bg-green-600 rounded-full"
                          >
                            <svg
                              className="inline-block h-6 w-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" />
                            </svg>
                          </button>
                          <button
                            type="button"
                            className="inline-block text-white bg-red-400 hover:bg-red-600 rounded-full"
                          >
                            <svg
                              className="inline-block h-6 w-6 fill-current"
                              viewBox="0 0 24 24"
                            >
                              <path d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ReviewModal
        isOpened={isClicked}
        handleOpen={() => setIsClicked(false)}
      />
    </div>
  );
};

export default Table;
