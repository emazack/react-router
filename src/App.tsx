import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './core/Navbar';
import { PageHome } from './features/PageHome';
import { PageSettings } from './features/PageSettings';

// Now the PageAdmin component (and all the JavaScript it uses) is loaded only when 
// the section is visited.
const PageAdmin = lazy(() => import('./features/PageAdmin'));
const PageContacts = lazy(() => import('./features/PageContacts'));

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />

        <Routes>
          <Route path="/home" element={<PageHome />} />
          <Route path="/settings" element={<PageSettings />} />
          <Route path="/admin" element={
            <React.Suspense fallback={<>...</>}>
              <PageAdmin />
            </React.Suspense>
          } />
          <Route path="/contacts" element={
            <React.Suspense fallback={<>...</>}>
              <PageContacts />
            </React.Suspense>
          } />
          <Route path="*" element={
            <Navigate to="/home" />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
