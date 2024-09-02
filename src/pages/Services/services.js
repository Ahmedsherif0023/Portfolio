import React from "react";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import Photo from "../../assets/MyPhoto.png";
const Services = () => {
  return (
    <div>
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
        <div className="Services">
          <p className="service">
            {" "}
            <p className="sscc">Services I Offer as a React Developer:</p>
            <ul>
              <li className="a11">
                <p>
                  <section className="sss">
                    1. Custom Web Application Development
                  </section>{" "}
                  I design and build custom web applications using React.js,
                  ensuring they are optimized for performance and tailored to
                  meet your business needs. From interactive dashboards to
                  complex data-driven platforms, I create scalable and
                  responsive solutions.
                  <br />
                </p>
              </li>
              <li className="a22">
                <p>
                  <section className="sss">2.UI/UX Implementation</section> I
                  translate UI/UX designs into functional, pixel-perfect React
                  components. This includes ensuring that applications are
                  visually appealing, intuitive to use, and compatible across
                  various devices and browsers.
                  <br />
                </p>
              </li>

              <li className="a33">
                <p>
                  <section className="sss">3.Testing and Debugging</section> I
                  implement testing strategies (using tools like Jest and React
                  Testing Library) to ensure the reliability of the code and
                  debug any issues that arise during development or after
                  deployment.
                  <br />
                </p>
              </li>
              <li className="a44">
                <p>
                  <section className="sss">4.Maintenance and Support</section> I
                  offer ongoing maintenance and support to ensure your React
                  applications are always up to date, secure, and functioning
                  correctly. This includes updates, bug fixes, and performance
                  improvements.
                  <br />
                </p>
              </li>
            </ul>
          </p>
        </div>

        <img className="img" src={Photo} alt="MyPhoto" />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
