import { HouseFill } from "react-bootstrap-icons";
import { StarFill } from "react-bootstrap-icons";
import { Plus } from "react-bootstrap-icons";
import { FileLock2Fill } from "react-bootstrap-icons";
import { GearFill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <Link to="/">
        <HouseFill className="icon" />
      </Link>
      <Link to="/Favourite">
        <StarFill className="icon" />
      </Link>

      <Link to="/Add">
        <Plus className="icon" size={25} />
      </Link>
      <Link to="/Files">
        <FileLock2Fill className="icon" />
      </Link>
      <Link to="/Settings">
        <GearFill className="icon" />
      </Link>
    </footer>
  );
};
