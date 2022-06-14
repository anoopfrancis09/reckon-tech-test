import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface ITableData {
    rowData: Array<{}>
    headerKeys: string[]
    rowHeaders: string[]
}

export default function RTable(props: ITableData) {

    const { rowData, rowHeaders, headerKeys } = props

    const generateBodyRows = (row: any) => {
        return headerKeys.map((eachKey, index) => {
            return index === 0 ? <TableCell component="th" scope="row">{row[eachKey]}</TableCell> : <TableCell align="right">{row[eachKey]}</TableCell>
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {
                            rowHeaders.map((eachHeader, index) => {
                                return index === 0 ? (<TableCell key={`rowHeader-${index}`}>{eachHeader}</TableCell>) : <TableCell key={`rowHeader-${index}`} align="right">{eachHeader}</TableCell>
                            })
                        }
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowData.map((row, index) => (
                        <TableRow
                            key={`row-${index}`}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            {generateBodyRows(row)}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
