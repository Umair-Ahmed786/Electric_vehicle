import Drawer from '@mui/material/Drawer';
import Fab from '@mui/material/Fab';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import bg from './datasets/img/bg.jpg'
import DialogTitle from '@mui/material/DialogTitle';
import BuildRoundedIcon from '@mui/icons-material/BuildRounded';
import CancelRounded from '@mui/icons-material/CancelRounded';
import React, { Fragment, useEffect, useState } from 'react';
import './App.scss';
import ElectricConfigurator from './components/ElectricConfigurator/ElectricConfigurator';
import Results from './components/Results/Results';
import Car from './components/Car/Car';
import CarCarousel from './components/Car/CarCarousel';
import { computeResults } from './compute-vehicles';
import { Tab, Tabs } from '@mui/material';
import HybridConfigurator from './components/HybridConfigurator/HybridConfigurator';
import useMediaQuery from '@mui/material/useMediaQuery';

function App() {
  const [drawerOpen, setDrawerOpen] = React.useState(true);
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [results, setResults] = useState([]);
  const [result, setResult] = useState(null);
  const urlSearchParams = (new URLSearchParams(window.location.search));
  const [tabValue, setTabValue] = useState(+localStorage.getItem('type') ?? +urlSearchParams.get('type') ?? 0);
  const matchesGtLG = useMediaQuery('(min-width:1280px)');
  const matchesGtMD = useMediaQuery('(min-width:960px)');

  const configurationChanged = (config, datasetName) => computeResults(config, datasetName, setResults);
  const handleTabChange = (event, newTabValue) => {
    setResult(null);
    setTabValue(newTabValue);
    urlSearchParams.set('type', newTabValue);
    window.location.search = urlSearchParams.toString();
    localStorage.setItem('type', newTabValue);

    setTimeout(() => {
      setDrawerOpen(true);
      setTimeout(() => setDrawerOpen(false));
    });
  };
  const handleResultSelected = (result) => {
    setResult(result);
    if (!matchesGtLG) {
      setDialogOpen(true);
    }
  };

  useEffect(
    () => {
      setDrawerOpen(false);
    }, // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  return (
    <div className="App" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'white' }}>
      <header className="App-header">
        <h1>Future Electric Vehicles  <span className="version">{require('../package.json').version}</span>
        </h1>
      </header>
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab label="Electric"  style={{color: "white"}}/>
        <Tab label="Plug-in Hybrid (PHEV)" style={{color: "white"}}/>
      </Tabs>


      {tabValue === 0 && (
        <section className="App-content">
          {matchesGtMD && (
            <ElectricConfigurator configurationChanged={(config) => configurationChanged(config, 'EV')} />
          )}
          <Results results={results} resultSelected={(result) => handleResultSelected(result)} />
          {matchesGtLG && <Car result={result} type="EV" />}
          {matchesGtLG && <CarCarousel vehicle={result?.vehicle} />}
        </section>
      )}

      {tabValue === 1 && (
        <section className="App-content">
          {matchesGtMD && (
            <HybridConfigurator configurationChanged={(config) => configurationChanged(config, 'PHEV')} />
          )}
          <Results results={results} resultSelected={(result) => handleResultSelected(result)} />
          {matchesGtLG && <Car result={result} type="PHEV" />}
          {matchesGtLG && <CarCarousel vehicle={result?.vehicle} />}
        </section>
      )}

      {!matchesGtMD && (
        <Fab
          onClick={() => setDrawerOpen(true)}
          variant="contained"
          color="secondary"
          aria-label="Configure"
          className="open-drawer-button">
          <BuildRoundedIcon />
        </Fab>
      )}

      <Fragment key="configurator-drawer">
        <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}
          className="configurator-drawer">
          {tabValue === 0 && (
            <ElectricConfigurator configurationChanged={(config) => configurationChanged(config, 'EV')} />
          )}
          {tabValue === 1 && (
            <HybridConfigurator configurationChanged={(config) => configurationChanged(config, 'PHEV')} />
          )}
        </Drawer>
      </Fragment>

      {result && (
        <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)} className="car-dialog">
          <DialogTitle>
            <span>{result.vehicle.name}</span>
            <IconButton onClick={() => setDialogOpen(false)}>
              <CancelRounded />
            </IconButton>
          </DialogTitle>
          <section className="car-dialog-content">
            <Car result={result} type={tabValue === 0 ? 'EV' : 'PHEV'} />
            <CarCarousel vehicle={result.vehicle} />
          </section>
        </Dialog>
      )}
    </div>
  );
}

export default App;
