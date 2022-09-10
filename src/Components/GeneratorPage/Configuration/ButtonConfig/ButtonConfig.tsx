import React from 'react';
import { useState } from 'react';
import ConfigurationView from '../HtmlConfig/HtmlConfigView';
import ConfigurationcssView from '../CssConfig/CssConfigView';
import './ButtonConfigStyle.css';
import HtmlConfigView from '../HtmlConfig/HtmlConfigView';
import CssConfigView from '../CssConfig/CssConfigView';

function Configuration() {
  const [isToggled, setToggled] = useState(true);

  return (
    <div>
      <div className="btn-main">
        <button className="btn-config" onClick={() => setToggled(true)}>
          {' '}
          html Config
        </button>
        <button className="btn-config" onClick={() => setToggled(false)}>
          {' '}
          css Config{' '}
        </button>
      </div>
      {isToggled ? <HtmlConfigView /> : <CssConfigView />}
    </div>
  );
}

export default Configuration;
