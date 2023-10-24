export const Files = () => {
  return (
    <div className=" flex flex-column ml-[10px] mt-[50px] ">
      <h1 className="text-[20px] ml-[10%]">Generate Password</h1>
      <label className="text-[10px] mt-[30px]">Password</label>
      
      <div className="flex flex-row justify-between">
        <div className="text-[15px]">
          <span>Th1s1smypa33word</span>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-small 
        rounded-full text-[15px] text-center mr-2 mb-2 dark:bg-blue-600 px-[10px] pb-[1px] dark:hover:bg-blue-700 mr-[18px]"
        >
          copy
        </button>
      </div>

      
      <div className="flex flex-column"> 
        <label className="text-[10px] "> Length</label>
        
      
      <input
        className="text-[10px] ml-[2px] mt-[5px] w-[200px]"
        type="text"
        placeholder="Length of the password..."
      /></div>
     
      

      <label className="text-[10px] mt-[20px] "> Parameters</label>
      
      <div>
        
        <input type="checkbox" />
        <label className="text-[10px] ml-[5px]">Capital Letters</label>
        <br />
        <input type="checkbox" />
        <label className="text-[10px] ml-[5px]">Small Letters</label>
        <br />
        <input type="checkbox" />
        <label className="text-[10px] ml-[5px] ">Numbers</label>
        <br />
        <input type="checkbox" />
        <label className="text-[10px] ml-[5px] ">Symbols</label>
      </div>

      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl    font-medium rounded-lg text-sm px-[67px] py-2.5 text-center mr-2 mb-2 mt-3"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};
