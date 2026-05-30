// Home.tsx

import { Text } from '@chakra-ui/react';
import heroImg from 'assets/bookshelf.jpg'

function Home() {
  return (
    <div>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="Bookshelf Image" />
        </div>
        <div>
          <h1>I am JahNoah</h1>
          <p>
            Artist | Technologist | Yogi
          </p>
        </div>
        {/* <button
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Times clicked: {count}
        </button> */}
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Learn more about JahNoah</p>
          <ul>
            <li>
              <a href="https://github.com/onlyjah/jah" target="_blank">
                Resume and Blogs
              </a>
            </li>
            <li>
              <a href="https://github.com/onlyjah" target="_blank">
                My Github Account
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Reach out any time</h2>
          <Text>mail@JahNoah.com</Text>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </div>
  );
}

export default Home;