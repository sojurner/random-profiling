import RootPage from '~pages/RootPage';
import ProfilePage from '~pages/ProfilePage';
import { RouteProps } from 'react-router';

const mainRoutes: RouteProps[] = [
  {
    path: '/',
    component: RootPage
  },
  {
    path: '/user/:userId',
    component: ProfilePage
  }
];

export { mainRoutes };
