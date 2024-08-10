import "./CustomerCard.css"
import { CustomerCardProps } from '../../interfaces';

const CustomerCard: React.FC<CustomerCardProps> = ({ customer, onClick, isSelected }) => {
  return (
    <div 
      onClick={onClick}
      className={`customer-card ${isSelected ? 'selected':''}`}
    >
      <h4 className="customer-name">{customer.name}</h4>
      <p className="cutomer-title">{customer.title}</p>
    </div>
  );
};

export default CustomerCard;
