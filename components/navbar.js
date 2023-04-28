import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '@/styles/components/navbar.module.css';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

const Navbar = () => {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowInput(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleSearchClick = (event) => {
    event.preventDefault();
    setShowInput(!showInput);
  };

  const handleSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <nav className={styles.nav}>
        <div className={styles.logo}>
        <h1>Logo</h1>
        </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link href="/">Objetivo</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">Historico</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">Visão Geral</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">Indicadores</Link>
        </li>
        <li className={styles.li}>
          <Link href="/contact">Mapas</Link>
        </li>
      </ul>
      <form ref={inputRef} style={{display:'contents', width:'15%'}}>
        <input
          className={`${styles.inputSearch} ${
            showInput ? styles.inputSearchVisible : ''
          }`}
          type="text"
          placeholder="Search..."
          value={searchValue}
          onChange={handleSearchInput}
        />
        <IconButton style={{ color: 'white' }} aria-label="search" onClick={handleSearchClick}>
          <SearchIcon />
        </IconButton>
      </form>
    </nav>
  );
};

export default Navbar;
