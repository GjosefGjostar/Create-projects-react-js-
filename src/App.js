import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Nav from './components/Nav/nav';
import Cont from './components/Content/Content';



const App = () => {
  return (
    <div className='app-wrapper'>
    <Header />
     <Nav />
    <Cont />
   </div>
  );
}


export default App;
