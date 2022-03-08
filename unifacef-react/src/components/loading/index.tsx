import * as React from 'react';
import './style.css';

export default class Loading extends React.Component {
  render() {
    return (
      <div id="loadindSpinner" className="loadingWall" data-requests="0">
        <div className="loadingCircle" />
      </div>
    );
  }
}

export const loadingOn = () => {
  const el = document.querySelector('#loadindSpinner') as any;
  if (el === null) {
    return;
  }

  el.style.display = 'block';
  el.setAttribute('data-requests', Number(el.getAttribute('data-requests')) + 1);
};

export const loadingOff = () => {
  const el = document.querySelector('#loadindSpinner') as any;
  if (el === null) {
    return;
  }

  if (Number(el.getAttribute('data-requests')) > 0) {
    el.setAttribute('data-requests', Number(el.getAttribute('data-requests')) - 1);
  }

  if (Number(el.getAttribute('data-requests')) === 0) {
    el.style.display = 'none';
    return;
  }
};
