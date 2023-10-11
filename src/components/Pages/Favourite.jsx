import { Dropdown } from "../Dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Favourite = () => {
  const favcontactList = useSelector((state) => state.Favcontacts);
  console.log(favcontactList);

  const mapcontact = favcontactList.map((prevfavcontact) => (
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
