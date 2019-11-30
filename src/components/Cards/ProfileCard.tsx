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
import FlexBox from '~components/Flexbox';
import Typography from '~components/Typography';

interface IProfileCardProps {
  img: string;
  name: string;
  dob: string;
  cell: string;
  address: string;
  email: string;
  username: string;
}
const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

const ProfileCard: React.FC<IProfileCardProps> = ({
  img,
  username,
  name,
  email,
  dob,
  cell,
  address
}) => {
  const [bgPic] = useUnsplashPicApiHook(name);

  const birthdate = new Date(dob);

  return (
    <section className={styles.card__profile}>
      <FlexBox
        height={200}
        width={500}
        borderRadius={10}
        backgroundPosition="center center"
        backgroundBlendMode="multiply"
        backgroundColor="#d4f0eb"
        backgroundSize="cover"
        backgroundImage={`url(${bgPic})`}
      />
      <header>
        <img src={img} />
        <FlexBox marginLeft={10} justifyContent="center" flexDirection="column">
          <Typography variant="h2" className="" children={name} />
          <Typography variant="h4" className="" children={email} />
        </FlexBox>
      </header>
      <FlexBox
        justifyContent="space-around"
        padding="50px 10px 0 10px"
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
