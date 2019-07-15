import React from 'react';

import RestyProvider from './context';
import Header from './components/header';
import Footer from './components/footer';
import Resty from './components/resty';

import './styles/app.scss';

function App() {
  return (
    <RestyProvider>
      <Header />
      <Resty />
      <Footer />
    </RestyProvider>
  );
}

export default App;
