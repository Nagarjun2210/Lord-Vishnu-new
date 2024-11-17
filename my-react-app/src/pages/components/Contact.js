/*import React, {useState} from 'react';
import {dataref} from './firebase';

function Contact(){
    const [name, setName] = useState('');

    const [age, setAge] = useState('');

    const handleAdd = () => {
        dataref.ref("user").set({
            name: name,
            age: age,
        }).catch(alert);
    }
    return(
        <div>
            <input value={name} onChange={(e) => {setName(e.target.value)}}></input>
            <br/>
            <input value={age} onChange={(e) => {setAge(e.target.value)}}></input>
            <br/>
            <button onClick={handleAdd}>Submit</button>
        </div>
    )
}

export default Contact;
*/