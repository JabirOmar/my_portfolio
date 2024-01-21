import React, { Suspense, lazy, useEffect, useState } from 'react'
import './index.css'
import LoadingScreen from './pages/LoadingScreen'

const HomePage = lazy(() => import('./pages/HomePage'))
const AboutPage = lazy(() => import('./pages/AboutMe'))
const SkillsPage = lazy(() => import('./pages/SkillsPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))

function App() {
  return (
    <div className=' App bg-zinc-700 h-[100vh] overflow-y-scroll '>
      <Suspense fallback={<LoadingScreen />}>
        <HomePage />
        <SkillsPage />
        <AboutPage />
        <ContactPage />
      </Suspense>
      
    </div>
  )
}

export default App