import React from 'react';
import Footer from '../SharedPages/Footer';
import Header from '../SharedPages/Header';
import About from './About';
import AboutUnderLeatest from './AboutUnderLeatest';
import Banner from './Banner';
import Brand from './Brand';
import Category from './Category';
import Countdown from './Countdown';
import Feature from './Feature';
import LeatestBlogs from './LeatestBlogs';
import LeatestProduct from './LeatestProduct';
import Product from './Product';
import Slider from './Slider';
import TrendingProducts from './TrendingProducts';


const Home = () => {
    return (
        <div className="body-wrapper">
         <Header></Header> 
         <Slider></Slider>   
         <Category></Category> 
         <About></About> 
         <Banner></Banner> 
         <Product></Product>  
         <Countdown></Countdown> 
         <LeatestProduct></LeatestProduct>
         <AboutUnderLeatest></AboutUnderLeatest>
         <TrendingProducts></TrendingProducts>
         <Feature></Feature>
         <LeatestBlogs></LeatestBlogs>
         <Brand></Brand>
         <Footer></Footer>
        </div>
    );
};

export default Home;