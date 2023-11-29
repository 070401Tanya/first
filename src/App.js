// import { Routes } from '@mui/icons-material';
import './App.css';
import Logo from './components/Logo';
import NavBar from './components/NavBar';
import Login from './LoginForm';
import Address from './components/Address';
import SelfDeclaration from './components/SelfDeclaration';
import ImportantDoc from './components/ImportantDoc';
import DocChecklist from './components/DocChecklist';
import ConnectionDetails from './components/ConnectionDetails';
import ConsumerType from './components/ConsumerType';
import MasterPage from './components/MasterPage';
import Footerpage from './components/FooterPage';


function App() {
  return (
    <div className="background-image" >
      <MasterPage>

        {/* <Login/> */}
        <Address />
        <ConnectionDetails />
        <ImportantDoc />
        <SelfDeclaration />

        <DocChecklist />

        <Footerpage />

        {/* <ConsumerType/> */}
        {/* <ConditionalRendering/> */}
        {/* <div style={{ display: "flex" }}>
        <ProductItem name="Hand Bag" price="₹ 4,999/-" description="Beige in color, side handle to carry" />
        <ProductItem name="Yadley London" price=" ₹ 9,999/-" description="Glass bottle with sweet mist " />
        <ProductItem name=" Apple Watch" price="₹ 19,999/-" description="Plane glass with Multicolor bands" />
      </div> */}
      </MasterPage>
    </div>
  );
}
export default App;

