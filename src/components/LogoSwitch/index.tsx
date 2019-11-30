import React from 'react';
import { Icon } from '@mdi/react';
import {
  mdiCowboy,
  mdiDoctor,
  mdiPirate,
  mdiWorker,
  mdiBabyFaceOutline,
  mdiFaceAgent,
  mdiFaceWoman,
  mdiRobber,
  mdiRobot,
  mdiEmoticonDevilOutline
} from '@mdi/js';

const logoList = [
  mdiCowboy,
  mdiDoctor,
  mdiPirate,
  mdiWorker,
  mdiBabyFaceOutline,
  mdiFaceAgent,
  mdiFaceWoman,
  mdiRobber,
  mdiRobot,
  mdiEmoticonDevilOutline
];

const LogoSwitch: React.FC = () => {
  const [logoIndex, setLogoIndex] = React.useState<number>(0);

  React.useEffect(() => {
    setTimeout(() => {
      setLogoIndex((state: number) => {
        if (state === logoList.length - 1) {
          return 0;
        } else {
          return (state += 1);
        }
      });
    }, 800);
  }, [logoIndex]);

  return <Icon color={'rgb(56, 70, 70)'} size={1} path={logoList[logoIndex]} />;
};

export default LogoSwitch;
