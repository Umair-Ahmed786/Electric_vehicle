import React from 'react';
import './Car.scss';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

function classBad(scoreBad) {
  if (scoreBad === 0) {
    return 'amazing';
  } else if (scoreBad === 1 || scoreBad === 2) {
    return 'good';
  } else if (scoreBad === 3) {
    return '';
  } else if (scoreBad === 4 || scoreBad === 5) {
    return 'bad';
  }
  return 'trash';
}

function classGood(scoreGood) {
  if (scoreGood === 5) {
    return 'amazing';
  } else if (scoreGood === 4 || scoreGood === 3) {
    return 'good';
  } else if (scoreGood === 2) {
    return '';
  } else if (scoreGood === 1) {
    return 'bad';
  }
  return 'trash';
}

function classMark(markOn5) {
  if (markOn5 >= 4.5) {
    return 'amazing';
  } else if (markOn5 > 3.5) {
    return 'good';
  } else if (markOn5 >= 2.5) {
    return '';
  }else if (markOn5 > 1) {
    return 'bad';
  }
  return 'trash';
}

function Car({ result, type }) {
  const isEV = type === 'EV';

  if (result) {
    return (
      <TableContainer component={Paper}  className='car-table'>
        <Table size="small">
          <TableBody>
            <TableRow>
              <TableCell>Nom</TableCell>
              <TableCell>{result.vehicle.name}</TableCell>
            </TableRow>
            <TableRow className={classBad(result.scoreBad.priceScore)}>
              <TableCell sx={{ fontWeight: 'bold' }}>Prix</TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>{result.vehicle.price.toLocaleString()} €</TableCell>
            </TableRow>
            <TableRow className={classGood(result.scoreGood.trunkScore)}>
              <TableCell>Coffre</TableCell>
              <TableCell>{result.vehicle.trunk} L</TableCell>
            </TableRow>
            <TableRow className={classGood(result.scoreGood.rangeScore)}>
              <TableCell>{isEV ? 'Autonomie moy.' : 'Réservoir'}</TableCell>
              <TableCell>{isEV ? `${result.vehicle.range} km` : `${result.vehicle.tank} L`}</TableCell>
            </TableRow>
            <TableRow className={classGood(result.scoreGood.consumptionScore)}>
              <TableCell>Consommation</TableCell>
              <TableCell>
                {result.vehicle.consumption} {isEV ? 'kWh/100km' : 'L/100km'}
              </TableCell>
            </TableRow>
            <TableRow className={classGood(result.scoreGood.superchargeScore)}>
              <TableCell>Supercharge</TableCell>
              <TableCell>{result.vehicle.supercharge} min</TableCell>
            </TableRow>
            <TableRow className={classBad(result.scoreBad.volumeScore)}>
              <TableCell>Volume</TableCell>
              <TableCell>{result.vehicle.volume} m³</TableCell>
            </TableRow>
            <TableRow className={classGood(result.scoreGood.powerScore)}>
              <TableCell>Puissance (0→100)</TableCell>
              <TableCell>{result.vehicle.power} s</TableCell>
            </TableRow>
            <TableRow className={classMark(result.vehicle.quality)}>
              <TableCell>Qualité</TableCell>
              <TableCell>{result.vehicle.quality} /5</TableCell>
            </TableRow>
            <TableRow className={classMark(result.vehicle.practicality)}>
              <TableCell>Praticité</TableCell>
              <TableCell>{result.vehicle.practicality} /5</TableCell>
            </TableRow>
            <TableRow className={classMark(result.vehicle.look)}>
              <TableCell>Esthétique</TableCell>
              <TableCell>{result.vehicle.look} /5</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}

export default Car;
