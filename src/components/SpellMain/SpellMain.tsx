import React, { useEffect, useState } from 'react';
import style from './SpellMain.module.scss';
import { ReactComponent as Setting } from '../../images/Setting.svg';
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
import { ReactComponent as Download } from '../../images/Download.svg';
import { ReactComponent as Druid } from '../../BackSvg/Друид.svg';
import {ReactComponent as Bard} from '../../BackSvg/Бард.svg';
// import { ReactComponent as Valkiria } from '../../BackSvg/Валькирия.svg';
import { ReactComponent as Voenka } from '../../BackSvg/Военка.svg';
import { ReactComponent as Volshebnic } from '../../BackSvg/Волшебник.svg';
import { ReactComponent as Jrec } from '../../BackSvg/Жрец.svg';
import { ReactComponent as Koldun } from '../../BackSvg/Колдун.svg';
// import { ReactComponent as Ksanatar } from '../../BackSvg/Ксанатар.svg';
// import { ReactComponent as Mistik } from '../../BackSvg/Мистик.svg';
// import { ReactComponent as Paladin } from '../../BackSvg/Паладин.svg';
// import { ReactComponent as Sledopyt } from '../../BackSvg/Следопыт.svg';
// import { ReactComponent as Charodei } from '../../BackSvg/Чародей.svg';
// import { ReactComponent as Elemental } from '../../BackSvg/Элементаль.svg';
// import { ReactComponent as Varvar } from '../../BackSvg/Варвар.svg';
// import { ReactComponent as Monk } from '../../BackSvg/Монах.svg';
// import { ReactComponent as Ogragdenie } from '../../BackSvg/Ограждение.svg';
// import { ReactComponent as Proricanie } from '../../BackSvg/Прорицание.svg';
// import { ReactComponent as Voplochenie } from '../../BackSvg/Воплощение.svg';
// import { ReactComponent as Vyzov } from '../../BackSvg/Вызов.svg';
// import { ReactComponent as Ocharovanie } from '../../BackSvg/Очарование.svg';
// import { ReactComponent as Preobrazovanie } from '../../BackSvg/Преобразование.svg';
// import { ReactComponent as Illusia } from '../../BackSvg/Иллюзия.svg';
// import { ReactComponent as Necromantia } from '../../BackSvg/Некромантия.svg';
// import { ReactComponent as Vedmochka } from '../../BackSvg/Ведьмочка.svg';
// import { ReactComponent as Volk } from '../../BackSvg/Волк.svg';
// import { ReactComponent as Juk } from '../../BackSvg/Жук.svg';
// import { ReactComponent as Juk2 } from '../../BackSvg/Жук2.svg';
// import { ReactComponent as JukOsa } from '../../BackSvg/ЖукОса.svg';
// import { ReactComponent as JukBabochka } from '../../BackSvg/ЖукБабочка.svg';
// import { ReactComponent as Shesternya1 } from '../../BackSvg/Шестерня 1.svg';
// import { ReactComponent as Shesternya2 } from '../../BackSvg/Шестерня 2.svg';
// import { ReactComponent as NapitokPennyi } from '../../BackSvg/Напиток Пенный.svg';
// import { ReactComponent as NapitokTrop } from '../../BackSvg/Напиток Тропический.svg';
// import { ReactComponent as NapitokShip } from '../../BackSvg/Напиток Шипящий.svg';
// import { ReactComponent as MyjBaraban } from '../../BackSvg/Мужик с барабанами.svg';
// import { ReactComponent as GavaiLedi } from '../../BackSvg/Гавайская леди.svg';
// import { ReactComponent as AfricaLediTanec } from '../../BackSvg/Африканска леди в танце.svg';
// import { ReactComponent as AfricaLedi } from '../../BackSvg/Африканска леди.svg';
// import { ReactComponent as OgonMech } from '../../BackSvg/Огенный меч.svg';
// import { ReactComponent as AfricaMugikTanec } from '../../BackSvg/Африканский мужик в танце.svg';
// import { ReactComponent as Drakon } from '../../BackSvg/Дракон.svg';
// import { ReactComponent as SiglaMelekTaus } from '../../BackSvg/Сигила мелек таус.svg';
// import { ReactComponent as Sovushka } from '../../BackSvg/Совушка.svg';
import BaseTip from '../BaseTip/BaseTip';
import BaseTipCase from '../BaseTipCase/BaseTipCase';
import CardSpell from '../CardSpell/CardSpell';
import OptionAllain from '../OptionAllain/OptionAllain';
type AlertProps = {
};
const SpellMain = ({ }: AlertProps): JSX.Element => {
    const maxLength = 15;
    const [cards, setCards] = useState<string[][]>([]);
    const [CSV, setCSV] = useState("");
    const [makeCSV, setMakeCSV] = useState(0);
    const [showOptions, setShowOptions] = useState(true);
    const [showRedactor, setShowRedactor] = useState(true);
    const [pyt, setPyt] = useState<File[]|undefined[]>([]);
    const [openThisBaseCase, setOpenThisBaseCase] = useState([false, false, false, false, false, false, false, false]);
    const [openThisBase, setOpenThisBase] = useState([false, false, false, false, false, false, false, false]);
    const [targetOption, setTargetOptions] = useState([false, false, false, false, false, false, false, false, false, false, false]);
    const [colors, setColors] = useState(["#000000","#ffffff","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#ffffff","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#ffffff","#000000","#ffffff","#000000","#ffffff","#ffffff","#000000","#ffffff","#000000","#ffffff","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000","#000000"]);
    const sizePoleNames = ["--CardZagolovokTextSize","--CardPer1H","--CardPer2H","--CardPer3H","--CardOptionHeigth","--CardOptionBorder","--CardDownTextSize"];
    const sizeTextNames = ["--CardZagolovokTextFont","--CardPer1TextFont","--CardPer2TextFont","--CardPer3TextFont","--CardOptionZagolovokTextFont1","--CardOptionZagolovokTextFont2","--CardOptionZagolovokTextFont3","--CardOptionZagolovokTextFont4","--CardOptionTextTextFont1","--CardOptionTextTextFont2","--CardOptionTextTextFont3","--CardOptionTextTextFont4","--CardDownTextFont","--Number1H","--Number1V","--Number2H","--Number2V","--Number3H","--Number3V","--Number4H","--Number4V", "--Number1Kegl", "--Number2Kegl", "--Number3Kegl", "--Number4Kegl"];
    const colorsNames = ["--CardColorBackcground", "--CardZagolovokBackgroundColor", "--CardZagolovokTextColor", "--CardPer1BackgroundColor", "--CardPer1TextColor", "--CardPer2BackgroundColor", "--CardPer2TextColor", "--CardPer3BackgroundColor", "--CardPer3TextColor", "--CardOptionPalki", "--CardOption1Background", "--CardOption2Background", "--CardOption3Background", "--CardOption4Background", "--CardOption1ZColor", "--CardOption2ZColor", "--CardOption3ZColor", "--CardOption4ZColor", "--CardOption1TColor", "--CardOption2TColor", "--CardOption3TColor", "--CardOption4TColor", "--CardMainBackgroundColor", "--CardMainTextColor", "--CardDopBackgroundColor", "--CardDopTextColor", "--CardDownTextColor", "--ListColor", "--Rubaha1", "--Rubaha2", "--Rubaha3", "--Rubaha4", "--Rubaha5", "--Number1", "--Number2", "--Number3", "--Number4"];
    const alignNames = ["--CardZagolovokTextAlign", "--CardPer1TextAlign", "--CardPer2TextAlign", "--CardPer3TextAlign", "--CardOption1ZagolovokTextAlign", "--CardOption2ZagolovokTextAlign", "--CardOption3ZagolovokTextAlign", "--CardOption4ZagolovokTextAlign", "--CardOption1TextTextAlign", "--CardOption2TextTextAlign", "--CardOption3TextTextAlign", "--CardOption4TextTextAlign", "--CardMainTextTextAlign", "--CardDopTextTextAlign", "--CardDownTextTextAlign"];
    const paddingNames = ["--CardZagolovokTextPadding", "--CardPer1TextPadding", "--CardPer2TextPadding", "--CardPer3TextPadding", "--CardOption1ZagolovokTextPadding", "--CardOption2ZagolovokTextPadding", "--CardOption3ZagolovokTextPadding", "--CardOption4ZagolovokTextPadding", "--CardOption1TextTextPadding", "--CardOption2TextTextPadding", "--CardOption3TextTextPadding", "--CardOption4TextTextPadding", "--CardMainTextTextPadding", "--CardDopTextTextPadding", "--CardDownTextTextPadding", "--ListPadding", "--CardPadding", "--", "--", "--", "--", "--", "--", "--"];
    const bordwrRadiusNames = ["--CardZagolovok┌", "--CardZagolovok┐", "--CardZagolovok┘", "--CardZagolovok└", "--CardOption1┌", "--CardOption1┐", "--CardOption1┘", "--CardOption1└", "--CardOption2┌", "--CardOption2┐", "--CardOption2┘", "--CardOption2└", "--CardOption3┌", "--CardOption3┐", "--CardOption3┘", "--CardOption3└", "--CardOption4┌", "--CardOption4┐", "--CardOption4┘", "--CardOption4└", "--CardAllText┌", "--CardAllText┐", "--CardAllText┘", "--CardAllText└", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--", "--"];
    const [blockColor, setBlockColor] = useState([false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, true, true, true, true]);
    const [blockSizePole, setBlockSizePole] = useState([false, false, true, true, false, false, false, false, false, false, false, false, false, false]);
    const [blockSizeText, setBlockSizeText] = useState([false, false, true, true, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false]);
    const [blockPaddingText, setBlockPaddingText] = useState([false, false, true, true, false, true, true, true, true, true, true, true, false, true, true, false, false, false, true, true, true, true, true, true, true, true, true, false]);
    const [blockAlignValue, setBlockAlignValue] = useState([false, false, true, true, false, true, true, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false]);
    const [blockBorderRadius, setBlockBorderRadius] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [sizePole, setSizesPole] = useState([18,15,15,15,80,2,15]);
    const [minMax, setMinMax] = useState([10, 13]);
    const [blockMinMax, setBlockMinMax] = useState(false);
    const [sizeText, setSizesText] = useState([18, 14, 14, 14, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 15, 40, 40, 40, 40]);
    const [paddingText, setPaddingText] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 10, 7]);
    const [alignValue, setAlignValue] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1]);
    const [borderRadiusValue, setBorderRadiusValue] = useState([11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11]);
    const [kolvo, setKolvo] = useState(3);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(1);
    const [targetTypeCardNumber, setTargetTypeCardNumber] = useState(0);
    const perepolnen: boolean[] = [];
    const [perepolnenText, setPerepolnenText] = useState('');
    const [startPerepolnen, setStartPerepolnen] = useState(0);
    const [isBack, setIsBack] = useState(false);
    const [myNumbers, setMyNumbers] = useState([false, false, false, false]);
    const setTarget = (a: number, b: boolean) => {
        const M = [...targetOption];
        M[a] = b;
        setTargetOptions(M);
    };
    const setKolv = (a: number) => {
        setKolvo(a);
    };
    useEffect(() => {
        for (let i = 0; i < 40; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(colorsNames[i], colors[i]);
    }, [colors]);
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(sizePoleNames[i], String(sizePole[i]) + 'px' );
    }, [sizePole]);
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[i], String(sizeText[i]) + 'px' );
    }, [sizeText]);
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(alignNames[i], String(getAlignText(alignValue[i])));
    }, [alignValue]);
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(paddingNames[i], String(paddingText[i]) + 'px');
    }, [paddingText]);
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(bordwrRadiusNames[i], String(borderRadiusValue[i]) + 'px');
    }, [bordwrRadiusNames]);
    const getAlignText = (number: number) => {
        switch (number) {
            case 1:
                return "left";
            case 2:
                return "center";
            case 3:
                return "right";
            case 4:
                return "justify";
            default:
                return "left";
        }
    }
    const setColor = (a: number, b: string, vlog?: boolean) => {
        const M = [...colors];
        M[a] = b;
        const V = [...blockColor];
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
        if (V[27]) M[27] = M[28];
        if (V[28]) M[28] = M[0];
        if (V[29]) M[29] = M[1];
        if (V[33]) M[33] = M[0];
        if (V[34]) M[34] = M[33];
        if (V[35]) M[35] = M[33];
        if (V[36]) M[36] = M[33];
        setColors(M);
    };
    const setSizePole = (a: number, b: number, vlog?: boolean) => {
        const M = [...sizePole];
        M[a] = b;
        const V = [...blockSizePole];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[1];
        if (V[3]) M[3] = M[1];
        setSizesPole(M);
    };
    const setSizeText = (a: number, b: number, vlog?: boolean) => {
        const M = [...sizeText];
        M[a] = b;
        const V = [...blockSizeText];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[1];
        if (V[3]) M[3] = M[1];
        if (V[5]) M[5] = M[4];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[4];
        if (V[8]) M[8] = M[4];
        if (V[9]) M[9] = M[8];
        if (V[10]) M[10] = M[8];
        if (V[11]) M[11] = M[8];
        if (V[12]) M[12] = M[0];
        if (V[22]) M[22] = M[21];
        if (V[23]) M[23] = M[21];
        if (V[24]) M[24] = M[21];
        setSizesText(M);
    };
    const setPaddinText = (a: number, b: number, vlog?: boolean) => {
        const M = [...paddingText];
        M[a] = b;
        const V = [...blockPaddingText];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[1];
        if (V[3]) M[3] = M[1];
        if (V[5]) M[5] = M[4];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[4];
        if (V[8]) M[8] = M[4];
        if (V[9]) M[9] = M[8];
        if (V[10]) M[10] = M[8];
        if (V[11]) M[11] = M[8];
        if (V[13]) M[13] = M[12];
        if (V[14]) M[14] = M[0];
        setPaddingText(M);
    };
    const setAlignsValue = (a: number, b: number, vlog?: boolean) => {
        const M = [...alignValue];
        M[a] = b;
        const V = [...blockAlignValue];
        if (vlog != undefined) V[a] = vlog;
        if (V[2]) M[2] = M[1];
        if (V[3]) M[3] = M[1];
        if (V[5]) M[5] = M[4];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[4];
        if (V[8]) M[8] = M[4];
        if (V[9]) M[9] = M[8];
        if (V[10]) M[10] = M[8];
        if (V[11]) M[11] = M[8];
        if (V[13]) M[13] = M[12];
        setAlignValue(M);
    };
    const setBordersRadiusValue = (a: number, b: number, vlog?: boolean) => {
        const M = [...borderRadiusValue];
        M[a] = b;
        const V = [...blockBorderRadius];
        if (vlog != undefined) V[a] = vlog;
        if (V[1]) M[1] = M[0];
        if (V[2]) M[2] = M[0];
        if (V[3]) M[3] = M[0];
        if (V[5]) M[5] = M[4];
        if (V[6]) M[6] = M[4];
        if (V[7]) M[7] = M[4];
        if (V[8]) M[8] = M[4];
        if (V[9]) M[9] = M[8];
        if (V[10]) M[10] = M[8];
        if (V[11]) M[11] = M[8];
        if (V[12]) M[12] = M[4];
        if (V[13]) M[13] = M[12];
        if (V[14]) M[14] = M[13];
        if (V[15]) M[15] = M[14];
        if (V[16]) M[16] = M[4];
        if (V[17]) M[17] = M[16];
        if (V[18]) M[18] = M[16];
        if (V[19]) M[19] = M[16];
        if (V[21]) M[21] = M[20];
        if (V[22]) M[22] = M[20];
        if (V[23]) M[23] = M[20];
        setBorderRadiusValue(M);
    };
    const setMinMaxs = (a: number, b: number, vlog?: boolean) => {
        const M = [...minMax];
        M[a] = b;
        let V = blockMinMax;
        if (vlog != undefined) V = vlog;
        if (V) M[1] = M[0];
        setMinMax(M);
    };
    const setBlocColor = (a: number, b: string, bloc: boolean) => {
        const M = [...blockColor];
        M[a] = bloc;
        setColor(a, b, bloc);
        setBlockColor(M);
    };
    const setBlocSizePole = (a: number, b: number, bloc: boolean) => {
        const M = [...blockSizePole];
        M[a] = bloc;
        setSizePole(a, b, bloc);
        setBlockSizePole(M);
    };
    const setBlocSizeText = (a: number, b: number, bloc: boolean) => {
        const M = [...blockSizeText];
        M[a] = bloc;
        setSizeText(a, b, bloc);
        setBlockSizeText(M);
    };
    const setBlocPaddingText = (a: number, b: number, bloc: boolean) => {
        const M = [...blockPaddingText];
        M[a] = bloc;
        setPaddinText(a, b, bloc);
        setBlockPaddingText(M);
    };
    const setBlocAlignValue = (a: number, b: number, bloc: boolean) => {
        const M = [...blockAlignValue];
        M[a] = bloc;
        setAlignsValue(a, b, bloc);
        setBlockAlignValue(M);
    };
    const setBlocBorderRadius = (a: number, b: number, bloc: boolean) => {
        const M = [...blockBorderRadius];
        M[a] = bloc;
        setBordersRadiusValue(a, b, bloc);
        setBlockBorderRadius(M);
    };
    const setBlocMinMax = (a: number, b: number, bloc: boolean) => {
        let M = blockMinMax;
        M = bloc;
        setMinMaxs(a, b, bloc);
        setBlockMinMax(M);
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
                setCSV("\"Заголовок\";\"Школа -  Уровень\";\"Опция1\";\"Это опция1\";\"Опция2\";\"Это опция2\";\"Опция3\";\"Это опция3\";\"Опция4\";\"Это опция4\";\"\";\"Commodi consequuntur velit, iusto, voluptates ab debitis numquam eveniet quae accusantium dignissimos praesentium asperiores iste cum quo amet quibusdam error, illo impedit.ЏЭто клевое заклинаниеЏЭто клевое заклинаниеЏЭто клевое заклинаниеЏЭто клевое заклинаниеЏЭто клевое заклинание\";\"На более высоком уровне\";\"На девятом уровне ячейки заклинания дамажит жестко\";\"Друид\";\"1\";\"0\";");
                break;
            case 1:
                setCSV("\"Жрецовый текст\"");
                break;
            default:
                setCSV("");
                break;
        }
        setMakeCSV(makeCSV + 1);
    };
    const plusPerepolnen = (num: number, bool:boolean) => {
        perepolnen[num] = bool;
    }
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
    useEffect(() => {
        let flag = true;
        if (perepolnen.length != 0)
        {
            let perText = "";
            for (let i = 0; i < perepolnen.length; i++)
                if (perepolnen[i]) {
                    if (flag) { 
                        flag = false;
                        perText = "Переполнение в: ";
                    }
                    perText = perText + '\n' + cards[i][0];
                }
            setPerepolnenText(perText);
        }
    }, [perepolnen]);
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
        let nowPoint = 0, nextEnter = 0, endPoint = CSV.length - 1;
        let cardNumber = 0, newCSV= '';
        const C: string[][] = [];
        const getCardFromCSVLine = (C: string[][], numberCard: number, pointStart: number, pointEnd: number) => { 
            //Записываю в карточки
            for (let i = 0; pointStart<pointEnd || i<17; i++) {
                C[numberCard][i] = '';
                if (pointEnd <= pointStart) {
                    C[numberCard][i] = '';
                } else if (CSV[pointStart] == '\"') {
                    pointStart++;
                    let nextK = CSV.indexOf('\"', pointStart);
                    while (CSV[nextK + 1] == '\"' && nextK <= pointEnd && nextK != -1) {
                        C[numberCard][i] = C[numberCard][i] + CSV.slice(pointStart, nextK+1);
                        pointStart = nextK + 2;
                        nextK = CSV.indexOf('\"', nextK + 2);
                    }
                    if (nextK > pointEnd || nextK == -1) {
                        C[numberCard][i] = C[numberCard][i] + CSV.slice(pointStart, pointEnd);
                        pointStart = pointEnd+1;
                    } else {
                        C[numberCard][i] = C[numberCard][i] + CSV.slice(pointStart, nextK);
                        pointStart = nextK + 1;
                        const FirstTZ = CSV.indexOf(';', pointStart);
                        if (FirstTZ <= endPoint && FirstTZ !=-1) {
                            pointStart = FirstTZ + 1;
                        } else {
                            pointStart = pointEnd;
                        }
                    }
                } else {
                    const FirstTZ = CSV.indexOf(';', pointStart);
                    if (FirstTZ <= endPoint && FirstTZ !=-1) {
                        C[numberCard][i] = CSV.slice(pointStart, FirstTZ);
                        pointStart = FirstTZ + 1;
                    } else {
                        C[numberCard][i] = CSV.slice(pointStart, pointEnd+1);
                        pointStart = pointEnd;
                    }
                }
                newCSV = newCSV + '\"' + C[numberCard][i].replaceAll('\"', '\"\"') + '\"' + ';';
                C[numberCard][i] = C[numberCard][i].replaceAll('Џ', '\n');
            }
        };
        while ((nextEnter = CSV.indexOf('\n', nowPoint)) != -1) {
            C[cardNumber] = [];
            getCardFromCSVLine(C, cardNumber, nowPoint, nextEnter - 1);
            nowPoint = nextEnter + 1;
            cardNumber++;
            newCSV = newCSV + '\n';
        };
        C[cardNumber] = [];
        getCardFromCSVLine(C, cardNumber, nowPoint, CSV.length - 1);
        setCards(C);
        setCSV(newCSV);
    }
    const getBackCardImg = (PoleStr: string) => {
        let A = Number(PoleStr); 
        if (A == undefined || A == 0 || A > 6) {
            A = targetBackgroundNumber;
        }
        if (A < 0 && A > -11) {
            console.log("AAAAA", A);
            const r = pyt[0 - A - 1];
            return (
                <img src={r!=undefined ? URL.createObjectURL(r) : undefined} alt="" />
            );
        }
        switch (A) {
            case 1:
                return (<Druid />);
            case 2:
                return (<Bard />);
            case 3:
                return (<Voenka />);
            case 4:
                return (<Volshebnic />);
            case 5:
                return (<Jrec />);
            case 6:
                return (<Koldun />);
            default:
                return (<div></div>);
        }
        return (
            <div></div>
        );
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
                    return (
                        <div className={style.List + ' ' + (targetTypeCardNumber == 0 ||targetTypeCardNumber == 1 ||targetTypeCardNumber == 2 ||targetTypeCardNumber == 3 ? null : style.ListHorisont)} key={"List" + index}>
                            {
                                Array.from(Array(h).keys()).map((a, index2) => {
                                    return (
                                        <div className={style.LineCards +  ' ' + style["LineCard"+ h]} key={"List" + index +" Line" + index2}>
                                        {
                                            Array.from(Array(w).keys()).map((a, index3) => {
                                                if (isBack) {
                                                    if(cards.length >= w*h * index + h * index2 + 3 - index3 ) {
                                                        return (
                                                            <div className={style.Card +  ' ' + style["Card"+ w]} key={index*w*h + index2*h + 3 - index3} >
                                                                <CardSpell NumbersExist={myNumbers} isBack={true} keyt={index * w * h + index2 * h + 3 - index3} cardType={targetTypeCardNumber} Pole={cards[w * h * index + h * index2 + 3 - index3 -1]}>{getBackCardImg(cards[w*h * index + h * index2 + 3 - index3-1][16])}</CardSpell>
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className={style.Card +  ' ' + style["Card"+ w]} key={"List" + index + " Line" + index2 + " Card" + (3 - index3)} >
                                                        </div>
                                                    );
                                                } else {
                                                    if(cards.length >= w*h * index + h * index2 + index3 +1) {
                                                        return (
                                                            <div className={style.Card +  ' ' + style["Card"+ w]} key={index*w*h + index2*h + index3} >
                                                                <CardSpell startPerepolnen={startPerepolnen} keyt={index*w*h + index2*h + index3} plusPerepolnen = {plusPerepolnen} minMax = {minMax} cardType={targetTypeCardNumber} Pole={cards[w*h * index + h * index2 + index3]} />
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className={style.Card +  ' ' + style["Card"+ w]} key={"List" + index + " Line" + index2 + " Card" + index3} >
                                                        </div>
                                                    );
                                                }
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
    const setPyti = (num: number) => {
        return (
            <div className={style.InputFile}>
                <label htmlFor={`inputfile + ${0 - num -1}`}><Download/></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pyt;
                        T[0 - num -1] = R[0];
                        setPyt(T);
                    }
                    let r = targetBackgroundNumber; 
                    setTargetBackgroundNumber(-999999);
                    setTimeout(( a) => {
                        setTargetBackgroundNumber(a);
                    }, 300 , r);
                    //<img src={URL.createObjectURL(pyt)}
                }} />
            </div>
        );
    }
    return (
        <div className={style.Main} id={"ThisIsColorsConst"}>
            <div className={style.ChangeCardViu + ' ' + (showOptions ? style.OpenOptionViu : '')}>
                <div className={style.RubahaViu + ' ' + (isBack ? '': style.OnHover)} onClick={() => {setIsBack(false)}}>
                    <p>Лицо</p>
                </div>
                <div className={style.RubahaViu + ' ' + (isBack ? style.OnHover : '')} onClick={() => {setIsBack(true)}}>
                    <p>Рубаха</p>
                </div>
            </div>
            <Setting className={style.OptionsSetting} onClick={() => {setShowOptions(true);}}/>
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
                            <OptionColor text={"Края"} color={colors[0]} number={0} setColor={setColor} block={blockColor[0]} setBlock={setBlocColor} name={colorsNames[0]} />
                            <OptionColor text={"Фон заголовока"} color={colors[1]} number={1} setColor={setColor} block={blockColor[1]} setBlock={setBlocColor} name={colorsNames[1]} />
                            <OptionColor text={"Текст заголовока"} textAs={"Как края"} color={colors[2]} number={2} setColor={setColor} block={blockColor[2]} setBlock={setBlocColor} name={colorsNames[2]} />
                            <OptionColor text={"Фон полосы 1"} textAs={"Как края"} color={colors[3]} number={3} setColor={setColor} block={blockColor[3]} setBlock={setBlocColor} name={colorsNames[3]} />
                            <OptionColor text={"Текст полосы 1"} textAs={"Как фон заголовка"} color={colors[4]} number={4} setColor={setColor} block={blockColor[4]} setBlock={setBlocColor} name={colorsNames[4]} />
                            <OptionColor text={"Фон полосы 2"} textAs={"Как полоса 1"} color={colors[5]} number={5} setColor={setColor} block={blockColor[5]} setBlock={setBlocColor} name={colorsNames[5]} />
                            <OptionColor text={"Текст полосы 2"} textAs={"Как полоса 1"} color={colors[6]} number={6} setColor={setColor} block={blockColor[6]} setBlock={setBlocColor} name={colorsNames[6]} />
                            <OptionColor text={"Фон полосы 3"} textAs={"Как полоса 1"} color={colors[7]} number={7} setColor={setColor} block={blockColor[7]} setBlock={setBlocColor} name={colorsNames[7]} />
                            <OptionColor text={"Текст полосы 3"} textAs={"Как полоса 1"} color={colors[8]} number={8} setColor={setColor} block={blockColor[8]} setBlock={setBlocColor} name={colorsNames[8]} />
                            <OptionColor text={"Разделители опций"} textAs={"Как полоса 1"} color={colors[9]} number={9} setColor={setColor} block={blockColor[9]} setBlock={setBlocColor} name={colorsNames[9]} />
                            <OptionColor text={"Фон опции 1"} textAs={"Как фон заголовка"} color={colors[10]} number={10} setColor={setColor} block={blockColor[10]} setBlock={setBlocColor} name={colorsNames[10]} />
                            <OptionColor text={"Фон опции 2"} textAs={"Как опция 1"} color={colors[11]} number={11} setColor={setColor} block={blockColor[11]} setBlock={setBlocColor} name={colorsNames[11]} />
                            <OptionColor text={"Фон опции 3"} textAs={"Как опция 1"} color={colors[12]} number={12} setColor={setColor} block={blockColor[12]} setBlock={setBlocColor} name={colorsNames[12]} />
                            <OptionColor text={"Фон опции 4"} textAs={"Как опция 1"} color={colors[13]} number={13} setColor={setColor} block={blockColor[13]} setBlock={setBlocColor} name={colorsNames[13]} />
                            <OptionColor text={"Заголовок опции 1"} textAs={"Как края"} color={colors[14]} number={14} setColor={setColor} block={blockColor[14]} setBlock={setBlocColor} name={colorsNames[14]} />
                            <OptionColor text={"Заголовок опции 3"} textAs={"Как опция 1"} color={colors[16]} number={16} setColor={setColor} block={blockColor[16]} setBlock={setBlocColor} name={colorsNames[16]} />
                            <OptionColor text={"Заголовок опции 2"} textAs={"Как опция 1"} color={colors[15]} number={15} setColor={setColor} block={blockColor[15]} setBlock={setBlocColor} name={colorsNames[15]} />
                            <OptionColor text={"Заголовок опции 4"} textAs={"Как опция 1"} color={colors[17]} number={17} setColor={setColor} block={blockColor[17]} setBlock={setBlocColor} name={colorsNames[17]} />
                            <OptionColor text={"Текст опции 1"} textAs={"Как края"} color={colors[18]} number={18} setColor={setColor} block={blockColor[18]} setBlock={setBlocColor} name={colorsNames[18]} />
                            <OptionColor text={"Текст опции 2"} textAs={"Как опция 1"} color={colors[19]} number={19} setColor={setColor} block={blockColor[19]} setBlock={setBlocColor} name={colorsNames[19]} />
                            <OptionColor text={"Текст опции 3"} textAs={"Как опция 1"} color={colors[20]} number={20} setColor={setColor} block={blockColor[20]} setBlock={setBlocColor} name={colorsNames[20]} />
                            <OptionColor text={"Текст опции 4"} textAs={"Как опция 1"} color={colors[21]} number={21} setColor={setColor} block={blockColor[21]} setBlock={setBlocColor} name={colorsNames[21]} />
                            <OptionColor text={"Фон гл текста"} textAs={"Как фон заголовка"} color={colors[22]} number={22} setColor={setColor} block={blockColor[22]} setBlock={setBlocColor} name={colorsNames[22]} />
                            <OptionColor text={"Главный текст"} textAs={"Как края"} color={colors[23]} number={23} setColor={setColor} block={blockColor[23]} setBlock={setBlocColor} name={colorsNames[23]} />
                            <OptionColor text={"Фон доп текста"} textAs={"Как главный"} color={colors[24]} number={24} setColor={setColor} block={blockColor[24]} setBlock={setBlocColor} name={colorsNames[24]} />
                            <OptionColor text={"Доп текст"} textAs={"Как главный"} color={colors[25]} number={25} setColor={setColor} block={blockColor[25]} setBlock={setBlocColor} name={colorsNames[25]} />
                            <OptionColor text={"Текст подписи"} textAs={"Как фон заголовка"} color={colors[26]} number={26} setColor={setColor} block={blockColor[26]} setBlock={setBlocColor} name={colorsNames[26]} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры полей'} targetThis={targetOption[3]} setTarget={setTarget} number={3}>
                        <div>
                            <OptionSize text={"Заголовок"} size={sizePole[0]} number={0} setSize={setSizePole} min={0} max={49} block={blockSizePole[0]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Полоса 1"} size={sizePole[1]} number={1} setSize={setSizePole} min={0} max={49} block={blockSizePole[1]} setBlock={setBlocSizePole} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={sizePole[2]} number={2} setSize={setSizePole} min={0} max={49} block={blockSizePole[2]} setBlock={setBlocSizePole} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={sizePole[3]} number={3} setSize={setSizePole} min={0} max={49} block={blockSizePole[3]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Опции"} size={sizePole[4]} number={4} setSize={setSizePole} min={0} max={100} block={blockSizePole[4]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Между опциями"} size={sizePole[5]} number={5} setSize={setSizePole} min={0} max={40} block={blockSizePole[5]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Нижняя подпись"} size={sizePole[6]} number={6} setSize={setSizePole} min={0} max={40} block={blockSizePole[6]} setBlock={setBlocSizePole} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры текста'} targetThis={targetOption[4]} setTarget={setTarget} number={4}>
                        <div>
                            <OptionSize text={"Заголовок"} size={sizeText[0]} number={0} setSize={setSizeText} min={0} max={49} block={blockSizeText[0]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Полоса 1"} size={sizeText[1]} number={1} setSize={setSizeText} min={0} max={49} block={blockSizeText[1]} setBlock={setBlocSizeText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={sizeText[2]} number={2} setSize={setSizeText} min={0} max={49} block={blockSizeText[2]} setBlock={setBlocSizeText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={sizeText[3]} number={3} setSize={setSizeText} min={0} max={49} block={blockSizeText[3]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 1"} size={sizeText[4]} number={4} setSize={setSizeText} min={0} max={49} block={blockSizeText[4]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 2"} textAs={"Как опция 1"} size={sizeText[5]} number={5} setSize={setSizeText} min={0} max={49} block={blockSizeText[5]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 3"} textAs={"Как опция 1"} size={sizeText[6]} number={6} setSize={setSizeText} min={0} max={49} block={blockSizeText[6]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 4"} textAs={"Как опция 1"} size={sizeText[7]} number={7} setSize={setSizeText} min={0} max={49} block={blockSizeText[7]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 1"} textAs={"Как загол 1"}  size={sizeText[8]} number={8} setSize={setSizeText} min={0} max={49} block={blockSizeText[8]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 2"} textAs={"Как опция 1"} size={sizeText[9]} number={9} setSize={setSizeText} min={0} max={49} block={blockSizeText[9]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 3"} textAs={"Как опция 1"} size={sizeText[10]} number={10} setSize={setSizeText} min={0} max={49} block={blockSizeText[10]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 4"} textAs={"Как опция 1"} size={sizeText[11]} number={11} setSize={setSizeText} min={0} max={49} block={blockSizeText[11]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Подпись"} textAs={"Как заголовок"} size={sizeText[12]} number={12} setSize={setSizeText} min={0} max={49} block={blockSizeText[12]} setBlock={setBlocSizeText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Положение текста'} targetThis={targetOption[5]} setTarget={setTarget} number={5}>
                        <div>
                            <OptionAllain text={"Заголовок"} value={alignValue[0]} number={0} setValue={setAlignsValue} block={blockAlignValue[0]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Полоса 1"} value={alignValue[1]} number={1} setValue={setAlignsValue} block={blockAlignValue[1]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Полоса 2"} textAs={"как 1"} value={alignValue[2]} number={2} setValue={setAlignsValue} block={blockAlignValue[2]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Полоса 3"} textAs={"как 1"} value={alignValue[3]} number={3} setValue={setAlignsValue} block={blockAlignValue[3]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Заголовок опции 1"} value={alignValue[4]} number={4} setValue={setAlignsValue} block={blockAlignValue[4]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Загол опции 2"} textAs={"как 1"} value={alignValue[5]} number={5} setValue={setAlignsValue} block={blockAlignValue[5]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Загол опции 3"} textAs={"как 1"} value={alignValue[6]} number={6} setValue={setAlignsValue} block={blockAlignValue[6]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Загол опции 4"} textAs={"как 1"} value={alignValue[7]} number={7} setValue={setAlignsValue} block={blockAlignValue[7]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Текст опции 1"} textAs={"как з1"} value={alignValue[8]} number={8} setValue={setAlignsValue} block={blockAlignValue[8]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Текст опции 2"} textAs={"как 1"} value={alignValue[9]} number={9} setValue={setAlignsValue} block={blockAlignValue[9]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Текст опции 3"} textAs={"как 1"} value={alignValue[10]} number={10} setValue={setAlignsValue} block={blockAlignValue[10]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Текст опции 4"} textAs={"как 1"} value={alignValue[11]} number={11} setValue={setAlignsValue} block={blockAlignValue[11]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Главный текст"} value={alignValue[12]} number={12} setValue={setAlignsValue} block={blockAlignValue[12]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Доп текст"} textAs={"как главн"} value={alignValue[13]} number={13} setValue={setAlignsValue} block={blockAlignValue[13]} setBlock={setBlocAlignValue} />
                            <OptionAllain text={"Нижняя подпись"} value={alignValue[14]} number={14} setValue={setAlignsValue} block={blockAlignValue[14]} setBlock={setBlocAlignValue} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Отступы'} targetThis={targetOption[6]} setTarget={setTarget} number={6}>
                        <div>
                            <OptionSize text={"Поля листа"} size={paddingText[15]} number={15} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[15]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Обводка карточки"} size={paddingText[16]} number={16} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[16]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок"} size={paddingText[0]} number={0} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[0]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Полоса 1"} size={paddingText[1]} number={1} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[1]} setBlock={setBlocPaddingText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={paddingText[2]} number={2} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[2]} setBlock={setBlocPaddingText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={paddingText[3]} number={3} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[3]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 1"} size={paddingText[4]} number={4} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[4]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 2"} textAs={"Как опция 1"} size={paddingText[5]} number={5} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[5]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 3"} textAs={"Как опция 1"} size={paddingText[6]} number={6} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[6]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 4"} textAs={"Как опция 1"} size={paddingText[7]} number={7} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[7]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 1"}textAs={"Как загол 1"}  size={paddingText[8]} number={8} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[8]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 2"} textAs={"Как опция 1"} size={paddingText[9]} number={9} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[9]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 3"} textAs={"Как опция 1"} size={paddingText[10]} number={10} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[10]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 4"} textAs={"Как опция 1"} size={paddingText[11]} number={11} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[11]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Главный текст"} size={paddingText[12]} number={12} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[12]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Доп текст"} textAs={"Как главный"} size={paddingText[13]} number={13} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[13]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Подпись"} textAs={"Как заголовок"} size={paddingText[14]} number={14} setSize={setPaddinText} min={0} max={49} block={blockPaddingText[14]} setBlock={setBlocPaddingText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Округлости'} targetThis={targetOption[7]} setTarget={setTarget} number={7}>
                        <div>
                            <OptionSize text={"Заголовок ┌"} size={borderRadiusValue[0]} number={0} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[0]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Заголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[1]} number={1} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[1]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Заголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[2]} number={2} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[2]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Заголовок └"} textAs={"как ┌"} size={borderRadiusValue[3]} number={3} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[3]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┌"} size={borderRadiusValue[4]} number={4} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[4]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┐"} textAs={"как ┌"} size={borderRadiusValue[5]} number={5} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[5]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┘"} textAs={"как ┌"} size={borderRadiusValue[6]} number={6} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[6]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 └"} textAs={"как ┌"} size={borderRadiusValue[7]} number={7} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[7]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┌"} textAs={"как 1"} size={borderRadiusValue[8]} number={8} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[8]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┐"} textAs={"как ┌"} size={borderRadiusValue[9]} number={9} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[9]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┘"} textAs={"как ┌"} size={borderRadiusValue[10]} number={10} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[10]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 └"} textAs={"как ┌"} size={borderRadiusValue[11]} number={11} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[11]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┌"} textAs={"как 1"} size={borderRadiusValue[12]} number={12} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[12]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┐"} textAs={"как ┌"} size={borderRadiusValue[13]} number={13} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[13]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┘"} textAs={"как ┌"} size={borderRadiusValue[14]} number={14} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[14]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 └"} textAs={"как ┌"} size={borderRadiusValue[15]} number={15} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[15]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┌"} textAs={"как 1"} size={borderRadiusValue[16]} number={16} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[16]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┐"} textAs={"как ┌"} size={borderRadiusValue[17]} number={17} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[17]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┘"} textAs={"как ┌"} size={borderRadiusValue[18]} number={18} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[18]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 └"} textAs={"как ┌"} size={borderRadiusValue[19]} number={19} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[19]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┌"} size={borderRadiusValue[20]} number={20} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[20]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┐"} textAs={"как ┌"} size={borderRadiusValue[21]} number={21} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[21]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┘"} textAs={"как ┌"} size={borderRadiusValue[22]} number={22} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[22]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст └"} textAs={"как ┌"} size={borderRadiusValue[23]} number={23} setSize={setBordersRadiusValue} min={0} max={49} block={blockBorderRadius[23]} setBlock={setBlocBorderRadius} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Подгонка описания'} targetThis={targetOption[8]} setTarget={setTarget} number={8}>
                        <div>
                            <OptionSize text={"Минимумальный размер"} size={minMax[0]} number={0} setSize={setMinMaxs} min={0} max={blockMinMax ? 49 : minMax[1]} block={false} setBlock={setBlocMinMax} />
                            <OptionSize textAs={"Как минимум"} text={"Максимум"} size={minMax[1]} number={1} setSize={setMinMaxs} min={minMax[0]} max={49} block={blockMinMax} setBlock={setBlocMinMax} />
                            <div className={style.ButtonMinMax} onClick={() => {
                                setStartPerepolnen(startPerepolnen + 1);
                            }}>
                                <div>Подогнать текст под параметры</div>
                            </div>
                            <div className={style.Perepolnen}>
                                {perepolnenText}
                            </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Тип рубашки'} targetThis={targetOption[9]} setTarget={setTarget} number={9}>
                        <div>
                            
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя 10"} d={true} targetThis={targetBackgroundNumber == -10} setTarget={setTargetBackgroundNumber} number={-10} img={pyt[9] != undefined ? URL.createObjectURL(pyt[9]) : undefined}><div>{setPyti(-10)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя 9"} d={true} targetThis={targetBackgroundNumber == -9} setTarget={setTargetBackgroundNumber} number={-9} img={pyt[8]!=undefined ? URL.createObjectURL(pyt[8]) : undefined}><div>{setPyti(-9)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя 8"} d={true} targetThis={targetBackgroundNumber == -8} setTarget={setTargetBackgroundNumber} number={-8} img={pyt[7]!=undefined ? URL.createObjectURL(pyt[7]) : undefined}><div>{setPyti(-8)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя 7"} d={true} targetThis={targetBackgroundNumber == -7} setTarget={setTargetBackgroundNumber} number={-7} img={pyt[6]!=undefined ? URL.createObjectURL(pyt[6]) : undefined}><div>{setPyti(-7)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя 6"} d={true} targetThis={targetBackgroundNumber == -6} setTarget={setTargetBackgroundNumber} number={-6} img={pyt[5]!=undefined ? URL.createObjectURL(pyt[5]) : undefined}><div>{setPyti(-6)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя 5"} d={true} targetThis={targetBackgroundNumber == -5} setTarget={setTargetBackgroundNumber} number={-5} img={pyt[4]!=undefined ? URL.createObjectURL(pyt[4]) : undefined}><div>{setPyti(-5)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя 4"} d={true} targetThis={targetBackgroundNumber == -4} setTarget={setTargetBackgroundNumber} number={-4} img={pyt[3]!=undefined ? URL.createObjectURL(pyt[3]) : undefined}><div>{setPyti(-4)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя 3"} d={true} targetThis={targetBackgroundNumber == -3} setTarget={setTargetBackgroundNumber} number={-3} img={pyt[2]!=undefined ? URL.createObjectURL(pyt[2]) : undefined}><div>{setPyti(-3)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя 2"} d={true} targetThis={targetBackgroundNumber == -2} setTarget={setTargetBackgroundNumber} number={-2} img={pyt[1]!=undefined ? URL.createObjectURL(pyt[1]) : undefined}><div>{setPyti(-2)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя 1"} d={true} targetThis={targetBackgroundNumber == -1} setTarget={setTargetBackgroundNumber} number={-1} img={pyt[0]!=undefined ? URL.createObjectURL(pyt[0]) : undefined}><div>{setPyti(-1)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Друид"} targetThis={targetBackgroundNumber == 1} setTarget={setTargetBackgroundNumber} number={1} ><Druid className={style.Uzok}/></OptionCardImg>
                                <OptionCardImg name={"Бард"} targetThis={targetBackgroundNumber == 2} setTarget={setTargetBackgroundNumber} number={2} ><Bard className={style.Uzok}/></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Военка"} targetThis={targetBackgroundNumber == 3} setTarget={setTargetBackgroundNumber} number={3} ><Voenka className={style.Uzok}/></OptionCardImg>
                                <OptionCardImg name={"Волшебник"} targetThis={targetBackgroundNumber == 4} setTarget={setTargetBackgroundNumber} number={4} ><Volshebnic className={style.Uzok}/></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Жрец"} targetThis={targetBackgroundNumber == 5} setTarget={setTargetBackgroundNumber} number={5} ><Jrec className={style.Uzok}/></OptionCardImg>
                                <OptionCardImg name={"Колдун"} targetThis={targetBackgroundNumber == 6} setTarget={setTargetBackgroundNumber} number={6} ><Koldun className={style.Uzok}/></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                            </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Настроки рубашки'} targetThis={targetOption[10]} setTarget={setTarget} number={10}>
                        <div>
                            <OptionColor text={"Фон листа"} textAs={"Как рубаха 1"} color={colors[27]} number={27} setColor={setColor} block={blockColor[27]} setBlock={setBlocColor} name={colorsNames[27]} />
                            <OptionColor text={"Рубаха 1"} textAs={"Как края"} color={colors[28]} number={28} setColor={setColor} block={blockColor[28]} setBlock={setBlocColor} name={colorsNames[28]} />
                            <OptionColor text={"Рубаха 2"} textAs={"Как фон заголовка"} color={colors[29]} number={29} setColor={setColor} block={blockColor[29]} setBlock={setBlocColor} name={colorsNames[29]} />
                            <OptionColor text={"Рубаха 3"} color={colors[30]} number={30} setColor={setColor} block={blockColor[30]} setBlock={setBlocColor} name={colorsNames[30]} />
                            <OptionColor text={"Рубаха 4"} color={colors[31]} number={31} setColor={setColor} block={blockColor[31]} setBlock={setBlocColor} name={colorsNames[31]} />
                            <OptionColor text={"Рубаха 5"} color={colors[32]} number={32} setColor={setColor} block={blockColor[32]} setBlock={setBlocColor} name={colorsNames[32]} />
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => {setMyNumbers([!myNumbers[0],myNumbers[1],myNumbers[2],myNumbers[3]])}}> {"___"} {myNumbers[0] && <div/>}</div> <p>{"Цифра 1"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => {setMyNumbers([myNumbers[0],!myNumbers[1],myNumbers[2],myNumbers[3]])}}> {"___"} {myNumbers[1] && <div/>}</div> <p>{"Цифра 2"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => {setMyNumbers([myNumbers[0],myNumbers[1],!myNumbers[2],myNumbers[3]])}}> {"___"} {myNumbers[2] && <div/>}</div> <p>{"Цифра 3"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setMyNumbers([myNumbers[0], myNumbers[1], myNumbers[2], !myNumbers[3]]) }}> {"___"} {myNumbers[3] && <div />}</div> <p>{"Цифра 4"}</p> </div>
                            <OptionSize text={"Цифра 1 горизонталь"} size={sizeText[13]} number={13} setSize={setSizeText} min={0} max={49} block={blockSizeText[13]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 1 вертикаль"} size={sizeText[14]} number={14} setSize={setSizeText} min={0} max={49} block={blockSizeText[14]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 горизонталь"} size={sizeText[15]} number={15} setSize={setSizeText} min={0} max={49} block={blockSizeText[15]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 вертикаль"} size={sizeText[16]} number={16} setSize={setSizeText} min={0} max={49} block={blockSizeText[16]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 горизонталь"} size={sizeText[17]} number={17} setSize={setSizeText} min={0} max={49} block={blockSizeText[17]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 вертикаль"} size={sizeText[18]} number={18} setSize={setSizeText} min={0} max={49} block={blockSizeText[18]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 горизонталь"} size={sizeText[19]} number={19} setSize={setSizeText} min={0} max={49} block={blockSizeText[19]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 вертикаль"} size={sizeText[20]} number={20} setSize={setSizeText} min={0} max={49} block={blockSizeText[20]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 1 размер"} size={sizeText[21]} number={21} setSize={setSizeText} min={0} max={49} block={blockSizeText[21]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 размер"} textAs={"Как цифра 1"} size={sizeText[22]} number={22} setSize={setSizeText} min={0} max={49} block={blockSizeText[22]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 размер"} textAs={"Как цифра 1"} size={sizeText[23]} number={23} setSize={setSizeText} min={0} max={49} block={blockSizeText[23]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 размер"} textAs={"Как цифра 1"} size={sizeText[24]} number={24} setSize={setSizeText} min={0} max={49} block={blockSizeText[24]} setBlock={setBlocSizeText} />
                            <OptionColor text={"Цвет цифры 1"} textAs={"Как края"} color={colors[33]} number={33} setColor={setColor} block={blockColor[33]} setBlock={setBlocColor} name={colorsNames[33]} />
                            <OptionColor text={"Цвет цифры 2"} textAs={"Как цифра 1"} color={colors[34]} number={34} setColor={setColor} block={blockColor[34]} setBlock={setBlocColor} name={colorsNames[34]} />
                            <OptionColor text={"Цвет цифры 3"} textAs={"Как цифра 1"} color={colors[35]} number={35} setColor={setColor} block={blockColor[35]} setBlock={setBlocColor} name={colorsNames[35]} />
                            <OptionColor text={"Цвет цифры 4"} textAs={"Как цифра 1"} color={colors[36]} number={36} setColor={setColor} block={blockColor[36]} setBlock={setBlocColor} name={colorsNames[36]} />                            
                        </div>
                    </OptionCase>
                </div>
            </div>
            <Setting className={style.RedactorSetting} onClick={() => {setShowRedactor(true);}}/>
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