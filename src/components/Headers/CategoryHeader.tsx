import React from 'react';

import Typography from '~components/Typography';

interface ICategoryProps {
  style?: React.CSSProperties;
  children: string;
}

const CategoryHeader: React.FC<ICategoryProps> = props => {
  return <Typography variant="h3" className="newsFeed__header" {...props} />;
};

export default CategoryHeader;
