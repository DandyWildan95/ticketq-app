import { useState } from 'react';
import { TicketListWithData } from './components/TicketList';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState<'tickets' | 'about'>('tickets');

  return (
    <div className="container">
      <h1>TicketQ Indonesia</h1>
      <nav>
        <a 
          href="#" 
          className={activeTab === 'tickets' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('tickets');
          }}
        >
          My Tickets
        </a>
        <a 
          href="#" 
          className={activeTab === 'about' ? 'active' : ''}
          onClick={(e) => {
            e.preventDefault();
            setActiveTab('about');
          }}
        >
          About Us
        </a>
      </nav>

      {activeTab === 'tickets' ? <TicketListWithData /> : <AboutUs />}
    </div>
  );
}

export default App;
