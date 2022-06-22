
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.scss';

function App(props) {
  return (
    <div className='container'>
       <Header />
      {props.children}
      <Footer />
    </div>
  );
}

export default App;
