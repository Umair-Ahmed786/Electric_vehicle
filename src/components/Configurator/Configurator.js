import React from 'react';
import './Configurator.scss';
import {Button, TextField} from "@mui/material";

const Configurator = () => (
    <div className="configurator">
        <section className="Goods">
            <h4>Avantages</h4>
            <TextField id="coeff-trunk" label="Coefficient Coffre" value="2.5" type="number" size="small" step="0.5"
                       margin="dense"/>
            <TextField id="coeff-range" label="Coefficient Autonomie" value="4" type="number" size="small" step="0.5"
                       margin="dense"/>
            <TextField id="coeff-consumption" label="Coefficient Consommation" value="1" type="number" size="small"
                       step="0.5" margin="dense"/>
            <TextField id="coeff-supercharge" label="Coefficient Durée supercharge" value="2" type="number" size="small"
                       step="0.5" margin="dense"/>
            <TextField id="coeff-quality" label="Coefficient Quality" value="3.5" type="number" size="small"
                       step="0.5" margin="dense"/>
            <TextField id="coeff-practicality" label="Coefficient Praticité" value="1.5" type="number" size="small"
                       step="0.5" margin="dense"/>
            <TextField id="coeff-look" label="Coefficient Apparence" value="1" type="number" size="small" step="0.5"
                       margin="dense"/>
        </section>
        <section className="Bads">
            <h4>Inconvénients</h4>
            <TextField id="coeff-price" label="Coefficient Prix" value="1.5" type="number" size="small" step="0.5"
                       margin="dense"/>
            <TextField id="coeff-volume" label="Coefficient Volume" value="2.5" type="number" size="small" step="0.5"
                       margin="dense"/>
        </section>
        <Button onClick={() => ({a: 1})}>Calculer</Button>
    </div>
);

export default Configurator;
