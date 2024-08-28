import React from 'react';
import Header from '../../components/Header/haeder';
import Footer from '../../components/Footer/footer';
import "./aboutShefo.css"
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
      <Header/>
      <main><h1 className='abouts'>
        My name is Ahmed Sherif , 21 years old <br/> working as  front-end web developer.
      </h1></main>
      <Footer/>
    </>
  );
}

export default AboutShefo;
