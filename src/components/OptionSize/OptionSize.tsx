import React, { useState } from 'react';
import style from './OptionSize.module.scss';
type AlertProps = {
    setSize: (a: number, b: number) => void;
    number: number;
    text: string;
    size: number;
    min: number;
    max: number;
};
const OptionSize = ({ text, size, number, setSize, min, max }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            <input className={style.Input} value={size} min={min} max={max} type="number" onChange={(e) => {
                if (Number(e.target.value) > max)
                    e.target.value = String(max);
                else if (Number(e.target.value) < min)
                    e.target.value = String(min);
                setSize(number, Number(e.target.value));
            }} />
            <div className={style.Text}>{text}</div>
        </div>
    );
}

export default OptionSize;