import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AboutNavBar from './Components/NavBarAboutComponents/AboutNavBar';
import ServicesNavbar from './Components/NavBarAboutComponents/ServicesNavbar';
import Login from './SharedPages/Login';
import Register from './SharedPages/Register';
import ContactNabVar from './Components/NabBarContactComponent/ContactNabVar';
import ScrollTOTop from './SharedPages/ScrollTOTop';
import AccountDetails from './SharedPages/AccountDetails';
import Shopgrid from './Pages/Shopgrid';
import SingleProduct from './Pages/SingleProduct';

function App() {
  return (
  
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}></Route>
  {/* navbar about section */}
  <Route path="/about" element={<AboutNavBar></AboutNavBar>}/> 
  <Route path="/service" element={<ServicesNavbar></ServicesNavbar>}/> 
  
   {/* navbar about section */}

   {/* nabbar shop section */}
   {/* <Route path="/shopgrid" element={<ShopGridNabBar></ShopGridNabBar>}/>  */}
   <Route path="/shopgrid" element={<Shopgrid></Shopgrid>}/> 
   {/* nabbar shop section */}

    {/* navbar contact */}
    <Route path="/contact" element={<ContactNabVar></ContactNabVar>}/>
    <Route path="/accountdetails" element={<AccountDetails></AccountDetails>}/>
    {/* navbar contact */}

  {/* Product Details Show */}
  <Route path="/ProductDetails/:id" element={<SingleProduct></SingleProduct>}/>
  {/* Product Details Show */}


   {/* Login and register */}
   <Route path="/login" element={<Login></Login>}/> 
   <Route path="/register" element={<Register></Register>}/> 
   {/* Login and register */}


</Routes>

<ScrollTOTop></ScrollTOTop>
</BrowserRouter>
  );
}

export default App;
