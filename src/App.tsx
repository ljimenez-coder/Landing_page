/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import CountachView from './views/CountachView';
import FordGtView from './views/FordGtView';
import MercedesBenzView from './views/MercedesBenzView';
import CaseStudiesView from './views/CaseStudiesView';
import MarketView from './views/MarketView';
import EventsView from './views/EventsView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  return (
    <div className="min-h-screen bg-background text-on-surface font-body flex flex-col">
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="flex-grow">
        {currentView === 'home' && <HomeView setCurrentView={setCurrentView} />}
        {currentView === 'countach' && <CountachView />}
        {currentView === 'fordgt' && <FordGtView />}
        {currentView === 'mercedesbenz' && <MercedesBenzView />}
        {currentView === 'casestudies' && <CaseStudiesView setCurrentView={setCurrentView} />}
        {currentView === 'market' && <MarketView />}
        {currentView === 'events' && <EventsView />}
      </main>

      <Footer setCurrentView={setCurrentView} />
    </div>
  );
}
