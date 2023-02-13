import React, { useState } from 'react';
import style from './App.module.scss';
import ChoseType from './components/ChoseType/ChoseType';
import SpellMain from './components/SpellMain/SpellMain';
import SpellCSV from './components/SpellCSV/SpellCSV';
import { ReactComponent as GH } from './images/GH.svg';
import { ReactComponent as YD } from './images/YD.svg';
import { ReactComponent as VK } from './images/VK.svg';

const App = () => {
    const [choseType, setChoseType] = useState(0);
    const getWindow = () => {
        switch (choseType) {
            case 0: {
                return <SpellMain />;
            }
            case 1: {
                return <SpellCSV />;
            }
            default: {
                return <SpellMain />;
            }
        }
    }
    return (
        <div className={style.Main} id={"App"}>
            <div className={style.Up}>
                <ChoseType choseType={choseType} setChoseType={setChoseType}  />
                <div className={style.Slk}>
                    <a href=""><VK className={style.Icon1}/></a>
                    <a href=""><GH className={style.Icon2}/></a>
                    <a href=""><YD className={style.Icon3}/></a>
                </div>
            </div>
            <div className={style.Window}>
                {getWindow()}
            </div>
        </div>
    );
}

export default App;
