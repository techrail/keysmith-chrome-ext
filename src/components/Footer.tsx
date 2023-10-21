import { HouseFill } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { FileLock2Fill } from "react-bootstrap-icons";
import { GearFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-around items-center text-center h-[50px] mt-auto p-2">
      <Link to="/">
        <HouseFill className="  mt-[10px]" />
      </Link>
      <Link to="/favourite">
        <StarFill className=" mt-[10px]" />
      </Link>

      <Link to="/add">
        <Plus className=" mt-[10px]" size={25} />
      </Link>
      <Link to="/files">
        <FileLock2Fill className=" mt-[10px]" />
      </Link>
      <Link to="/settings">
        <GearFill className=" mt-[10px]" />
      </Link>
    </footer>
  );
};