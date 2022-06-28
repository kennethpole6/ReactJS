import './App.css';
import { FiCodesandbox } from "react-icons/fi";
import {Header,Project, Navbar, About, Footer} from './components'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Header />
      </div>
      <Project />
      <About />
      <Footer />
    </div>
  );
}

export default App;
