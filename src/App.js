import { useState } from 'react';
import './App.css';
import Banner from './Components/Banner/Banner';
import Contact from './Components/Contact/Contact';
import Education from './Components/Education/Education';
import Features from './Components/Features/Features';
import Footer from './Components/Footer/Footer';
import HamburgerMenu from './Components/HamburgerMenu/HamburgerMenu';
import Header from './Components/Header/Header';
import News from './Components/News/News';
import Referral from './Components/Referral/Referral';
import Stats from './Components/Stats/Stats';
import Table from './Components/Table/Table';
import WhyNobitex from './Components/WhyNobitex/WhyNobitex';
function App() {

  const [showHamburger, setShowHamburger] = useState(false)

  return (
    <div className="App">
      <section className={showHamburger ? "show" : "hamburger-menu-section"}>
        <HamburgerMenu showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
      </section>
      <section className="header-section">
        <Header showHamburger={showHamburger} setShowHamburger={setShowHamburger} />
      </section>
      <section className="banner-section">
        <Banner />
      </section>
      <section className="table-section">
        <Table />
      </section>
      <section className="news-section">
        <News />
      </section>
      <section className="why-nobitex-section">
        <WhyNobitex />
      </section>
      <section className="features-section">
        <Features />
      </section>
      <section className="stats-section">
        <Stats />
      </section>
      <section className="education-section">
        <Education />
      </section>
      <section className="referral-section">
        <Referral />
      </section>
      <section className="contact-section">
        <Contact />
      </section>
      <section className="footer-section">
        <Footer />
      </section>
    </div>
  );
}

export default App;
