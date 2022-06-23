import * as React from 'react';
import {useState} from "react";

export function Parser(Props) {

    const beString=JSON.stringify(Props);

    const beText=JSON.parse(beString);
    const [text,setText]=useState();
    setText(beText)
    return (
        <div>
            {text}
        </div>
    );
}
export default Parser;