import SearchInput from '../components/SearchInput';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__nav'>
        <h1 className='header__title'>Explore o Mundo do Cinema!</h1>
        <div className='header__text'>
          <p>Powered by</p>
          <img
            className='header__logo'
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg'
            alt='The Movie Data Base Logo'
          />
        </div>
      </div>
      <div className='search'>
        <SearchInput />
      </div>
    </div>
  );
};

export default Header;
