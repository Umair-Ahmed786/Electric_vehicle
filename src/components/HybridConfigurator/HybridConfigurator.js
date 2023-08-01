import React, {useEffect, useState} from 'react';
import './HybridConfigurator.scss';
import {Button, TextField} from "@mui/material";

function HybridConfigurator({configurationChanged}) {
    const [trunk, setTrunk] = useState(2.5);
    const [tank, setTank] = useState(4);
    const [consumption, setConsumption] = useState(6);
    const [supercharge, setSupercharge] = useState(1);
    const [quality, setQuality] = useState(4);
    const [look, setLook] = useState(1.5);
    const [price, setPrice] = useState(2);
    const [volume, setVolume] = useState(1);
    const [practicality, setPracticality] = useState(4);

    useEffect(() => {
        configurationChanged({
            trunk,
            tank,
            consumption,
            supercharge,
            quality,
            practicality,
            look,
            price,
            volume
        })
    }, [])

    return (
        <div className="configurator">
            <section className="goods">
                <h4>Avantages</h4>
                <TextField label="Coefficient Coffre" value={trunk} onChange={event => setTrunk(+event.target.value)}
                           type="number" size="small" inputProps={{step: 0.5}}
                           margin="dense"/>
                <TextField label="Coefficient Réservoir" value={tank} onChange={event => setTank(+event.target.value)}
                           type="number" size="small" inputProps={{step: 0.5}}
                           margin="dense"/>
                <TextField label="Coefficient Consommation" value={consumption}
                           onChange={event => setConsumption(+event.target.value)} type="number" size="small"
                           inputProps={{step: 0.5}} margin="dense"/>
                <TextField label="Coefficient Durée 'super'charge" value={supercharge}
                           onChange={event => setSupercharge(+event.target.value)} type="number" size="small"
                           inputProps={{step: 0.5}} margin="dense"/>
                <TextField label="Coefficient Quality" value={quality}
                           onChange={event => setQuality(+event.target.value)} type="number" size="small"
                           inputProps={{step: 0.5}} margin="dense"/>
                <TextField label="Coefficient Apparence" value={look} onChange={event => setLook(+event.target.value)}
                           type="number" size="small" inputProps={{step: 0.5}}
                           margin="dense"/>
                <TextField label="Coefficient Praticité" value={practicality}
                           onChange={event => setPracticality(+event.target.value)} type="number" size="small"
                           inputProps={{step: 0.5}} margin="dense"/>
            </section>
            <section className="bads">
                <h4>Inconvénients</h4>
                <TextField label="Coefficient Prix" value={price} onChange={event => setPrice(+event.target.value)}
                           type="number" size="small" inputProps={{step: 0.5}}
                           margin="dense"/>
                <TextField label="Coefficient Volume" value={volume} onChange={event => setVolume(+event.target.value)}
                           type="number" size="small" inputProps={{step: 0.5}}
                           margin="dense"/>
            </section>

            <Button onClick={() => configurationChanged({
                trunk,
                tank,
                consumption,
                supercharge,
                quality,
                practicality,
                look,
                price,
                volume
            })} variant="contained">Calculer</Button>
        </div>
    )
}

export default HybridConfigurator;
