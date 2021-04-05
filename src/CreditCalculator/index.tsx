import React, {Component} from 'react';
import {Paper} from '@material-ui/core';
import stylesModule from './styles/style.module.css';
import CreditSum from "./components/CreditSum";
import CreditPeriod from "./components/CreditPeriod";
import MonthlyPayment from "./components/MonthlyPayment";
import {getMonthlyPayment, PERCENT} from "./helpers";


const DEFAULT_SUM = 300000;
const DEFAULT_PERIOD = 24;


interface IState {
    sum: number
    period: number,
    monthlyPayment: number,
}

interface IProps {

}

export default class CreditCalculator extends Component<IProps, IState> {

    constructor(props) {
        super(props);

        this.state = {
            sum: DEFAULT_SUM,
            period: DEFAULT_PERIOD,
            monthlyPayment: Math.ceil(getMonthlyPayment(DEFAULT_SUM, DEFAULT_PERIOD)),
        }
    }

    onChangeSum = (sum) => {
        this.setState((state) => {
            return ({...state, sum, monthlyPayment: Math.ceil(getMonthlyPayment(sum, state.period))})
        })
    }

    onChangePeriod = (period) => {
        this.setState((state) => {
            return ({...state, period, monthlyPayment: Math.ceil(getMonthlyPayment(state.sum, period))})
        })
    }

    render() {

        const mainTitle = `Кредитный калькулятор расчета аннуитетного ежемесячного платежа, из расчета ставки ${PERCENT}%`;

        return (<div className={stylesModule.flexParentElement}>
            <div className={stylesModule.flexElement} >
                <Paper style={{padding: 10, marginBottom: 10}}>
                    <div className={stylesModule.mainTitle}>
                        {mainTitle}
                    </div>
                    <CreditSum value={this.state.sum} onChange={this.onChangeSum}/>
                    <CreditPeriod value={this.state.period} onChange={this.onChangePeriod}/>
                    <MonthlyPayment value={this.state.monthlyPayment}/>
                </Paper>
            </div>
        </div>)
    }
}
