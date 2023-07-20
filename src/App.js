import React, { useState } from 'react';
import './App.scss';
import Configurator from "./components/Configurator/Configurator";
import Results from './components/Results/Results';
import Car from './components/Car/Car';
import vehicles from './vehicles.json'
import { scoreNegatif, scorePositif, sortByScore } from './compute-vehicles';

function App() {
    const computeResults = (config) => {
        console.warn(config)
        const res = []
        vehicles.forEach((vehicle) => {
            const scoreGood = scorePositif(vehicle, config);
            const scoreBad = scoreNegatif(vehicle, config);
            const score = scoreGood.total + scoreBad.total;
            res.push({ vehicle, score, scoreGood, scoreBad });
        });
        res.sort(sortByScore);

        setResults(res);
    }

    const configurationChanged = (e) => computeResults(e)
    const [results, setResults] = useState([]);
    const [car, setCar] = useState(null);

    return (
        <div className="App">
            <header className="App-header"><h1>Choix d'une voiture électrique</h1></header>
            <section className="App-content">
                <Configurator configurationChanged={configurationChanged} />
                <Results results={results} carSelected={(vehicle) => setCar(vehicle)} />
                <Car car={car} />
            </section>

            {/*<code>{JSON.stringify(vehicles)}</code>*/}
        </div>
    );
}

export default App;
