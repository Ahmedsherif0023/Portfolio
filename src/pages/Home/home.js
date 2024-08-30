import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Photo from "../../assets/MyPhoto.png";
import { NavLink } from "react-router-dom";
const Home = () => {
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
      <Header />
      <main>

        
        
        
        
        
        
        
        
        
        <div id="hello">
          <label id="xyxy"> Hello!</label>
          <p><label id="xxzz">I'm</label> Ahmed Sherif</p>
          <p>Front-end Web Developer</p>
        </div>
        <>
          <img id="img" src={Photo} alt="My_Photo" />
        </>

        <div id="bttn">
          <NavLink to="/contact">
            <button className="btn">Hire Me</button>
          </NavLink >
        <NavLink to= "/projects">
            <button className="btn">My works</button>
        </NavLink>
          
        </div>







        
      </main>
      <Footer />
    </>
  );
};

export default Home;
