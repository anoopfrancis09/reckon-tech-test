export interface StockData {
    code: String
    price: Number
}

export interface ISummaryPageData {
    summaryData: ISummaryData[]
}

export interface ILogDataProps {
    logsData: LogData[]
    isPaused: Boolean
    hanldePauseLogs: () => void
}

export interface LogData {
    time: string
    logs: string[]
}

export interface ISummaryData {
    code: String
    currentPrice: Number
    lowestPrice: Number
    highestPrice: Number
    startingPrice: Number
}