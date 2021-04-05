import React, { Component } from 'react';
import Routes from './Routes';
import { Paper } from '@material-ui/core';

const mainBlockStyle = {
    width: '850px',
    position: 'relative',
    margin: 'auto',
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    height: 'calc(100vh - 35px)', // 1vh равен одному проценту от высоты области просмотра, https://habr.com/ru/post/243161/
};
const paperStyle = {
    margin: '7px',
    padding: '10px',
    height: '100%',
    background: 'GhostWhite',
};

export class PageWrapper extends Component {
    render() {
        return (
            <div style={mainBlockStyle}>
                <Paper style={paperStyle}>
                    <Routes/>
                </Paper>
            </div>
        )
    }
}
