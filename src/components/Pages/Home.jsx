import { Dropdown } from "../Dropdown";
import Contacts from "../Utils/Contacts";
import { useState } from "react";

export const Home = () => {
  const [contacts] = useState(Contacts);

  const mapcontact = contacts.map((prevcontact) => (
    <div className="text-[15px] ml-[30px]" key={prevcontact.id}>
      {prevcontact.Maintext}
      <br />
      <span className="text-[10px]"> {prevcontact.Bottomtext}</span> <hr />
    </div>
  ));
  return (
    <>
      <Dropdown />
      <div className="overflow-y-scroll ">{mapcontact}</div>
    </>
  );
};
