import { Button } from '@mui/material';
import logo from '../../../../../../assets/Logos/SVG/logo-default.svg';
import backpack from '../../../../../../assets/resources/images/camp-fire-light.svg';
import { Trans } from 'react-i18next';

const LandingPage = () => {
  return (
    <div className="flex w-screen h-screen overflow-hidden">
      <div className="w-1/2 p-10">
        <img className="w-32 mb-4" src={logo} alt="Flenzr" />
        <img className="p-10 w-full" src={backpack} alt="Letsgo" />
      </div>
      <div className="w-1/2 p-10 flex h-screen flex-col">
        <div className="h-1/3">
          <Trans i18nKey="helloWorld" />
          <Button className="float-right" variant="contained">
            login
          </Button>
        </div>
        <div className="text-center text-3xl">
          <div className="inline-block align-text-bottom font-bold">
            Find the right Influencer for your Brand
          </div>
          <Button className="mx-auto mt-24" variant="contained" color="success">
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
