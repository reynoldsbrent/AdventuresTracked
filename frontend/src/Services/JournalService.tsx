import axios from "axios";
import { JournalPost } from "../Models/Journal";
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