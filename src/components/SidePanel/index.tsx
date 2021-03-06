import React from 'react';
import Icon from '@mdi/react';
import { mdiChevronDown, mdiChevronUp } from '@mdi/js';
import Skeleton from 'react-loading-skeleton';

import FriendList from '~components/Lists/FriendList';
import Typography from '~components/Typography';
import FlexBox from '~components/Flexbox';
import Collapsible from '~components/Collapsible';

import { IUser } from '~types/api';

const SidePanelSkeleton = () => {
  return (
    <FlexBox flexDirection="column">
      {Array.from(Array(10).keys()).map((_, index) => (
        <Skeleton key={`users-skeleton-${index}`} height={40} count={1} />
      ))}
    </FlexBox>
  );
};

const SidePanel: React.FC<{ list: IUser[] }> = ({ list }) => {
  const [collapsed, setCollapsed] = React.useState(false);

  return (
    <aside style={{ gridArea: 'aside', position: 'fixed', top: 60 }}>
      <FlexBox alignItems="center" padding={5}>
        <Typography variant="h4" className="">
          Friends
        </Typography>
        <Typography variant="h5" className="" children={`(${list.length})`} />
        <div
          style={{ display: 'flex', margin: '0 0 0 auto' }}
          onClick={() => setCollapsed(state => !state)}
        >
          <Icon
            size={1}
            color="darkslategray"
            path={collapsed ? mdiChevronDown : mdiChevronUp}
          />
        </div>
      </FlexBox>
      <Collapsible collapsed={collapsed}>
        <FriendList friends={list} />
      </Collapsible>
    </aside>
  );
};

export { SidePanelSkeleton, SidePanel as default };
