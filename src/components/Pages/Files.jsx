export const Files = () => {
  return (
    <div className="ml-[10px] mt-[50px]">
      <h1 className="text-[20px] ml-[10%]">Generate Password</h1>
      <label className="text-[10px] mt-[30px]">Password</label>
      <br />

      <textarea className="text-[15px]" rows={1} cols={20}>
        Th1s1smypa33word
      </textarea>
      <br />
      <label className="text-[10px] mt-[30px]"> Length</label>
      <input
        className="text-[10px] ml-2.5"
        type="text"
        placeholder="Length of the password..."
      />
      <br />
      <label className="text-[15px]  "> Parameters</label>
      <br />
      <input type="radio" />
      <label className="text-[10px] ml-[5px]">Capital Letters</label>
      <br />
      <input type="radio" />
      <label className="text-[10px] ml-[5px]">Small Letters</label>
      <br />
      <input type="radio" />
      <label className="text-[10px] ml-[5px] ">Numbers</label>
      <br />
      <input type="radio" />
      <label className="text-[10px] ml-[5px] ">Symbols</label>
    </div>
  );
};
