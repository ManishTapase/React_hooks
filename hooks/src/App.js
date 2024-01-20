import './App.css';
import {Routes,Route} from "react-router-dom"
// import UseRef from './components/useRef';
// import UseLayEff from './components/useLayEff';
// import UseMemo from './components/useMemo';
import UseCallback from './components/UseCallback';
// import UsestateHook from './components/Usestate';
// import UseEffect from './components/UseEffect';
// import Rhook from './components/Rhook';

function App() {
  return (
<Routes>
  {/* <Route path="/" element={<UsestateHook/>} /> */}
  {/* <Route path="/" element={<UseEffect/>} /> */}
  {/* <Route path="/" element={<Rhook/>} /> */}
  <Route path="/" element={<UseRef/>}/>
  {/* <Route path="/" element={<UseLayEff/>}/> */}
  {/* <Route path="/" element={<UseMemo/>}/> */}
  {/* <Route path="/" element={<UseCallback/>}/> */}
  
  
</Routes>
  );
}

export default App;
