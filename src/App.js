import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  componentDidMount() {
    const mainNav = document.querySelector('nav.main-nav');
    window.addEventListener('scroll', function(ev) {
      if (window.scrollY > 225) {
        mainNav.classList.add('main-nav-scrolled');
      } else if (window.scrollY < 220) {
        mainNav.classList.remove('main-nav-scrolled');
      }
    });

    const scrollToTop = document.getElementsByClassName('top');
    Array.prototype.forEach.call(scrollToTop, topLink => {
      topLink.addEventListener('click', function(ev) {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
      });
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <nav className="main-nav">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
          <a href="#">Link 4</a>
          <a href="#">Link 5</a>
          <a href="#">Link 6</a>
        </nav>

        <main>
          <h2>Lorem ipsum dolor sit amet</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/5Jj3wZVc7nw" frameborder="0" allowfullscreen></iframe>
          <p className="top">&lt; Top &gt;</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/R_raXzIRgsA" frameborder="0" allowfullscreen></iframe>
          <p className='top'>&lt; Top &gt;</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/PQqUTigWKHY" frameborder="0" allowfullscreen></iframe>
          <p className='top'>&lt; Top &gt;</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad asperiores commodi maiores totam, sed aliquam accusamus, minus magni distinctio repudiandae architecto. Nihil harum, voluptatem dolorem quisquam reprehenderit quasi illo reiciendis?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem laboriosam impedit enim sapiente. Vero voluptate, doloremque eos autem quae animi quisquam fugit pariatur asperiores nemo ab, temporibus dolores assumenda perferendis?
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi numquam minus quidem porro, illum necessitatibus. Reiciendis voluptate temporibus quos soluta expedita odio repellendus, minus deleniti consectetur qui itaque. Ex, soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim et illum adipisci, iusto impedit nisi alias. Numquam velit delectus unde, sunt impedit at consequatur, illum corrupti id obcaecati officiis error?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus voluptas voluptatum aspernatur reiciendis expedita incidunt nesciunt recusandae? Error odio dolor eius, deserunt esse maxime necessitatibus sequi. Veritatis nisi quasi tempora?
          </p>
        </main>

        <footer>
          Copyright &copy; 2017
          <p className='top'>&lt; Top &gt;</p>
        </footer>
      </div>
    );
  }
}

export default App;
