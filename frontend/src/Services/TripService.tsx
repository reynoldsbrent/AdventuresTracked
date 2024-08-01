import axios from "axios";
import { TripPost } from "../Models/Trip";
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://localhost:7160/api/Trip/";

export const tripAddAPI = async (
    tripName: string,
    startDate: string,
    endDate: string,
) => {
    try {
        const response = await axios.post<TripPost>(api, {
            tripName: tripName,
            startDate: startDate,
            endDate: endDate,
        });
        return response.data.tripId; 
    } catch (error){
        handleError(error);
    }
};