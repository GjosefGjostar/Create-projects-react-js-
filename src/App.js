import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Nav from './components/nav';
import Cont from './components/Content';



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
