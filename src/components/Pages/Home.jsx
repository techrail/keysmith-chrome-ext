import { Dropdown } from "../Dropdown";
import { useSelector } from "react-redux/es/hooks/useSelector";

export const Home = () => {
  const contactList = useSelector((state) => state.contacts);
  console.log(contactList);

  const mapcontact = contactList.map((prevcontact) => (
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
