import { Route, Routes } from 'react-router';
import './App.css';
import StartPage from './pages/start-page/StartPage';
import ScanPage from './pages/input-page/ScanPage';
import ResultPage from './pages/result-page/ResultPage';


function App() {
  return (
    <div className="App">
      <Routes path ='/'>
        <Route path='/'  index    element={<StartPage />} />
        <Route path='/input'  element = {<ScanPage />} />
        <Route path='/result' element = {<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
