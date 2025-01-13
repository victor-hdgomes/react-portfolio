import React from 'react';
import { About, Hero, Portfolio, Stack } from './pages';
import { Footer } from './components';

export default function App() {
  return (
    <>
      <Hero />
      <About />
      <Portfolio />
      <Stack />
      <Footer />
    </>
  )
}