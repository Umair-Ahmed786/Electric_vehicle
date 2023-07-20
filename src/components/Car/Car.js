import React from 'react';
import './Car.scss';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableBody from '@mui/material/TableBody';

function Car({result}) {
    if (result) {
        console.warn(result.scoreBad.price)
        return (
            <section className="car">
                <TableContainer component={Paper} className="car-table">
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Nom</TableCell>
                                <TableCell>{result.vehicle.name}</TableCell>
                            </TableRow>
                            <TableRow
                                className={result.scoreBad.price < -5 ? 'bad' : 'good'}>
                                <TableCell sx={{fontWeight: "bold"}}>Prix</TableCell>
                                <TableCell
                                    sx={{fontWeight: "bold"}}>{result.vehicle.price.toLocaleString()} €</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Coffre</TableCell>
                                <TableCell>{result.vehicle.trunk} L</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Autonomie</TableCell>
                                <TableCell>{result.vehicle.range} km</TableCell>
                            </TableRow>
                            <TableRow>
                                <TableCell>Consommation</TableCell>
                                <TableCell>{result.vehicle.consumption} kWh/100km</TableCell>
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
                </TableContainer>

                <div className="car-images">
                    {result.vehicle.imgFront && <img src={result.vehicle.imgFront} alt="Avant"/>}
                    {result.vehicle.imgBack && <img src={result.vehicle.imgBack} alt="Arrière"/>}
                    {result.vehicle.imgSide && <img src={result.vehicle.imgSide} alt="Profil"/>}
                    <div className="space"></div>
                    {result.vehicle.imgDashboard && <img src={result.vehicle.imgDashboard} alt="Tableau de bord"/>}
                    {result.vehicle.imgBackseats && <img src={result.vehicle.imgBackseats} alt="Banquette"/>}
                    {result.vehicle.imgTrunk && <img src={result.vehicle.imgTrunk} alt="Coffre"/>}
                </div>
            </section>
        )
    }
}

export default Car;
