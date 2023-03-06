import React, { useState } from 'react';
import style from './OptionSize.module.scss';
type AlertProps = {
    setSize: (a: number, b: number) => void;
    number: number;
    text: string;
    textAs?: string;
    size: number;
    min: number;
    max: number;
    block: boolean;
    setBlock?: (a: number, b: number, bloc: boolean) => void;
};
const OptionSize = ({ textAs, block, setBlock, text, size, number, setSize, min, max }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            <input className={style.Input} disabled={block} value={size} min={min} max={max} type="number" onChange={(e) => {
                if (Number(e.target.value) > max)
                    e.target.value = String(max);
                else if (Number(e.target.value) < min)
                    e.target.value = String(min);
                setSize(number, Number(e.target.value));
            }} />
            <div className={style.Text}>{text}</div>
            {textAs != undefined && setBlock != undefined ? <div className={style.As + ' ' + (block ? style.AsTarget : "")}
                onClick={() => {
                    setBlock(number, size, !block);
                }}
            >
                {textAs}
            </div>
            : null}
        </div>
    );
}

export default OptionSize;