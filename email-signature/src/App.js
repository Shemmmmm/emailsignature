import Search from './components /search';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
  
function App() {
  return (
      <BrowserRouter>
         <Routes>
             <Route exact path="/components/search" element={<Search/>}/>
           </Routes>
     </BrowserRouter>
  );
}

export default App;
