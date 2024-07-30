import axios from "axios";
import { JournalDelete, JournalGet, JournalPost } from "../Models/Journal";
import { handleError } from "../Helpers/ErrorHandler";

const api = "https://localhost:7160/api/Journal/"

export const journalPostAPI = async (
    tripId: number,
    title: string,
    entry: string
) => {
    try {
        const data = await axios.post<JournalPost>(api + `${tripId}`, {
            title: title,
            entry: entry
        });
        return data;
    } catch (error){
        handleError(error);
    }
};

export const journalGetAPI = async (
    tripId: number,
) => {
    try {
        const data = await axios.get<JournalGet[]>(api + `?TripId=${tripId}`);
        return data;
    } catch (error){
        handleError(error);
    }
};

export const journalDeleteAPI = async (
    id: number
) => {
    try {
        const data = await axios.delete<JournalDelete[]>(api + `${id}`);
        return data;
    } catch (error){
        handleError(error);
    }
};