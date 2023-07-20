import React from 'react'
import './Results.scss';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';

function Results({results, resultSelected}) {
    return (
        <TableContainer component={Paper} className="results-table">
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Voiture</TableCell>
                        <TableCell align='right'>Score positif</TableCell>
                        <TableCell align='right'>Score negatif</TableCell>
                        <TableCell align='right'>Score</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {results.map(result => (
                        <TableRow key={result.vehicle.name} onClick={() => resultSelected(result)}>
                            <TableCell>{result.vehicle.name}</TableCell>
                            <TableCell align='right'>{result.scoreGood.total}</TableCell>
                            <TableCell align='right'>{result.scoreBad.total}</TableCell>
                            <TableCell align='right'>{result.score}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
        // <div className='results'>{JSON.stringify(results)}</div>
    );
}


export default Results;
