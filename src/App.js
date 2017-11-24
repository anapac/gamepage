import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MainNavigation from './components/MainNavigation';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import YoutubeVideo from './components/YoutubeVideo';

class App extends Component {
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

        <MainNavigation />

        <main>
          <h2>Lorem ipsum dolor sit amet</h2>
          <YoutubeVideo videoId="5Jj3wZVc7nw" />

          <ScrollToTop />
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
          <YoutubeVideo videoId="R_raXzIRgsA" />

          <ScrollToTop />
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
          <YoutubeVideo videoId="PQqUTigWKHY" />

          <ScrollToTop />
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

        <Footer />
      </div>
    );
  }
}

export default App;
