import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Card from '@mui/material/Card';
import Lottie from 'lottie-react';
import loginYoga from '../../../../../../../assets/Animations/login-yoga.json';
import Typography from '@mui/material/Typography/Typography';
import CustomSelect from '../micro/CustomSelect';
import SignInForm from './SignInForm';
import {
  ACCOUNT_TYPES,
  ACCOUNT_SETTINGS,
} from '../../../../../../Constant/AccountType';
import BrandSignInForm from './BrandSignInForm';

export function SignIn() {
  const { t } = useTranslation();
  const [userType, setUserType] = useState(ACCOUNT_TYPES[0]);
  const colorList = ['#05f', '#10d876'];
  const [color, setColor] = useState(colorList[0]);

  const outerBox = { backgroundColor: '#02021c' };
  const centerCard = {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  const handleChange = (change: any) => {
    setColor(colorList[ACCOUNT_TYPES.indexOf(change)]);
    setUserType(change);
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
          <div className="w-1/2 p-10 flex flex-wrap items-start content-start">
            <Typography className="uppercase" variant="h6" component="h6">
              <strong>{t('signInAs')}</strong>
            </Typography>
            <div className="mx-4 -mt-1">
              <CustomSelect
                list={ACCOUNT_TYPES}
                selectedOption={userType}
                onChangeSelection={(e: any) => {
                  handleChange(e);
                }}
                color={color}
              ></CustomSelect>
            </div>
            <div className="w-full mt-10">
              {userType === ACCOUNT_SETTINGS.Flenzr.id ? (
                <SignInForm></SignInForm>
              ) : (
                <BrandSignInForm></BrandSignInForm>
              )}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default SignIn;
