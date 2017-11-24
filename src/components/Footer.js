import React from 'react';

import './Footer.css';

import ScrollToTop from './ScrollToTop';

class Footer extends React.Component {
  render () {
    return (
      <footer>
        Copyright &copy; 2017
        <ScrollToTop />
      </footer>
    );
  } // render()
} // class Footer

export default Footer;
