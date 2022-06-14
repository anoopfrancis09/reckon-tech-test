import Button from '@mui/material/Button';
import { ILogDataProps, LogData } from '../../Types/types';
import './style.css'

function LogPage(props: ILogDataProps) {
    const { logsData, isPaused, hanldePauseLogs } = props

    const generateLogsView = (eachLog: LogData) => {
        return (
            <>
                <h4>{`Updates for ${eachLog.time} `}</h4>
                {
                    eachLog.logs.map((stockDataLog: string, index) => {
                        return (
                            <span key={`log-row-${index}`}>
                                {stockDataLog}
                            </span>
                        )
                    })
                }
            </>
        )
    }


    return (
        <div className='logsContainer'>
            <div className='titleContainer'>
                <h2>Log</h2>
                <Button variant="outlined" style={{ height: 30 }} onClick={hanldePauseLogs}>{isPaused ? 'Resume Log' : 'Pause Log'}</Button>
            </div>
            <div className='logsSection'>
                {
                    logsData.map((eachLog, index) => {
                        return (
                            <div key={`log-section-${index}`} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                {generateLogsView(eachLog)}
                            </div>
                        )
                    })
                }
            </div>
        </div >
    );
}

export default LogPage;
