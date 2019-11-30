import React from 'react';
import { RouteComponentProps } from 'react-router';

import MainGrid from '~components/MainGrid';
import ProfileCard from '~components/Cards/ProfileCard';
import NewsFeed from '~components/NewsFeed';
import PoemPosts from '~components/PoemPosts';
import FlexBox from '~components/Flexbox';

const ProfilePage: React.FC<RouteComponentProps> = ({ location, history }) => {
  if (!location.state) {
    history.push('/');
    return null;
  } else {
    const { user } = location.state;
    return (
      <FlexBox gridArea="content">
        <FlexBox
          flexDirection="column"
          width={500}
          padding="30px 50px 30px 80px"
        >
          <ProfileCard
            img={user.img}
            username={user.userInfo.username}
            name={user.fullName}
            dob={user.dob}
            cell={user.cell}
            address={user.address}
            email={user.email}
          />
          <PoemPosts />
        </FlexBox>
        <NewsFeed />
      </FlexBox>
    );
  }
};

export default ProfilePage;
