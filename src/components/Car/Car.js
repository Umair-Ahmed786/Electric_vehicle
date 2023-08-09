import React from 'react';
import './Car.scss';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

function classBad(scoreBad) {
    if (scoreBad > -2) {
        return 'amazing';
    } else if (scoreBad > -4) {
        return 'good';
    } else if (scoreBad > -6) {
        return '';
    } else if (scoreBad > -8) {
        return 'bad';
    }
    return 'trash';
}

function Car({result, type}) {
    if (result) {
        return (<TableContainer component={Paper} className="car-table">
            <Table>
                <TableBody>
                    <TableRow>
                        <TableCell>Nom</TableCell>
                        <TableCell>{result.vehicle.name}</TableCell>
                    </TableRow>
                    <TableRow
                        className={classBad(result.scoreBad.price)}>
                        <TableCell sx={{fontWeight: "bold"}}>Prix</TableCell>
                        <TableCell
                            sx={{fontWeight: "bold"}}>{result.vehicle.price.toLocaleString()} €</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Coffre</TableCell>
                        <TableCell>{result.vehicle.trunk} L</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>{type === 'EV' ? 'Autonomie' : 'Réservoir'}</TableCell>
                        <TableCell>{type === 'EV' ? `${result.vehicle.range} km` : `${result.vehicle.tank} L`}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Consommation</TableCell>
                        <TableCell>{result.vehicle.consumption} {type === 'EV' ? 'kWh/100km' : 'L/100km'}</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Supercharge</TableCell>
                        <TableCell>{result.vehicle.supercharge} min</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Volume</TableCell>
                        <TableCell>{result.vehicle.volume} m³</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Qualité</TableCell>
                        <TableCell>{result.vehicle.quality} /5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Praticité</TableCell>
                        <TableCell>{result.vehicle.practicality} /5</TableCell>
                    </TableRow>
                    <TableRow>
                        <TableCell>Esthétique</TableCell>
                        <TableCell>{result.vehicle.look} /5</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>)
    }
}

export default Car;
