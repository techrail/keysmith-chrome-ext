import { useState } from "react";
import FavContacts from "../Utils/FavContacts";
import { Dropdown } from "../Dropdown";
export const Favourite = () => {
  const [favcontacts] = useState(FavContacts);

  const mapcontact = favcontacts.map((prevfavcontact) => (
    <div className="text-[15px] ml-[30px]" key={prevfavcontact.id}>
      {prevfavcontact.Maintext}
      <br />
      <span className="text-[10px]"> {prevfavcontact.Bottomtext}</span> <hr />
    </div>
  ));
  return (
    <>
      <Dropdown />
      <div className="contacts">{mapcontact}</div>
    </>
  );
};
