import React, { useEffect } from 'react';
import '../configurators.scss';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

function ElectricConfigurator({ configurationChanged }) {
  const localStorageConfig = JSON.parse(localStorage.getItem('ev-config'));

  let consumption = localStorageConfig?.consumption ?? 2;
  let look = localStorageConfig?.look ?? 5;
  let power = localStorageConfig?.power ?? 0;
  let practicality = localStorageConfig?.practicality ?? 4;
  let price = localStorageConfig?.price ?? 3;
  let quality = localStorageConfig?.quality ?? 4;
  let range = localStorageConfig?.range ?? 5;
  let supercharge = localStorageConfig?.supercharge ?? 1;
  let trunk = localStorageConfig?.trunk ?? 3;
  let volume = localStorageConfig?.volume ?? 3;

  const sendConfiguration = () =>
    configurationChanged({
      consumption,
      look,
      power,
      practicality,
      price,
      quality,
      range,
      supercharge,
      trunk,
      volume
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
          label='Coefficient Autonomie'
          name='range'
          defaultValue={range}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
          onChange={(event) => range = event.target.value ? +event.target.value : null}
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
          label='Coefficient Durée supercharge'
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
        <TextField
          label='Coefficient Puissance'
          name='power'
          defaultValue={power}
          onChange={(event) => power = event.target.value ? +event.target.value : null}
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
      <Tooltip title='Reset'>
        <IconButton onClick={() => {
          localStorage.removeItem('ev-config');
          window.location.reload();
        }}>
          <RefreshRoundedIcon />
        </IconButton>
      </Tooltip>
    </form>
  );
}

export default ElectricConfigurator;
