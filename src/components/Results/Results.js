import React from 'react';
import './Results.scss';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import Tooltip from '@mui/material/Tooltip';

function Results({ results, resultSelected }) {
  return (
    <TableContainer component={Paper} className="results-table" >
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Car</TableCell>
            <TableCell align="right">Positive Score</TableCell>
            <TableCell align="right">Negative Score</TableCell>
            <TableCell align="right">Total Score</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {results.map((result) => (
            <TableRow key={result.vehicle.name} onClick={() => resultSelected(result)}>
              <TableCell>{result.vehicle.name}</TableCell>
              <TableCell align="right"><Tooltip title={JSON.stringify(result.scoreGood)}><span>{result.scoreGood.total}</span></Tooltip></TableCell>
              <TableCell align="right"><Tooltip title={JSON.stringify(result.scoreBad)}><span>{result.scoreBad.total}</span></Tooltip></TableCell>
              <TableCell align="right">{result.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Results;
