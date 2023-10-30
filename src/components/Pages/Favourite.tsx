import { RootState } from '../../store/store';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export const Favourite = () => {
  const favcontactList = useSelector(
    (state: RootState) => state.contactReducer.favContacts,
  );

  const mapcontact = favcontactList.map(prevfavcontact => (
    <div className='border-b border-primaryBorder p-2' key={prevfavcontact.id}>
      <p className='text-primary'>{prevfavcontact.mainText}</p>
      <p className='text-xs text-primary'> {prevfavcontact.bottomText}</p>
    </div>
  ));
  return <div className='h-full w-full px-2'>{mapcontact}</div>;
};
