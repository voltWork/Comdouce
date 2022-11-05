import '../App.css'

import  Filter  from '../components/UI/Filter';
import React from 'react';

export default function Choose_school(){
    return(
        <div>
        <div className='Status'>
            <p>Процент </p>
        </div>
        <div>
        <Filter 
        defaultValue="Выберите параметр фильрации"
        options={[
            {value:' dat', name: 'По дате'},
            {value:'name',name:'По имени'},
        ]}/>
        <input></input>
        </div>
        </div>

   );
    
    }
