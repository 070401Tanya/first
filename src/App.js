// import { Routes } from '@mui/icons-material';
import './App.css';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Login from './LoginForm';
import Address from './components/Address';
import SelfDeclaration from './components/SelfDeclaration';



function App() {
  return (
    <div className="background-image" >
{/* <CounterLimit/> */}

      
{/* <Greeting name="Hello"/> */}
   <Logo />
     <NavBar />  
     <Login/>
     <SelfDeclaration/>
     {/* <Address/> */}
  
    
      {/* <ConsumerType/> */}
      {/* <ConditionalRendering/> */}
      {/* <div style={{ display: "flex" }}>
        <ProductItem name="Hand Bag" price="₹ 4,999/-" description="Beige in color, side handle to carry" />
        <ProductItem name="Yadley London" price=" ₹ 9,999/-" description="Glass bottle with sweet mist " />
        <ProductItem name=" Apple Watch" price="₹ 19,999/-" description="Plane glass with Multicolor bands" />
      </div> */}

    </div>
  );
}
export default App;

