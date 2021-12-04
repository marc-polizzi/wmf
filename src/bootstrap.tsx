import React from "react";
import ReactDOM from 'react-dom';
import {TextField} from "@mui/material";
import {createGenerateClassName, StylesProvider} from "@mui/styles";
import {DatePicker, LocalizationProvider} from "@mui/lab";
import AdapterDateFns from '@mui/lab/AdapterDateFns';

const container = document.getElementsByClassName('reporting-application')[0];

const generateClassName = createGenerateClassName({
    productionPrefix: 'ic3jss',
});

ReactDOM.render(
    (
        <StylesProvider generateClassName={generateClassName}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Basic example"
                    value={null}
                    onChange={() => {
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>

        </StylesProvider>
    ),
    container
);
