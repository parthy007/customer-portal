export interface Customer {
    id: number;
    name: string;
    title: string;
    address: string;
}

export interface CustomerCardProps {
    customer: Customer;
    onClick: () => void;
    isSelected: boolean;
}

export interface CustomerListProps {
    customers: Customer[];
    selectedCustomerId: number | null;
    onSelectCustomer: (id: number) => void;
}

export interface CustomerDetailsProps {
    customer: Customer;
}

export interface PixabayPhoto {
    largeImageURL: string;
}