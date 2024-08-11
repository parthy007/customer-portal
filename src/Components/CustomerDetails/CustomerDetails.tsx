import "./CustomerDetails.css";
import { useEffect, useState } from "react";
import { CustomerDetailsProps, PixabayPhoto } from "../../interfaces";
import { randomSearchTerms } from "../../Constants";

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
  const [photos, setPhotos] = useState<string[]>([]);

  useEffect(() => {
    const fetchPhotos = async () => {
      const randomTerm = randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];
      try {
        const response = await fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${randomTerm}&per_page=9`);
        const data = await response.json();
        setPhotos(data.hits.map((hit: PixabayPhoto) => hit.largeImageURL));
      } catch (error) {
        console.log("Error fetching photos: ", error);
      }
    };
  
    fetchPhotos();
    const interval = setInterval(fetchPhotos, 10000);
  
    return () => clearInterval(interval);
  }, [customer]);
  

  return (
    <div className="customer-detail">
      <div className="customer-info">
        <div>{customer.name}</div>
        <p>{customer.address}</p>
      </div>
      <p>{customer.title}</p>
      <div className="customer-photos-grid">
        {photos &&
          photos.map((photo, index) => (
            <img
              key={index}
              src={photo}
              alt="pictures"
              className="customer-image"
            />
          ))}
      </div>
    </div>
  );
};

export default CustomerDetails;
