import React from 'react';
import Icon from '@mdi/react';
import {
  mdiMapMarkerRadius,
  mdiCellphone,
  mdiAccountCircleOutline,
  mdiCakeVariant
} from '@mdi/js';

import styles from './Card.module.scss';
import { useUnsplashPicApiHook } from '~utils/hooks';
import { monthNames } from '~utils/date';
import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';
import Skeleton from 'react-loading-skeleton';

interface IProfileCardProps {
  img: string;
  name: string;
  dob: string;
  cell: string;
  address: string;
  email: string;
  username: string;
}

const ProfileCard: React.FC<IProfileCardProps> = ({
  img,
  username,
  name,
  email,
  dob,
  cell,
  address
}) => {
  const [bgPic, loading] = useUnsplashPicApiHook(name);

  const birthdate = new Date(dob);

  return (
    <section className={styles.card__profile}>
      {bgPic && !loading ? (
        <FlexBox
          height={200}
          width={500}
          borderRadius={10}
          backgroundPosition="center center"
          backgroundSize="cover"
          backgroundImage={`url(${bgPic})`}
        />
      ) : (
        <Skeleton count={1} height={200} width={500} />
      )}
      <header>
        <img src={img} />
        <FlexBox marginLeft={10} justifyContent="center" flexDirection="column">
          <Typography variant="h2" className="" children={name} />
          <Typography variant="h4" className="" children={email} />
        </FlexBox>
      </header>
      <FlexBox
        justifyContent="space-around"
        padding="40px 10px 0 10px"
        flex="1 1 auto"
      >
        <FlexBox flexDirection="column">
          <FlexBox margin="5px 0" alignItems="center">
            <Icon size={0.8} color="gray" path={mdiMapMarkerRadius} />
            <Typography
              variant="p"
              className="profileCard__userInfo"
              children={address}
            />
          </FlexBox>
          <FlexBox margin="5px 0" alignItems="center">
            <Icon size={0.8} color="gray" path={mdiCakeVariant} />
            <Typography
              variant="p"
              className="profileCard__userInfo"
              children={`${
                monthNames[birthdate.getMonth()]
              } ${birthdate.getDay()}, ${birthdate.getFullYear()}`}
            />
          </FlexBox>
        </FlexBox>
        <FlexBox flexDirection="column">
          <FlexBox margin="5px 0" alignItems="center">
            <Icon size={0.8} color="gray" path={mdiAccountCircleOutline} />
            <Typography
              variant="p"
              className="profileCard__userInfo"
              children={username}
            />
          </FlexBox>
          <FlexBox margin="5px 0" alignItems="center">
            <Icon size={0.8} color="gray" path={mdiCellphone} />
            <Typography
              variant="p"
              className="profileCard__userInfo"
              children={cell}
            />
          </FlexBox>
        </FlexBox>
      </FlexBox>
    </section>
  );
};

export default ProfileCard;
