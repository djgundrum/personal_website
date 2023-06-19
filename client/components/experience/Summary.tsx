import React from 'react';
import cn from 'classnames';

const summaryConfig = {
  route: 'summary',
  background: '#212121',
  fontColor: '#ffffff',
  font: 'Arial',
  largeFontSize: '24px',
  mediumFontSize: '16px',
  smallFontSize: '9px',
  buttonColors: {
    background: '#ffffff',
    fontColor: '#000000',
  },
};

const Summary = () => {
  return <div className='summary-outer'>take a dive into my experience and skills that I have acquired over the years</div>;
};

export { Summary, summaryConfig };
