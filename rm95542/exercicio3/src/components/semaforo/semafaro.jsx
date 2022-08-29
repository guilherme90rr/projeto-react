import React from 'react'
import {useState} from 'react'
export default function Semafaro(){
    
    const [semafaro] = useState(["Vermleho", "Amarelo", "Verde"]);
    const [bit, setBit] = useState(0)
    
    const increment =()=> {
        if(bit == 0){
            setBit(bit + 1)
            document.getElementById('emTip').style.backgroundColor="red"
        } else if(bit == 1){
            setBit(bit + 1)
            document.getElementById('emTip').style.backgroundColor="yellow"
        } else if(bit == 2){
            setBit(bit - 2)
            document.getElementById('emTip').style.backgroundColor="green"
        }
    }

    return(
        <div style={{backgroundColor:'green'}} id="enTip">
            <h2 id='em'>{semafaro[bit]}</h2>       
            <input type="button" value="Trocar" onClick={() => increment()}/>
        </div>
    );
}
 
    