import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import {Stepper, Step, StepLabel, Button, Typography} from '@material-ui/core';

interface Props {
    steps: any;
    activeStep: number;
}

function Header(props: Props) {
    return (
        <div>
        <header>
            <h1>Header</h1>
        </header>
        <Stepper activeStep={props.activeStep} alternativeLabel>
            {props.steps.map((label:any) => (
                <Step key={label}>
                <StepLabel>{label}</StepLabel>
                </Step>
            ))}
        </Stepper>{props.activeStep}
        </div>
    );
}

export default Header;