import React from 'react';
import PropTypes from 'prop-types';

const HomePage = props => {
  const { ...rest } = props;

  return (
    <div {...rest}>
      hello world
    </div>
  );
};

export default HomePage;
