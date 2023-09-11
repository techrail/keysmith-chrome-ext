
import { HouseFill } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { FileLock2Fill } from "react-bootstrap-icons";
import { GearFill } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <footer className="footer">
      <HouseFill className="icon" />
      <StarFill className="icon" />
      <Plus className="icon" size={25}/>
      <FileLock2Fill className="icon" />
      <GearFill className="icon" />
    </footer>
  );
};
