import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
const Submenu = ({nombre, data , setSelected , tipo}) => {
  const [openMenus, setOpenMenus] = useState({});

  const handleClick = (id , tipo) => {
    setSelected({id: id, tipo: tipo})
    
    
  }

  const toggleMenu = (menu) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  

  return (
    <>
      <div
        className="flex justify-between items-center cursor-pointer hover:font-bold rounded-lg p-2 shadow-md "
        onClick={() => toggleMenu("menu1")}
      >
        <span>{nombre}</span>
        {openMenus["menu1"] ? (
          <ChevronUpIcon className="size-4" />
        ) : (
          <ChevronDownIcon className="size-4" />
        )}
      </div>
      <div
        className={`${
          openMenus["menu1"] ? "menu-enter-active" : "menu-leave-active"
        } transition-all duration-500 pl-2 overflow-hidden overflow-y-auto h-[60vh]`}
      >
        {openMenus["menu1"] &&
          data.map((datos) => (
            <div
              className="hover:bg-slate-600 rounded-lg cursor-pointer py-2 px-3"
              key={datos.id}
              onClick={() => handleClick(datos.id, tipo)}
            >
              {datos.name}
              
            </div>
          ))}
      </div>
    </>
  );
};

export default Submenu;
