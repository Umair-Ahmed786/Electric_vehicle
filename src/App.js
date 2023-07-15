import React, { useState } from 'react';
import './App.css';
import Configurator from "./components/Configurator/Configurator";
import Results from './components/Results/Results';
import vehicles from './vehicles.json'
import { scoreNegatif, scorePositif, sortByScore } from './compute-vehicles';

function App() {
    const computeResults = (config) => {
        console.warn(config)
        const res = []
        vehicles.forEach((vehicle) => {
            const scoreGood = scorePositif(vehicle, config);
            const scoreBad = scoreNegatif(vehicle, config);
            const score = scoreGood + scoreBad;
            res.push({ vehicle, score, scoreGood, scoreBad });
        });
        res.sort(sortByScore);

        setResults(res);
    }

    const configurationChanged = (e) => computeResults(e)
    const [results, setResults] = useState([]);

    return (
        <div className="App">
            <header className="App-header"><h1>Choix d'une voiture électrique</h1></header>
            <section className="App-content">
                <Configurator configurationChanged={configurationChanged} />
                <Results results={results}></Results>
            </section>

            <code>{JSON.stringify(vehicles)}</code>
        </div>
    );
}

export default App;
