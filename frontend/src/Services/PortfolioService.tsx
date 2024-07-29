import axios from "axios"
import { PortfolioGet, PortfolioPost } from "../Models/Portfolio"
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://localhost:7160/api/portfolio/"

export const portfolioAddApi = async (id: number) => {
    try{
        const data = await axios.post<PortfolioPost>(api + `?id=${id}`);
        return data;
    }catch (error){
        handleError(error);
    }
};

export const portfolioDeleteApi = async (id: number) => {
    try{
        const data = await axios.delete<PortfolioPost>(api + `?tripId=${id}`);
        return data;
    }catch (error){
        handleError(error);
    }
};

export const portfolioGetApi = async () => {
    try{
        const data = await axios.get<PortfolioGet[]>(api);
        return data;
    }catch (error){
        handleError(error);
    }
};