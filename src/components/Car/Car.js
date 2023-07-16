import React from 'react';
import './Car.scss';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

function Car({ car }) {
    if (car) {
        return (
            <TableContainer component={Paper} className="car-table">
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell>Nom</TableCell>
                            <TableCell>{car.name}</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell sx={{fontWeight: "bold"}}>Prix</TableCell>
                            <TableCell sx={{fontWeight: "bold"}}>{car.price.toLocaleString()} €</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Coffre</TableCell>
                            <TableCell>{car.trunk} L</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Autonomie</TableCell>
                            <TableCell>{car.range} km</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Consommation</TableCell>
                            <TableCell>{car.consumption} kWh/100km</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Supercharge</TableCell>
                            <TableCell>{car.supercharge} min</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Volume</TableCell>
                            <TableCell>{car.volume} m³</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Qualité</TableCell>
                            <TableCell>{car.quality} /5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Praticité</TableCell>
                            <TableCell>{car.practicality} /5</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Esthétique</TableCell>
                            <TableCell>{car.look} /5</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        )
    } else {
        return;
    }
}

export default Car;