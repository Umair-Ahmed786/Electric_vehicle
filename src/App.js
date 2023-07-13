import './App.css';
import Configurator from "./components/Configurator/Configurator";

function App() {
    return (
        <div className="App">
            <header className="App-header"><h1>Choix d'une voiture électrique</h1></header>
            <section className="App-content">
                <Configurator />
            </section>
        </div>
    );
}

export default App;
