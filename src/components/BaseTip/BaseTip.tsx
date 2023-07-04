import React from 'react';
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg';
import style from './BaseTip.module.scss';
type AlertProps = {
    setTargetBase: ( numbers: number[][], name: string) => void;
    name: string;
    numbers: number[][];
    nameCard: string;
};
const BaseTip = ({setTargetBase, name, numbers, nameCard}: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} onClick={()=>{setTargetBase(numbers, nameCard)}}>
            <div className={style.Name}>{name}</div>
            <ArrowDown className={style.IMG} />
        </div>
    );
}

export default BaseTip;