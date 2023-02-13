import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import style from './ChoseType.module.scss';
import { ReactComponent as Change } from '../../images/Change.svg';
type AlertProps = {
    setChoseType: Dispatch<SetStateAction<number>>;
    choseType: number;
};
const ChoseType = ({choseType, setChoseType }: AlertProps): JSX.Element => {
    const [showTypes, setShowTypes] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setShowTypes(false);
            }
        };
        document.addEventListener('mousedown', checkIfClickedOutside);
        return () => {
            document.removeEventListener('mousedown', checkIfClickedOutside);
        };
    }, [showTypes]);
    const getNameType = () => {
        switch (choseType) {
            case 0:
                return "Заклинания";
            case 1:
                return "Заклинания Редактор";
            default:
                return "";
        }
    };
    return (
        <div className={style.Main} ref={ref}>
            <div className={style.Block}>
                <div className={style.Change} onClick={() => {
                    setShowTypes(!showTypes);
                }}>
                    <Change className={style.IMG} />
                </div>
                <div className={style.Chose}>
                    <div className={style.ChoseIn}>
                        {getNameType()}
                    </div>
                </div>
            </div>
            {
                showTypes &&
                <div className={style.TypesList}>
                        <div className={style.Type} onClick={() => { setChoseType(0); setShowTypes(false)}}>Заклинания</div>
                        <div className={style.Type} onClick={() => { setChoseType(1); setShowTypes(false)}}>Заклинания Редактор</div>
                </div>
            }
        </div>
    );
}

export default ChoseType;