import * as React from 'react';
import { Link } from 'react-router-dom';

export function LandingPage() {
  return (
    <>
      <h1> This is the landing page</h1>
      <Link to="/signup">Signup</Link>
      <Link to="/signin">Signin</Link>
    </>
  );
}

export default LandingPage;
