import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import Submenu from "./Submenu";
import { DataNPC } from "../data/dataApi";
import { DataBosses } from "../data/dataBosses";
import { DataClases } from "../data/dataClases";
const Sidebar = ({setSelected}) => {
  
    

  return (
    <div className="w-full h-full  p-2 bg-gray-800 text-white flex flex-col">
      <div className="p-4 font-bold text-lg">Menu</div>
      <div className="space-y-2 w-full h-full p-2 ">
         <Submenu nombre={"Clases"} data={DataClases.data} setSelected={setSelected} tipo={"clase"}/>
         <Submenu nombre={"Personajes NPC"} data={DataNPC.data} setSelected={setSelected} tipo={"npc"}/>
         <Submenu nombre={"Jefes"} data={DataBosses.data} setSelected={setSelected} tipo={"jefe"} />
         
        
      </div>
    </div>
  );
};

export default Sidebar;
