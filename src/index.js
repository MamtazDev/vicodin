import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// shahariar
import "../src/Style/css/style.css"
import "../src/Style/css/custom.css"
import "../src/Style/css/font-icons.css"
import "../src/Style/css/responsive.css"
import "../src/Style/css/plugins.css"
import "../src/Style/css/sections/_portfolio.css"
import "../src/Style/css/sections/_error_404.css"
import "../src/Style/css/elements/_portfoli.css"
import "../src/Style/css/style.css.map"


import "../src/Style/sass/elements/_button.scss"
import "../src/Style/sass/elements/_preloader.scss"
import "../src/Style/sass/elements/_search_popup.scss"


import "../src/Style/sass/global/_global.scss"
import "../src/Style/sass/global/_gutenberg.scss"
import "../src/Style/sass/global/_mixins.scss"
import "../src/Style/sass/global/_variables.scss"

// import "../src/Style/sass/sections/_animation.scss"
import "../src/Style/sass/sections/_breadcrumb.scss"
import "../src/Style/sass/sections/_footer.scss"
import "../src/Style/sass/sections/_header.scss"
import "../src/Style/sass/sections/_main.scss"
import "../src/Style/sass/sections/_portfolio.scss"
import "../src/Style/sass/sections/_product.scss"
import "../src/Style/sass/sections/_slider.scss"
import "../src/Style/sass/sections/_widgets.scss"


// import "../src/Style/js/main.js"
// import "../src/Style/js/contact.js"
// import "../src/Style/js/maplace-active.js"



// shahariar

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
