import { ThemeProvider } from '@mui/material';
import React, { lazy } from 'react';
import { defaultTheme } from '../../../../libs/theme';
import { Routes, Route } from 'react-router-dom';

const SignUp = lazy(() => import('./components/Onboarding/SignUp/SignUp'));
const SignIn = lazy(() => import('./components/Onboarding/SignIn/SignIn'));
const LandingPage = lazy(() => import('./components/Landing/Landing'));

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          {/* <Route path='*' element={<Page404 />} /> */}
        </Routes>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
