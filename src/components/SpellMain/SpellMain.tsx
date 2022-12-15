import React, { useEffect, useState } from 'react';
import style from './SpellMain.module.scss';
import setting from '../../images/Setting.svg';
import spellCard1 from '../../images/Spell/1.svg';
import spellCard2 from '../../images/Spell/2.svg';
import spellCard3 from '../../images/Spell/3.svg';
import spellCard4 from '../../images/Spell/4.svg';
import spellCard5 from '../../images/Spell/5.svg';
import spellCard6 from '../../images/Spell/6.svg';
import spellCard7 from '../../images/Spell/7.svg';
import spellCard8 from '../../images/Spell/8.svg';
import spellCard9 from '../../images/Spell/9.svg';
import spellCard10 from '../../images/Spell/10.svg';
import OptionCase from '../OptionCase/OptionCase';
import OptionCardImg from '../OptionCardImg/OptionCardImg';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import { ReactComponent as Druid } from '../../BackSvg/Друид.svg';
import {ReactComponent as Bard} from '../../BackSvg/Бард.svg';
import { ReactComponent as Valkiria } from '../../BackSvg/Валькирия.svg';
import { ReactComponent as Voenka } from '../../BackSvg/Военка.svg';
import { ReactComponent as Volshebnic } from '../../BackSvg/Волшебник.svg';
import { ReactComponent as Jrec } from '../../BackSvg/Жрец.svg';
import { ReactComponent as Koldun } from '../../BackSvg/Колдун.svg';
import { ReactComponent as Ksanatar } from '../../BackSvg/Ксанатар.svg';
import { ReactComponent as Mistik } from '../../BackSvg/Мистик.svg';
import { ReactComponent as Paladin } from '../../BackSvg/Паладин.svg';
import { ReactComponent as Sledopyt } from '../../BackSvg/Следопыт.svg';
import { ReactComponent as Charodei } from '../../BackSvg/Чародей.svg';
import { ReactComponent as Elemental } from '../../BackSvg/Элементаль.svg';
import { ReactComponent as Varvar } from '../../BackSvg/Варвар.svg';
import { ReactComponent as Monk } from '../../BackSvg/Монах.svg';
import { ReactComponent as Ogragdenie } from '../../BackSvg/Ограждение.svg';
import { ReactComponent as Proricanie } from '../../BackSvg/Прорицание.svg';
import { ReactComponent as Voplochenie } from '../../BackSvg/Воплощение.svg';
import { ReactComponent as Vyzov } from '../../BackSvg/Вызов.svg';
import { ReactComponent as Ocharovanie } from '../../BackSvg/Очарование.svg';
import { ReactComponent as Preobrazovanie } from '../../BackSvg/Преобразование.svg';
import { ReactComponent as Illusia } from '../../BackSvg/Иллюзия.svg';
import { ReactComponent as Necromantia } from '../../BackSvg/Некромантия.svg';
import { ReactComponent as Vedmochka } from '../../BackSvg/Ведьмочка.svg';
import { ReactComponent as Volk } from '../../BackSvg/Волк.svg';
import { ReactComponent as Juk } from '../../BackSvg/Жук.svg';
import { ReactComponent as Juk2 } from '../../BackSvg/Жук2.svg';
import { ReactComponent as JukOsa } from '../../BackSvg/ЖукОса.svg';
import { ReactComponent as JukBabochka } from '../../BackSvg/ЖукБабочка.svg';
import { ReactComponent as Shesternya1 } from '../../BackSvg/Шестерня 1.svg';
import { ReactComponent as Shesternya2 } from '../../BackSvg/Шестерня 2.svg';
import { ReactComponent as NapitokPennyi } from '../../BackSvg/Напиток Пенный.svg';
import { ReactComponent as NapitokTrop } from '../../BackSvg/Напиток Тропический.svg';
import { ReactComponent as NapitokShip } from '../../BackSvg/Напиток Шипящий.svg';
import { ReactComponent as MyjBaraban } from '../../BackSvg/Мужик с барабанами.svg';
import { ReactComponent as GavaiLedi } from '../../BackSvg/Гавайская леди.svg';
import { ReactComponent as AfricaLediTanec } from '../../BackSvg/Африканска леди в танце.svg';
import { ReactComponent as AfricaLedi } from '../../BackSvg/Африканска леди.svg';
import { ReactComponent as OgonMech } from '../../BackSvg/Огенный меч.svg';
import { ReactComponent as AfricaMugikTanec } from '../../BackSvg/Африканский мужик в танце.svg';
import { ReactComponent as Drakon } from '../../BackSvg/Дракон.svg';
import { ReactComponent as SiglaMelekTaus } from '../../BackSvg/Сигила мелек таус.svg';
import { ReactComponent as Sovushka } from '../../BackSvg/Совушка.svg';
import BaseTip from '../BaseTip/BaseTip';
import BaseTipCase from '../BaseTipCase/BaseTipCase';
import CardSpell from '../CardSpell/CardSpell';
type AlertProps = {
};
const SpellMain = ({ }: AlertProps): JSX.Element => {
    const maxLength = 15;
    const [cards, setCards] = useState<string[][]>([]);
    const [CSV, setCSV] = useState("");
    const [makeCSV, setMakeCSV] = useState(0);
    const [showOptions, setShowOptions] = useState(true);
    const [showRedactor, setShowRedactor] = useState(true);
    const [pyt, setPyt] = useState<File|undefined>(undefined);
    const [openThisBaseCase, setOpenThisBaseCase] = useState([false, false, false, false, false, false, false, false]);
    const [openThisBase, setOpenThisBase] = useState([false, false, false, false, false, false, false, false]);
    const [targetOption, setTargetOptions] = useState([false, false, false, false, false, false, false, false]);
    const [colors, setColors] = useState(["#000000","#ffffff","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff"]);
    const [colorsNames, setColorsNames] = useState(["--CardColorBackcground","--CardZagolovokBackgroundColor","--CardZagolovokTextColor","--CardPer1BackgroundColor","--CardPer1TextColor","--CardPer2BackgroundColor","--CardPer2TextColor","--CardPer3BackgroundColor","--CardPer3TextColor","--CardOptionPalki","--CardOption1Background","--CardOption2Background","--CardOption3Background","--CardOption4Background","--CardOption1ZColor","--CardOption2ZColor","--CardOption3ZColor","--CardOption4ZColor","--CardOption1TColor","--CardOption2TColor","--CardOption3TColor","--CardOption4TColor","--CardMainBackgroundColor","--CardMainTextColor","--CardDopBackgroundColor","--CardDopTextColor","--CardDownTextColor","--ListColor"]);
    const [block, setBlock] = useState([false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false]);
    const [size, setSizes] = useState([9,9,9,9,9,9,9,9,9,9]);
    const [kolvo, setKolvo] = useState(3);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(0);
    const [targetTypeCardNumber, setTargetTypeCardNumber] = useState(0);
    const setTarget = (a: number, b: boolean) => {
        const M = [...targetOption];
        M[a] = b;
        setTargetOptions(M);
    };
    const setKolv = (a: number) => {
        setKolvo(a);
    };
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(colorsNames[i], colors[i]);
    }, [colors]);
    const setColor = (a: number, b: string, vlog?: boolean) => {
        const M = [...colors];
        M[a] = b;
        const V = [...block];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[0];
        if (V[3]) M[3] = M[0];
        if (V[4]) M[4] = M[1];
        if (V[5]) M[5] = M[3];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[3];
        if (V[8]) M[8] = M[4];
        if (V[9]) M[9] = M[3];
        if (V[10]) M[10] = M[1];
        if (V[11]) M[11] = M[10];
        if (V[12]) M[12] = M[10];
        if (V[13]) M[13] = M[10];
        if (V[14]) M[14] = M[0];
        if (V[15]) M[15] = M[14];
        if (V[16]) M[16] = M[14];
        if (V[17]) M[17] = M[14];
        if (V[18]) M[18] = M[0];
        if (V[19]) M[19] = M[18];
        if (V[20]) M[20] = M[18];
        if (V[21]) M[21] = M[18];
        if (V[22]) M[22] = M[1];
        if (V[23]) M[23] = M[0];
        if (V[24]) M[24] = M[22];
        if (V[25]) M[25] = M[23];
        if (V[26]) M[26] = M[1];
        if (V[27]) M[27] = M[0];
        setColors(M);
    };
    const setSize = (a: number, b: number) => {
        const M = [...size];
        M[a] = b;
        setSizes(M);
    };
    const setBloc = (a: number, b: string, bloc: boolean) => {
        const M = [...block];
        M[a] = bloc;
        setColor(a, b, bloc);
        setBlock(M);
    };
    const setOpenThisBaseCas = (a: number) => {
        const M = [...openThisBaseCase];
        M[a] = !M[a];
        setOpenThisBaseCase(M);
    };
    const setOpenThisBas = (a: number) => {
        const M = [false,false,false,false,false,false,false,false];
        M[a] = true;
        setOpenThisBase(M);
        switch (a) {
            case 0:
                setCSV("Заголовок;Школа -  Уровень;Опция1;Это опция1;Опция2;Это опция2;Опция3;Это опция3;Опция4;Это опция4;;Это клевое заклинание;На более высоком уровне;На девятом уровне ячейки заклинания дамажит жестко;Друид;");
                break;
            case 1:
                setCSV("Жрецовый текст");
                break;
            default:
                setCSV("");
                break;
        }
        setMakeCSV(makeCSV + 1);
    };
    const readFile = () => {
        const q = (document.getElementById("InputFile") as HTMLInputElement).files;
        if (q != null) {
            let reader = new FileReader();
            reader.readAsText(q[0], 'windows-1251');
            reader.onload = function () {
                let r = reader.result;
                if (r) setCSV(r as string);
                setMakeCSV(makeCSV + 1);
            };
            (document.getElementById("InputFile") as HTMLInputElement).value = "";
        };
    };
    useEffect(() => {
        makeCardsFromCSV();
    }, [makeCSV]);
    const downloadFile = () => {
        let blob = new Blob(["\ufeff", CSV], { type: "text/csv;charset=windows-1251" });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement('a');
        anchor.href = url;
        anchor.download = "CSV-File.csv";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(url);
    };
    const makeCardsFromCSV = () => {
        let nowPoint = 0, nextPoint = 0, nextEnter = 0, endPoint = CSV.length - 1;
        let cardNumber = 0;
        let strok = "";
        const C = [];
        while (nextEnter <= endPoint) {
            nextEnter = CSV.indexOf('\n', nowPoint);
            if (nextEnter == -1) nextEnter = endPoint + 1;
            let end = nextEnter;
            let kolvo = 0;
            let Mas = [];
            for (let start = nowPoint; start < nextEnter; start = end + 1) {
                end = CSV.indexOf(';', start);
                if (end > nextEnter || end == -1) end = nextEnter;
                Mas[kolvo] = CSV.slice(start, end);
                kolvo++;
            }
            C[cardNumber] = [''];
            let i = 0;
            for (i; i < kolvo; i++) {
                C[cardNumber][i] = Mas[i];
                strok = strok + Mas[i] + ';';
            }
            for (i; i < maxLength; i++) {
                C[cardNumber][i] = "";
                strok = strok + "" + ';';
            }
            strok = strok + '\n';
            nowPoint = nextEnter + 1;
            cardNumber++;
        }
        setCards(C);
        setCSV(strok.slice(0, strok.length - 1));
    }
    const getCards = () => {
        let w = kolvo;
        let h = kolvo;
        let sumLists = [];
        for (let i = 0; i < cards.length; i += w * h) sumLists[i / (w * h)] = i;
        return (
            <>
                {
                    sumLists.map((a, index) => {
                        console.log(targetTypeCardNumber);
                    return (
                        <div className={style.List + ' ' + (targetTypeCardNumber == 0 ||targetTypeCardNumber == 1 ||targetTypeCardNumber == 2 ||targetTypeCardNumber == 3 ? null : style.ListHorisont)} key={"List" + index}>
                            {
                                Array.from(Array(h).keys()).map((a, index2) => {
                                    return (
                                        <div className={style.LineCards +  ' ' + style["LineCard"+ h]} key={"List" + index +" Line" + index2}>
                                        {
                                                Array.from(Array(w).keys()).map((a, index3) => {
                                                if(cards.length >= w*h * index + h * index2 + index3 +1) {
                                                    return (
                                                        <div className={style.Card +  ' ' + style["Card"+ w]} key={"List" + index + " Line" + index2 + " Card" + index3} >
                                                            <CardSpell cardType={targetTypeCardNumber} Pole={cards[w*h * index + h * index2 + index3]} />
                                                        </div>
                                                    );
                                                }
                                                return (
                                                    <div className={style.Card +  ' ' + style["Card"+ w]} key={"List" + index + " Line" + index2 + " Card" + index3} >
                                                    </div>
                                                );
                                            })
                                        }
                                        </div>
                                    );
                                })
                            }
                        </div>
                    );
                    })
                }
            </>
        );
    }
    return (
        <div className={style.Main} id={"ThisIsColorsConst"}>
            <img className={style.OptionsSetting} onClick={() => {setShowOptions(true);}} src={setting} alt=""/>
            <div className={style.Options + ' ' + (showOptions ? '' : style.HideWindow)}>
                <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowOptions(false); }}>Скрыть</div> </div>
                <div className={style.OpionsCase}>
                    <OptionCase nameSetting={'Вид карточек'} targetThis={targetOption[0]} setTarget={setTarget} number={0}>
                        <>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={spellCard1} name={"1"} targetThis={targetTypeCardNumber == 0} setTarget={setTargetTypeCardNumber} number={0} ></OptionCardImg>
                                <OptionCardImg img={spellCard2} name={"2"} targetThis={targetTypeCardNumber == 1} setTarget={setTargetTypeCardNumber} number={1} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={spellCard3} name={"3"} targetThis={targetTypeCardNumber == 2} setTarget={setTargetTypeCardNumber} number={2} ></OptionCardImg>
                                <OptionCardImg img={spellCard4} name={"4"} targetThis={targetTypeCardNumber == 3} setTarget={setTargetTypeCardNumber} number={3} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={spellCard5} name={"5"} targetThis={targetTypeCardNumber == 4} setTarget={setTargetTypeCardNumber} number={4} ></OptionCardImg>
                                <OptionCardImg img={spellCard6} name={"6"} targetThis={targetTypeCardNumber == 5} setTarget={setTargetTypeCardNumber} number={5} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={spellCard7} name={"7"} targetThis={targetTypeCardNumber == 6} setTarget={setTargetTypeCardNumber} number={6} ></OptionCardImg>
                                <OptionCardImg img={spellCard8} name={"8"} targetThis={targetTypeCardNumber == 7} setTarget={setTargetTypeCardNumber} number={7} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={spellCard9} name={"9"} targetThis={targetTypeCardNumber == 8} setTarget={setTargetTypeCardNumber} number={8} ></OptionCardImg>
                                <OptionCardImg img={spellCard10} name={"10"} targetThis={targetTypeCardNumber == 9} setTarget={setTargetTypeCardNumber} number={9} ></OptionCardImg>
                            </div>
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Количество на листе'} targetThis={targetOption[1]} setTarget={setTarget} number={1}>
                        <div>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={''} name={"4x4"} targetThis={(kolvo == 4) ? true : false} setTarget={setKolv} number={4} />
                                <OptionCardImg img={''} name={"3x3"} targetThis={(kolvo == 3) ? true : false} setTarget={setKolv} number={3} />
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg img={''} name={"2x2"} targetThis={(kolvo == 2) ? true : false} setTarget={setKolv} number={2} />
                                <OptionCardImg img={''} name={"1x1"} targetThis={(kolvo == 1) ? true : false} setTarget={setKolv} number={1   } />
                            </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Цвета'} targetThis={targetOption[2]} setTarget={setTarget} number={2}>
                        <div>
                            <OptionColor text={"Края"} color={colors[0]} number={0} setColor={setColor} block={block[0]} setBlock={setBloc} name={colorsNames[0]} />
                            <OptionColor text={"Фон заголовока"} color={colors[1]} number={1} setColor={setColor} block={block[1]} setBlock={setBloc} name={colorsNames[1]} />
                            <OptionColor text={"Текст заголовока"} textAs={"Как края"} color={colors[2]} number={2} setColor={setColor} block={block[2]} setBlock={setBloc} name={colorsNames[2]} />
                            <OptionColor text={"Фон полосы 1"} textAs={"Как края"} color={colors[3]} number={3} setColor={setColor} block={block[3]} setBlock={setBloc} name={colorsNames[3]} />
                            <OptionColor text={"Текст полосы 1"} textAs={"Как фон заголовка"} color={colors[4]} number={4} setColor={setColor} block={block[4]} setBlock={setBloc} name={colorsNames[4]} />
                            <OptionColor text={"Фон полосы 2"} textAs={"Как полоса 1"} color={colors[5]} number={5} setColor={setColor} block={block[5]} setBlock={setBloc} name={colorsNames[5]} />
                            <OptionColor text={"Текст полосы 2"} textAs={"Как полоса 1"} color={colors[6]} number={6} setColor={setColor} block={block[6]} setBlock={setBloc} name={colorsNames[6]} />
                            <OptionColor text={"Фон полосы 3"} textAs={"Как полоса 1"} color={colors[7]} number={7} setColor={setColor} block={block[7]} setBlock={setBloc} name={colorsNames[7]} />
                            <OptionColor text={"Текст полосы 3"} textAs={"Как полоса 1"} color={colors[8]} number={8} setColor={setColor} block={block[8]} setBlock={setBloc} name={colorsNames[8]} />
                            <OptionColor text={"Разделители опций"} textAs={"Как полоса 1"} color={colors[9]} number={9} setColor={setColor} block={block[9]} setBlock={setBloc} name={colorsNames[9]} />
                            <OptionColor text={"Фон опции 1"} textAs={"Как фон заголовка"} color={colors[10]} number={10} setColor={setColor} block={block[10]} setBlock={setBloc} name={colorsNames[10]} />
                            <OptionColor text={"Фон опции 2"} textAs={"Как опция 1"} color={colors[11]} number={11} setColor={setColor} block={block[11]} setBlock={setBloc} name={colorsNames[11]} />
                            <OptionColor text={"Фон опции 3"} textAs={"Как опция 1"} color={colors[12]} number={12} setColor={setColor} block={block[12]} setBlock={setBloc} name={colorsNames[12]} />
                            <OptionColor text={"Фон опции 4"} textAs={"Как опция 1"} color={colors[13]} number={13} setColor={setColor} block={block[13]} setBlock={setBloc} name={colorsNames[13]} />
                            <OptionColor text={"Заголовок опции 1"} textAs={"Как края"} color={colors[14]} number={14} setColor={setColor} block={block[14]} setBlock={setBloc} name={colorsNames[14]} />
                            <OptionColor text={"Заголовок опции 2"} textAs={"Как опция 1"} color={colors[15]} number={15} setColor={setColor} block={block[15]} setBlock={setBloc} name={colorsNames[15]} />
                            <OptionColor text={"Заголовок опции 3"} textAs={"Как опция 1"} color={colors[16]} number={16} setColor={setColor} block={block[16]} setBlock={setBloc} name={colorsNames[16]} />
                            <OptionColor text={"Заголовок опции 4"} textAs={"Как опция 1"} color={colors[17]} number={17} setColor={setColor} block={block[17]} setBlock={setBloc} name={colorsNames[17]} />
                            <OptionColor text={"Текст опции 1"} textAs={"Как края"} color={colors[18]} number={18} setColor={setColor} block={block[18]} setBlock={setBloc} name={colorsNames[18]} />
                            <OptionColor text={"Текст опции 2"} textAs={"Как опция 1"} color={colors[19]} number={19} setColor={setColor} block={block[19]} setBlock={setBloc} name={colorsNames[19]} />
                            <OptionColor text={"Текст опции 3"} textAs={"Как опция 1"} color={colors[20]} number={20} setColor={setColor} block={block[20]} setBlock={setBloc} name={colorsNames[20]} />
                            <OptionColor text={"Текст опции 4"} textAs={"Как опция 1"} color={colors[21]} number={21} setColor={setColor} block={block[21]} setBlock={setBloc} name={colorsNames[21]} />
                            <OptionColor text={"Фон гл текста"} textAs={"Как фон заголовка"} color={colors[22]} number={22} setColor={setColor} block={block[22]} setBlock={setBloc} name={colorsNames[22]} />
                            <OptionColor text={"Главный текст"} textAs={"Как края"} color={colors[23]} number={23} setColor={setColor} block={block[23]} setBlock={setBloc} name={colorsNames[23]} />
                            <OptionColor text={"Фон доп текста"} textAs={"Как главный"} color={colors[24]} number={24} setColor={setColor} block={block[24]} setBlock={setBloc} name={colorsNames[24]} />
                            <OptionColor text={"Доп текст"} textAs={"Как главный"} color={colors[25]} number={25} setColor={setColor} block={block[25]} setBlock={setBloc} name={colorsNames[25]} />
                            <OptionColor text={"Текст подписи"} textAs={"Как фон заголовка"} color={colors[26]} number={26} setColor={setColor} block={block[26]} setBlock={setBloc} name={colorsNames[26]} />
                            <OptionColor text={"Фон листа"} textAs={"Как края"} color={colors[27]} number={27} setColor={setColor} block={block[27]} setBlock={setBloc} name={colorsNames[27]} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры текста'} targetThis={targetOption[3]} setTarget={setTarget} number={3}>
                        <div>
                            <OptionSize text={"Заголовок"} size={size[0]} number={0} setSize={setSize} min={0} max={49} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры полей'} targetThis={targetOption[4]} setTarget={setTarget} number={4}>
                        <div>
                            <OptionSize text={"Заголовок"} size={size[1]} number={1} setSize={setSize} min={0} max={49} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Тип обложки'} targetThis={targetOption[5]} setTarget={setTarget} number={5}>
                        <div>
                            <div className={style.InputFile}>
                                <label htmlFor="inputfile">Загрузить картинку</label>
                                <input type="file" name="" id="inputfile" onInput={(e) => {
                                    const file = (e.target as HTMLInputElement);
                                    const R = file?.files;
                                    if(R!=null)
                                        setPyt(R[0]);
                                    //<img src={URL.createObjectURL(pyt)}
                                }} />
                                {pyt != undefined ? pyt.name : "Нету"}
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя картинка"} targetThis={targetBackgroundNumber == -1} setTarget={setTargetBackgroundNumber} number={-1} img={pyt!=undefined ? URL.createObjectURL(pyt) : undefined}></OptionCardImg>
                                <OptionCardImg name={"Друид"} targetThis={targetBackgroundNumber == 0} setTarget={setTargetBackgroundNumber} number={0} ><Druid className={style.Uzok}/></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Бард"} targetThis={targetBackgroundNumber == 1} setTarget={setTargetBackgroundNumber} number={1} ><Bard className={style.Uzok}/></OptionCardImg>
                                <OptionCardImg name={"Военка"} targetThis={targetBackgroundNumber == 2} setTarget={setTargetBackgroundNumber} number={2} ><Voenka className={style.Uzok}/></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Волшебник"} targetThis={targetBackgroundNumber == 3} setTarget={setTargetBackgroundNumber} number={3} ><Volshebnic className={style.Uzok}/></OptionCardImg>
                                <OptionCardImg name={"Жрец"} targetThis={targetBackgroundNumber == 4} setTarget={setTargetBackgroundNumber} number={4} ><Jrec className={style.Uzok}/></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Колдун"} targetThis={targetBackgroundNumber == 5} setTarget={setTargetBackgroundNumber} number={5} ><Koldun className={style.Uzok}/></OptionCardImg>
                            </div>
                        </div>
                    </OptionCase>
                </div>
            </div>
            <img className={style.RedactorSetting} onClick={() => {setShowRedactor(true);}} src={setting} alt=""/>
            <div className={style.Redactor + ' ' + (showOptions ? '' : style.BigWidth) + ' ' + (showRedactor ? '' : style.HideWindow)}>
                <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowRedactor(false); }}>Скрыть</div> </div>
                <div className={style.RedactorCase}>
                    <div className={style.Base}>
                        <div className={style.Title}>База</div>
                        <div className={style.BaseTips}>
                            <BaseTipCase name={"Dnd5"} openThis={openThisBaseCase[0]} setOpenThis={setOpenThisBaseCas} number={0}>
                                <>
                                    <BaseTip name={"Друид"} targetThis={openThisBase[0]} setTargetBase={setOpenThisBas} number={0} />
                                    <BaseTip name={"Жрец"} targetThis={openThisBase[1]} setTargetBase={setOpenThisBas} number={1} />
                                </>
                            </BaseTipCase>
                        </div>
                    </div>
                    <div className={style.InputPlace}>
                        <div className={style.Title}>CSV</div>
                        <div className={style.CSVText}>
                            <textarea value={CSV} name="CSVText" id="CSVText" wrap='off' onChange={(e) => { setCSV(e.target.value); }} />
                        </div>
                    </div>
                    <div className={style.Buttons}>
                        <input className={style.DownloadInput} type="file" id="InputFile" onChange={readFile}/>
                        <label className={style.Download} htmlFor="InputFile">Загрузить файл</label>
                        <div className={style.Download} onClick={() => {
                            setMakeCSV(makeCSV + 1);
                        }}>Обновить карточки</div>
                        <div className={style.Download} onClick={downloadFile}>Скачать файл</div>
                    </div>
                </div>
            </div>
            <div className={style.Lists + ' ' + (showRedactor ? style.ListDown : '') + ' ' + (showOptions ? style.ListRigth : '')}>
                {getCards()}
            </div>
        </div>
    );
}

export default SpellMain;