import { Search } from 'react-bootstrap-icons';
export const Dropdown = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <button
          className='btn btn-primary btn-sm dropdown-toggle mt-2 '
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'>
          Search
        </button>
        <ul className='dropdown-menu '>
          <li>
            <button className='dropdown-item' type='button'>
              All Secrets
            </button>
          </li>
          <li>
            <button className='dropdown-item' type='button'>
              Email
            </button>
          </li>
          <li>
            <button className='dropdown-item' type='button'>
              Notes
            </button>
          </li>
          <li>
            <button className='dropdown-item' type='button'>
              Wallet
            </button>
          </li>
          <li>
            <button className='dropdown-item' type='button'>
              Weak Passwords
            </button>
          </li>
        </ul>
      </div>
      <div className='input-group   mt-2'>
        <input
          type='search'
          className='form-control ml-5'
          placeholder='Search'
          aria-label='Search'
          aria-describedby='search-addon'
        />
        <span className='input-group-text border-0' id='search-addon'>
          <Search />
          {/* <p> testing for changes</p> */}
        </span>
      </div>
    </>
  );
};
