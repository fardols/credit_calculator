import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {toDivide} from "../helpers";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 700,
        margin: 30,
    },
    marginBottom30: {
        marginBottom: 30,
    },
}));

interface IMonthlyPaymentProps {
    value: number;
}

export default function MonthlyPayment(props: IMonthlyPaymentProps) {
    const classes = useStyles();

    const {value} = props;

    return (
        <div className={classes.root}>
            <Typography
                id="discrete-slider-always"
                gutterBottom
                className={classes.marginBottom30}
            >
                {`Ежемесячный платеж ${toDivide(value)} руб.`}
            </Typography>
        </div>
    );
}
