import React from 'react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import Ecosystem from './sections/Ecosystem';
import Projects from './sections/Projects';
import Philosophy from './sections/Philosophy';
import Stack from './sections/Stack';
import Network from './sections/Network';
import CTA from './sections/CTA';
import Divider from './components/Divider';
import Footer from './sections/Footer';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Divider />
      <Ecosystem />
      <Divider />
      <Projects />
      <Divider />
      <Philosophy />
      <Divider />
      <Stack />
      <Divider />
      <Network />
      <Divider />
      <CTA />
      <Footer />
    </>
  );
};

export default App;