import React from 'react';
import PropTypes from 'prop-types';

const About = props => {
  return (
    <div>
      <h1>About This App</h1>
      <p className='my-1'>
        This app will generate a word cloud based off a specific subreddit.
      </p>
      <p>
        <strong>Version: </strong>1.0.0
      </p>
    </div>
  );
};

About.propTypes = {};

export default About;
