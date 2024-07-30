import axios from "axios";
import { LegDelete, LegGet, LegPost } from "../Models/Leg";
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://localhost:7160/api/Leg/";

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

export const legPostAPI = async (
    tripId: number,
    departureAirportId: string,
    arrivalAirportId: string,
    departureDate: string,
    arrivalDate: string
) => {
    try {
        const data = await axios.post<LegPost>(api + `${tripId}`, {
            departureAirportId: departureAirportId,
            arrivalAirportId: arrivalAirportId,
            departureDate: departureDate,
            arrivalDate: arrivalDate
        });
        return data;
    } catch (error){
        handleError(error);
    }
};

export const legDeleteAPI = async (
    id: number
) => {
    try {
        const data = await axios.delete<LegDelete[]>(api + `${id}`);
        return data;
    } catch (error){
        handleError(error);
    }
};