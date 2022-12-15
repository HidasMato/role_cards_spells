import React from 'react';
import arrowDown from '../../images/ArrowDown.svg';
import style from './BaseTip.module.scss';
type AlertProps = {
    targetThis: boolean;
    setTargetBase: (a: number) => void;
    number: number;
    name: string;
};
const BaseTip = ({name, targetThis, setTargetBase, number}: AlertProps): JSX.Element => {
    return (
        <div className={style.Main + ' ' + (targetThis ? style.Target : '')} onClick={()=>{setTargetBase(number)}}>
            <div className={style.Name}>{name}</div>
            <img src={arrowDown} alt="˅" />
        </div>
    );
}

export default BaseTip;