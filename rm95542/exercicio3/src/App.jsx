import React from 'react'
import { Route, Routes} from 'react-router-dom'
import Carteirinhas from './components/carteirinhas/Carteirinhas'
import Carros from './components/carros/Carros';
import Semaforo from './components/semaforo/Semafaro';
import Menu from './components/menu/Menu';

export default function App() {

const listaDeCarros = ['Civic','I30','Corolla3','Astra','Azera','Gol','Golf','Creta','Elantra','Jetta']

    return(
    <>
        <h1>Guilherme De Jesus Ferreira Rm 95542 1TDSR</h1>

        <Menu />
        <Routes>
            <Route path='/semaforo' element={<Semaforo />}/>
            <Route path='/carteirinha' element={<Carteirinhas />} />
            <Route path='/carros' element={<Carros listaCarrosProps={listaDeCarros} />} />
        </Routes>
    </>
    );
}