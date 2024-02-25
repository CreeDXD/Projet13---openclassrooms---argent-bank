//Display of the home page

import '../style/css/main.css';
import Header from '../components/header'
import Footer from '../components/footer'
import MainIndex from '../components/main_index';
import store from '../redux/store/store';

function App() {
  return (
      <>
        <Header/>
        <MainIndex/>
        <Footer/>
      </>
  
  );
}

export default App;
