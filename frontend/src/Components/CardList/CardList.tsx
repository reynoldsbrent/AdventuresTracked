import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import { PortfolioGet } from '../../Models/Portfolio';
import { portfolioGetApi } from '../../Services/PortfolioService';
import axios, { AxiosResponse } from 'axios';
import { toast } from 'react-toastify';
import ListPortfolio from '../Portfolio/ListPortfolio/ListPortfolio';

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
        <ListPortfolio portfolioValues={portfolioValues!} />
    </div>
);
}

export default CardList