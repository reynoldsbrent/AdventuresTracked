import axios from "axios";
import { LegGet } from "../Models/Leg";
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://localhost:7160/api/Leg";

export const legGetAPI = async (
    tripId: number
) => {
    try {
        const data = await axios.get<LegGet[]>(api + `?TripId=${tripId}`);
        return data;
    } catch (error){
        handleError(error);
    }
};