import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import NotFound from './components/NotFound';

import HomePage from './pages/HomePage';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main className="main-content">
        <Routes>

          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NotFound />} />

          <Route path="/books" element={<BookListPage />} />

          <Route path="/book/:id" element={<BookDetailPage />} />

          <Route path="/category/:categoryId" element={<CategoryPage />} />

          <Route path="/about" element={<AboutPage/>}/>

          <Route path="/contact" element={<ContactPage/>}/>

        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
