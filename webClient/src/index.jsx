import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import './main.scss';
import { MVDResources } from './mvd-resources';

export function renderPlugin(domElement) {
  ReactDOM.render(
    <MVDResources.Provider>
      <Main/>
    </MVDResources.Provider>,
    domElement
  );
}

export function unmountPlugin(domElement) {
  ReactDOM.unmountComponentAtNode(domElement);
}
