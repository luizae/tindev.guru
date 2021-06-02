import React, { useState, useMemo } from 'react';
import { useSnackbar } from 'react-simple-snackbar';

import './styles.scss';
import sentencesData from '../../data/sentences.json';

const getRandomSentence = () => {
  return sentencesData[Math.floor(Math.random() * sentencesData.length)];
};

const HomePage = () => {
  const [sentence, setSentence] = useState(getRandomSentence);
  const [openSnackbar] = useSnackbar();

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
    openSnackbar('A Qantada agora está em suas mãos!');
  };

  return (
    <div className="home-page">
      <h1
        onClick={() => handleCopySentence()}
        title="Clique para copiar para a área de transferência">
        {sentence.text}
      </h1>
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
      <p></p>
    </div>
  );
};

export default HomePage;
