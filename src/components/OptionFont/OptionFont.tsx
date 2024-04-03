import React from 'react';
import style from './OptionFont.module.scss';
type AlertProps = {
    setFonts: (a: number, b: number) => void;
    number: number;
    // text: string;
    // textAs?: string;
    // size: number;
    // min: number;
    // max: number;
    // block: boolean;
    // setBlock?: (a: number, b: number, bloc: boolean) => void;
    myFonts: string[];
    optName: string;
    values: number[];
};
const OptionFont = ({ myFonts, optName, number, values, setFonts }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            {optName}
            <select className={style.Select} name="1" id="1" value={values[number]} onChange={(e) => {
                setFonts(number, Number(e.target.value));
            }}>
                {myFonts.map((name, ind) => {
                    return <option value={ind} key={'opt-' + ind}>{name}</option>
                })}
            </select>
        </div>
    );
}

export default OptionFont;