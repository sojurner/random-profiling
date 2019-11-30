import React from 'react';
import { Route, RouteProps } from 'react-router-dom';

const Router: React.FC<{ routes: any }> = ({ routes }) => {
  return (
    <>
      {routes.map((routeProps: RouteProps) => (
        <Route {...routeProps} />
      ))}
    </>
  );
};

export default Router;
