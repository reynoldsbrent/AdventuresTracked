import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioGetApi } from '../../Services/PortfolioService';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import ListPortfolio from '../Portfolio/ListPortfolio/ListPortfolio';
import { useAuth } from '../../Context/useAuth';
import { UserProfile } from '../../Models/User';

interface Props {

};
  
const CardList: React.FC<Props> = (props: Props) : JSX.Element => {
  const [portfolioValues, setPortfolioValues] = useState<PortfolioGet[] | null>([]);

  const getPortfolio = () => {
     portfolioGetApi().then((res) => {
      if(res?.data){
        setPortfolioValues(res?.data);
      }
    }).catch((e) => {
      toast.warning("Could not get trips!")
    })
  };

  useEffect(() => {
    getPortfolio();
  }, []);

  return (
    <div>
        <button className="mr-5 flex-1 bg-blue-700 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-lg float-right">+ Add</button>
        <ListPortfolio portfolioValues={portfolioValues!} />
    </div>
);
}

export default CardList