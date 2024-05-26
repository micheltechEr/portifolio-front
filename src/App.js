import Header from './components/header'
import MobileHeader from './components/mobile_header'
import Body from './components/body'
import Footer from './components/footer';
import "../src/index.css"
function App() {
  return (
    <div className="project-content">
      <Header/>
      <MobileHeader/>
      <Body/>
      <Footer/>
    </div>
  );

}

export default App;
