import './App.css';
import Configurator from "./components/Configurator/Configurator";
import vehicles from './vehicles.json'

function App() {
    let coefficients={};

    return (
        <div className="App">
            <header className="App-header"><h1>Choix d'une voiture électrique</h1></header>
            <section className="App-content">
                <Configurator coefficients={coefficients}/>
            </section>

            <p>{coefficients}</p>
            <code>{JSON.stringify(vehicles)}</code>
        </div>
    );
}

export default App;
