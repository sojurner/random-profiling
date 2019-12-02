import React from 'react';
import { withRouter } from 'react-router-dom';

import Router from '~components/Router';
import AppBar from '~shared/AppBar';
import MainGrid from '~components/MainGrid';

import { mainRoutes } from '~routes/index';
import { useScrollToTopHook } from '~utils/hooks/scrollHook';

import { RouteComponentProps } from 'react-router';

const Base: React.FC<RouteComponentProps> = ({ location }) => {
  useScrollToTopHook(location);

  return (
    <MainGrid className="grid__main">
      <AppBar className="main_appBar" />
      <Router routes={mainRoutes} />
    </MainGrid>
  );
};

export default withRouter(Base);
