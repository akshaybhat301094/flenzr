import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import Lottie from 'lottie-react';
import loginYoga from '../../../../../../../assets/Animations/login-yoga.json';
import Typography from '@mui/material/Typography/Typography';
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export function SignIn() {
  const [age, setAge] = React.useState('');
  const { t } = useTranslation();

  const outerBox = { backgroundColor: '#02021c' };
  const centerCard = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };

  return (
    <div className="w-screen h-screen" style={outerBox}>
      <Card className="w-1/2 absolute" style={centerCard}>
        <div className="flex h-3/4">
          <Card className="w-1/2">
            <Lottie
              className=""
              animationData={loginYoga}
              loop={true}
              renderer="svg"
            />
          </Card>
          <div className="w-1/2 p-10 flex justify-start place-items-stretch">
            <Typography className="uppercase" variant="h6" component="h6">
              <strong>Sign in as</strong>
            </Typography>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={age}
              label="Age"
              size="small"
              onChange={handleChange}
              className="self-start mx-10"
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Flenzr</MenuItem>
              <MenuItem value={20}>Brand</MenuItem>
            </Select>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
