import { HouseFill } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { FileLock2Fill } from "react-bootstrap-icons";
import { GearFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="flex flex-row justify-around text-center h-[50px] mt-auto p-2">
      <Link to="/">
        <HouseFill className="  mt-[10px]" />
      </Link>
      <Link to="/Favourite">
        <StarFill className=" mt-[10px]" />
      </Link>

      <Link to="/Add">
        <Plus className=" mt-[10px]" size={25} />
      </Link>
      <Link to="/Files">
        <FileLock2Fill className=" mt-[10px]" />
      </Link>
      <Link to="/Settings">
        <GearFill className=" mt-[10px]" />
      </Link>
    </footer>
  );
};
