import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { ReactComponent as Change } from './images/Change.svg';
import style from './App.module.scss';
import SpellMain from './components/SpellMain/SpellMain';
import { ReactComponent as GH } from './images/GH.svg';
import { ReactComponent as YD } from './images/YD.svg';
import { ReactComponent as VK } from './images/VK.svg';
import './fonts/Bookerly Bold Italic.ttf';
import './fonts/Bookerly Bold.ttf';
import './fonts/Bookerly Display Bold Italic.ttf';
import './fonts/Bookerly Display.ttf';
import './fonts/Bookerly Italic.ttf';
import './fonts/Bookerly Light Italic.ttf';
import './fonts/Bookerly Light.ttf';
import './fonts/Bookerly.ttf';
import './fonts/etna-free-font.otf';
import './fonts/gogono-cocoa-mochi-cyrillic.otf';
import './fonts/GULAG Pavljenko.otf';
import './fonts/HellasDustCyrillic.otf';
import './fonts/MorningBreeze-Bold.otf';
import './fonts/MorningBreeze-Italic.otf';
import './fonts/MorningBreeze-Light.otf';
import './fonts/MorningBreeze.otf';
import './fonts/Old-Soviet.otf';
import './fonts/Square_Meal_RUS_by_Slavchansky.ttf';
import './fonts/zarubkaType-Regular.ttf';
import './fonts/Zaychik-Regular.ttf';

const App = () => {
    const [choseType, setChoseType] = useState(0);
    const [showTypes, setShowTypes] = useState(false);
    const [showMyOpis, setShowMyOpis] = useState([false,false,false]);
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
    return (
        <div className={style.Main} id={"App"}>
            <div className={style.Up}>
                <div className={style.MainChose} ref={ref}>
                    <div className={style.Block}>
                        <div className={style.Change} onClick={() => {
                            setShowTypes(!showTypes);
                        }}>
                            <Change className={style.IMG} />
                        </div>
                        <div className={style.Chose}>
                            <div className={style.ChoseIn}>
                                {"Заклинания"}
                            </div>
                        </div>
                    </div>
                    {
                        showTypes &&
                        <div className={style.TypesList}>
                                <div className={style.Type} onClick={() => { setChoseType(0); setShowTypes(false)}}>Заклинания</div>
                        </div>
                    }
                </div>
                <div className={style.Slk}>
                    <div className={style.U}>{"Ссылки на ресурсы:\nЏ"}</div>
                    <a onMouseOver={()=>{setShowMyOpis([true,false,false])}} onMouseOut={()=>{setShowMyOpis([false,false,false])}} target="_blank" href="https://vk.com/dnd_card"><VK className={style.Icon1}/></a>
                    <a onMouseOver={()=>{setShowMyOpis([false,true,false])}} onMouseOut={()=>{setShowMyOpis([false,false,false])}} target="_blank" href="https://github.com/HidasMato/role_cards_spells"><GH className={style.Icon2}/></a>
                    <a onMouseOver={()=>{setShowMyOpis([false,false,true])}} onMouseOut={()=>{setShowMyOpis([false,false,false])}} target="_blank" href="https://disk.yandex.ru/d/KOAY4OmjDpAmQg"><YD className={style.Icon3} /></a>
                </div>
                {showMyOpis[0] ? <div className={style.Opis}>{"Группа ВК\nЗдесь можно задать вопросы"}</div> : null}
                {showMyOpis[1] ? <div className={style.Opis}>{"Гитхаб\nЗдесь можно посмотреть код"}</div> : null}
                {showMyOpis[2] ? <div className={style.Opis}>{"Яндекс диск\nЗдесь лежат картинки"}</div> : null}
            </div>
            <div className={style.Window}>
                <SpellMain />
            </div>
        </div>
    );
}

export default App;
