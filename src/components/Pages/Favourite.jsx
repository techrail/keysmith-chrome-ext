
import { useState } from "react";
import FavContacts from "../Utils/FavContacts";
export const Favourite = () => {
  const [favcontacts] = useState(FavContacts);

  const mapcontact = favcontacts.map((prevfavcontact) => (
    <div className="Maintext" key={prevfavcontact.id}>
      {prevfavcontact.Maintext}
      <br />
      <span className="BottomText"> {prevfavcontact.Bottomtext}</span> <hr />
    </div>
    ));
  return (
    <div className="contacts">{mapcontact}</div>
  )
}
