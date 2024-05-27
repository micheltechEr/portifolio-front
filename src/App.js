import Header from './components/header'
import MobileHeader from './components/mobile_header'
import Body from './components/body'
import Footer from './components/footer';
import ToggleBurguer from './components/snippets/toggle-burguer'
import "../src/index.css"
function App() {
  return (
    <div className="project-content">
      <MobileHeader/>
      <Header/>
      <Body/>
      <Footer/>
      <ToggleBurguer/>
    </div>
  );

}

export default App;
