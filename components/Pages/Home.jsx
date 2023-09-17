import Contacts from "../Utils/Contacts";
import { useState } from "react";

export const Home = () => {
  const [contacts] = useState(Contacts);

  const mapcontact = contacts.map((prevcontact) => (
    <div className="Maintext" key={prevcontact.id}>
      {prevcontact.Maintext}
      <br />
      <span className="BottomText"> {prevcontact.Bottomtext}</span> <hr />
    </div>

    
  ));
  return <div className="contacts">{mapcontact}</div>;
};
