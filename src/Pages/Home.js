import React from 'react';
import Footer from '../SharedPages/Footer';
import Header from '../SharedPages/Header';
import AboutUnderLeatest from '../Components/HomeComponent/AboutUnderLeatest';
import Banner from '../Components/HomeComponent/Banner';
import Brand from '../Components/HomeComponent/Brand';
import Category from '../Components/HomeComponent/Category';
import Countdown from '../Components/HomeComponent/Countdown';
import Feature from '../Components/HomeComponent/Feature';
import LeatestBlogs from '../Components/HomeComponent/LeatestBlogs';
import LeatestProduct from '../Components/HomeComponent/LeatestProduct';
import Product from '../Components/HomeComponent/Product';
import Slider from '../Components/HomeComponent/Slider';
import TrendingProducts from '../Components/HomeComponent/TrendingProducts';
import About from '../Components/HomeComponent/About';


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