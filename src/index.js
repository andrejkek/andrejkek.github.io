import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from "./navbar/Navbar";
import Banner from "./banner/Banner";
import Section1 from "./section 1/Section1";
import Section2 from "./section2/Section2";
import Section3 from "./section3/Section3";
import Section4 from "./section4/Section4";
import Section5 from "./section5/Section5";
import Section6 from "./section6/Section6";
import Section7 from "./section7/Section7";
import Section8 from "./section8/Section8";
import Footer from "./footer/Footer";
import Footer2 from "./footer/Footer2";
import Footer3 from "./footer/Footer3";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
      <Banner />
    <Navbar />
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    <Footer/>
      <Footer2/>
      <Footer3/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
