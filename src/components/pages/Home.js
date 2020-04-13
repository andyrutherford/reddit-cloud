import React, { useState } from 'react';
import ReactWordcloud from 'react-wordcloud';
import axios from 'axios';
import { createWordCloud } from '../../utils/createWordCloud';
import { options } from '../../utils/wordcloud-options';

const Home = ({ reddit }) => {
  const [wordCloud, setWordCloud] = useState(null);
  const [subreddit, setSubreddit] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${reddit}${subreddit}.json`);
      const resData = res.data.data.children;
      setError(null);
      const titles = resData.map((post) => post.data.title);
      const cloud = createWordCloud(titles);
      setWordCloud(cloud);
    } catch (err) {
      console.error(err);
      setError('No data found.  Try searching for another subreddit');
    }
  };

  const onChange = (e) => {
    setSubreddit(e.target.value);
  };

  return (
    <div>
      <div className='container'>
        <h2 className='text-primary'>
          Search for a subreddit and visualize the most common words
        </h2>
        <form className='grid-2-form' onSubmit={onSubmit}>
          <label>
            <input
              type='text'
              name='subreddit'
              placeholder='Enter a subreddit'
              onChange={onChange}
            />
          </label>
          <input type='submit' value='Submit' className='btn btn-primary' />
        </form>
        {error && <p>{error}</p>}
      </div>
      <div className='container'>
        {wordCloud !== null && (
          <ReactWordcloud words={wordCloud} options={options} />
        )}
      </div>
    </div>
  );
};

Home.defaultProps = {
  reddit: 'https://www.reddit.com/r/',
};

export default Home;
