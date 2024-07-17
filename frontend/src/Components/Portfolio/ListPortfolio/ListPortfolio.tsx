import React, { SyntheticEvent } from 'react'
import { PortfolioGet } from '../../../Models/Portfolio';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import { Link } from 'react-router-dom';

type Props = {
    portfolioValues: PortfolioGet[];
}

const ListPortfolio = ({portfolioValues}: Props) => {
  return (
    <section id="portfolio">  
      <h2 className="mb-3 mt-3 text-3xl flex justify-center font-semibold md:text-4xl">
        Your Trips
      </h2>
      <div className=" flex-col  max-w-5xl mx-auto space-y-10 px-10 mb-5  ">
        <>
          {portfolioValues.length > 0 ? (
            portfolioValues.map((portfolioValue) => {
              return (
                <CardPortfolio
                  portfolioValue={portfolioValue}
                />
              );
            })
          ) : (
            <h3 className="mb-3 mt-3 text-xl font-semibold text-center md:text-xl">
              You don't have any trips.
            </h3>
          )}
        </>
      </div>
    </section>
  )
}

export default ListPortfolio