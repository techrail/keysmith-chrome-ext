import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store/store';

export const Add = () => {
  const navigate = useNavigate();

  const squares = useSelector((state: RootState) => state.icons);
  const squareElements = squares.map(square => (
    <div
      className='flex flex-col items-center justify-center gap-4 p-2 border border-primaryBorder rounded cursor-pointer text-2xl'
      key={square.id}
      onClick={() => {
        let path = square.route;
        navigate(path);
      }}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='30'
        height='30'
        fill='currentColor'
        className='text-primary'
        viewBox='0 0 16 16'>
        <path d={square.path} />
      </svg>
      <p className='text-sm text-center text-primary font-medium'>
        {square.name}
      </p>
    </div>
  ));
  return (
    <div className='h-full w-full flex items-center justify-center'>
      <div className='h-half w-full grid grid-cols-3 gap-4 text-center border border-primaryBorder rounded p-4'>
        {squareElements}
      </div>
    </div>
  );
};
