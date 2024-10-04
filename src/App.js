import Header from './components/header'
import MobileHeader from './components/mobile_header'
import BodyProject from './components/body'
import Footer from './components/footer';
import "../src/styles/index.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { useMobileMenu } from "../src/functions/mobileBurguer";


function App() {
  const { isMenuVisible, showMenu, hideMenu } = useMobileMenu();

  return (
    <div className="project-content">
      <MobileHeader isMenuVisible={isMenuVisible} showMenu={showMenu} />
      <Header/>
      <BodyProject isMenuVisible={isMenuVisible} hideMenu={hideMenu}/>
      <Footer/>
    </div>
  );

}

export default App;
