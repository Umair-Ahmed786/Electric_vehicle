import React, { useEffect } from 'react';
import '../configurators.scss';
import { TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import RefreshRoundedIcon from '@mui/icons-material/RefreshRounded';

function HybridConfigurator({ configurationChanged }) {
  const localStorageConfig = JSON.parse(localStorage.getItem('phev-config'));

  let consumption = localStorageConfig?.consumption ?? 6;
  let look = localStorageConfig?.look ?? 2;
  let power = localStorageConfig?.power ?? 0;
  let practicality = localStorageConfig?.practicality ?? 4;
  let price = localStorageConfig?.price ?? 5;
  let quality = localStorageConfig?.quality ?? 4;
  let supercharge = localStorageConfig?.supercharge ?? 0.5;
  let trunk = localStorageConfig?.trunk ?? 2.5;
  let tank = localStorageConfig?.tank ?? 4;
  let volume = localStorageConfig?.volume ?? 1;
  let surface = localStorageConfig?.surface ?? 10;

  const sendConfiguration = () =>
    configurationChanged({
      consumption,
      look,
      power,
      practicality,
      price,
      quality,
      supercharge,
      trunk,
      tank,
      volume,
      surface
    });

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(sendConfiguration, []);

  return (
    <form onChange={sendConfiguration} className='configurator'>
      <section className='goods'>
        <h4>Advantages</h4>
        <TextField
          label='Trunk Coefficient'
          name='trunk'
          defaultValue={trunk}
          onChange={(event) => trunk = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Tank Coefficient'
          name='tank'
          defaultValue={tank}
          onChange={(event) => tank = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Consumption Coefficient'
          name='consumption'
          defaultValue={consumption}
          onChange={(event) => consumption = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label="Supercharge Duration Coefficient"
          name='supercharge'
          defaultValue={supercharge}
          onChange={(event) => supercharge = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Quality Coefficient'
          name='quality'
          defaultValue={quality}
          onChange={(event) => quality = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Appearance Coefficient'
          name='look'
          defaultValue={look}
          onChange={(event) => look = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Practicality Coefficient'
          name='practicality'
          defaultValue={practicality}
          onChange={(event) => practicality = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Power Coefficient'
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
        <h4>Disadvantages</h4>
        <TextField
          label='Price Coefficient'
          name='price'
          defaultValue={price}
          onChange={(event) => price = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Volume Coefficient'
          name='volume'
          defaultValue={volume}
          onChange={(event) => volume = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Surface Coefficient'
          name='surface'
          defaultValue={surface}
          onChange={(event) => surface = event.target.value ? +event.target.value : null}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
      </section>
      <Tooltip title='Reset'>
        <IconButton onClick={() => {
          localStorage.removeItem('phev-config');
          window.location.reload();
        }}>
          <RefreshRoundedIcon />
        </IconButton>
      </Tooltip>
    </form>
  );
}

export default HybridConfigurator;
