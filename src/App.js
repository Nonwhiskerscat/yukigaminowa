import './App.css';
import Header from './Components/Header';
import Header_gnb from './Components/Header_gnb';
import Bighead from './Components/Bighead';
import Main from './Components/Main';
import Footer from './Components/Footer';
import SubPage from './Pages/SubPage';
import Home from './Pages/Home';
import {Routes, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Bighead>
        <Header>
          <Header_gnb />
        </Header>
        <Main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/0" element={<SubPage name='0' />} />
            <Route path="/1" element={<SubPage name='1' />} />
            <Route path="/2" element={<SubPage name='2' />} />
          </Routes>
        </Main>
        <Footer></Footer>
      </Bighead>

    </div>
  );
}

export default App;
