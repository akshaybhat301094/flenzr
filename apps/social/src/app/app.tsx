// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Button } from '@mui/material';
import styles from './app.module.scss';

export function App({ customProps = 0 }) {
  return (
    <>
      <Button variant="contained"> button in social</Button>
    </>
  );
}

export default App;
