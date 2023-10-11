import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();

  const squares = useSelector((state) => state.Addicons);
  const squareElements = squares.map((square) => (
    <>
      <div
        className="w-[80px] h-[100px] bg-[rgba(255,255,255,0.8)] border text-3xl text-center p-1 border-solid border-[rgba(0,0,0,0.8)]"
        key={square.id}
        onClick={() => {
          let path = square.route;
          navigate(path);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          fill="currentColor"
          className={square.Icon}
          viewBox="0 0 16 16"
        >
          <path d={square.Path} />
        </svg>
      </div>
    </>
  ));
  return (
    <>
      <p className="text-[20px] pl-[20px] mt-[50px]">Select Your Secret</p>
      <hr />

      <div className="ml-[12px] grid grid-cols-3  gap-y-2 overflow-y-scroll ">
        {squareElements}
      </div>
      <hr />
    </>
  );
};
