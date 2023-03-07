import React from 'react';
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg';
import style from './BaseTip.module.scss';
type AlertProps = {
    setTargetBase: ( level: number, numbers: number[], name: string) => void;
    name: string;
    level: number;
    numbers: number[];
    nameCard: string;
};
const BaseTip = ({setTargetBase, name, level, numbers, nameCard}: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} onClick={()=>{setTargetBase(level, numbers, nameCard)}}>
            <div className={style.Name}>{name}</div>
            <ArrowDown className={style.IMG} />
        </div>
    );
}

export default BaseTip;