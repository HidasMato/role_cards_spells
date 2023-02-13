import React, { useEffect, useState } from 'react';
import style from './CardSpell.module.scss';
type AlertProps = {
    cardType: number;
    Pole: string[];
    keyt: number;
    plusPerepolnen?: (num:number, bol:boolean) => void;
    minMax?: number[];
    startPerepolnen?: number;
    isBack?: boolean;
    children?: JSX.Element;
    NumbersExist?: boolean[];
};
const Card = ({NumbersExist, isBack, keyt, cardType, Pole, minMax, plusPerepolnen, startPerepolnen, children }: AlertProps): JSX.Element => {
    let descriptionMain, descriptionText;
    useEffect(() => {
        descriptionMain = document.getElementById("Card " + keyt);
        descriptionText = document.getElementById("CardControl " + keyt);;
        if (descriptionText && descriptionMain) {
            let size = minMax? minMax[1] : 10;
            descriptionText.style.fontSize = size + 'px';
            while (descriptionText.scrollHeight > descriptionMain.offsetHeight && Number(size) >= Number(minMax ? minMax[0]: 8)) {
                size = size - 0.05;
                descriptionText.style.fontSize = size + 'px';
            }
            if (Number(size) < Number(minMax ? minMax[0] : 8)) {
                if (plusPerepolnen) plusPerepolnen(keyt, true);
            }
            else {
                if (plusPerepolnen) plusPerepolnen(keyt, false);
            }
        }
    }, [startPerepolnen]);
    if (isBack) {
        if (cardType == 0 || cardType == 1 || cardType == 2 || cardType == 3) {
            return (
                <div className={style.BackMain}>
                    {children}
                    {NumbersExist?.[0]? <div className={style.Num1}>{Pole[15]}</div> : null}
                    {NumbersExist?.[1]? <div className={style.Num2}>{Pole[15]}</div> : null}
                    {NumbersExist?.[2]? <div className={style.Num3}>{Pole[15]}</div> : null}
                    {NumbersExist?.[3]? <div className={style.Num4}>{Pole[15]}</div> : null}
                </div>
            )
        }
        else if (cardType == 4 || cardType == 5 || cardType == 6 || cardType == 7 || cardType == 8 || cardType == 9) {
            return (
                <div className={style.BackMain}>
                    {children}
                </div>
            )
        }
        return <div />;
    }
    else {
        const getOptions12 = () => {
            return (
                <div className={style.Options22}>
                    <div className={style.Options2hor}>
                        <div className={style.Options1d2 + ' ' + style.BcgrOpt1}>
                            <div className={style.OptionZagolovok}><div>{Pole[2]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option1TextColor}><div>{Pole[3]}</div></div>
                        </div>
                        <div className={style.Options1d2 + ' ' + style.BcgrOpt2}>
                            <div className={style.OptionZagolovok}><div>{Pole[4]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option2TextColor}><div>{Pole[5]}</div></div>
                        </div>
                    </div>
                    <div className={style.Options2hor}>
                        <div className={style.Options1d2 + ' ' + style.BcgrOpt3}>
                            <div className={style.OptionZagolovok}><div>{Pole[6]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option3TextColor}><div>{Pole[7]}</div></div>
                        </div>
                        <div className={style.Options1d2 + ' ' + style.BcgrOpt4}>
                            <div className={style.OptionZagolovok}><div>{Pole[8]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option4TextColor}><div>{Pole[9]}</div></div>
                        </div>
                    </div>
                </div>
            );
        };
        const getOptions34 = () => {
            return (
                <div className={style.Options41ver}>
                    <div className={style.Options1d1Line + ' ' + style.BcgrOpt1}>
                        <div className={style.OptionZagolovok}><div>{Pole[2]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option1TextColor}><div>{Pole[3]}</div></div>
                    </div>
                    <div className={style.Options1d1Line + ' ' + style.BcgrOpt2}>
                        <div className={style.OptionZagolovok}><div>{Pole[4]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option2TextColor}><div>{Pole[5]}</div></div>
                    </div>
                    <div className={style.Options1d1Line + ' ' + style.BcgrOpt3}>
                        <div className={style.OptionZagolovok}><div>{Pole[6]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option3TextColor}><div>{Pole[7]}</div></div>
                    </div>
                    <div className={style.Options1d1Line + ' ' + style.BcgrOpt4}>
                        <div className={style.OptionZagolovok}><div>{Pole[8]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option4TextColor}><div>{Pole[9]}</div></div>
                    </div>
                </div>
            );
        };
        const getOptions78 = () => {
            return (
                <div className={style.Options41hor}>
                    <div className={style.Options1d4 + ' ' + style.BcgrOpt1}>
                        <div className={style.OptionZagolovok}><div>{Pole[2]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option1TextColor}><div>{Pole[3]}</div></div>
                    </div>
                    <div className={style.Options1d4 + ' ' + style.BcgrOpt2}>
                        <div className={style.OptionZagolovok}><div>{Pole[4]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option2TextColor}><div>{Pole[5]}</div></div>
                    </div>
                    <div className={style.Options1d4 + ' ' + style.BcgrOpt3}>
                        <div className={style.OptionZagolovok}><div>{Pole[6]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option3TextColor}><div>{Pole[7]}</div></div>
                    </div>
                    <div className={style.Options1d4 + ' ' + style.BcgrOpt4}>
                        <div className={style.OptionZagolovok}><div>{Pole[8]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option4TextColor}><div>{Pole[9]}</div></div>
                    </div>
                </div>
            );
        };
        const getOptions56 = () => {
            return (
                <div className={style.Options14ver}>
                    <div className={style.Options1d1 + ' ' + style.BcgrOpt1}>
                        <div className={style.OptionZagolovok}><div>{Pole[2]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option1TextColor}><div>{Pole[3]}</div></div>
                    </div>
                    <div className={style.Options1d1 + ' ' + style.BcgrOpt2}>
                        <div className={style.OptionZagolovok}><div>{Pole[4]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option2TextColor}><div>{Pole[5]}</div></div>
                    </div>
                    <div className={style.Options1d1 + ' ' + style.BcgrOpt3}>
                        <div className={style.OptionZagolovok}><div>{Pole[6]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option3TextColor}><div>{Pole[7]}</div></div>
                    </div>
                    <div className={style.Options1d1 + ' ' + style.BcgrOpt4}>
                        <div className={style.OptionZagolovok}><div>{Pole[8]}</div></div>
                        <div className={style.OptionText + ' ' + style.Option4TextColor}><div>{Pole[9]}</div></div>
                    </div>
                </div>
            );
        };
        const getOptions910 = () => {
            return (
                <div className={style.Options22}>
                    <div className={style.Options2hor}>
                        <div className={style.Options1d2Line + ' ' + style.BcgrOpt1}>
                            <div className={style.OptionZagolovok}><div>{Pole[2]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option1TextColor}><div>{Pole[3]}</div></div>
                        </div>
                        <div className={style.Options1d2Line + ' ' + style.BcgrOpt2}>
                            <div className={style.OptionZagolovok}><div>{Pole[4]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option2TextColor}><div>{Pole[5]}</div></div>
                        </div>
                    </div>
                    <div className={style.Options2hor}>
                        <div className={style.Options1d2Line + ' ' + style.BcgrOpt3}>
                            <div className={style.OptionZagolovok}><div>{Pole[6]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option3TextColor}><div>{Pole[7]}</div></div>
                        </div>
                        <div className={style.Options1d2Line + ' ' + style.BcgrOpt4}>
                            <div className={style.OptionZagolovok}><div>{Pole[8]}</div></div>
                            <div className={style.OptionText + ' ' + style.Option4TextColor}><div>{Pole[9]}</div></div>
                        </div>
                    </div>
                </div>
            );
        };
        if (cardType == 0 || cardType == 1 || cardType == 2 || cardType == 3 || cardType == 6 || cardType == 7 || cardType == 8 || cardType == 9) {
            return (
                <div className={style.Main}>
                    <div className={style.Zagolovok}><div>{Pole[0]}</div></div>
                    <div className={style.School}>{Pole[1]}</div>
                    {cardType == 0 ? getOptions12() : null}
                    {cardType == 2 ? getOptions34() : null}
                    {cardType == 6 ? getOptions78() : null}
                    {cardType == 8 ? getOptions910() : null}
                    {cardType == 0 || cardType == 2 || cardType == 6 || cardType == 8 ? <div className={style.Per1}>{Pole[10]}</div> : null}
                    <div className={style.AllText} id={"Card " + keyt}>
                        <div className={style.TextSizeControll} id={"CardControl " + keyt}>
                            <div className={style.MainText}>{Pole[11]}</div>
                            {Pole[13] != "" ? 
                                <div className={style.Dop}>
                                <div className={style.Per2}>{Pole[12]}</div>
                                <div className={style.DopText}>{Pole[13]}</div>
                                    </div>
                            : null}
                        </div>
                    </div>
                    {cardType == 1 || cardType == 3|| cardType == 7|| cardType == 9 ? <div className={style.Per1}>{Pole[10]}</div> : null}
                    {cardType == 3 ? getOptions34() : null}
                    {cardType == 1 ? getOptions12() : null}
                    {cardType == 7 ? getOptions78() : null}
                    {cardType == 9 ? getOptions910() : null}
                    <div className={style.DowtText}><div>{Pole[14]}</div></div>
                </div>
            );
        } else if (cardType == 4 || cardType == 5) {
            return (
                <div className={style.Main}>
                    <div className={style.Zagolovok}><div>{Pole[0]}</div></div>
                    <div className={style.School}>{Pole[1]}</div>
                    <div className={style.BigDescription}>
                        {cardType == 4 ? getOptions56() : null}
                        {cardType == 4 ? <div className={style.Per1}><div className={style.A}>{Pole[10]}</div></div> : null}
                        <div className={style.AllText} id={"Card " + keyt}>
                            <div className={style.TextSizeControll} id={"CardControl " + keyt}>
                                <div className={style.MainText}>{Pole[11]}</div>
                                {Pole[13] != "" ? 
                                <div className={style.Dop}>
                                <div className={style.Per2}>{Pole[12]}</div>
                                <div className={style.DopText}>{Pole[13]}</div>
                                    </div>
                            : null}
                            </div>
                        </div>
                        {cardType == 5? <div className={style.Per1}>{Pole[10]}</div> : null}
                        {cardType == 5 ? getOptions56() : null}
                    </div>
                    <div className={style.DowtText}><div>{Pole[14]}</div></div>
                </div>
            );
        }
        return <div />
    }
}

export default Card;