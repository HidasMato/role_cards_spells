import React from 'react';
import style from './OptionCase.module.scss';
type AlertProps = {
    nameSetting: string;
    children: JSX.Element;
    targetThis: boolean;
    setTarget: (a: number, b: boolean) => void;
    number: number;
};
const OptionCase = ({nameSetting, targetThis, setTarget, number, children}: AlertProps): JSX.Element => {
    const getChildren = () => {
        return children;
    }
    return (
        <div className={style.Main}>
            <div className={style.Title} onClick={() => { setTarget(number, !targetThis);}}>{nameSetting}</div>
            {targetThis && getChildren()}
        </div>
    );
}

export default OptionCase;