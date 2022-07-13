import { Button } from '@mui/material';
import logo from '../../../../../../assets/Logos/SVG/logo-white.svg';
import wave from '../../../../../../assets/resources/images/wave.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import trans from '../../locales/en/translation';
import Lottie from 'lottie-react';
import influencer from '../../../../../../assets/Animations/influencer-day.json';
import aurora from '../../../../../../assets/Animations/aurora.json';

const LandingPage = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const topBox = {
    backgroundColor: '#02021c',
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      {/* upper half of landing */}
      <div className="w-screen h-3/4 overflow-hidden relative" style={topBox}>
        <Lottie
          className="w-full mx-auto opacity-80"
          animationData={influencer}
          loop={true}
          renderer="svg"
        />
        <img
          className="w-1/4 mt-32"
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            zIndex: 100,
          }}
          src={logo}
          alt="Flenzr"
        />
        <img
          className="w-full -mt-1 absolute bottom-0 -mb-1"
          src={wave}
          alt="Flenzr"
        />
      </div>
      <div className="w-screen h-1/4 bg-white absolute bottom-0 mb-10 overflow-hidden">
        <div className="text-center text-3xl -mt-16">
          <div className="font-bold mb-4 mt-20">{t(trans.landing.subtext)}</div>
          <div className="mx-auto mt-4">
            <Button
              variant="contained"
              className="pr-4"
              color="success"
              size="large"
              onClick={() => navigate('/signup')}
            >
              {t(trans.landing.join)}
            </Button>
            <span className="px-4">or</span>
            <Button
              variant="contained"
              size="large"
              onClick={() => navigate('/signin')}
            >
              {t(trans.landing.login)}
            </Button>
          </div>
        </div>
        <Lottie
          className="h-full mx-auto absolute top-0"
          animationData={aurora}
          style={{
            position: 'absolute',
            top: '10%',
            left: '50%',
            transform: 'translate(-50%, 0%)',
            zIndex: -1,
          }}
          loop={true}
          renderer="svg"
        />
      </div>
    </div>
  );
};

export default LandingPage;

// <div className="w-1/2 p-10">
//           <img className="w-32 mb-4" src={logo} alt="Flenzr" />
//         </div>
//         <Lottie
//           className="w-1/2 mx-auto"
//           animationData={influencer}
//           loop={true}
//           renderer="svg"
//         />
//         <div className="w-1/2 p-10 flex h-screen flex-col">
//           <div className="h-1/3">
//             <Button
//               className="float-right"
//               variant="contained"
//               onClick={() => navigate('/signin')}
//             >
//               {t(trans.landing.login)}
//             </Button>
//           </div>
//
//         </div>
