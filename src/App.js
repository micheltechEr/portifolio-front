import Header from './components/header'
import MobileHeader from './components/mobile_header'
import Body from './components/body'
import Footer from './components/footer';
import "../src/styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {showMobileMenu} from "../src/functions/settings";

function App() {
  return (
    <div className="project-content">
      <MobileHeader/>
      <Header/>
      <Body/>
      <Footer/>
      {showMobileMenu()}
    </div>
  );

}

export default App;
