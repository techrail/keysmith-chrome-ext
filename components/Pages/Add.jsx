import { useState } from "react";
import Icons from "../Utils/Icons";
export const Add = () => {
  // eslint-disable-next-line no-unused-vars
  const [squares, setSquares] = useState(Icons);
  const squareElements = squares.map((square) => (
    <>
      <div  className="box" key={square.id}>
        <p>{square.Name}</p>
      </div>
      
    </>
  ));
  return (
    <>
      <p>
        Select Your Secret <br />
        <hr />
      </p>

      <div className="gridbox">{squareElements}</div>
      <hr />
    </>
  );
};
