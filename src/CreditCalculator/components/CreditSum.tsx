import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from "@material-ui/core/Input/Input";
import {toDivide} from "../helpers";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 700,
        margin: 30,
    },
    marginBottom30: {
        marginBottom: 40,
        marginTop: 5
    },
    textFieldForm: {
        width: 100,
        marginLeft: 20,
        marginBottom: 10,
    },
    flexWrapper: {
        display: 'flex',
    },
}));

interface Props {
    children: React.ReactElement;
    open: boolean;
    value: number;
}

function ValueLabelComponent(props: Props) {
    const { children, open, value } = props;

    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${toDivide(value)} руб.`}>
            {children}
        </Tooltip>
    );
}

const marks = [
    {
        value: 10,
        label: '10 pуб.',
    },
    {
        value: 2000000,
        label: '2 млн. руб.',
    },
    {
        value: 6000000,
        label: '6 млн. руб.',
    },
    {
        value: 12000000,
        label: '12 млн. руб.',
    },
];

function valuetext(value) {
    return value;
}

export default function CreditSum({value, onChange}) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.flexWrapper}>
                <span >
                    <Typography
                        id="discrete-slider-always"
                        gutterBottom
                        className={classes.marginBottom30}
                    >
                        Сумма кредита (руб.)
                    </Typography>
                </span>
                <span>
                    <form className={classes.textFieldForm} noValidate autoComplete="off" >
                        <Input
                            defaultValue="Hello world"
                            inputProps={{ 'aria-label': 'description' }}
                            value={value}
                            onChange={(event) => onChange(event.target.value)}
                        />
                    </form>
                </span>
            </div>

            <Slider
                ValueLabelComponent={ValueLabelComponent}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-always"
                min={10}
                step={10}
                max={12000000}
                marks={marks}
                valueLabelDisplay="on"
                value={value}
                onChange={(event: object, value: number | number[]) => onChange(value)}
            />
        </div>
    );
}
