import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Cardsection2 from "./components/Cardsection2";
import ImageSection from "./components/ImageSection";
import AppDownload from "./components/AppDownload";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Home/>
      <Cardsection2/>
      <ImageSection/>
      <AppDownload/>
      <AboutUs/>
      <Footer/>
    </>
  );
};

export default App;
