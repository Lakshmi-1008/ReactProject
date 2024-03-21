import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
  // import Landingpage from './Database/Landingpage';
  import Landingpage from './Components/Landingpage';
import Loginpage from './Components/Loginpage';
import Signuppage from './Components/Signuppage';
import Whyactiveb from './Components/Whyactiveb';
import Discover from './Components/Discoverbtn';
import Knowmore1 from './Components/Knowmore1';
import Knowmore2 from './Components/Knowmore2';
import Discovermore from './Components/Discovermore';

function App() {
  return (
    <div className="App">
      {/* <Landingpage/> */}
      <BrowserRouter>
     <Routes>
      <Route path="/" element={<Landingpage/>}/>
      <Route path="/loginpage" element={<Loginpage/>}/>
      <Route path="/signuppage" element={<Signuppage/>}/>
      <Route path="/whyactiveb" element={<Whyactiveb/>}/>
      <Route path="/discover" element={<Discover/>}/>
      <Route path="/knowmore1" element={<Knowmore1/>}/>
      <Route path="/knowmore2" element={<Knowmore2/>}/>
      <Route path="/discovermore" element={<Discovermore/>}/>
     
     </Routes>

      </BrowserRouter>
      
    </div>
  );
}

export default App;
