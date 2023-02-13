import React, { useState } from 'react';
import style from './OptionAllain.module.scss';
import { ReactComponent as AlignLeft } from '../../images/Align_left_font_awesome.svg';
import { ReactComponent as AlignRigth } from '../../images/Align_right_font_awesome.svg';
import { ReactComponent as AlignCenter } from '../../images/Align_center_font_awesome.svg';
import { ReactComponent as AlignJustify } from '../../images/Align_justify_font_awesome.svg';
type AlertProps = {
    setValue: (a: number, b: number) => void;
    number: number;
    text: string;
    textAs?: string;
    value: number;
    block: boolean;
    setBlock: (a: number, b: number, bloc: boolean) => void;
};
const OptionAllain = ({ textAs, block, setBlock, text, value, number, setValue }: AlertProps): JSX.Element => {
    return (
        <div className={style.Main}>
            <div className={style.TextBlock}>
                <div className={style.Text}>{text}</div>
                {textAs != undefined ? <div className={style.As + ' ' + (block ? style.AsTarget : "")}
                    onClick={() => {
                        setBlock(number, value, !block);
                    }}
                >
                    {textAs}
                </div>
                    : null}
            </div>
            <div className={style.Aligns}>
                <div className={style.Align + ' ' + (value==1 ? style.AlignTarget : "") + ' ' + (!block ? style.AlignHover : "")}
                    onClick={() => {
                        setValue(number, Number(1));
                    }}
                >
                    <AlignLeft className={style.IMG} />
                </div>
                <div className={style.Align + ' ' + (value==2 ? style.AlignTarget : "") + ' ' + (!block ? style.AlignHover : "")}
                    onClick={() => {
                        setValue(number, Number(2));
                    }}
                >
                    <AlignCenter className={style.IMG} />
                </div>
                <div className={style.Align + ' ' + (value==3 ? style.AlignTarget : "") + ' ' + (!block ? style.AlignHover : "")}
                    onClick={() => {
                        setValue(number, Number(3));
                    }}
                >
                    <AlignRigth className={style.IMG} />
                </div>
                <div className={style.Align + ' ' + (value==4 ? style.AlignTarget : "") + ' ' + (!block ? style.AlignHover : "")}
                    onClick={() => {
                        setValue(number, Number(4));
                    }}
                >
                    <AlignJustify className={style.IMG} />
                </div>
            </div>
        </div>
    );
}

export default OptionAllain;