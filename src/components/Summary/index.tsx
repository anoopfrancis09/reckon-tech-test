import { ISummaryPageData } from '../../types';
import RTable from '../Common/table';
import './style.css'

function SummaryPage(props: ISummaryPageData) {
    const { summaryData } = props

    return (
        <div className='summaryContainer'>
            <h2>Summary</h2>
            {summaryData.length ? <div className='summaryTableSection'>
                <RTable
                    rowData={summaryData}
                    rowHeaders={['Stock', 'Starting', 'Lowest', 'Highest', 'Current']}
                    headerKeys={['code', 'startingPrice', 'lowestPrice', 'highestPrice', 'currentPrice']}
                />
            </div> : null}
        </div >
    );
}

export default SummaryPage;