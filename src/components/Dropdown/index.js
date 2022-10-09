import React from "react";

const Dropdown = ({ list, addItem ,selectedItems }) => {
  const isAlreadyAdded = (item,key) => {
    if(selectedItems.includes(item)) {
      return true;
    }
    else
    return false;
  }
  return (
    <div
      id="dropdown"
      className="absolute shadow top-100 bg-white z-40 w-full lef-0 rounded max-h-select overflow-y-auto "
    >
      <div className="flex flex-col w-full">
        {list.map((item, key) => {
          return (
            <div
              key={key}
              className={`cursor-pointer w-full border-gray-100 rounded-t border-b  ${isAlreadyAdded(item,key) ? 'bg-teal-400 hover:none' : 'hover:bg-teal-100'}`}
              onClick={() => isAlreadyAdded(item,key) ? null : addItem(item)}
            >
              <div className="flex w-full items-center p-1 pl-2 border-transparent border-l-2 relative hover:border-teal-100">
                <div className="w-full items-center flex">
                  <div className="mx-2 leading-6 text-sm ">{item}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
