import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className="pizza-block"
    {...props}>
    <circle cx="120" cy="120" r="120" />
    <rect x="0" y="266" rx="16" ry="16" width="280" height="88" />
    <rect x="12" y="377" rx="8" ry="8" width="90" height="45" />
    <rect x="121" y="377" rx="20" ry="20" width="152" height="45" />
  </ContentLoader>
);

export default MyLoader;
