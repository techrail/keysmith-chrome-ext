import { RootState } from '../../store/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Home = () => {
  const contactList = useSelector((state: RootState) => state.contacts);

  const mapcontact = contactList.map(prevcontact => (
    <div className='border-b border-primaryBorder p-2' key={prevcontact.id}>
      <p className='text-primary'>{prevcontact.mainText}</p>
      <p className='text-xs text-primary'> {prevcontact.bottomText}</p>
    </div>
  ));
  return <div className='h-full w-full px-2'>{mapcontact}</div>;
};
