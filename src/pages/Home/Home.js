import React from 'react';

const HomePage = props => {
  const { ...rest } = props;

  return (
    <div {...rest}>
      hello world
    </div>
  );
};

export default HomePage;
