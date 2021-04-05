import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import CreditCalculator from "../CreditCalculator";

export default class Routes extends Component {
    render () {
        return (<Switch>
            <Route path="/" component={CreditCalculator} />
        </Switch>);
    }
}
