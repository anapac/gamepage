import React from 'react';

import './ScrollToTop.css';

class ScrollToTop extends React.Component {
  // componentDidMount () {
    // const scrollToTop = document.getElementsByClassName('top');
    // Array.prototype.forEach.call(scrollToTop, topLink => {
    //   topLink.addEventListener('click', function(ev) {
    //     window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    //   });
    // });
  // } // componentDidMount()

  handleClick (ev) {
    ev.preventDefault();

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  } // handleClick()

  render () {
    return (
      <p className="top" onClick={this.handleClick}>&lt; Top &gt;</p>
    );
  } // render()
} // class ScrollToTop

export default ScrollToTop;
