import './App.css';
import Product from './Pages/Product';
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Pages/Home';
import Admin from './Pages/Admin';
import MainRoutes from './Pages/MainRoutes';
import Footer from './Components/Footer/Footer';
import Cart from './Pages/Cart';
import HamburgerMenu from './Components/Navbar/Hamburger';
// import Login from './Components/Login/SignIn';
// import Signup from './Components/Signup/Signup';

// import Loginn from './Components/Login/SignIn';

// import Loginn from './Components/Login/Login';

// import Navbar from './Components/Product/Navbar';


// import PaymentPage from './Pages/PaymentPage'


function App() {
  return (
      <div className="App">

        <Navbar/>
        <HamburgerMenu/>
        {/* <Login/> */}
        {/* <Signup/> */}
        
        {/* <Login/> */}

        {/* <Admin/>
        <Product/> */}
        
        <MainRoutes/>
        {/* <PaymentPage/> */}

        <Footer/>

      </div>
  );
}

export default App;