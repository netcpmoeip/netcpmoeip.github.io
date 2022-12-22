import axios from "axios";
import { API_URL } from "./constants";

export async function getPageData() {
    const response = await axios.get(API_URL + 'cards/solution/'); 
    const json = await response.data;
    return json;
}