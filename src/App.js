// import './App.css';
// import Flexbox from './Components/Flexbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './Components/pages/Notes';
import Create from './Components/pages/Create';
import Buttons from './Components/Buttons';
import MuiTextField from './Components/TextField';
import MuiSelect from './Components/MuiSelect';

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
    </Routes>
   </Router>

    
  );
}

export default App;
