import React, { useEffect, useState } from 'react';
import '../configurators.scss';
import { TextField } from '@mui/material';

function ElectricConfigurator({ configurationChanged }) {
  const [trunk, setTrunk] = useState(2.5);
  const [range, setRange] = useState(5);
  const [consumption, setConsumption] = useState(2);
  const [supercharge, setSupercharge] = useState(1);
  const [quality, setQuality] = useState(4);
  const [look, setLook] = useState(1.5);
  const [price, setPrice] = useState(2);
  const [volume, setVolume] = useState(1);
  const [practicality, setPracticality] = useState(4);

  const sendConfiguration = () =>
    configurationChanged({
      trunk,
      range,
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
    <div className='configurator'>
      <section className='goods'>
        <h4>Avantages</h4>
        <TextField
          label='Coefficient Coffre'
          value={trunk}
          onChange={(event) => {
            setTrunk(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Autonomie'
          value={range}
          onChange={(event) => {
            setRange(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Consommation'
          value={consumption}
          onChange={(event) => {
            setConsumption(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Durée supercharge'
          value={supercharge}
          onChange={(event) => {
            setSupercharge(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Quality'
          value={quality}
          onChange={(event) => {
            setQuality(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Apparence'
          value={look}
          onChange={(event) => {
            setLook(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Praticité'
          value={practicality}
          onChange={(event) => {
            setPracticality(+event.target.value);
            sendConfiguration();
          }}
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
          value={price}
          onChange={(event) => {
            setPrice(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
        <TextField
          label='Coefficient Volume'
          value={volume}
          onChange={(event) => {
            setVolume(+event.target.value);
            sendConfiguration();
          }}
          type='number'
          size='small'
          inputProps={{ step: 0.5 }}
          margin='dense'
        />
      </section>
    </div>
  );
}

export default ElectricConfigurator;
