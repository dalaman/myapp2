import React, {useState} from 'react';
import {Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core';
import Header from './Header';

interface Props{
    handleNext: any;
    handleBack: any;
    disabledNext: boolean;
    disabledBack: boolean;
}

function Fotter(props: Props){
    return (
        <div>
        <h2>Fotter</h2>
            <Button onClick={props.handleBack} variant="contained" disabled={props.disabledBack}>Back</Button>
            <Button onClick={props.handleNext} variant="contained" color="primary" disabled={props.disabledNext}>Next</Button>
        </div>
    )
}

export default Fotter;
