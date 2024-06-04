import React from "react";
import { ListItem, ListItemPrefix } from "@material-tailwind/react";

import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const ListiItemBar = ({id, nombre , setSelected}) => {

    const handleClick = () => {
        setSelected(id)
    }
  return (
    <ListItem onClick={handleClick} >
      <ListItemPrefix>
        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
      </ListItemPrefix>
      {nombre}
    </ListItem>
  );
};

export default ListiItemBar;
