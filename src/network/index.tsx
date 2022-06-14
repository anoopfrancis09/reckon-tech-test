import axios from "axios";
import Moment from "moment";
import { isStockData } from "../utils";

const get = async (url: string) => {
    console.log('Time:', Moment().format('YYYY-MM-DD hh:mm:ss'))
    const response: any = await axios.get(url)
        .then(function (response) {
            if (response && isStockData(response.data)) {
                return response
            }
            else {
                throw new Error('Something went wrong')
            }
        })
        .catch(function (error) {
            //TODO: Handle message in UI
            console.log(error);
        })

    return response ? response.data : []
}

export default get;