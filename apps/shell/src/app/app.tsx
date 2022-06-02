import { Button, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { defaultTheme } from '../../../../libs/theme';

const Social = React.lazy(() => import('social/Module'));

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <React.Suspense fallback={null}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/social">Social</Link>
          </li>
        </ul>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Button>Button in shell</Button>
              </>
            }
          />

          <Route path="/social" element={<Social customProps={10} />} />
        </Routes>
      </React.Suspense>
    </ThemeProvider>
  );
}

export default App;
