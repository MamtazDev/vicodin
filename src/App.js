import Home from './Pages/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Router
} from "react-router-dom";
import Login from './SharedPages/Login';
import Register from './SharedPages/Register';
import ScrollTOTop from './SharedPages/ScrollTOTop';
import AccountDetails from './SharedPages/AccountDetails';
import Shopgrid from './Pages/Shopgrid';
import SingleProduct from './Pages/SingleProduct';
import Cart from './Pages/Cart';
import CheckOut from './Pages/CheckOut';
import Contact from './Pages/Contact';
import AboutUs from './Pages/About';
import Service from './Pages/Service';
import ServiceDetails from './Pages/ServiceDetails';
import WishList from './Pages/WishList';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>

        {/* navbar about section */}
        <Route path="/about" element={<AboutUs></AboutUs>} />
        <Route path="/service" element={<Service></Service>} />
        <Route path="/service-details/:cat" element={<ServiceDetails />} />
        {/* navbar about section */}

        {/* shop section */}
        <Route path="/shopgrid" element={<Shopgrid></Shopgrid>} />
        <Route path="/category/:id" element={<Shopgrid></Shopgrid>} />
        {/* shop section */}

        {/* Cart Page */}
        <Route path="/cart" element={<Cart></Cart>} />
        <Route path="/checkOut" element={<CheckOut></CheckOut>} />
        {/* Cart Page */}

        <Route path="/wishlist" element={<WishList></WishList>} />

        {/* navbar contact */}
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/accountdetails" element={<AccountDetails></AccountDetails>} />
        {/* navbar contact */}

        {/* Product Details Show */}
        <Route path="/ProductDetails/:id" element={<SingleProduct></SingleProduct>} />
        {/* Product Details Show */}

        {/* Login and register */}
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register></Register>} />
        {/* Login and register */}
      </Routes>

      <ScrollTOTop></ScrollTOTop>
    </BrowserRouter>
  );
}

export default App;
