import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import Input from '@material-ui/core/Input';

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
        width: 50,
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
    const {children, open, value} = props;
    return (
        <Tooltip open={open} enterTouchDelay={0} placement="top" title={`${value} мес.`}>
            {children}
        </Tooltip>
    );
}

const marks = [
    {
        value: 2,
        label: '2 мес',
    },
    {
        value: 120,
        label: '120 мес. (10 лет)',
    },
    {
        value: 360,
        label: '360 мес. (30 лет)',
    },
];

function valuetext(value) {
    return value;
}

export default function CreditPeriod({value, onChange}) {
    const classes = useStyles();
    return (<div className={classes.root}>
            <div className={classes.flexWrapper}>
                <span >
                    <Typography
                        id="discrete-slider-always"
                        gutterBottom
                        className={classes.marginBottom30}
                    >
                        Срок (мес.)
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
                min={2}
                step={1}
                max={360}
                marks={marks}
                valueLabelDisplay="on"
                value={value}
                onChange={(event: object, value: number | number[]) => onChange(value)}
            />
        </div>
    );
}
