import React, {useState} from 'react'
import delegada from '../img/image1.jpg'
import secretaria from '../img/image2.jpg'
import tokio from '../img/image3.jpg'
import raquel from '../img/image4.jpg'

export default function Carteirinha() {
    const[nome, setNome] = useState('')
    const[rm, setRm] = useState('')
    const[curso, setCurso] = useState('')
    const[turma, setTurma] = useState('')

    return(
        <>
            <h1>Carteirinha</h1>
            <section>
                <img src={delegada} alt="Delegada" />
                <h2>Guilherme Ferreira</h2>
                <h2>RM 95542</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDRS</h2>
            </section>

            <section>
                <img src={secretaria} alt="Secretaria" />
                <h2>Guilherme Ferreira</h2>
                <h2>RM 95542</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDRS</h2>
            </section>

            <section>
                <img src={tokio} alt="tokio" />
                <h2>Guilherme Ferreira</h2>
                <h2>RM 95542</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDRS</h2>
            </section>

            <section>
                <img src={raquel} alt="raquel" />
                <h2>Guilherme Ferreira</h2>
                <h2>RM 95542</h2>
                <h2>Análise e desenvolvimento de Sistemas</h2>
                <h2>1TDRS</h2>
            </section>

            <section>
                <img src={tokio} alt="Digite"/>
                <input type="text" onChange={(e) => setNome(e.target.value)}/>
                <label>Nome</label>
                <h2>{nome}</h2>
                <input type="text" onChange={(e) => setRm(e.target.value)}/>
                <label>RM</label>
                <h2>{rm}</h2>
                <input type="text" onChange={(e) => setCurso(e.target.value)}/>
                <label>Curso</label>
                <h2>{curso}</h2>
                <input type="text" onChange={(e) => setTurma(e.target.value)}/>
                <label>Turma</label>
                <h2>{turma}</h2>
            </section>
        </>
    )
}