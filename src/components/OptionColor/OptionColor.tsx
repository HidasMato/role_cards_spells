import React, { useState } from 'react';
import style from './OptionColor.module.scss';
type AlertProps = {
    setColor: (a: number, b: string) => void;
    number: number;
    text: string;
    textAs?: string;
    color: string;
    block: boolean;
    setBlock: (a: number, b: string, bloc: boolean) => void;
    name: string;
};
const OptionColor = ({ text, textAs, color, number, setColor, block, setBlock, name }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            <label id={name+'M'} style={{"backgroundColor": color}} htmlFor={name}>___</label>
            <div className={style.Text}>{text}</div>
            {textAs != undefined ? <div className={style.As + ' ' + (block ? style.AsTarget : "")}
                onClick={() => {
                    setBlock(number, color, !block);
                }}
            >
                {textAs}
            </div>
            : null}
            <input type="color" name={name} value={color} id={name} onChange={(e) => {
                setColor(number, e.target.value);
            }} disabled={block} />
        </div>
    );
}

export default OptionColor;