import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import Navbaar from './components/Navbaar';
import Home from './components/Home';
import Resgister from './components/Resgister';
import { Routes , Route} from 'react-router-dom'


function App() {
  return (
    <>
   <Navbaar/>
   <Routes>
    <Route  path='/' element = {<Home></Home>}/>
    <Route  path='/register' element = {<Resgister></Resgister>}/>
   </Routes>
    </>
  );
}

export default App;
