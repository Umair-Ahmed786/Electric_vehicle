import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import React, {Fragment, useState} from 'react';
import './App.scss';
import ElectricConfigurator from "./components/ElectricConfigurator/ElectricConfigurator";
import Results from './components/Results/Results';
import Car from './components/Car/Car';
import electricVehicles from './datasets/electric-vehicles.json'
import hybridVehicles from './datasets/hybrid-vehicles.json'
import {scoreNegative, scorePHEVPositive, scorePositive, sortByScore} from './compute-vehicles';
import {Tab, Tabs} from "@mui/material";
import HybridConfigurator from "./components/HybridConfigurator/HybridConfigurator";
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
    const computeResults = (config, datasetName) => {
        const res = []
        if (datasetName === 'EV') {
            electricVehicles.forEach((vehicle) => {
                const scoreGood = scorePositive(vehicle, config);
                const scoreBad = scoreNegative(vehicle, config);
                const score = Math.round((scoreGood.total + scoreBad.total) * 10) / 10;
                res.push({vehicle, score, scoreGood, scoreBad});
            });
        } else if (datasetName === 'PHEV') {
            hybridVehicles.forEach((vehicle) => {
                const scoreGood = scorePHEVPositive(vehicle, config);
                const scoreBad = scoreNegative(vehicle, config);
                const score = Math.round((scoreGood.total + scoreBad.total) * 10) / 10;
                res.push({vehicle, score, scoreGood, scoreBad});
            });
        }

        res.sort(sortByScore);

        setResults(res);
    }

    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const [results, setResults] = useState([]);
    const [result, setResult] = useState(null);
    const [tabValue, setTabValue] = useState(0);
    const matchesGtLG = useMediaQuery('(min-width:1280px)');
    const matchesGtMD = useMediaQuery('(min-width:960px)');

    const configurationChanged = (config, datasetName) => computeResults(config, datasetName)
    const handleTabChange = (event, newTabValue) => setTabValue(newTabValue);

    return (
        <div className="App">
            <header className="App-header"><h1>Choix d'une voiture électrique</h1></header>
            <Tabs value={tabValue} onChange={handleTabChange} centered>
                <Tab label="Electrique"/>
                <Tab label="Hybride rechargeable (PHEV)"/>
            </Tabs>

            {tabValue === 0 && (
                <section className="App-content">
                    {matchesGtMD && (
                        <ElectricConfigurator configurationChanged={(config) => configurationChanged(config, 'EV')}/>)}
                    <Results results={results} resultSelected={(r) => setResult(r)}/>
                    <Car result={result} type="EV"/>
                </section>
            )}

            {tabValue === 1 && (
                <section className="App-content">
                    {matchesGtMD && (
                        <HybridConfigurator configurationChanged={(config) => configurationChanged(config, 'PHEV')}/>)}
                    <Results results={results} resultSelected={(r) => setResult(r)}/>
                    <Car result={result} type="PHEV"/>
                </section>
            )}

            {!matchesGtMD && (
                <Fab onClick={() => setDrawerOpen(true)} variant="contained" color="secondary" aria-label="Configure"
                     className="open-drawer-button"><BuildRoundedIcon/></Fab>)}

            <Fragment key="right">
                <Drawer anchor="right"
                        open={drawerOpen}
                        onClose={() => setDrawerOpen(false)}
                        className="configurator-drawer">
                    {tabValue === 0 && (
                        <ElectricConfigurator configurationChanged={(config) => configurationChanged(config, 'EV')}/>)}
                    {tabValue === 1 && (
                        <HybridConfigurator configurationChanged={(config) => configurationChanged(config, 'PHEV')}/>)}
                </Drawer>
            </Fragment>
        </div>
    )
}

export default App;
