import React, { useState } from 'react';
import style from './App.module.scss';
import ChoseType from './components/ChoseType/ChoseType';
import SpellMain from './components/SpellMain/SpellMain';
import GH from './images/GH.svg';
import YD from './images/YD.svg';
import VK from './images/VK.svg';
import SpellCSV from './components/SpellCSV/SpellCSV';

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
                    <img src={VK} alt="VK" />
                    <img src={GH} alt="GH" />
                    <img src={YD} alt="YD" />
                </div>
            </div>
            <div className={style.Window}>
                {getWindow()}
            </div>
        </div>
    );
}

export default App;
