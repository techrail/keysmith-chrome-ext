import { RootState } from "../../store/store";
import { Dropdown } from "../Dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Favourite = () => {
  const favcontactList = useSelector((state: RootState) => state.favContacts);
  console.log(favcontactList);

  const mapcontact = favcontactList.map((prevfavcontact) => (
    <div className="text-[15px] ml-[30px]" key={prevfavcontact.id}>
      {prevfavcontact.mainText}
      <br />
      <span className="text-[10px]"> {prevfavcontact.bottomText}</span> <hr />
    </div>
  ));
  return (
    <>
      <Dropdown />
      <div className="contacts">{mapcontact}</div>
    </>
  );
};