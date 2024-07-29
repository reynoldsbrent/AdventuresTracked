import React, { SyntheticEvent } from 'react'

type Props = {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: number;
}

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
  return (
    <div>
        <form onSubmit={onPortfolioDelete}>
            <input hidden={true} value={portfolioValue} />
            <button className="float-left text-red-500 hover:text-red-600">Delete</button>
        </form>
    </div>
  )
}

export default DeletePortfolio