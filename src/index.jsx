import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from "react-redux"
import Layout from './views/Layout'

import "../styles/base/_main.sass"  // Global styles
import "../styles/base/_common.sass"  // Global styles
import "../styles/_style.sass"  // Css-module styles

import store from "./stores/Root";

const App = () => <Provider store={store}>
    <Router>
        <Layout/>
    </Router>
</Provider>;

ReactDOM.render(<App/>,
    document.getElementById('app')
);
