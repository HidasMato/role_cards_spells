import React from 'react';
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg';
import style from './BaseTip.module.scss';
import spellBaseType from '../../spellBase/spellBaseType';
type AlertProps = {
    setTargetBase: (base: spellBaseType, numbers: number[][], name: string) => void;
    name: string;
    numbers: number[][];
    nameCard: string;
    base: spellBaseType;
};
const BaseTip = ({setTargetBase, name, numbers, nameCard, base}: AlertProps): JSX.Element => {
    return (
        <div className={style.Main} onClick={()=>{setTargetBase(base, numbers, nameCard)}}>
            <div className={style.Name}>{name}</div>
            <ArrowDown className={style.IMG} />
        </div>
    );
}

export default BaseTip;