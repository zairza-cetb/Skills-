import React from "react";
import Man from "../../Assets/images/man.png";
import { AiFillLock } from "react-icons/ai";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useSelector } from "react-redux";
const MentorProfile = () => {
  const { user } = useSelector(selectCurrentUser);
  const { domain } = useSelector(selectCurrentUser);

  return (
    <div className="md:mt-12 p-4 mx-4 md:mx-20">
      <div className="flex flex-col md:flex-row justify-center">
        <div className="rounded-lg mx-8 md:mx-0">
          <img className="w-full md:w-3/4" src={Man} alt="avatar" />
        </div>
        <div className="py-4 w-full md:w-1/2">
          <div className="grid mb-4 grid-cols-2 gap-x-4">
            <div className="col-span-2 md:col-span-1 ">
              <label className="text-xs text-blue-500">Name</label>
              <div className="relative">
                <input
                  id="name"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                  type="text"
                  value={user.name}
                  disabled
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                    <AiFillLock />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label className="text-xs text-blue-500">Email</label>
              <div className="relative">
                <input
                  id="email"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                  type="text"
                  value={user.email}
                  disabled
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                    <AiFillLock />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mb-4 grid-cols-2 gap-x-4">
            <div className="col-span-2 md:col-span-1 ">
              <label className="text-xs text-blue-500">Phone</label>
              <div className="relative">
                <input
                  id="phone"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                  type="text"
                  value={user.phoneNumber}
                  disabled
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                    <AiFillLock />
                  </span>
                </div>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 ">
              <label className="text-xs text-blue-500">Registration No.</label>
              <div className="relative">
                <input
                  id="regdNo"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                  type="text"
                  value={user.registrationNumber}
                  disabled
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                    <AiFillLock />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid mb-4 grid-cols-2 gap-x-4">
            <div className="col-span-2 md:col-span-1 ">
              <label className="text-xs text-blue-500">Branch</label>
              <div className="relative">
                <input
                  id="branch"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                  type="text"
                  value={user.branch}
                  disabled
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                    <AiFillLock />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-1 ">
              <label className="text-xs text-blue-500">Role</label>
              <div className="relative">
                <input
                  id="role"
                  className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                  type="text"
                  value={user.role}
                  disabled
                />
                <div className="absolute inset-y-0 right-0 flex items-center px-2">
                  <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                    <AiFillLock />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <label className="text-xs text-blue-500">Mentoring Domains</label>
            <div className="relative">
              <input
                id="phone"
                className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:bg-white"
                type="text"
                value={domain}
                disabled
              />
              <div className="absolute inset-y-0 right-0 flex items-center px-2">
                <span className="bg-gray-200 hover:bg-gray-300 rounded px-2 py-1 text-sm text-gray-600 font-mono cursor-pointer js-password-label">
                  <AiFillLock />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfile;
