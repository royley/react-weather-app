import 'raf/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { location, forecasts } from './data/forecast.json';

import App from './components/app';

render(
  <App location={location}
    forecasts={forecasts}/>,
   document.getElementById('root'));
