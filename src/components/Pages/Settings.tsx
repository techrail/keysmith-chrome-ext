import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { Theme, setTheme } from '../../features/themeSlice';
import {
  DarkModeRounded,
  DesktopMacRounded,
  LightModeRounded,
} from '@mui/icons-material';

interface ThemeSelectorProps {
  theme: Theme;
}

const ThemeSelector = ({ theme }: ThemeSelectorProps) => {
  switch (theme) {
    case 'light':
      return <LightModeRounded style={{ height: 16, width: 16 }} />;
    case 'dark':
      return <DarkModeRounded style={{ height: 16, width: 16 }} />;
    default:
      return <DesktopMacRounded style={{ height: 16, width: 16 }} />;
  }
};

export const Settings = () => {
  const theme = useSelector((state: RootState) => state.themeReducer.theme);

  const themeDispatch = useDispatch();

  // Cycling thru themes
  const handleThemeClick = () => {
    if (theme === 'light') {
      themeDispatch(setTheme('dark'));
    } else if (theme === 'dark') {
      themeDispatch(setTheme('system'));
    } else {
      themeDispatch(setTheme('light'));
    }
  };

  return (
    <main className='h-full w-full flex flex-col px-4 pb-4'>
      <section className='w-full flex flex-col justify-center items-center my-2'>
        <img className='w-40' src='keysmith.png' alt='logo' />
        <p className='text-primary font-bold'>
          Keysmith{' '}
          <span className='bg-primary font-bold text-primaryBg rounded-full px-1 text-xs'>
            0.0.1
          </span>
        </p>
      </section>
      <section className='h-full w-full flex flex-col justify-start items-center p-4 my-2 border-t-2 border-primaryBorder'>
        <div className='w-full flex justify-between items-center'>
          <div>
            <p className='text-primary font-bold'>Theme</p>
          </div>
          <button
            className='bg-primary px-2 pb-1 rounded-full text-primaryBg'
            onClick={handleThemeClick}>
            <ThemeSelector theme={theme} />
          </button>
        </div>
      </section>
    </main>
  );
};
