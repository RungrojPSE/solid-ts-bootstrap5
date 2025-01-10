/* @refresh reload */
import { render } from 'solid-js/web'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@popperjs/core/dist/umd/popper.min.js';
import './index.scss'
import App from './App.tsx'

const root = document.getElementById('root')

render(() => <App />, root!)
