import { RootState } from "../../store/store";
import { Dropdown } from "../Dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Home = () => {
  const contactList = useSelector((state: RootState) => state.contacts);
  console.log(contactList);

  const mapcontact = contactList.map((prevcontact) => (
    <div className="text-[15px] ml-[30px]" key={prevcontact.id}>
      {prevcontact.mainText}

      <br />
      <span className="text-[10px]"> {prevcontact.bottomText}</span> <hr />
    </div>
  ));
  return (
    <>
      <Dropdown />
      <div className="overflow-y-scroll ">{mapcontact}</div>
    </>
  );
};