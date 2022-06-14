import { useEffect, useState } from 'react';
import Moment from 'moment';
import get from '../../Network'
import { ISummaryData, LogData, StockData } from '../../Types/types';
import SummaryPage from '../Summary';
import LogPage from '../Log';

function Home() {

    const [logData, setLogData] = useState<LogData[]>([])
    const [stockData, setStockData] = useState<StockData[]>([])
    const [summaryData, setSummaryData] = useState<ISummaryData[]>([])
    const [isPaused, setIsPaused] = useState<Boolean>(false)

    const getStockData = () => {
        get('https://join.reckon.com/stock-pricing')
            .then(function (data) {
                if (data.length) {
                    setStockData(data)
                }

            })
    }

    const generateLogData = () => {
        const time = Moment().format('YYYY-MM-DD hh:mm:ss')
        const currentLog = stockData.map(stock => `${stock.code}: $${stock.price}`)

        setLogData([...logData, { time, logs: currentLog }])
    }

    const generateSummaryData = () => {
        let lowestPrice: Number
        let highestPrice: Number
        let startingPrice: Number

        const newSummaryData = stockData.map((eachStock) => {
            const currentPrice = eachStock.price
            if (summaryData && summaryData.length) {
                const previousItem = summaryData.filter((summary) => {
                    return summary.code === eachStock.code
                })[0]
                lowestPrice = previousItem.lowestPrice < currentPrice ? previousItem.lowestPrice : currentPrice
                highestPrice = previousItem.highestPrice > currentPrice ? previousItem.highestPrice : currentPrice
                startingPrice = previousItem.startingPrice
            }
            else {
                startingPrice = currentPrice
                lowestPrice = currentPrice
                highestPrice = currentPrice
            }

            return { code: eachStock.code, lowestPrice, highestPrice, startingPrice, currentPrice }
        })
        setSummaryData(newSummaryData)
    }

    useEffect(() => {
        const timer = setInterval(() => getStockData(), 2000);

        return () => {
            clearInterval(timer);
        };
    })

    useEffect(() => {

        if (stockData.length) {
            if (!isPaused) {
                generateLogData()
            }

            generateSummaryData()
        }

    }, [stockData])

    const handlePauseLogs = () => {
        setIsPaused(!isPaused)
    }

    return (
        <div style={{ display: 'flex' }}>
            <LogPage logsData={logData} isPaused={isPaused} hanldePauseLogs={handlePauseLogs} />
            <SummaryPage summaryData={summaryData} />
        </div >
    );
}

export default Home;
