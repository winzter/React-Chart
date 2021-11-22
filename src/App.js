import { Route, Routes } from 'react-router';
import './App.css';
import Chart from './Chart';
import Home from './Home';
import Sidebar from './Sidebar';

//ss
function App() {
  
  return (
    <div className="App">
      <Sidebar/>
      <div style={{display:"flex"}}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/chart" element={<Chart/>}/>
      </Routes>
      </div>
    </div>
  );
}
export default App;
