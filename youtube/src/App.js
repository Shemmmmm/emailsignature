import Search from './components /search';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Signin from './components /signin';
  
function App() {
  return (
    <>
   <h1>tyighsgs</h1>
   </>
    /*  <BrowserRouter>
         <Routes>
          <Route exact path='/signin' element={<Signin/>}/>
          <Route exact path = '/' element = {<Search/>} />
         </Routes>
      </BrowserRouter> */
  );
}

export default App;
