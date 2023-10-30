
import { ContentCopy } from '@mui/icons-material';

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

    <main className='h-full w-full flex flex-col justify-center items-center p-4 gap-4'>
      <p className='text-primary text-lg font-bold'>Generate Password</p>
      <div className='flex flex-col justify-center items-start w-full'>
        <label className='text-primary text-sm font-semibold'>Password</label>
        <div className='flex flex-row w-full gap-2 h-8'>
          <input
            className='text-md w-full rounded p-2 bg-primaryBorder text-primary'
            type='text'
            placeholder='Th1s1smypa33word'
            value={password}
          />
          <button
          onClick={handleCopy}
            type='button'
            className='border border-primaryBorder text-primary rounded px-2 py-1 w-[30%]'>
              
            <ContentCopy style={{ height: 16, width: 16 }}  />
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-center items-start w-full'>
        <label className='text-primary text-sm font-semibold'>Password Length</label>



        

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
      <section className='w-full'>
        <button

          type="button"
          onClick={handleGeneratePassword}
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-[67px] py-2.5 text-center mr-2 mb-2 mt-3"
        >Generate Password
        </button>
      </section>
    </main>
  );
};
