import React from 'react';
import { About, Hero, Portfolio, Stack } from './pages';
import { Footer, Navbar, ScrollProgress } from './components';

export default function App() {

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </>
  )
}