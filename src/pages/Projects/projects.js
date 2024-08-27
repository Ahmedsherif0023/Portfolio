import React from 'react';

const Projects = () => {
  return (
    <>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css"
    />
    <link
      rel="stylesheet"
      href="mobile-screen.css"
      media="(max-width: 800px)"
    />
    <header className="hide-when-mobile">
      <h1>
        SHEFO
      </h1>
      <ul className="flex">
        <li className="main-list">
          <a className="main-link" href="#">
            Home
          </a>
          <ul className="sub-ul">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">Crash Course</a>
            </li>
            <li>
              <a href="">learn in 1h</a>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <a className="main-link" href="#">
            Projects
          </a>
          <ul className="sub-ul">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">CSS Examples</a>
            </li>
            <li className="mini-projects">
              <a href="">mini projects&nbsp; + </a>
              <ul className="sub-sub-ul">
                <li>
                  <a href="">project 1</a>
                </li>
                <li>
                  <a href="">project 2</a>
                </li>
                <li>
                  <a href="">project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="main-list">
          <a className="main-link" href="#">
            Contact
          </a>
          <ul className="sub-ul sub-of-js">
            <li>
              <a href="">coming soon🔥</a>
            </li>
          </ul>
        </li>
      </ul>
    </header>
    <header className="show-when-mobile">
      <h1>
        SHEFO
      </h1>
      <label className="absolute" htmlFor="burger">
        <i className="fas fa-bars" />
      </label>
      <input id="burger" type="checkbox" />
      <div className="show-on-click">
        <div className="main-div">
          <label htmlFor="html">
            Home <i className="fas fa-plus" />
          </label>
          <input id="html" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">Crash Course</a>
            </li>
            <li>
              <a href="">learn in 1h</a>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="css">
            Projects <i className="fas fa-plus" />
          </label>
          <input id="css" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">Full Course</a>
            </li>
            <li>
              <a href="">CSS Examples</a>
            </li>
            <li>
              <label className="mini-projects" htmlFor="mini">
                mini projects <i className="fas fa-plus" />
              </label>
              <input id="mini" type="checkbox" />
              <ul className="sub-sub-div">
                <li>
                  <a href="">project 1</a>
                </li>
                <li>
                  <a href="">project 2</a>
                </li>
                <li>
                  <a href="">project 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="main-div">
          <label htmlFor="js">
            Contact <i className="fas fa-plus" />
          </label>
          <input id="js" type="checkbox" />
          <ul className="sub-div">
            <li>
              <a href="">coming soon🔥</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <main>Projects Page</main>
    <footer>Designed and developed by SHEFO</footer>
  </>
  );
}

export default Projects;
