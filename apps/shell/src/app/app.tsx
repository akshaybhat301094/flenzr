import * as React from 'react';
import { Link, Route, Routes } from 'react-router-dom';

const Social = React.lazy(() => import('social/Module'));

export function App() {
  return (
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
        <Route path="/" element={<></>} />

        <Route path="/social" element={<Social customProps={10} />} />
      </Routes>
    </React.Suspense>
  );
}

export default App;
