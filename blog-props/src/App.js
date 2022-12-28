import React from 'react';
import Header from './components/header/header'
import BlogList from './components/blogList/bloglist'
import Footer from './components/footer/footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BlogList />
      <Footer />
    </div>
  );
}

export default App;
