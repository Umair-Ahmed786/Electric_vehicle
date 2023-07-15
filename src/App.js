import './App.css';
import Configurator from "./components/Configurator/Configurator";
import Results from './components/Results/Results';
import vehicles from './vehicles.json'

function App() {
    const configurationChanged = (e) => {
        results = [1,2]
    }
    let results=[]

    return (
        <div className="App">
            <header className="App-header"><h1>Choix d'une voiture électrique</h1></header>
            <section className="App-content">
                <Configurator configurationChanged={configurationChanged} />
                <Results resultsChanged={resultsChanged}></Results>
            </section>

            <code>{JSON.stringify(vehicles)}</code>
        </div>
    );
}

export default App;
