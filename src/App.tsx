import "./App.css"
import { useState } from 'react';
import CustomerList from './Components/CustomerLists/CustomerLists';
import CustomerDetails from './Components/CustomerDetails/CustomerDetails';
import { Customer } from './interfaces';
import { customersConstants } from './Constants';

const App: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>(customersConstants);
  const [selectedCustomerId, setSelectedCustomerId] = useState<number>(1);

  const handleSelectCustomer = (id: number) => {
    setSelectedCustomerId(id);
  };

  const selectedCustomer = customers.find(c => c.id === selectedCustomerId);

  return (
    <div className="app">
      <div className="app-heading">CUSTOMER PORTAL</div>
      <div className='app-wrapper'>
        <CustomerList 
          customers={customersConstants} 
          selectedCustomerId={selectedCustomerId} 
          onSelectCustomer={handleSelectCustomer} 
        />
        {selectedCustomer && <CustomerDetails customer={selectedCustomer}/>}
      </div>
    </div>
  );
};

export default App;
