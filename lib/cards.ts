import axios from "axios";
import { API_URL } from "./constants";

export async function getCardsData() {
    const response = await axios.get(API_URL + 'cards/'); 
    const json = await response.data;
    return json;
}