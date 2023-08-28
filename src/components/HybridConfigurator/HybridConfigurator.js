import React, { useEffect } from 'react';
import '../configurators.scss';
import { TextField } from '@mui/material';

function HybridConfigurator({ configurationChanged }) {
  const localStorageConfig = JSON.parse(localStorage.getItem('phev-config'));

  let trunk = localStorageConfig?.trunk ?? 2.5;
  let tank = localStorageConfig?.tank ?? 4;
  let consumption = localStorageConfig?.consumption ?? 6;
  let supercharge = localStorageConfig?.supercharge ?? 0.5;
  let quality = localStorageConfig?.quality ?? 4;
  let look = localStorageConfig?.look ?? 2;
  let price = localStorageConfig?.price ?? 5;
  let volume = localStorageConfig?.volume ?? 1;
  let practicality = localStorageConfig?.practicality ?? 4;

  const sendConfiguration = () =>
    configurationChanged({
      trunk,
      tank,
      consumption,
      supercharge,
      quality,
      practicality,
      look,
      price,
      volume,
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(sendConfiguration, []);

  return (
    <form onChange={sendConfiguration} className='configurator'>
      <section className='goods'>
        <h4>Avantages</h4>
        <TextField
          label='Coefficient Coffre'
          name='trunk'
          defaultValue={trunk}
          onChange={(event) => trunk = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Réservoir'
          name='tank'
          defaultValue={tank}
          onChange={(event) => tank = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Consommation'
          name='consumption'
          defaultValue={consumption}
          onChange={(event) => consumption = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label="Coefficient Durée 'super'charge"
          name='supercharge'
          defaultValue={supercharge}
          onChange={(event) => supercharge = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Quality'
          name='quality'
          defaultValue={quality}
          onChange={(event) => quality = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Apparence'
          name='look'
          defaultValue={look}
          onChange={(event) => look = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Praticité'
          name='practicality'
          defaultValue={practicality}
          onChange={(event) => practicality = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
      </section>
      <section className='bads'>
        <h4>Inconvénients</h4>
        <TextField
          label='Coefficient Prix'
          name='price'
          defaultValue={price}
          onChange={(event) => price = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Volume'
          name='volume'
          defaultValue={volume}
          onChange={(event) => volume = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
      </section>
    </form>
  );
}

export default HybridConfigurator;
