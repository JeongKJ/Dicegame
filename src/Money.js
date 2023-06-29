import { useState } from "react";
import { BsCoin } from 'react-icons/bs'

const random = (nan) => Math.ceil(Math.random() * nan);

export default function Money({seed}) {
    return (
        <div className="coin">
           <BsCoin size='40px' color="gold" /> 
            <p>x {seed} </p>
            
     </div>
    )
}