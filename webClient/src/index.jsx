import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import './main.scss';
import { MVDResources } from './mvd-resources';

export function renderPlugin(domElement, resources) {
  ReactDOM.render(
    <MVDResources.Provider   value={resources}>
      <Main resources={resources}/>
    </MVDResources.Provider>,
    domElement
  );
}

export function unmountPlugin(domElement) {
  ReactDOM.unmountComponentAtNode(domElement);
}
