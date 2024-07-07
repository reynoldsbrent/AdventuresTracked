﻿using api.Models;

namespace api.Interfaces
{
    public interface IPortfolioRepository
    {
        Task<List<Trip>> GetUserPortfolio(AppUser user);
    }
}
