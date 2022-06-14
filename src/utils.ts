import { StockData } from "./types";

// Cheks the incoming data for matching StockData type
export const isStockData = (data: any): data is Array<StockData> => {
    if (typeof data === 'object' && data !== null) {
        let isValidData = true;
        data.forEach((item: StockData) => {
            if (!item.hasOwnProperty('code') && typeof item.code === 'string' &&
                item.hasOwnProperty('price') && typeof item.code === 'number') isValidData = false;
        })

        return isValidData
    }

    return false
}
