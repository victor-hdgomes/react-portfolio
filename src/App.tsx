import React from 'react';
import { About, Hero, Portfolio, Stack } from './pages';
import { Footer, Navbar } from './components';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </>
  )
}