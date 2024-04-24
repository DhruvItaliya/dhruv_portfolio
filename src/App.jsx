import './App.css';
import Home from './Components/Home';
import Navbar from "./Components/Navbar";
import Profile from './Components/Profile';
function App() {
  return (
    <div className='w-full flex-1 pl-0 lg:pl-[300px] bg-[#14131a]'>
      <Navbar />
      <Profile />
      <Home/>
    </div>
  );
}

export default App;
