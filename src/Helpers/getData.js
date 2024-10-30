import axios from "axios";

export const getData = async(url)=>{
    try {
        const response = axios.get(url)

        return response
    } catch (error) {
        console.log('error en el Get',error)
    }
}