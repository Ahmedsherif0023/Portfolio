import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Photo from "../../assets/MyPhoto.png";
import PDF from "../../CV.pdf";

const AboutShefo = () => {
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
      <main className="abtme">
        <h1 className="aboutme">About Me</h1>

        <p className="info">A little bit info about me</p>
        <br />
  <ul className="infoUl">
          <li>
            <label className="a">Name:<label className="xzxc aa"> Ahmed Sherif</label></label>
            
          </li>
          <li>
            <label className="b">Date Of Birth:<label className="xzxc bb">December 08,2002</label></label>
            
          </li>
          <li>
            <label className="c">Address:<label className="xzxc cc">Tanta | El-gharbia | Egypt</label></label>
            
          </li>
          <li>
            <label className="d">Zip Code: <label className="xzxc dd">31511</label></label>
            
          </li>
          <li>
            <label className="e">E-mail:<label className="xzxc ee">ahmedsherifoo23@gmail.com</label></label>
            
          </li>
          <li>
            <label className="f">Phone:<label className="xzxc ff"> +201274375560</label></label>
          </li>
          <li><label className="f z"><label className="pj"> 10</label> Projects Completed</label></li>
          <li> <a href="https://aqua-loleta-32.tiiny.site" target="_blank">
            <button className="f z b">Download CV</button>
          </a></li>
  </ul>
  <img className="img" src={Photo} alt="MyPhoto" />
  
  
          {/* <a href={PDF} download="CV.pdf">
            <button className="f z b">Download CV</button>
          </a> */}
      </main>
      <Footer />
    </>
  );
};

export default AboutShefo;
