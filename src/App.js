// import './App.css';
// import Flexbox from './Components/Flexbox';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Notes from './Components/pages/Notes';
import Create from './Components/pages/Create';

function App() {
  return (

   <Router>
    <Routes>
      <Route path='/notes' element={<Notes/>}/>
      <Route path='/create' element={<Create/>}/>
      <Route path='' element={<Create/>}/>
    </Routes>
   </Router>
  // <Create/>
  // <Notes/>
    
  );
}

export default App;
