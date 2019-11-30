import React from 'react';

import { IAppBarProps } from '~types/appBar';
import Typography from '~components/Typography';

import styles from './AppBar.module.scss';
import LogoSwitch from '~components/LogoSwitch';
import FlexBox from '~components/Flexbox';

const Title = () => (
  <Typography variant="h3" className="" children="Profiler" />
);

const AppBar: React.FC<IAppBarProps> = ({ className }) => {
  return (
    <header className={styles[className]}>
      <FlexBox width={100} justifyContent="space-evenly">
        <LogoSwitch />
        <Title />
      </FlexBox>
    </header>
  );
};

export default AppBar;
