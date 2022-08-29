import React from 'react'
import {Link} from 'react-router-dom'

export default function Menu() {
    return(
        <head>
            <nav>
                <ul>
                    <li><Link to="./carteirinha">Carteirinha</Link></li>
                    <li><Link to="./semafaro">Semáfaro</Link></li>
                    <li><Link to="./carros">Carros</Link></li>
                </ul>
            </nav>
        </head>
    )
}