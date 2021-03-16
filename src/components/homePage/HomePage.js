import React, { useState, useEffect } from 'react';
import NavigationBar from './navigationBar';
import Header from './header';
import Main from './main';
import Footer from './footer';
import { addressBook } from './const';
import './styles.css';

export default function HomePage() {
  const [navCollapsed, setNavCollapsed] = useState(true);
  const [currentAddressBook, setCurrentAddressBook] = useState(
    () => addressBook
  );
  const [inputValue, setInputValue] = useState(() => '');

  function handleClick() {
    setNavCollapsed(navCollapsed === true ? false : true);
  }

  function handleChange(event) {
    if (event.target.value === '') setInputValue('');
    else setInputValue(event.target.value);
    const filteredAddressBook = currentAddressBook.filter(address => {
      //console.log(inputValue)
      if (address.name.toLowerCase().search(inputValue.toLowerCase()) !== -1)
        return true;
      else if (
        address.email.toLowerCase().search(inputValue.toLowerCase()) !== -1
      )
        return true;
      else if (address.phone.search(inputValue.toLowerCase()) !== -1)
        return true;
      else return false;
    });
    setCurrentAddressBook(filteredAddressBook);
    console.log(inputValue);
  }

  return (
    <div>
      <NavigationBar style={{ width: navCollapsed === true ? '0%' : '15%' }} />
      <div
        className='home-page'
        style={{
          marginLeft: navCollapsed === true ? '0%' : '15%',
        }}
      >
        <Header value={inputValue} handleChange={handleChange} />
        <Main handleClick={handleClick} addressBook={currentAddressBook} />
        <Footer />
      </div>
    </div>
  );
}
