// import './App.css';
// import Flexbox from './Components/Flexbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './Components/pages/Notes';
import Create from './Components/pages/Create';
import Buttons from './Components/Buttons';
import MuiTextField from './Components/TextField';
import MuiSelect from './Components/MuiSelect';
import MuiLogin from './Components/MuiLogin';
import MuiRegister from './Components/MuiRegister';
import DashboardLayoutBasic from './Components/Drawer';

function App() {
  return (

   <Router>
    <Routes>
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='' element={<Create/>}/>
      <Route path='/buttons' element={<Buttons/>}/>
      <Route path='/textfield' element={<MuiTextField/>}/>
      <Route path='/select' element={<MuiSelect/>}/>
      <Route path='/login' element={<MuiLogin/>}/>
      <Route path='/register' element={<MuiRegister/>}/>
      <Route path="/drawer" element={<DashboardLayoutBasic/>}/>

    </Routes>
   </Router>

    
  );
}

export default App;
