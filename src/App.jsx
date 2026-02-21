import React, { Suspense, lazy } from 'react';

const Hero = lazy(() => import('./components/Hero'));
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Suspense>
    </div>
  );
}

export default App;
