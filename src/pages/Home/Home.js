import React, { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';

import './styles.scss';
import sentencesData from '../../data/sentences.json';

const getRandomSentence = actualSentence => {
  const position = Math.floor(Math.random() * sentencesData.length)
  const selectedSentence =
    sentencesData[position];

  if (!actualSentence) {
    return selectedSentence;
  }

  if (actualSentence === selectedSentence) {
    return getRandomSentence(selectedSentence);
  }

  return selectedSentence;
};

const HomePage = () => {
  const [sentence, setSentence] = useState(getRandomSentence());
  const [openSnackbar] = useSnackbar();

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
        Para alterar a qantada
        <span
          onClick={() => {
            setSentence(getRandomSentence(sentence));
          }}>
          clique aqui
        </span>
      </p>
      <p>Clique na qantada para copiar para a área de transferência</p>
      <p>
        <a
          href="https://github.com/luizae/tindev.guru"
          target="_blank"
          rel="noopener noreferrer">
          Contribua enviando sua qantada!
        </a>
      </p>
    </div>
  );
};

export default HomePage;
