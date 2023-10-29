import { Link } from 'react-router-dom';
import { HouseFill, StarFill, Plus, FileLock2Fill, GearFill } from 'react-bootstrap-icons';

export const Footer = () => {
  return (
    <footer className='h-[10%] flex flex-row border-t-2 border-primaryBorder justify-around items-center'>
      <Link to='/'>
        <HouseFill className='text-primary' />
      </Link>
      <Link to='/favourite'>
        <StarFill className='text-primary' />
      </Link>
      <Link to='/add'>
        <Plus className='text-primary' size={25} />
      </Link>
      <Link to='/files'>
        <FileLock2Fill className='text-primary' />
      </Link>
      <Link to='/settings'>
        <GearFill className='text-primary' />
      </Link>
    </footer>
  );
};