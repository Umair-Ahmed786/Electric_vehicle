import React from 'react'
import './Results.scss';

function Results({ results }) {
    return (
        <div className='results'>{JSON.stringify(results)}</div>
    );
}


export default Results;