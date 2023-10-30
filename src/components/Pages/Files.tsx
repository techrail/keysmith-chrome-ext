import { ContentCopy } from '@mui/icons-material';

export const Files = () => {
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
          />
          <button
            type='button'
            className='border border-primaryBorder text-primary rounded px-2 py-1 w-[30%]'>
            <ContentCopy style={{ height: 16, width: 16 }} />
          </button>
        </div>
      </div>

      <div className='flex flex-col justify-center items-start w-full'>
        <label className='text-primary text-sm font-semibold'>Length</label>
        <input
          className='text-md w-full h-8 rounded p-2 bg-primaryBorder text-primary'
          type='number'
          placeholder='Length of the password...'
        />
      </div>

      <div className='flex flex-col justify-center items-start w-full'>
        <p className='text-primary text-sm'>Parameters</p>
        <div>
          <input type='checkbox' />
          <label className='text-primary text-sm px-2'>Capital Letters</label>
        </div>
        <div>
          <input type='checkbox' />
          <label className='text-primary text-sm px-2'>Small Letters</label>
        </div>
        <div>
          <input type='checkbox' />
          <label className='text-primary text-sm px-2'>Numbers</label>
        </div>
        <div>
          <input type='checkbox' />
          <label className='text-primary text-sm px-2'>Symbols</label>
        </div>
      </div>
      <section className='w-full'>
        <button
          type='button'
          className='w-full text-white py-2 font-extrabold uppercase bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl rounded-lg text-sm text-center'>
          Generate Password
        </button>
      </section>
    </main>
  );
};
