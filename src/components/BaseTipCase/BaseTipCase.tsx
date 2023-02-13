import React from 'react';
import { ReactComponent as ArrowDown } from '../../images/ArrowDown.svg';
import style from './BaseTipCase.module.scss';
type AlertProps = {
    openThis: boolean;
    setOpenThis: (a: number) => void;
    number: number;
    name: string;
    children?: JSX.Element;
};
const BaseTipCase = ({name, openThis, setOpenThis, number, children}: AlertProps): JSX.Element => {
    return (
            <div className={style.Main}>
            <div className={style.Name + ' ' + (openThis ? style.Target : '')} onClick={() => { setOpenThis(number) }}> <div className={style.Text}>{name}</div>
                <ArrowDown className={style.IMG} />
            </div>
                {openThis && <div className={style.Children}>{children}</div>}
            </div>
    );
}

export default BaseTipCase;