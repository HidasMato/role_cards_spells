import React from 'react';
import style from './OptionCardImg.module.scss';
type AlertProps = {
    targetThis: boolean;
    setTarget: (a: number) => void;
    key: number;
    img?: string;
    name: string;
    children?: JSX.Element;
    d?: boolean;
    numHide?: boolean;
};
const OptionCardImg = ({numHide, d, img, name, targetThis, setTarget, key, children }: AlertProps): JSX.Element => {
    return (
        <div>
            <div className={style.NameDownload}> {numHide ? '' :  key +'.' }{name} {(d) ? children : null} </div>
            <div className={style.Main + ' ' + (targetThis ? style.Target : '')} onClick={(e) => {  setTarget(key); }} >
                {img !== undefined  ? <img src={img} alt="" /> : null}
                {children !== undefined  && !d ? <div className={style.Children}>{children}</div> : null}
            </div>
        </div>
    );
}

export default OptionCardImg;