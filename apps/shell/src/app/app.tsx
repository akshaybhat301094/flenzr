import { ThemeProvider } from '@mui/material';
import * as React from 'react';
import { defaultTheme } from '../../../../libs/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShellBar from './components/ShellBar/ShellBar';

const SignUp = React.lazy(
  () => import('./components/Onboarding/SignUp/SignUp')
);
const SignIn = React.lazy(
  () => import('./components/Onboarding/SignIn/SignIn')
);
const LandingPage = React.lazy(() => import('./components/Landing/Landing'));

export function App() {
  const withAutherization = false;
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Suspense fallback={null}>
        {withAutherization && <ShellBar />}
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
