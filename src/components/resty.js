import React from 'react';

import History from './history';
import Request from './request';
import Response from './response';
import RestyProvider from '../context';

const Resty = () => {
  return (
    <main>
      <RestyProvider>
        <History />
        <Request />
        <Response />
      </RestyProvider>
    </main>
  );
};

export default Resty;
