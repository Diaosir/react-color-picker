import ReactDOM from 'react-dom'
import React, {Component} from "react"
import ColorPicker from "./ColorPicker"
const rootEl = document.getElementById("root");
const render = () => ReactDOM.render(
    <ColorPicker color="#eee"/>,
    rootEl
)
render();