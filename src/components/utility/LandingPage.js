import React from 'react';
import { Link } from 'react-router-dom';
import '../../scss/components/LandingPage.scss';



const LandingPage = () => {
  return (
    <section>
      <div id="homeImg"></div>
      <Link to="/login">Join my army</Link>
    </section>
  );
};

export default LandingPage;
