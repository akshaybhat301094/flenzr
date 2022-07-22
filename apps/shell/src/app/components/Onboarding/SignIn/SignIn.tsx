import React from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import Lottie from 'lottie-react';
import loginYoga from '../../../../../../../assets/Animations/login-yoga.json';
import Typography from '@mui/material/Typography/Typography';
import CustomSelect from '../micro/CustomSelect';
import SignInForm from './SignInForm';

export function SignIn() {
  const { t } = useTranslation();

  const outerBox = { backgroundColor: '#02021c' };
  const centerCard = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };

  return (
    <div className="w-screen h-screen" style={outerBox}>
      <Card className="w-3/4 absolute" style={centerCard}>
        <div className="flex h-3/4">
          <Card className="w-1/2">
            <Lottie
              className=""
              animationData={loginYoga}
              loop={true}
              renderer="svg"
            />
          </Card>
          <div className="w-1/2 p-10 flex flex-wrap justify-start">
            <Typography className="uppercase" variant="h6" component="h6">
              <strong>Sign in as</strong>
            </Typography>
            <div className="mx-4 -mt-1">
              <CustomSelect></CustomSelect>
            </div>
            <div className="w-full">
              <SignInForm></SignInForm>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
