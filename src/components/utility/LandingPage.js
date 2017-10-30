import React from 'react';
import { Link } from 'react-router-dom';


const LandingPage = () => {
  return (
    <section>
      <p>This is the landing page</p>
      <Link to="/login">Join my army</Link>
    </section>
  );
};

export default LandingPage;
