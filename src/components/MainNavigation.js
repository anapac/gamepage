import React from 'react';

import './MainNavigation.css';

class MainNavigation extends React.Component {
  componentDidMount () {
    const mainNav = document.querySelector('nav.main-nav');
    window.addEventListener('scroll', function(ev) {
      if (window.scrollY > 225) {
        mainNav.classList.add('main-nav-scrolled');
      } else if (window.scrollY < 220) {
        mainNav.classList.remove('main-nav-scrolled');
      }
    });
  } // componentDidMount()

  render () {
    return (
      <nav className="main-nav">
          <a>Link 1</a>
          <a>Link 2</a>
          <a>Link 3</a>
          <a>Link 4</a>
          <a>Link 5</a>
          <a>Link 6</a>
        </nav>
    );
  } // render()
} // class MainNavigation

export default MainNavigation;
