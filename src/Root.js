import React from 'react';
import { BrowserRouter } from 'react-router-dom';
// import App from 'components/App';
import App from 'youtube/components/App';

const Root = () => {
  return (
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  );
}

export default Root;