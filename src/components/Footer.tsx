import {
  AddRounded,
  HouseRounded,
  PasswordRounded,
  SettingsRounded,
  StarRounded,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
export const Footer = () => {
  return (
    <footer className='h-[10%] flex flex-row text-primary border-t-2 border-primaryBorder justify-around items-center'>
      <Link to='/'>
        <HouseRounded style={{ height: 18, width: 18 }} />
      </Link>
      <Link to='/favourite'>
        <StarRounded style={{ height: 18, width: 18 }} />
      </Link>
      <Link to='/add'>
        <AddRounded style={{ height: 18, width: 18 }} />
      </Link>
      <Link to='/files'>
        <PasswordRounded style={{ height: 18, width: 18 }} />
      </Link>
      <Link to='/settings'>
        <SettingsRounded style={{ height: 18, width: 18 }} />
      </Link>
    </footer>
  );
};
