import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import Layout2 from "./components/Layout2";
import Header from './components/Header';
import Fotter from "./components/Fotter";
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

function getSteps(){
    return ["Step1", "Step2", "Step3"];
}


function App() {
    const theme = createMuiTheme({
        palette: {
            type: "dark",
        },
    });

    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    const [disabledNext, setDisabledNext] = React.useState(false);
    const handleNext: any = () =>{
        if (activeStep <= steps.length){
            setActiveStep((prevActiveStep) => prevActiveStep+1);
            setDisabledBack(false);
        }else{
            setDisabledNext(true);
        }
    };

    const [disabledBack, setDisabledBack] = React.useState(true);
    const handleBack: any = () => {
        if (1 <= activeStep){
            setActiveStep((prevActiveStep) => prevActiveStep-1);
            setDisabledNext(false);
        }else{
            setDisabledBack(true);
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <BrowserRouter>
            <div>
            <Link to="/Layout2">goto Layout2</Link>
            <Route path="/Layout2" component={Layout2} />
                <Header steps={steps} activeStep={activeStep} />
                <Layout foo="bar" />
                <Fotter handleNext={handleNext} handleBack={handleBack} disabledNext={disabledNext} disabledBack={disabledBack} />
            </div>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
