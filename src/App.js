import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav/nav';
import Cont from './components/Content/Content';
import Dialogs from './components/Nav/Dialogs/Dialogs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import News from './components/Nav/News/News';
import Music from './components/Nav/Music/Music';
import Settings from './components/Nav/Settings/Settings';



const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
          <Route path='/Messages' Component={Dialogs} />
          <Route path='/Profile' Component={Cont} />
          <Route path='News' Component={News} />
          <Route path='Music' Component={Music} />
          <Route path='Settings' Component={Settings} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}


export default App;
