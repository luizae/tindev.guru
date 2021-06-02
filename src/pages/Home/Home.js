import React, { useState, useMemo } from 'react';

import './styles.scss';
import sentencesData from '../../data/sentences.json';

const getRandomSentence = () => {
  return sentencesData[Math.floor(Math.random() * sentencesData.length)];
};

const HomePage = props => {
  const [sentence, setSentence] = useState(getRandomSentence);

  useMemo(() => {
    document.addEventListener('keyup', event => {
      if (event.key === ' ') {
        setSentence(getRandomSentence());
      }
    });
  }, []);

  const handleCopySentence = () => {
    const el = document.createElement('textarea');
    el.value = sentence.text;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <div className="home-page">
      <h1 onClick={() => handleCopySentence()}>{sentence.text}</h1>
      <p>
        Pressione <span>SPACE</span> para alterar a qantada ou{' '}
        <span
          onClick={() => {
            setSentence(getRandomSentence());
          }}>
          clique aqui
        </span>
        qantada
      </p>
    </div>
  );
};

export default HomePage;
