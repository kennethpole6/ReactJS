import './App.css';
import { FiCodesandbox } from "react-icons/fi";
import {Project, Navbar, About, Footer} from './components'
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
          <Navbar />
          <Project />
      </div>
      <About />
      <Footer />
    </div>
  );
}

export default App;
