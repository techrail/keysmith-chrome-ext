/* eslint-disable @typescript-eslint/no-unused-vars */
import { ChangeEvent, useState } from "react";
import { generatePassword } from "../Utils/GeneratePassword";

export const Files = () => {
  const [password, setPassword] = useState<string>("Th1s1smypa33word");
  const [includeUPPERCASE, setIncludeUPPERCASE] = useState<boolean>(true);
  const [PasswordLength, setPasswordLength] = useState<number>(6);
  const [includeL0WERCASE, setIncludeL0WERCASE] = useState<boolean>(true);
  const [includeNUMBER, setIncludeNUMBER] = useState<boolean>(true);
  const [includeSPECIAL, setIncludeSPECIAL] = useState<boolean>(false);

  function handlePasswordLengthChange(event: ChangeEvent<HTMLInputElement>) {
    setPasswordLength(parseInt(event.target.value));
  }
  function handleIncludeUpperCaseChange() {
    setIncludeUPPERCASE(!includeUPPERCASE);
  }

  function handleIncludeLowerCaseChange() {
    setIncludeL0WERCASE(!includeL0WERCASE);
  }

  function handleIncludeNumberChange() {
    setIncludeNUMBER(!includeNUMBER);
  }
  function handleIncludeSpecialChange() {
    setIncludeSPECIAL(!includeSPECIAL);
  }
  function handleGeneratePassword() {
    const newPassword = generatePassword({
      length: PasswordLength,
      IncludeUPPERCASE: includeUPPERCASE,
      IncludeLOWERCASE: includeL0WERCASE,
      IncludeNUMBERS: includeNUMBER,
      IncludeSPECIAL: includeSPECIAL,
    });
    setPassword(newPassword);
  }
  function handleCopy() {
    if (password) {
      navigator.clipboard.writeText(password);
    }
  }

  return (
    <div className=" flex flex-column ml-[10px] mt-[50px] ">
      <h1 className="text-[20px] ml-[10%]">Generate Password</h1>
      <label className="text-[10px] mt-[30px]">Password</label>

      <div className="flex flex-row justify-between">
        <div className="text-[15px]">
          <span>{password}</span>
        </div>
        <button
          type="button"
          className="text-white bg-blue-700 hover:bg-blue-800 font-small 
        rounded-full text-[15px] text-center mr-2 mb-2 dark:bg-blue-600 px-[10px] pb-[1px] dark:hover:bg-blue-700 mr-[18px]"
          onClick={handleCopy}
        >
          copy
        </button>
      </div>

      <div className="flex flex-column">
        <label className="text-[10px] "> PasswordLength</label>

        <div className="flex flex-row ">
          <input
            className="w-[250px]  "
            type="range"
            min={6}
            max={20}
            id="PasswordLength"
            value={PasswordLength}
            onChange={handlePasswordLengthChange}
          />
          <p className="ml-[10px] mt-3">{PasswordLength}</p>
        </div>
      </div>

      <label className="text-[10px]  "> Parameters</label>

      <div>
        <input
          type="checkbox"
          checked={includeUPPERCASE}
          onChange={handleIncludeUpperCaseChange}
        />
        <label className="text-[10px] ml-[5px]">
          Include Uppercase Letters
        </label>
        <br />
        <input
          type="checkbox"
          checked={includeL0WERCASE}
          onChange={handleIncludeLowerCaseChange}
        />
        <label className="text-[10px] ml-[5px]">
          Include Lowercase Letters
        </label>
        <br />
        <input
          type="checkbox"
          checked={includeNUMBER}
          onChange={handleIncludeNumberChange}
        />
        <label className="text-[10px] ml-[5px] ">Include Numbers</label>
        <br />
        <input
          type="checkbox"
          checked={includeSPECIAL}
          onChange={handleIncludeSpecialChange}
        />
        <label className="text-[10px] ml-[5px] ">Include Symbols</label>
      </div>

      <div>
        <button
          type="button"
          onClick={handleGeneratePassword}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl    font-medium rounded-lg text-sm px-[67px] py-2.5 text-center mr-2 mb-2 mt-3"
        >
          Generate Password
        </button>
      </div>
    </div>
  );
};
