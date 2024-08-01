import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioAddApi, portfolioDeleteApi, portfolioGetApi } from '../../Services/PortfolioService';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import ListPortfolio from '../Portfolio/ListPortfolio/ListPortfolio';
import { useAuth } from '../../Context/useAuth';
import { UserProfile } from '../../Models/User';
import { tripAddAPI } from '../../Services/TripService';
import AddTripModal from '../Card/AddTripModal/AddTripModal';

interface Props {

};

type TripFormInputs = {
  tripName: string;
  startDate: string;
  endDate: string;
};
  
const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getPortfolio = () => {
     portfolioGetApi().then((res) => {
      if(res?.data){
        setPortfolioValues(res?.data);
      }
    }).catch((e) => {
      toast.warning("Could not get trips!")
    })
  };

  const onPortfolioDelete = (e: any) => {
    e.preventDefault();
    portfolioDeleteApi(e.target[0].value).then((res) => {
      if(res?.status == 200) {
        toast.success("Trip Deleted");
        getPortfolio();
      }
    })
  };


  const handleTrip = async (e: TripFormInputs) => {
    try {
        const newTripId = await tripAddAPI(e.tripName, e.startDate, e.endDate);
        
        if (newTripId) {
            const portfolioResponse = await portfolioAddApi(newTripId);
            
            if (portfolioResponse?.status === 204) {
                toast.success("Trip added");
                getPortfolio(); 
            } else {
                toast.warning("Trip created but couldn't be added to portfolio");
            }
        }
    } catch (error) {
        toast.error("Failed to create trip");
        console.error(error);
    }
};

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <div>
        <button
        className="mr-5 flex-1 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg float-right"
        onClick={() => setIsModalOpen(true)}
      >
        + Add
      </button>
        <ListPortfolio portfolioValues={portfolioValues!} onPortfolioDelete={onPortfolioDelete}/>
        <AddTripModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        handleTrip={handleTrip}
      />
    </div>
);
}

export default CardList