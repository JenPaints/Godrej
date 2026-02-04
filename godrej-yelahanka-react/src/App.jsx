import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Overview from './components/Overview';
import Configurations from './components/Configurations';
import Amenities from './components/Amenities';
import FloorPlans from './components/FloorPlans';
import Connectivity from './components/Connectivity';
import Gallery from './components/Gallery';
import Developer from './components/Developer';
import Terms from './components/Terms';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import MobileNav from './components/MobileNav';
import LeadModal from './components/LeadModal';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Auto-open modal after 10 seconds
    const timer = setTimeout(() => {
      if (!localStorage.getItem('formOpened')) {
        setIsModalOpen(true);
        localStorage.setItem('formOpened', 'true');
      }
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="App">
      <Navbar />
      <Hero openModal={openModal} />
      <Overview onOpenModal={openModal} />
      <Configurations openModal={openModal} />
      <Amenities />
      <FloorPlans openModal={openModal} />
      <Connectivity openModal={openModal} />
      <Gallery />
      <Developer />
      <Terms />
      <Footer openModal={openModal} />
      <FloatingActions openModal={openModal} />
      <MobileNav openModal={openModal} />
      <LeadModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
