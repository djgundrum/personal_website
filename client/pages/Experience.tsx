import React, { useState } from 'react';

import { Summary, summaryConfig } from '../components/experience/Summary';
import { Storylinq, storylinqConfig } from '../components/experience/storylinq';

import '../styles/Experience.module.scss';

const Experience = () => {
  const panelsInOrder = ['summary', 'storylinq'];
  const [panel, setPanel] = useState('summary');
  const [currentConfig, setCurrentConfig] = useState(summaryConfig);

  const isPageBefore = (previous: string, current: string) => {
    const previousIndex = panelsInOrder.indexOf(previous);
    const currentIndex = panelsInOrder.indexOf(current);
    return previousIndex < currentIndex;
  };

  const handlePanelChange = (panel: string) => {
    setPanel(panel);

    if (panel === 'summary') setCurrentConfig(summaryConfig);
    else if (panel === 'storylinq') setCurrentConfig(storylinqConfig);
    else setCurrentConfig(summaryConfig);
  };

  return (
    <div className='experience-outer'>
      <div className='experience-main'>
        {panel === 'summary' && <Summary />}
        {panel === 'storylinq' && <Storylinq />}
      </div>
    </div>
  );
};

export default Experience;
