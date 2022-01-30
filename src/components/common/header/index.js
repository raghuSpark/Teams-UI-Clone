import React from 'react';
import './header.css';

function Header() {
  return (
    <div className='header'>
      <div className="header-menu">
        <i class="fi fi-rr-layout-fluid"></i>
      </div>
      <div className="header-leftFold">
        <label className='header-label'>Microsoft Teams</label>
      </div>
      <div className="header-rightFold">
        <div className="header-search">
          <i class="fi fi-rr-search"></i>
          <input placeholder='Search' />
        </div>
        <div className='header-profile'>
          <div className='header-options'>
            <i class="fi fi-rr-menu-dots"></i>
          </div>
          <img src="https://cdn-icons.flaticon.com/png/128/2202/premium/2202112.png?token=exp=1643463586~hmac=3428cfbd883d4be6b8ee83b7d79371cf" alt="avatar" className="header-avatar" />
        </div>
      </div>
    </div>
  );
}

export default Header;
