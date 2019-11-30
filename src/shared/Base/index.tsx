import React from 'react';

import Router from '~components/Router';
import AppBar from '~shared/AppBar';
import MainGrid from '~components/MainGrid';
import Skeleton from 'react-loading-skeleton';

import { mainRoutes } from '~routes/index';
import { useRandomUsersApiHook } from '~utils/hooks';
import SidePanel from '~components/SidePanel';
import FlexBox from '~components/Flexbox';

const Base: React.FC = () => {
  const [users] = useRandomUsersApiHook();

  return (
    <MainGrid className="grid__main">
      <AppBar className="main_appBar" />

      {users ? (
        <SidePanel list={users} />
      ) : (
        <FlexBox flexDirection="column">
          {Array.from(Array(10).keys()).map(el => (
            <Skeleton height={40} count={1} />
          ))}
        </FlexBox>
      )}
      <Router routes={mainRoutes} />
    </MainGrid>
  );
};

export default Base;
