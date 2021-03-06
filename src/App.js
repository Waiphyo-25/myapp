import React from 'react';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

const App = () => {
  return (
    <div className="ui equal width grid">
        <Header />
        <Content />
        <Footer />
    </div>
  )
}

export default App;
