import React from 'react';
import style from './OptionCardImg.module.scss';
type AlertProps = {
    // nameSetting: string;
    // children: JSX.Element;
    targetThis: boolean;
    setTarget: (a: number) => void;
    number: number;
    img?: string;
    name: string;
    children?: JSX.Element;
};
const OptionCardImg = ({img, name, targetThis, setTarget, number,children}: AlertProps): JSX.Element => {
    return (
        <div className={style.Main + ' ' + (targetThis ? style.Target : '')} onClick={()=>{setTarget(number)}}>
            {name}
            {(img != undefined) ? <img src={img} alt="" /> : null}
            {(children  != undefined)? <div className={style.Children}>{children}</div> : null}
        </div>
    );
}

export default OptionCardImg;