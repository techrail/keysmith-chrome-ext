import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router-dom";

export const Add = () => {
  const navigate = useNavigate();

  const squares = useSelector((state) => state.Addicons);
  const squareElements = squares.map((square) => (
      <>
        <div
          className="flex-col p-4 items-center justify-center border cursor-pointer w-[80px] h-[80px] bg-[rgba(255,255,255,0.8)]  text-3xl text-center "
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
          <h3 className="text-sm mt-7">{square.Name}</h3>
        </div>
      </>
    ));
  return(
    <div className="flex-col items-center justify-center ">
      <div className="mt-28">
        <h1 className="text-sm text-center">Select a secret password</h1>
      </div>
      <hr className="h-[1.5px] my-6 -mt-[6px] bg-blue-500 border-0 dark:bg-blue-700" />
      <div className="grid grid-cols-3 gap-4 text-center mt-3">
          {squareElements}
          
      </div>
      <hr className="h-[1.5px] mb-6 mt-10 bg-blue-500 border-0 dark:bg-blue-700" />
    </div>
  )
};
