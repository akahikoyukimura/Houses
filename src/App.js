import React,{useState} from 'react';
import Dropdown from './components/Dropdown';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';

function App() {

  const [isOpen,setIsOpen]=useState(false);

  const toggle=()=>{
    setIsOpen(!isOpen);
  };

  return (
    <>
    <p>
      <GlobalStyle />
      <Navbar toggle={toggle}/>
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Hero />
      <InfoSection/>
    </p>
    </>
  );
}

export default App;
