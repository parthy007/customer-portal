import "./CustomerList.css"
import { CustomerListProps } from '../../interfaces';
import CustomerCard from '../CustomerCard/CustomerCard';

const CustomerList: React.FC<CustomerListProps> = ({ customers, selectedCustomerId, onSelectCustomer }) => {
  return (
    <div className='customer-cards'>
      {customers.map((customer) => (
        <CustomerCard 
          key={customer.id} 
          customer={customer} 
          onClick={() => onSelectCustomer(customer.id)} 
          isSelected={selectedCustomerId === customer.id} 
        />
      ))}
    </div>
  );
};

export default CustomerList;
