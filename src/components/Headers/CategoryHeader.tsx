import React from 'react';

import Typography, { ITypographyProps } from '~components/Typography';

interface ICategoryProps {
  style?: React.CSSProperties;
  children: string;
}

const CategoryHeader: React.FC<ICategoryProps> = props => {
  return <Typography variant="h2" className="newsFeed__header" {...props} />;
};

export default CategoryHeader;
