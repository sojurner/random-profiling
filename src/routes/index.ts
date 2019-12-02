import RootPage from '~pages/RootPage';
import ProfilePage from '~pages/ProfilePage';
import { RouteProps } from 'react-router';
import CreateProfilePage from '~pages/CreateProfilePage';
import FriendSelectionPage from '~pages/FriendSelectionPage';
import UserConfirmationPage from '~pages/UserConfirmationPage';

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

const stepperRoutes: RouteProps[] = [
  {
    path: '/create-profile',
    component: CreateProfilePage,
    exact: true
  },
  {
    path: '/friend-selection',
    component: FriendSelectionPage,
    exact: true
  },
  {
    path: '/confirm',
    component: UserConfirmationPage
  }
];

export { mainRoutes, stepperRoutes };
