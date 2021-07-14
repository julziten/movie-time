import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './styles/base.scss';
import { MainScreen } from './MainScreen';

ReactDOM.render(
  <React.StrictMode>
    <MainScreen />
  </React.StrictMode>,
  document.getElementById('root')
);