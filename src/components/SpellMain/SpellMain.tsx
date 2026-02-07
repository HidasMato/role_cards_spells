/* eslint-disable no-empty-pattern */
/* eslint-disable no-useless-concat */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
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
import OptionCase from '../OptionCase/OptionCase';
import OptionCardImg from '../OptionCardImg/OptionCardImg';
import OptionColor from '../OptionColor/OptionColor';
import OptionSize from '../OptionSize/OptionSize';
import { ReactComponent as RamkaBase } from '../../BackRamka/Базовая.svg';
import { ReactComponent as RamkaGolovastic } from '../../BackRamka/Головастики.svg';
import { ReactComponent as RamkaNebrejnaja } from '../../BackRamka/Небрежная.svg';
import { ReactComponent as RamkaPazl } from '../../BackRamka/Пазлы.svg';
import { ReactComponent as RamkaUzor1 } from '../../BackRamka/Рамка с узорами.svg';
import { ReactComponent as RamkaUzor2 } from '../../BackRamka/Рамка с узорами2.svg';
import { ReactComponent as RamkaCvety } from '../../BackRamka/Рамка с цветами.svg';
import { ReactComponent as Download } from '../../images/Download.svg';
import { ReactComponent as Druid } from '../../BackSvg/Друид.svg';
import { ReactComponent as Bard } from '../../BackSvg/Бард.svg';
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
import { ReactComponent as IndiTanec } from '../../BackSvg/Индийская танцовщица.svg';
import { ReactComponent as Koteika } from '../../BackSvg/Котейка.svg';
import { ReactComponent as MetlaKotelShlapa } from '../../BackSvg/Метла Котелок Шляпа.svg';
import { ReactComponent as TanecDama } from '../../BackSvg/Танцующая дама.svg';
import { ReactComponent as Utoplennica } from '../../BackSvg/Утопленница.svg';
import { ReactComponent as MyjOlen } from '../../BackSvg/Мужик олень.svg';
import { ReactComponent as Rosa } from '../../BackSvg/Роза.svg';
import { ReactComponent as Tykva } from '../../BackSvg/Тыковка.svg';
import BaseTip from '../BaseTip/BaseTip';
import BaseTipCase from '../BaseTipCase/BaseTipCase';
import CardSpell from '../CardSpell/CardSpell';
import OptionAllain from '../OptionAllain/OptionAllain';
import OptionFont from '../OptionFont/OptionFont';
import b5e14 from '../../spellBase/5e14';
import b5e24_ttg from '../../spellBase/5e24_ttg';
import b5e24_dndsu from '../../spellBase/5e24_dndsu';
import spellBaseType from '../../spellBase/spellBaseType';
type AlertProps = {
};
const SpellMain = ({ }: AlertProps): JSX.Element => {
    const [cards, setCards] = useState<string[][]>([]);
    const [newCard, setNewCard] = useState<string[]>([]);
    const [CSV, setCSV] = useState("");
    const newConst = "\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";";
    const [newCSV, setNewCSV] = useState("\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";");
    const [makeCSV, setMakeCSV] = useState(0);
    const [showOptions, setShowOptions] = useState(true);
    const [showRedactor, setShowRedactor] = useState(true);
    const [pyt, setPyt] = useState<File[] | undefined[]>([]);
    const [pytRamka, setPytRamka] = useState<File[] | undefined[]>([]);
    const [openThisBaseCase, setOpenThisBaseCase] = useState([false, false, false, false, false, false, false, false]);
    const [targetOption, setTargetOptions] = useState([false, false, false, false, false, false, false, false, false, false, false, false]);
    const [colors, setColors] = useState(["#000000", "#ffffff", "#000000", "#000000", "#ffffff", "#000000", "#ffffff", "#000000", "#ffffff", "#000000", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#ffffff", "#000000", "#ffffff", "#000000", "#ffffff", "#ffffff", "#000000", "#ffffff", "#000000", "#ffffff", "#000000", "#000000", "#000000", "#000000", "#000000", "#000000", "#5266ff", "#ff4747", "#6aff57", "#000000"]);
    const [listMyFonts, setListMyFonts] = useState(["По умолчанию", "BookerlyBold", "BookerlyDisplayBoldItalic", "BookerlyDisplayBold", "BookerlyDisplayItalic", "BookerlyDisplay", "BookerlyItalic", "BookerlyLCDItalic", "BookerlyLCDLightItalic", "BookerlyLightItalic", "BookerlyLight", "Bookerly", "EtnaFreeFont", "GogonoCocoaMochiCyrillic", "GULAGPavljenko", "HellasDustCyrillic", "MorningBreezeBold", "MorningBreezeItalic", "MorningBreezeLight", "MorningBreeze", "OldSoviet", "SquareMeal", "ZarubkaTypeRegular", "ZaychikRegular"]);
    const [myFonts, setMyFonts] = useState([0]);
    const [myDeg, setMyDeg] = useState([0, 0, 0, 0, 0, 100]);
    const myDegNames = ['--Degree', '--Degree1', '--Degree2', '--Degree3', '--Degree4', '--Mashtab'];
    const myFontsNames = ["--ZagFont", "--Pol1Font", "--Pol2Font", "--Pol3Font", "--Opt1TextFont", "--Opt2TextFont", "--Opt3TextFont", "--Opt4TextFont", "--Opt1ZagolovokFont", "--Opt2ZagolovokFont", "--Opt3ZagolovokFont", "--Opt4ZagolovokFont", "--DownFont", "--TextFont", "--TextDopFont", "--Num1Font", "--Num2Font", "--Num3Font", "--Num4Font"];
    const sizePoleNames = ["--CardZagolovokTextSize", "--CardPer1H", "--CardPer2H", "--CardPer3H", "--CardOptionHeigth", "--CardOptionBorder", "--CardDownTextSize", "--ListH", "--ListW"];
    const sizeTextNames = ["--CardZagolovokTextFont", "--CardPer1TextFont", "--CardPer2TextFont", "--CardPer3TextFont", "--CardOptionZagolovokTextFont1", "--CardOptionZagolovokTextFont2", "--CardOptionZagolovokTextFont3", "--CardOptionZagolovokTextFont4", "--CardOptionTextTextFont1", "--CardOptionTextTextFont2", "--CardOptionTextTextFont3", "--CardOptionTextTextFont4", "--CardDownTextFont", "--Number1H", "--Number1V", "--Number2H", "--Number2V", "--Number3H", "--Number3V", "--Number4H", "--Number4V", "--Number1Kegl", "--Number2Kegl", "--Number3Kegl", "--Number4Kegl", "--LineHeight"];
    const colorsNames = ["--CardColorBackcground", "--CardZagolovokBackgroundColor", "--CardZagolovokTextColor", "--CardPer1BackgroundColor", "--CardPer1TextColor", "--CardPer2BackgroundColor", "--CardPer2TextColor", "--CardPer3BackgroundColor", "--CardPer3TextColor", "--CardOptionPalki", "--CardOption1Background", "--CardOption2Background", "--CardOption3Background", "--CardOption4Background", "--CardOption1ZColor", "--CardOption2ZColor", "--CardOption3ZColor", "--CardOption4ZColor", "--CardOption1TColor", "--CardOption2TColor", "--CardOption3TColor", "--CardOption4TColor", "--CardMainBackgroundColor", "--CardMainTextColor", "--CardDopBackgroundColor", "--CardDopTextColor", "--CardDownTextColor", "--ListColor", "--Rubaha1", "--Rubaha2", "--Rubaha3", "--Rubaha4", "--Rubaha5", "--Number1", "--Number2", "--Number3", "--Number4", "--Ramka1", "--Ramka2", "--Ramka3", "--Ramka4", "--Ramka5"];
    const alignNames = ["--CardZagolovokTextAlign", "--CardPer1TextAlign", "--CardPer2TextAlign", "--CardPer3TextAlign", "--CardOption1ZagolovokTextAlign", "--CardOption2ZagolovokTextAlign", "--CardOption3ZagolovokTextAlign", "--CardOption4ZagolovokTextAlign", "--CardOption1TextTextAlign", "--CardOption2TextTextAlign", "--CardOption3TextTextAlign", "--CardOption4TextTextAlign", "--CardMainTextTextAlign", "--CardDopTextTextAlign", "--CardDownTextTextAlign"];
    const paddingNames = ["--CardZagolovokTextPadding", "--CardPer1TextPadding", "--CardPer2TextPadding", "--CardPer3TextPadding", "--CardOption1ZagolovokTextPaddingR", "--CardOption2ZagolovokTextPaddingR", "--CardOption3ZagolovokTextPaddingR", "--CardOption4ZagolovokTextPaddingR", "--CardOption1TextTextPaddingR", "--CardOption2TextTextPaddingR", "--CardOption3TextTextPaddingR", "--CardOption4TextTextPaddingR", "--CardMainTextTextPaddingT", "--CardDopTextTextPaddingT", "--CardDownTextTextPadding", "--ListPaddingT", "--ListPaddingR", "--ListPaddingB", "--ListPaddingL", "--CardPaddingT", "--CardMainTextTextPaddingR", "--CardMainTextTextPaddingB", "--CardMainTextTextPaddingL", "--CardDopTextTextPaddingR", "--CardDopTextTextPaddingB", "--CardDopTextTextPaddingL", "--CardOption1ZagolovokTextPaddingL", "--CardOption2ZagolovokTextPaddingL", "--CardOption3ZagolovokTextPaddingL", "--CardOption4ZagolovokTextPaddingL", "--CardOption1TextTextPaddingL", "--CardOption2TextTextPaddingL", "--CardOption3TextTextPaddingL", "--CardOption4TextTextPaddingL", "--CardPaddingR", "--CardPaddingB", "--CardPaddingL"];
    const bordwrRadiusNames = ["--CardZagolovok┌", "--CardZagolovok┐", "--CardZagolovok┘", "--CardZagolovok└", "--CardOption1┌", "--CardOption1┐", "--CardOption1┘", "--CardOption1└", "--CardOption2┌", "--CardOption2┐", "--CardOption2┘", "--CardOption2└", "--CardOption3┌", "--CardOption3┐", "--CardOption3┘", "--CardOption3└", "--CardOption4┌", "--CardOption4┐", "--CardOption4┘", "--CardOption4└", "--CardAllText┌", "--CardAllText┐", "--CardAllText┘", "--CardAllText└"];
    const [blockColor, setBlockColor] = useState([false, false, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, false, true, true, false, false, false, true, true, true, true, true]);
    const [blockSizePole, setBlockSizePole] = useState([false, false, true, true, false, false, false, false, false]);
    const [blockSizeText, setBlockSizeText] = useState([false, false, true, true, false, true, true, true, true, true, true, true, true, false, false, false, false, false, false, false, false, false, true, true, true, false]);
    const [blockPaddingText, setBlockPaddingText] = useState([false, false, true, true, false, true, true, true, false, true, true, true, false, true, true, false, false, false, true, false, false, true, true, true, true, true, false, true, true, true, false, true, true, true, true, true, true]);
    const [blockAlignValue, setBlockAlignValue] = useState([false, false, true, true, false, true, true, true, true, true, true, true, false, true, false, false, false, false, false, false, false, false, false, false, false]);
    const [blockBorderRadius, setBlockBorderRadius] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]);
    const [sizePole, setSizesPole] = useState([18, 15, 15, 15, 80, 2, 15, 297, 210]);
    const [minMax, setMinMax] = useState([9, 9]);
    const [blockMinMax, setBlockMinMax] = useState(false);
    const [sizeText, setSizesText] = useState([14, 11, 11, 11, 10, 10, 10, 10, 10, 10, 10, 10, 14, 20, 5, 200, 5, 200, 264, 20, 264, 70, 70, 70, 70, 110]);
    const [paddingText, setPaddingText] = useState([2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 40, 20, 50, 20, 9, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 9, 9, 9]);
    const [alignValue, setAlignValue] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1]);
    const [borderRadiusValue, setBorderRadiusValue] = useState([11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11]);
    const [kolvo, setKolvo] = useState([3, 3]);
    const [targetTypeCardNumber, setTargetTypeCardNumber] = useState(0);
    const perepolnen: boolean[] = [];
    const [perepolnenText, setPerepolnenText] = useState('');
    const [startPerepolnen, setStartPerepolnen] = useState(0);
    const [isBack, setIsBack] = useState(false);
    const [showMyFonts, setShowMyFonts] = useState(false);
    const [lineCut, setLineCut] = useState(true);
    const [lineCutBack, setLineCutBack] = useState(true);
    const [myNumbers, setMyNumbers] = useState([true, false, true, false]);
    const [targetFont1, setTargetFont1] = useState(14);
    const [targetFont2, setTargetFont2] = useState(23);
    const [isCSVRedactor, setIsCSVRedactor] = useState(false);
    const [rubahaCaseNumber, setRubahaCaseNumber] = useState(2);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(5);
    const [ramkaCaseNumber, setRamkaCaseNumber] = useState(2);
    const [targetRamkaNumber, setTargetRamkaNumber] = useState(1);
    const [needUpdate, setNeedUpdate] = useState(false);
    const [base5e14] = useState(b5e14);
    const [base5e24_dndsu] = useState(b5e24_dndsu);
    const [base5e24_ttg] = useState(b5e24_ttg);
    const setTarget = (a: number, b: boolean) => {
        const M = [];
        for (let i = 0; i < targetOption.length; i++) M[i] = false;
        M[a] = b;
        setTargetOptions(M);
    };
    useEffect(() => {
        let Car: string[] = [];
        getCardFromCSVLine(newCSV, Car, 0, newCSV.length - 1, '');
        setNewCard(Car);
    }, [newCSV]);
    useEffect(() => {
        for (let i = 0; i < colorsNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(colorsNames[i], colors[i]);
    }, [colors]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty('--MyCardFaceFont', "'" + listMyFonts[targetFont1] + "'" );
    }, [targetFont1]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty('--MyCardBackFont', "'"  + listMyFonts[targetFont2] + "'" );
    }, [targetFont2]);
    useEffect(() => {
        for (let i = 0; i < myFontsNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(myFontsNames[i],
            myFonts[i] ? `"${listMyFonts[myFonts[i]]}"` : "inherit"
        );
    }, [myFonts]);
    useEffect(() => {
        const A = document.getElementById("ThisIsColorsConst");
        if (A) for (let i = 0; i < sizePoleNames.length; i++) A.style.setProperty(sizePoleNames[i], String(sizePole[i]) + 'px');
        if (A) A.style.setProperty(sizePoleNames[7], String(sizePole[7] - 0.5) + 'mm');
        if (A) A.style.setProperty(sizePoleNames[8], String(sizePole[8] - 0.5) + 'mm');
    }, [sizePole]);
    useEffect(() => {
        const A = document.getElementById("ThisIsColorsConst");
        if (A) for (let i = 0; i < myDegNames.length; i++) A.style.setProperty(myDegNames[i], String(myDeg[i]) + 'deg');
        if (A) A.style.setProperty(myDegNames[5], String(myDeg[5]));
    }, [myDeg]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--h", String(kolvo[0]));
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--w", String(kolvo[1]));
    }, [kolvo]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--LineCut", lineCut ? '1px' : '0px');
    }, [lineCut]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--LineCutBack", lineCutBack ? '1px' : '0px');
    }, [lineCutBack]);
    useEffect(() => {
        for (let i = 0; i < sizeTextNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[i], String(sizeText[i]) + 'px');
        document.getElementById("ThisIsColorsConst")?.style.setProperty(sizeTextNames[25], String(sizeText[25] / 100));
    }, [sizeText]);
    useEffect(() => {
        for (let i = 0; i < alignNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(alignNames[i], String(getAlignText(alignValue[i])));
    }, [alignValue]);
    useEffect(() => {
        for (let i = 0; i < paddingNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(paddingNames[i], String(paddingText[i]) + 'px');
    }, [paddingText]);
    useEffect(() => {
        for (let i = 0; i < bordwrRadiusNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(bordwrRadiusNames[i], String(borderRadiusValue[i]) + 'px');
    }, [bordwrRadiusNames]);
    useEffect(() => {
        for (let i = 0; i < bordwrRadiusNames.length; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(bordwrRadiusNames[i], String(borderRadiusValue[i]) + 'px');
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
        if (V[33]) M[33] = M[28];
        if (V[34]) M[34] = M[33];
        if (V[35]) M[35] = M[33];
        if (V[36]) M[36] = M[33];
        if (V[37]) M[37] = M[28];
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
    const setDeg = (a: number, b: number, vlog?: boolean) => {
        const M = [...myDeg];
        M[a] = b;
        setMyDeg(M);
    };
    const setFontsValues = (a: number, b: number, vlog?: boolean) => {
        const M = [...myFonts];
        M[a] = b;
        setMyFonts(M);
    };
    const setKolv = (a: number, b: number) => {
        const K = [...kolvo];
        K[a] = b;
        setKolvo(K);
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
        if (V[17]) M[17] = M[15];
        if (V[18]) M[18] = M[16];
        if (V[21]) M[21] = M[12];
        if (V[22]) M[22] = M[20];
        if (V[23]) M[23] = M[20];
        if (V[24]) M[24] = M[21];
        if (V[25]) M[25] = M[22];
        if (V[27]) M[27] = M[26];
        if (V[28]) M[28] = M[26];
        if (V[29]) M[29] = M[26];
        if (V[30]) M[30] = M[26];
        if (V[31]) M[31] = M[30];
        if (V[32]) M[32] = M[30];
        if (V[33]) M[33] = M[30];
        if (V[34]) M[34] = M[19];
        if (V[35]) M[35] = M[19];
        if (V[36]) M[36] = M[19];
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
        if (V[8]) M[8] = M[4];
        if (V[9]) M[9] = M[5];
        if (V[10]) M[10] = M[6];
        if (V[11]) M[11] = M[7];
        if (V[12]) M[12] = M[4];
        if (V[13]) M[13] = M[5];
        if (V[14]) M[14] = M[6];
        if (V[15]) M[15] = M[7];
        if (V[16]) M[16] = M[4];
        if (V[17]) M[17] = M[5];
        if (V[18]) M[18] = M[6];
        if (V[19]) M[19] = M[7];
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
    const setOpenThisBas = (base: spellBaseType, numbers: number[][], name: string) => {
        let A = '';
        console.log(numbers);
        for(let level of numbers) {
            if (level.length > 1) {
                const num = level[0] as keyof spellBaseType;
                if (level[1] == -1) {
                    for (let spell of base[num]) {
                        A = A + spell + '\n';
                    }
                } else {
                    for (let spellN of level.slice(1)) {
                        A = A + base[num][spellN] + '\n';
                    }
                }
            }
        }
        setCSV(A.slice(0, -1).replaceAll('#####', name));
        setMakeCSV(makeCSV + 1);
    };
    const plusPerepolnen = (num: number, bool: boolean) => {
        if (num == -1) perepolnen[0] = bool;
        else perepolnen[num + 1] = bool;
    }
    const setPoles = (text: string[]) => {
        let R = '';
        for (let i = 0; i < 18; i++) R = R + '\"' + text[i]?.replaceAll('\"', '\"\"')?.replaceAll('\n', 'Џ') + '\"' + ';';
        setNewCSV(R);
        setNewCard(text);
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
        setNeedUpdate(true);
    }, [CSV]);
    useEffect(() => {
        let flag = true;
        if (perepolnen.length != 0) {
            let perText = "";
            for (let i = 0; i < perepolnen.length; i++)
                if (perepolnen[i]) {
                    if (flag) {
                        flag = false;
                        perText = "Переполнение в: ";
                    }
                    perText = perText + '\n' + (i == 0 ? 'Тестовой карточке' : cards[i - 1][0]);
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
        anchor.remove();
        URL.revokeObjectURL(url);
    };
    const getCardFromCSVLine = (CSV: string, C: string[], pointStart: number, pointEnd: number, newCSV: string) => {
        for (let i = 0; pointStart < pointEnd || i < 18; i++) {
            C[i] = '';
            if (pointEnd <= pointStart) {
                C[i] = '';
            } else if (CSV[pointStart] == '\"') {
                pointStart++;
                let nextK = CSV.indexOf('\"', pointStart);
                while (CSV[nextK + 1] == '\"' && nextK <= pointEnd && nextK != -1) {
                    C[i] = C[i] + CSV.slice(pointStart, nextK + 1);
                    pointStart = nextK + 2;
                    nextK = CSV.indexOf('\"', nextK + 2);
                }
                if (nextK > pointEnd || nextK == -1) {
                    C[i] = C[i] + CSV.slice(pointStart, pointEnd);
                    pointStart = pointEnd + 1;
                } else {
                    C[i] = C[i] + CSV.slice(pointStart, nextK);
                    pointStart = nextK + 1;
                    const FirstTZ = CSV.indexOf(';', pointStart);
                    if (FirstTZ <= pointEnd && FirstTZ != -1) {
                        pointStart = FirstTZ + 1;
                    } else {
                        pointStart = pointEnd;
                    }
                }
            } else {
                const FirstTZ = CSV.indexOf(';', pointStart);
                if (FirstTZ <= pointEnd && FirstTZ != -1) {
                    C[i] = CSV.slice(pointStart, FirstTZ);
                    pointStart = FirstTZ + 1;
                } else {
                    C[i] = CSV.slice(pointStart, pointEnd + 1);
                    pointStart = pointEnd;
                }
            }
            C[i] = C[i].replaceAll('\r', '');
            newCSV = newCSV + '\"' + C[i].replaceAll('\"', '\"\"') + '\"' + ';';
            C[i] = C[i].replaceAll('Џ', '\n');
        }
        return newCSV;
    };
    const setNU = () => {
        setTimeout(() => {
            setNeedUpdate(false);
        }, 300);
    };
    const makeCardsFromCSV = () => {
        let nowPoint = 0, nextEnter = 0;
        let cardNumber = 0, newCSV = '';
        const C: string[][] = [];
        while ((nextEnter = CSV.indexOf('\n', nowPoint)) != -1) {
            C[cardNumber] = [];
            newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, nextEnter - 1, newCSV) + '\n';
            nowPoint = nextEnter + 1;
            cardNumber++;
        };
        C[cardNumber] = [];
        newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, CSV.length - 1, newCSV);
        if (document.getElementById('CTRLV') as HTMLInputElement != undefined) (document.getElementById('CTRLV') as HTMLInputElement).value = String(cardNumber);
        setCards(C);
        setCSV(newCSV);
        setNU();
    }
    const getBackCardImg = (PoleStr: string) => {
        let A = Number(PoleStr);
        if (A == undefined || A == 0 || A > 51 || Number.isNaN(A)) {
            A = targetBackgroundNumber;
        }
        if (A < 0 && A > -13) {
            const r = pyt[0 - A - 1];
            return (
                <img src={r ? URL.createObjectURL(r) : undefined} alt="" />
            );
        }
        switch (A) {
            case 1:
                return (<Bard />);
            case 2:
                return (<Varvar />);
            case 3:
                return (<Voenka />);
            case 4:
                return (<Volshebnic />);
            case 5:
                return (<Druid />);
            case 6:
                return (<Jrec />);
            case 7:
                return (<Koldun />);
            case 8:
                return (<Ksanatar />);
            case 9:
                return (<Monk />);
            case 10:
                return (<Mistik />);
            case 11:
                return (<Paladin />);
            case 12:
                return (<Sledopyt />);
            case 13:
                return (<Charodei />);
            case 14:
                return (<Elemental />);
            case 15:
                return (<Voplochenie />);
            case 16:
                return (<Vyzov />);
            case 17:
                return (<Illusia />);
            case 18:
                return (<Necromantia />);
            case 19:
                return (<Ogragdenie />);
            case 20:
                return (<Ocharovanie />);
            case 21:
                return (<Preobrazovanie />);
            case 22:
                return (<Proricanie />);
            case 23:
                return (<AfricaLedi />);
            case 24:
                return (<AfricaLediTanec />);
            case 25:
                return (<AfricaMugikTanec />);
            case 26:
                return (<Valkiria />);
            case 27:
                return (<Vedmochka />);
            case 28:
                return (<Volk />);
            case 29:
                return (<GavaiLedi />);
            case 30:
                return (<Drakon />);
            case 31:
                return (<Juk />);
            case 32:
                return (<Juk2 />);
            case 33:
                return (<JukBabochka />);
            case 34:
                return (<JukOsa />);
            case 35:
                return (<IndiTanec />);
            case 36:
                return (<Koteika />);
            case 37:
                return (<MetlaKotelShlapa />);
            case 38:
                return (<MyjBaraban />);
            case 39:
                return (<NapitokPennyi />);
            case 40:
                return (<NapitokTrop />);
            case 41:
                return (<NapitokShip />);
            case 42:
                return (<OgonMech />);
            case 43:
                return (<SiglaMelekTaus />);
            case 44:
                return (<Sovushka />);
            case 45:
                return (<Shesternya1 />);
            case 46:
                return (<Shesternya2 />);
            case 47:
                return (<TanecDama />);
            case 48:
                return (<Utoplennica />);
            case 49:
                return (<MyjOlen />);
            case 50:
                return (<Rosa />);
            case 51:
                return (<Tykva />);
            default:
                return (<div></div>);
        }
    }
    const getRamkaImg = (PoleStr: string) => {
        let A = Number(PoleStr);
        if (A == undefined || A == 0 || A > 8 || Number.isNaN(A)) {
            A = targetRamkaNumber;
        }
        if (A < 0 && A > -13) {
            const r = pytRamka[0 - A - 1];
            return (
                <img src={r ? URL.createObjectURL(r) : undefined} alt="" />
            );
        }
        switch (A) {
            case 1:
                return (<RamkaBase />);
            case 2:
                return (<RamkaGolovastic />);
            case 3:
                return (<RamkaNebrejnaja />);
            case 4:
                return (<RamkaUzor1 />);
            case 5:
                return (<RamkaUzor2 />);
            case 6:
                return (<RamkaPazl />);
            case 7:
                return (<RamkaCvety />);
            default:
                return (<div></div>);
        }
    }
    const getCards = () => {
        let sumLists = [];
        for (let i = 0; i < cards.length; i += kolvo[1] * kolvo[0]) sumLists[i / (kolvo[1] * kolvo[0])] = i;
        return (
            <>
                {
                    sumLists.map((a, index) => {
                        return (
                            <div className={style.List} key={"List" + index}>
                                {
                                    Array.from(new Array(kolvo[0]).keys()).map((a, index2) => {
                                        return (
                                            <div className={style.LineCards} key={"List" + index + " Line" + index2}>
                                                {
                                                    Array.from(new Array(kolvo[1]).keys()).map((a, index3) => {
                                                        if (isBack) {
                                                            if (cards.length >= kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3) {
                                                                return (
                                                                    <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3} >
                                                                        <CardSpell NumbersExist={myNumbers} isBack={true} keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3} cardType={targetTypeCardNumber} Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1]}>
                                                                            {getBackCardImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1][16])}
                                                                            {getRamkaImg(cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + kolvo[1] - index3 - 1][17])}
                                                                        </CardSpell>
                                                                    </div>
                                                                );
                                                            }
                                                            return (
                                                                <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + kolvo[1] - index3} >
                                                                </div>
                                                            );
                                                        } else {
                                                            if (cards.length > kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3) {
                                                                return (
                                                                    <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3} >
                                                                        <CardSpell startPerepolnen={startPerepolnen} keyt={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3} plusPerepolnen={plusPerepolnen} minMax={minMax} cardType={targetTypeCardNumber} Pole={cards[kolvo[1] * kolvo[0] * index + kolvo[1] * index2 + index3]} />
                                                                    </div>
                                                                );
                                                            }
                                                            return (
                                                                <div className={style.Card} key={index * kolvo[1] * kolvo[0] + index2 * kolvo[1] + index3} >
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
                <label htmlFor={`inputfile + ${0 - num - 1}`}><Download /></label>
                <input type="file" name="" id={`inputfile + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pyt;
                        T[0 - num - 1] = R[0];
                        setPyt(T);
                    }
                    let r = targetBackgroundNumber;
                    setTargetBackgroundNumber(-999999);
                    setTimeout((a) => {
                        setTargetBackgroundNumber(a);
                    }, 300, r);
                    //<img src={URL.createObjectURL(pyt)}
                }} />
            </div>
        );
    }
    const getRubahaCase = () => {
        const Elements = [
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -12} setTarget={setTargetBackgroundNumber} key={-12} img={pyt[11] ? URL.createObjectURL(pyt[11]) : undefined}><div>{setPyti(-12)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -11} setTarget={setTargetBackgroundNumber} key={-11} img={pyt[10] ? URL.createObjectURL(pyt[10]) : undefined}><div>{setPyti(-11)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -10} setTarget={setTargetBackgroundNumber} key={-10} img={pyt[9] ? URL.createObjectURL(pyt[9]) : undefined}><div>{setPyti(-10)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -9} setTarget={setTargetBackgroundNumber} key={-9} img={pyt[8] ? URL.createObjectURL(pyt[8]) : undefined}><div>{setPyti(-9)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -8} setTarget={setTargetBackgroundNumber} key={-8} img={pyt[7] ? URL.createObjectURL(pyt[7]) : undefined}><div>{setPyti(-8)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -7} setTarget={setTargetBackgroundNumber} key={-7} img={pyt[6] ? URL.createObjectURL(pyt[6]) : undefined}><div>{setPyti(-7)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -6} setTarget={setTargetBackgroundNumber} key={-6} img={pyt[5] ? URL.createObjectURL(pyt[5]) : undefined}><div>{setPyti(-6)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -5} setTarget={setTargetBackgroundNumber} key={-5} img={pyt[4] ? URL.createObjectURL(pyt[4]) : undefined}><div>{setPyti(-5)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -4} setTarget={setTargetBackgroundNumber} key={-4} img={pyt[3] ? URL.createObjectURL(pyt[3]) : undefined}><div>{setPyti(-4)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -3} setTarget={setTargetBackgroundNumber} key={-3} img={pyt[2] ? URL.createObjectURL(pyt[2]) : undefined}><div>{setPyti(-3)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -2} setTarget={setTargetBackgroundNumber} key={-2} img={pyt[1] ? URL.createObjectURL(pyt[1]) : undefined}><div>{setPyti(-2)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -1} setTarget={setTargetBackgroundNumber} key={-1} img={pyt[0] ? URL.createObjectURL(pyt[0]) : undefined}><div>{setPyti(-1)}</div></OptionCardImg>,
            <OptionCardImg name={"Бард"} targetThis={targetBackgroundNumber == 1} setTarget={setTargetBackgroundNumber} key={1} >{getBackCardImg('1')}</OptionCardImg>,
            <OptionCardImg name={"Варвар"} targetThis={targetBackgroundNumber == 2} setTarget={setTargetBackgroundNumber} key={2} >{getBackCardImg('2')}</OptionCardImg>,
            <OptionCardImg name={"Военка"} targetThis={targetBackgroundNumber == 3} setTarget={setTargetBackgroundNumber} key={3} >{getBackCardImg('3')}</OptionCardImg>,
            <OptionCardImg name={"Волшебник"} targetThis={targetBackgroundNumber == 4} setTarget={setTargetBackgroundNumber} key={4} >{getBackCardImg('4')}</OptionCardImg>,
            <OptionCardImg name={"Друид"} targetThis={targetBackgroundNumber == 5} setTarget={setTargetBackgroundNumber} key={5} >{getBackCardImg('5')}</OptionCardImg>,
            <OptionCardImg name={"Жрец"} targetThis={targetBackgroundNumber == 6} setTarget={setTargetBackgroundNumber} key={6} >{getBackCardImg('6')}</OptionCardImg>,
            <OptionCardImg name={"Колдун"} targetThis={targetBackgroundNumber == 7} setTarget={setTargetBackgroundNumber} key={7} >{getBackCardImg('7')}</OptionCardImg>,
            <OptionCardImg name={"Ксанатар"} targetThis={targetBackgroundNumber == 8} setTarget={setTargetBackgroundNumber} key={8} >{getBackCardImg('8')}</OptionCardImg>,
            <OptionCardImg name={"Монах"} targetThis={targetBackgroundNumber == 9} setTarget={setTargetBackgroundNumber} key={9} >{getBackCardImg('9')}</OptionCardImg>,
            <OptionCardImg name={"Мистик"} targetThis={targetBackgroundNumber == 10} setTarget={setTargetBackgroundNumber} key={10} >{getBackCardImg('10')}</OptionCardImg>,
            <OptionCardImg name={"Паладин"} targetThis={targetBackgroundNumber == 11} setTarget={setTargetBackgroundNumber} key={11} >{getBackCardImg('11')}</OptionCardImg>,
            <OptionCardImg name={"Следопыт"} targetThis={targetBackgroundNumber == 12} setTarget={setTargetBackgroundNumber} key={12} >{getBackCardImg('12')}</OptionCardImg>,
            <OptionCardImg name={"Чародей"} targetThis={targetBackgroundNumber == 13} setTarget={setTargetBackgroundNumber} key={13} >{getBackCardImg('13')}</OptionCardImg>,
            <OptionCardImg name={"Элементаль"} targetThis={targetBackgroundNumber == 14} setTarget={setTargetBackgroundNumber} key={14} >{getBackCardImg('14')}</OptionCardImg>,
            <OptionCardImg name={"Воплощение"} targetThis={targetBackgroundNumber == 15} setTarget={setTargetBackgroundNumber} key={15} >{getBackCardImg('15')}</OptionCardImg>,
            <OptionCardImg name={"Вызов"} targetThis={targetBackgroundNumber == 16} setTarget={setTargetBackgroundNumber} key={16} >{getBackCardImg('16')}</OptionCardImg>,
            <OptionCardImg name={"Иллюзия"} targetThis={targetBackgroundNumber == 17} setTarget={setTargetBackgroundNumber} key={17} >{getBackCardImg('17')}</OptionCardImg>,
            <OptionCardImg name={"Некромантия"} targetThis={targetBackgroundNumber == 18} setTarget={setTargetBackgroundNumber} key={18} >{getBackCardImg('18')}</OptionCardImg>,
            <OptionCardImg name={"Ограждение"} targetThis={targetBackgroundNumber == 19} setTarget={setTargetBackgroundNumber} key={19} >{getBackCardImg('19')}</OptionCardImg>,
            <OptionCardImg name={"Очарование"} targetThis={targetBackgroundNumber == 20} setTarget={setTargetBackgroundNumber} key={20} >{getBackCardImg('20')}</OptionCardImg>,
            <OptionCardImg name={"Преобразование"} targetThis={targetBackgroundNumber == 21} setTarget={setTargetBackgroundNumber} key={21} >{getBackCardImg('21')}</OptionCardImg>,
            <OptionCardImg name={"Прорицание"} targetThis={targetBackgroundNumber == 22} setTarget={setTargetBackgroundNumber} key={22} >{getBackCardImg('22')}</OptionCardImg>,
            <OptionCardImg name={"Африканская леди"} targetThis={targetBackgroundNumber == 23} setTarget={setTargetBackgroundNumber} key={23} >{getBackCardImg('23')}</OptionCardImg>,
            <OptionCardImg name={"Африканская леди в танце"} targetThis={targetBackgroundNumber == 24} setTarget={setTargetBackgroundNumber} key={24} >{getBackCardImg('24')}</OptionCardImg>,
            <OptionCardImg name={"Африкански мужик в танце"} targetThis={targetBackgroundNumber == 25} setTarget={setTargetBackgroundNumber} key={25} >{getBackCardImg('25')}</OptionCardImg>,
            <OptionCardImg name={"Валькирия"} targetThis={targetBackgroundNumber == 26} setTarget={setTargetBackgroundNumber} key={26} >{getBackCardImg('26')}</OptionCardImg>,
            <OptionCardImg name={"Ведьмочка"} targetThis={targetBackgroundNumber == 27} setTarget={setTargetBackgroundNumber} key={27} >{getBackCardImg('27')}</OptionCardImg>,
            <OptionCardImg name={"Волк"} targetThis={targetBackgroundNumber == 28} setTarget={setTargetBackgroundNumber} key={28} >{getBackCardImg('28')}</OptionCardImg>,
            <OptionCardImg name={"Гавайская леди"} targetThis={targetBackgroundNumber == 29} setTarget={setTargetBackgroundNumber} key={29} >{getBackCardImg('29')}</OptionCardImg>,
            <OptionCardImg name={"Дракон"} targetThis={targetBackgroundNumber == 30} setTarget={setTargetBackgroundNumber} key={30} >{getBackCardImg('30')}</OptionCardImg>,
            <OptionCardImg name={"Жук"} targetThis={targetBackgroundNumber == 31} setTarget={setTargetBackgroundNumber} key={31} >{getBackCardImg('31')}</OptionCardImg>,
            <OptionCardImg name={"Жук 2"} targetThis={targetBackgroundNumber == 32} setTarget={setTargetBackgroundNumber} key={32} >{getBackCardImg('32')}</OptionCardImg>,
            <OptionCardImg name={"Жук-Бабочка"} targetThis={targetBackgroundNumber == 33} setTarget={setTargetBackgroundNumber} key={33} >{getBackCardImg('33')}</OptionCardImg>,
            <OptionCardImg name={"Жук-Оса"} targetThis={targetBackgroundNumber == 34} setTarget={setTargetBackgroundNumber} key={34} >{getBackCardImg('34')}</OptionCardImg>,
            <OptionCardImg name={"Индийская танцовщица"} targetThis={targetBackgroundNumber == 35} setTarget={setTargetBackgroundNumber} key={35} >{getBackCardImg('35')}</OptionCardImg>,
            <OptionCardImg name={"Котейка"} targetThis={targetBackgroundNumber == 36} setTarget={setTargetBackgroundNumber} key={36} >{getBackCardImg('36')}</OptionCardImg>,
            <OptionCardImg name={"Метла Котел Шляпа"} targetThis={targetBackgroundNumber == 37} setTarget={setTargetBackgroundNumber} key={37} >{getBackCardImg('37')}</OptionCardImg>,
            <OptionCardImg name={"Мужик с барабанами"} targetThis={targetBackgroundNumber == 38} setTarget={setTargetBackgroundNumber} key={38} >{getBackCardImg('38')}</OptionCardImg>,
            <OptionCardImg name={"Напиток пенный"} targetThis={targetBackgroundNumber == 39} setTarget={setTargetBackgroundNumber} key={39} >{getBackCardImg('39')}</OptionCardImg>,
            <OptionCardImg name={"Напиток тропически"} targetThis={targetBackgroundNumber == 40} setTarget={setTargetBackgroundNumber} key={40} >{getBackCardImg('40')}</OptionCardImg>,
            <OptionCardImg name={"Напиток шипящий"} targetThis={targetBackgroundNumber == 41} setTarget={setTargetBackgroundNumber} key={41} >{getBackCardImg('41')}</OptionCardImg>,
            <OptionCardImg name={"Огненный меч"} targetThis={targetBackgroundNumber == 42} setTarget={setTargetBackgroundNumber} key={42} >{getBackCardImg('42')}</OptionCardImg>,
            <OptionCardImg name={"Сигла мелек таус"} targetThis={targetBackgroundNumber == 43} setTarget={setTargetBackgroundNumber} key={43} >{getBackCardImg('43')}</OptionCardImg>,
            <OptionCardImg name={"Совушка"} targetThis={targetBackgroundNumber == 44} setTarget={setTargetBackgroundNumber} key={44} >{getBackCardImg('44')}</OptionCardImg>,
            <OptionCardImg name={"Шестерня 1"} targetThis={targetBackgroundNumber == 45} setTarget={setTargetBackgroundNumber} key={45} >{getBackCardImg('45')}</OptionCardImg>,
            <OptionCardImg name={"Шестерня 2"} targetThis={targetBackgroundNumber == 46} setTarget={setTargetBackgroundNumber} key={46} >{getBackCardImg('46')}</OptionCardImg>,
            <OptionCardImg name={"Танцующая дама"} targetThis={targetBackgroundNumber == 47} setTarget={setTargetBackgroundNumber} key={47} >{getBackCardImg('47')}</OptionCardImg>,
            <OptionCardImg name={"Утопленница"} targetThis={targetBackgroundNumber == 48} setTarget={setTargetBackgroundNumber} key={48} >{getBackCardImg('48')}</OptionCardImg>,
            <OptionCardImg name={"Мужик олень"} targetThis={targetBackgroundNumber == 49} setTarget={setTargetBackgroundNumber} key={49} >{getBackCardImg('49')}</OptionCardImg>,
            <OptionCardImg name={"Роза"} targetThis={targetBackgroundNumber == 50} setTarget={setTargetBackgroundNumber} key={50} >{getBackCardImg('50')}</OptionCardImg>,
            <OptionCardImg name={"Тыковка для Кеиллушки"} targetThis={targetBackgroundNumber == 51} setTarget={setTargetBackgroundNumber} key={51} >{getBackCardImg('51')}</OptionCardImg>,
        ];
        return (
            <div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6]}
                    {Elements[rubahaCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 2]}
                    {Elements[rubahaCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[rubahaCaseNumber * 6 + 4]}
                    {Elements[rubahaCaseNumber * 6 + 5]}
                </div>
            </div>
        );
    };
    const setPytiRamka = (num: number) => {
        return (
            <div className={style.InputFile}>
                <label htmlFor={`inputfileR + ${0 - num - 1}`}><Download /></label>
                <input type="file" name="" id={`inputfileR + ${0 - num - 1}`} onInput={(e) => {
                    const file = (e.target as HTMLInputElement);
                    const R = file?.files;
                    if (R != null) {
                        const T = pytRamka;
                        T[0 - num - 1] = R[0];
                        setPytRamka(T);
                    }
                    let r = targetBackgroundNumber;
                    setTargetRamkaNumber(-999999);
                    setTimeout((a) => {
                        setTargetRamkaNumber(a);
                    }, 300, r);
                }} />
            </div>
        );
    }
    const getRamkaCase = () => {
        const Elements = [
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -12} setTarget={setTargetRamkaNumber} key={-12} img={pytRamka[11] ? URL.createObjectURL(pytRamka[11]) : undefined}><div>{setPytiRamka(-12)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -11} setTarget={setTargetRamkaNumber} key={-11} img={pytRamka[10] ? URL.createObjectURL(pytRamka[10]) : undefined}><div>{setPytiRamka(-11)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -10} setTarget={setTargetRamkaNumber} key={-10} img={pytRamka[9] ? URL.createObjectURL(pytRamka[9]) : undefined}><div>{setPytiRamka(-10)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -9} setTarget={setTargetRamkaNumber} key={-9} img={pytRamka[8] ? URL.createObjectURL(pytRamka[8]) : undefined}><div>{setPytiRamka(-9)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -8} setTarget={setTargetRamkaNumber} key={-8} img={pytRamka[7] ? URL.createObjectURL(pytRamka[7]) : undefined}><div>{setPytiRamka(-8)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -7} setTarget={setTargetRamkaNumber} key={-7} img={pytRamka[6] ? URL.createObjectURL(pytRamka[6]) : undefined}><div>{setPytiRamka(-7)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -6} setTarget={setTargetRamkaNumber} key={-6} img={pytRamka[5] ? URL.createObjectURL(pytRamka[5]) : undefined}><div>{setPytiRamka(-6)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -5} setTarget={setTargetRamkaNumber} key={-5} img={pytRamka[4] ? URL.createObjectURL(pytRamka[4]) : undefined}><div>{setPytiRamka(-5)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -4} setTarget={setTargetRamkaNumber} key={-4} img={pytRamka[3] ? URL.createObjectURL(pytRamka[3]) : undefined}><div>{setPytiRamka(-4)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -3} setTarget={setTargetRamkaNumber} key={-3} img={pytRamka[2] ? URL.createObjectURL(pytRamka[2]) : undefined}><div>{setPytiRamka(-3)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -2} setTarget={setTargetRamkaNumber} key={-2} img={pytRamka[1] ? URL.createObjectURL(pytRamka[1]) : undefined}><div>{setPytiRamka(-2)}</div></OptionCardImg>,
            <OptionCardImg name={"Своя"} d={true} targetThis={targetRamkaNumber == -1} setTarget={setTargetRamkaNumber} key={-1} img={pytRamka[0] ? URL.createObjectURL(pytRamka[0]) : undefined}><div>{setPytiRamka(-1)}</div></OptionCardImg>,
            <OptionCardImg name={"Базовая"} targetThis={targetRamkaNumber == 1} setTarget={setTargetRamkaNumber} key={1} >{getRamkaImg('1')}</OptionCardImg>,
            <OptionCardImg name={"Головастики"} targetThis={targetRamkaNumber == 2} setTarget={setTargetRamkaNumber} key={2} >{getRamkaImg('2')}</OptionCardImg>,
            <OptionCardImg name={"Небрежная"} targetThis={targetRamkaNumber == 3} setTarget={setTargetRamkaNumber} key={3} >{getRamkaImg('3')}</OptionCardImg>,
            <OptionCardImg name={"Узор1"} targetThis={targetRamkaNumber == 4} setTarget={setTargetRamkaNumber} key={4} >{getRamkaImg('4')}</OptionCardImg>,
            <OptionCardImg name={"Узор2"} targetThis={targetRamkaNumber == 5} setTarget={setTargetRamkaNumber} key={5} >{getRamkaImg('5')}</OptionCardImg>,
            <OptionCardImg name={"Пазлы"} targetThis={targetRamkaNumber == 6} setTarget={setTargetRamkaNumber} key={6} >{getRamkaImg('6')}</OptionCardImg>,
            <OptionCardImg name={"Цветы"} targetThis={targetRamkaNumber == 7} setTarget={setTargetRamkaNumber} key={7} >{getRamkaImg('7')}</OptionCardImg>,
        ];
        return (
            <div>
                <div className={style.LineSetting}>
                    {Elements[ramkaCaseNumber * 6]}
                    {Elements[ramkaCaseNumber * 6 + 1]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[ramkaCaseNumber * 6 + 2]}
                    {Elements[ramkaCaseNumber * 6 + 3]}
                </div>
                <div className={style.LineSetting}>
                    {Elements[ramkaCaseNumber * 6 + 4]}
                    {Elements[ramkaCaseNumber * 6 + 5]}
                </div>
            </div>
        );
    };
    return (
        <div className={style.Main} id={"ThisIsColorsConst"}>
            <div className={style.Viu + ' ' + (showOptions ? style.OpenOptionViu : '')}>
                <div className={style.ChangeCardViu + ' ' + style.BigViu}>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? '' : style.OnHover)} onClick={() => { setIsCSVRedactor(false); setNewCSV(newConst); }}>
                        <p>Режим печати</p>
                    </div>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? style.OnHover : '')} onClick={() => { setIsCSVRedactor(true) }}>
                        <p>Режим CSV редактора</p>
                    </div>
                </div>
                {
                    !isCSVRedactor
                        ? <div className={style.ChangeCardViu}>
                            <div className={style.RubahaViu + ' ' + (isBack ? '' : style.OnHover)} onClick={() => { setIsBack(false) }}>
                                <p>Лицо</p>
                            </div>
                            <div className={style.RubahaViu + ' ' + (isBack ? style.OnHover : '')} onClick={() => { setIsBack(true) }}>
                                <p>Рубаха</p>
                            </div>
                        </div>
                        : null
                }
            </div>
            <Setting className={style.OptionsSetting} onClick={() => { setShowOptions(true); }} />
            <div className={style.Options + ' ' + (showOptions ? '' : style.HideWindow)}>
                <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowOptions(false); }}>Скрыть</div> </div>
                <div className={style.OpionsCase}>
                    <div className={style.SettingDownload}>
                        <div className={style.But} onClick={() => {
                            //создаем файл
                            const ToString = (myNewSetting: string, myStringMas: string[] | boolean[] | number[], settingName: string) => {
                                let r = myNewSetting + settingName + ':';
                                for (let i = 0; i < myStringMas.length; i++)
                                    r = r + myStringMas[i] + ',';
                                r = r + '\n';
                                return r;
                            };
                            let myNewSetting = '';
                            myNewSetting = ToString(myNewSetting, colors, 'colors');
                            myNewSetting = ToString(myNewSetting, sizePole, 'sizePole');
                            myNewSetting = ToString(myNewSetting, minMax, 'minMax');
                            myNewSetting = ToString(myNewSetting, sizeText, 'sizeText');
                            myNewSetting = ToString(myNewSetting, paddingText, 'paddingText');
                            myNewSetting = ToString(myNewSetting, alignValue, 'alignValue');
                            myNewSetting = ToString(myNewSetting, borderRadiusValue, 'borderRadiusValue');
                            myNewSetting = ToString(myNewSetting, kolvo, 'kolvo');
                            myNewSetting = ToString(myNewSetting, [targetTypeCardNumber], 'targetTypeCardNumber');
                            myNewSetting = ToString(myNewSetting, [targetFont1], 'targetFont1');
                            myNewSetting = ToString(myNewSetting, [targetFont2], 'targetFont2');
                            myNewSetting = ToString(myNewSetting, [rubahaCaseNumber], 'rubahaCaseNumber');
                            myNewSetting = ToString(myNewSetting, [ramkaCaseNumber], 'ramkaCaseNumber');
                            myNewSetting = ToString(myNewSetting, blockColor, 'blockColor');
                            myNewSetting = ToString(myNewSetting, blockSizePole, 'blockSizePole');
                            myNewSetting = ToString(myNewSetting, blockSizeText, 'blockSizeText');
                            myNewSetting = ToString(myNewSetting, blockPaddingText, 'blockPaddingText');
                            myNewSetting = ToString(myNewSetting, blockAlignValue, 'blockAlignValue');
                            myNewSetting = ToString(myNewSetting, blockBorderRadius, 'blockBorderRadius');
                            myNewSetting = ToString(myNewSetting, [blockMinMax], 'blockMinMax');
                            myNewSetting = ToString(myNewSetting, myNumbers, 'myNumbers');
                            myNewSetting = ToString(myNewSetting, [lineCut], 'lineCut');
                            myNewSetting = ToString(myNewSetting, [lineCutBack], 'lineCutBack');
                            myNewSetting = ToString(myNewSetting, [targetBackgroundNumber], 'targetBackgroundNumber');
                            myNewSetting = ToString(myNewSetting, [targetRamkaNumber], 'targetRamkaNumber');
                            let blob = new Blob(["\ufeff", myNewSetting], { type: "text;charset=windows-1251" });
                            const url = URL.createObjectURL(blob);
                            const anchor = document.createElement('a');
                            anchor.href = url;
                            anchor.download = "MySpellsSettings.txt";
                            document.body.appendChild(anchor);
                            anchor.click();
                            anchor.remove();
                            URL.revokeObjectURL(url);
                        }}>{'Сохранить настройки'}</div>

                        <input className={style.Hide} type="file" id="mySettingInputFile" onChange={() => {
                            const FromFile = (myString: string, settingName: string, Mas: string[] | boolean[] | number[]) => {
                                let start = myString.indexOf(settingName);
                                let count = 0;
                                if (start != -1) {
                                    start = myString.indexOf(':', start);
                                    let end = myString.indexOf('\n', start);
                                    if (end == -1) end = myString.length;
                                    if (start != -1) {
                                        for (start; start < end - 1 && start != -1;) {
                                            let next = myString.indexOf(',', start + 1);
                                            if (next > end || next == -1) next = end;
                                            if (typeof Mas[0] == 'string') Mas[count] = myString.slice(start + 1, next);
                                            if (typeof Mas[0] == 'number') Mas[count] = Number(myString.slice(start + 1, next));
                                            if (typeof Mas[0] == 'boolean') Mas[count] = (myString.slice(start + 1, next) == 'false') ? false : true;
                                            start = next;
                                            count++;
                                        }
                                    }
                                }
                                return Mas;
                            };
                            const q = (document.getElementById("mySettingInputFile") as HTMLInputElement).files;
                            if (q != null) {
                                let reader = new FileReader();
                                reader.readAsText(q[0], 'windows-1251');
                                reader.onload = function () {
                                    let r = reader.result;
                                    if (r) {
                                        setColors(FromFile(r as string, 'colors', [...colors]) as string[]);
                                        setSizesPole(FromFile(r as string, 'sizePole', [...sizePole]) as number[]);
                                        setMinMax(FromFile(r as string, 'minMax', [...minMax]) as number[]);
                                        setSizesText(FromFile(r as string, 'sizeText', [...sizeText]) as number[]);
                                        setPaddingText(FromFile(r as string, 'paddingText', [...paddingText]) as number[]);
                                        setAlignValue(FromFile(r as string, 'alignValue', [...alignValue]) as number[]);
                                        setBorderRadiusValue(FromFile(r as string, 'borderRadiusValue', [...borderRadiusValue]) as number[]);
                                        setKolvo(FromFile(r as string, 'kolvo', [...kolvo]) as number[]);
                                        setTargetTypeCardNumber((FromFile(r as string, 'targetTypeCardNumber', [targetTypeCardNumber]) as number[])[0]);
                                        setTargetFont1((FromFile(r as string, 'targetFont1', [targetFont1]) as number[])[0]);
                                        setTargetFont2((FromFile(r as string, 'targetFont2', [targetFont2]) as number[])[0]);
                                        setRubahaCaseNumber((FromFile(r as string, 'rubahaCaseNumber', [rubahaCaseNumber]) as number[])[0]);
                                        setRamkaCaseNumber((FromFile(r as string, 'ramkaCaseNumber', [ramkaCaseNumber]) as number[])[0]);
                                        setBlockColor((FromFile(r as string, 'blockColor', [...blockColor]) as boolean[]));
                                        setBlockSizePole((FromFile(r as string, 'blockSizePole', [...blockSizePole]) as boolean[]));
                                        setBlockSizeText((FromFile(r as string, 'blockSizeText', [...blockSizeText]) as boolean[]));
                                        setBlockAlignValue((FromFile(r as string, 'blockAlignValue', [...blockAlignValue]) as boolean[]));
                                        setBlockBorderRadius((FromFile(r as string, 'blockBorderRadius', [...blockBorderRadius]) as boolean[]));
                                        setBlockPaddingText((FromFile(r as string, 'blockPaddingText', [...blockPaddingText]) as boolean[]));
                                        setBlockMinMax((FromFile(r as string, 'blockMinMax', [blockMinMax]) as boolean[])[0]);
                                        setMyNumbers((FromFile(r as string, 'myNumbers', [...myNumbers]) as boolean[]));
                                        setLineCut((FromFile(r as string, 'lineCut', [lineCut]) as boolean[])[0]);
                                        setLineCutBack((FromFile(r as string, 'lineCutBack', [lineCutBack]) as boolean[])[0]);
                                        setTargetBackgroundNumber((FromFile(r as string, 'targetBackgroundNumber', [targetBackgroundNumber]) as number[])[0]);
                                        setTargetRamkaNumber((FromFile(r as string, 'targetRamkaNumber', [targetRamkaNumber]) as number[])[0]);
                                    }
                                };
                                (document.getElementById("mySettingInputFile") as HTMLInputElement).value = "";
                            };
                        }} />
                        <label className={style.But} htmlFor="mySettingInputFile">{'Загрузить'}</label>
                    </div>
                    <OptionCase nameSetting={'Выбор шрифтов проекта'} targetThis={targetOption[12]} setTarget={setTarget} number={12}>
                        <div>
                            <div>Добавить шрифт в проект</div>
                            <div>Для загрузки нового шрифта вам нужно выбрать файл шрифта на своем компьютере. Скачать файлы шрифта можно в интернете, например тут <a target="_blank" href="https://fonts-online.ru/fonts" >https://fonts-online.ru/fonts</a> </div>
                            <input type="file" name="qwert" id="qwer" onChange={async (e) => {
                                const fontName = e.target.files?.[0].name || "new Font";
                                const myFont = new FontFace(
                                    fontName,
                                    await e.target.files?.[0].arrayBuffer() || "url()",
                                );
                                document.fonts.add(myFont);
                                const myApp = document.getElementById('App')
                                if (myApp) {
                                    if (!listMyFonts.includes(fontName)) {
                                        setListMyFonts([...listMyFonts, fontName])
                                    }
                                }
                            }} />
                            <div className={style.FontShow} onClick={() => {
                                setShowMyFonts(!showMyFonts);
                            }}>{'Шрифты уже в проекте: ' + (showMyFonts ? 'Скрыть' : 'Показать')}</div>
                            {showMyFonts &&
                                <div>
                                    {listMyFonts.map(val => {
                                        return <div key={val}>{val}</div>
                                    })}
                                </div>}
                            <div>Проставленные здесь значения полностью перекрывают значения по умолчанию. В значениях по умолчанию на вкладках размер текста и настройка рубашки также присутствуют новые шрифты</div>
                            <OptionFont myFonts={listMyFonts} optName={"Заголовок"} number={0} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Полоса 1"} number={1} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Полоса 2"} number={2} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Полоса 3"} number={3} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Текст опции 1"} number={4} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Текст опции 2"} number={5} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Текст опции 3"} number={6} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Текст опции 4"} number={7} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Заг опции 1"} number={8} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Заг опции 2"} number={9} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Заг опции 3"} number={10} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Заг опции 4"} number={11} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Подпись"} number={12} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Текст"} number={13} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Доп текст"} number={14} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Цифра 1"} number={15} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Цифра 2"} number={16} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Цифра 3"} number={17} values={myFonts} setFonts={setFontsValues} />
                            <OptionFont myFonts={listMyFonts} optName={"Цифра 4"} number={18} values={myFonts} setFonts={setFontsValues} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Вид карточек'} targetThis={targetOption[0]} setTarget={setTarget} number={0}>
                        <>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard1} name={"1"} targetThis={targetTypeCardNumber == 0} setTarget={setTargetTypeCardNumber} key={0} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard2} name={"2"} targetThis={targetTypeCardNumber == 1} setTarget={setTargetTypeCardNumber} key={1} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard3} name={"3"} targetThis={targetTypeCardNumber == 2} setTarget={setTargetTypeCardNumber} key={2} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard4} name={"4"} targetThis={targetTypeCardNumber == 3} setTarget={setTargetTypeCardNumber} key={3} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard5} name={"5"} targetThis={targetTypeCardNumber == 4} setTarget={setTargetTypeCardNumber} key={4} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard6} name={"6"} targetThis={targetTypeCardNumber == 5} setTarget={setTargetTypeCardNumber} key={5} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard7} name={"7"} targetThis={targetTypeCardNumber == 6} setTarget={setTargetTypeCardNumber} key={6} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard8} name={"8"} targetThis={targetTypeCardNumber == 7} setTarget={setTargetTypeCardNumber} key={7} ></OptionCardImg>
                            </div>
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Количество на листе'} targetThis={targetOption[1]} setTarget={setTarget} number={1}>
                        <div>
                            <OptionSize text={"По ширине"} size={kolvo[1]} number={1} setSize={setKolv} min={1} max={5} block={false} setBlock={undefined} />
                            <OptionSize text={"По высоте"} size={kolvo[0]} number={0} setSize={setKolv} min={1} max={5} block={false} setBlock={undefined} />
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
                            <OptionColor text={"Фон листа"} textAs={"Как рубаха 1"} color={colors[27]} number={27} setColor={setColor} block={blockColor[27]} setBlock={setBlocColor} name={colorsNames[27]} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры полей'} targetThis={targetOption[3]} setTarget={setTarget} number={3}>
                        <div>
                            <OptionSize text={"Заголовок"} size={sizePole[0]} number={0} setSize={setSizePole} min={0} max={99} block={blockSizePole[0]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Полоса 1"} size={sizePole[1]} number={1} setSize={setSizePole} min={0} max={49} block={blockSizePole[1]} setBlock={setBlocSizePole} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={sizePole[2]} number={2} setSize={setSizePole} min={0} max={49} block={blockSizePole[2]} setBlock={setBlocSizePole} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={sizePole[3]} number={3} setSize={setSizePole} min={0} max={49} block={blockSizePole[3]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Опции"} size={sizePole[4]} number={4} setSize={setSizePole} min={0} max={199} block={blockSizePole[4]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Между опциями"} size={sizePole[5]} number={5} setSize={setSizePole} min={0} max={40} block={blockSizePole[5]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Нижняя подпись"} size={sizePole[6]} number={6} setSize={setSizePole} min={0} max={90} block={blockSizePole[6]} setBlock={setBlocSizePole} />
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setLineCut(!lineCut) }}> {"___"} {lineCut && <div />}</div> <p>{"Линия разрезки (лицо)"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setLineCutBack(!lineCutBack) }}> {"___"} {lineCutBack && <div />}</div> <p>{"Линия разрезки (зад)"}</p> </div>
                            <OptionSize text={"мм Высота листа"} size={sizePole[7]} number={7} setSize={setSizePole} min={50} max={500} block={blockSizePole[7]} setBlock={setBlocSizePole} />
                            <OptionSize text={"мм Ширина листа"} size={sizePole[8]} number={8} setSize={setSizePole} min={50} max={500} block={blockSizePole[8]} setBlock={setBlocSizePole} />
                            <div className={style.ButtonMinMax} onClick={() => {
                                const A = [...sizePole];
                                A[7] = 297;
                                A[8] = 210;
                                setSizesPole(A);
                            }}>
                                <div>Вернуть А4</div>
                            </div>
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры текста'} targetThis={targetOption[4]} setTarget={setTarget} number={4}>
                        <div>
                            <div className={style.FontChose}><div>№ <input type="number" name="" id="" value={targetFont1} min={1} max={listMyFonts.length - 1} onChange={(e) => { setTargetFont1(Number(e.target.value)) }} />{"Шрифта "}</div>{listMyFonts[targetFont1]}</div>
                            <OptionSize text={"Заголовок"} size={sizeText[0]} number={0} setSize={setSizeText} min={0} max={99} block={blockSizeText[0]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Полоса 1"} size={sizeText[1]} number={1} setSize={setSizeText} min={0} max={99} block={blockSizeText[1]} setBlock={setBlocSizeText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={sizeText[2]} number={2} setSize={setSizeText} min={0} max={99} block={blockSizeText[2]} setBlock={setBlocSizeText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={sizeText[3]} number={3} setSize={setSizeText} min={0} max={99} block={blockSizeText[3]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 1"} size={sizeText[4]} number={4} setSize={setSizeText} min={0} max={99} block={blockSizeText[4]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 2"} textAs={"Как опция 1"} size={sizeText[5]} number={5} setSize={setSizeText} min={0} max={99} block={blockSizeText[5]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 3"} textAs={"Как опция 1"} size={sizeText[6]} number={6} setSize={setSizeText} min={0} max={99} block={blockSizeText[6]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 4"} textAs={"Как опция 1"} size={sizeText[7]} number={7} setSize={setSizeText} min={0} max={99} block={blockSizeText[7]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 1"} textAs={"Как загол 1"} size={sizeText[8]} number={8} setSize={setSizeText} min={0} max={99} block={blockSizeText[8]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 2"} textAs={"Как опция 1"} size={sizeText[9]} number={9} setSize={setSizeText} min={0} max={99} block={blockSizeText[9]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 3"} textAs={"Как опция 1"} size={sizeText[10]} number={10} setSize={setSizeText} min={0} max={99} block={blockSizeText[10]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 4"} textAs={"Как опция 1"} size={sizeText[11]} number={11} setSize={setSizeText} min={0} max={99} block={blockSizeText[11]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Подпись"} textAs={"Как заголовок"} size={sizeText[12]} number={12} setSize={setSizeText} min={0} max={99} block={blockSizeText[12]} setBlock={setBlocSizeText} />
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
                            <OptionSize text={"Верхнее поле листа"} size={paddingText[15]} number={15} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[15]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Правое поле листа"} size={paddingText[16]} number={16} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[16]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Нижнее поле листа"} textAs={"Как верхнее"} size={paddingText[17]} number={17} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[17]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Левое поле листа"} textAs={"Как правое"} size={paddingText[18]} number={18} setSize={setPaddinText} min={0} max={400} block={blockPaddingText[18]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Обводка карточки верх"} size={paddingText[19]} number={19} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[19]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Об карточки право"} textAs={"Как верх"} size={paddingText[34]} number={34} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[34]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Об карточки низ"} textAs={"Как верх"} size={paddingText[35]} number={35} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[35]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Об карточки лево"} textAs={"Как верх"} size={paddingText[36]} number={36} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[36]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок"} size={paddingText[0]} number={0} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[0]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Полоса 1"} size={paddingText[1]} number={1} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[1]} setBlock={setBlocPaddingText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={paddingText[2]} number={2} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[2]} setBlock={setBlocPaddingText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={paddingText[3]} number={3} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[3]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 1 право"} size={paddingText[4]} number={4} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[4]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 2 право"} textAs={"Как опц 1"} size={paddingText[5]} number={5} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[5]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 3 право"} textAs={"Как опц 1"} size={paddingText[6]} number={6} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[6]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 4 право"} textAs={"Как опц 1"} size={paddingText[7]} number={7} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[7]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 1 лево"} size={paddingText[26]} number={26} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[26]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 2 лево"} textAs={"Как опц 1"} size={paddingText[27]} number={27} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[27]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 3 лево"} textAs={"Как опц 1"} size={paddingText[28]} number={28} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[28]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Загол опции 4 лево"} textAs={"Как опц 1"} size={paddingText[29]} number={29} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[29]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 1 право"} textAs={"Как загол 1"} size={paddingText[8]} number={8} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[8]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 2 право"} textAs={"Как опц 1"} size={paddingText[9]} number={9} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[9]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 3 право"} textAs={"Как опц 1"} size={paddingText[10]} number={10} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[10]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 4 право"} textAs={"Как опц 1"} size={paddingText[11]} number={11} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[11]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 1 лево"} textAs={"Как загол 1"} size={paddingText[30]} number={30} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[30]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 2 лево"} textAs={"Как опц 1"} size={paddingText[31]} number={31} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[31]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 3 лево"} textAs={"Как опц 1"} size={paddingText[32]} number={32} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[32]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 4 лево"} textAs={"Как опц 1"} size={paddingText[33]} number={33} setSize={setPaddinText} min={0} max={350} block={blockPaddingText[33]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Главный текст верх"} size={paddingText[12]} number={12} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[12]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Главный текст право"} size={paddingText[20]} number={20} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[20]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Главный текст низ"} textAs={"Как верх"} size={paddingText[21]} number={21} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[21]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Главный текст лево"} textAs={"Как право"} size={paddingText[22]} number={22} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[22]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Доп текст верх"} textAs={"Как главный"} size={paddingText[13]} number={13} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[13]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Доп текст право"} textAs={"Как главный"} size={paddingText[23]} number={23} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[23]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Доп текст низ"} textAs={"Как главный"} size={paddingText[24]} number={24} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[24]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Доп текст лево"} textAs={"Как главный"} size={paddingText[25]} number={25} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[25]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Подпись"} textAs={"Как заголовок"} size={paddingText[14]} number={14} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[14]} setBlock={setBlocPaddingText} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Округлости'} targetThis={targetOption[7]} setTarget={setTarget} number={7}>
                        <div>
                            <OptionSize text={"Заголовок ┌"} size={borderRadiusValue[0]} number={0} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[0]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Заголовок ┐"} textAs={"как ┌"} size={borderRadiusValue[1]} number={1} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[1]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Заголовок ┘"} textAs={"как ┌"} size={borderRadiusValue[2]} number={2} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[2]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Заголовок └"} textAs={"как ┌"} size={borderRadiusValue[3]} number={3} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[3]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┌"} size={borderRadiusValue[4]} number={4} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[4]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┐"} size={borderRadiusValue[5]} number={5} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[5]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┘"} size={borderRadiusValue[6]} number={6} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[6]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 └"} size={borderRadiusValue[7]} number={7} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[7]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┌"} textAs={"как 1"} size={borderRadiusValue[8]} number={8} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[8]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┐"} textAs={"как 1"} size={borderRadiusValue[9]} number={9} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[9]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┘"} textAs={"как 1"} size={borderRadiusValue[10]} number={10} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[10]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 └"} textAs={"как 1"} size={borderRadiusValue[11]} number={11} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[11]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┌"} textAs={"как 1"} size={borderRadiusValue[12]} number={12} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[12]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┐"} textAs={"как 1"} size={borderRadiusValue[13]} number={13} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[13]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┘"} textAs={"как 1"} size={borderRadiusValue[14]} number={14} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[14]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 └"} textAs={"как 1"} size={borderRadiusValue[15]} number={15} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[15]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┌"} textAs={"как 1"} size={borderRadiusValue[16]} number={16} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[16]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┐"} textAs={"как 1"} size={borderRadiusValue[17]} number={17} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[17]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┘"} textAs={"как 1"} size={borderRadiusValue[18]} number={18} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[18]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 └"} textAs={"как 1"} size={borderRadiusValue[19]} number={19} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[19]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┌"} size={borderRadiusValue[20]} number={20} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[20]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┐"} textAs={"как ┌"} size={borderRadiusValue[21]} number={21} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[21]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┘"} textAs={"как ┌"} size={borderRadiusValue[22]} number={22} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[22]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст └"} textAs={"как ┌"} size={borderRadiusValue[23]} number={23} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[23]} setBlock={setBlocBorderRadius} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Подгонка описания'} targetThis={targetOption[8]} setTarget={setTarget} number={8}>
                        <div>
                            <div>{'Может залагать, рекомендую сохранить настройки вида карточек и csv-файл.\nНастоятельно не рекомендую делать большую разницу между мин и макс размером шрифтов (я ставлю мин=5 макс=9), особенно, если на странице отображается много карточек.\n200 карточек - предел, при котором конструктор все еще работает, но уже плохо. В базе всех заклинаний 519 карточек, у волшебника - 319 :)'}</div>
                            <OptionSize text={"% Высота строки (от 0 до 200)"} size={sizeText[25]} number={25} setSize={setSizeText} min={0} max={200} block={blockSizeText[25]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Минимальный размер"} size={minMax[0]} number={0} setSize={setMinMaxs} min={0} max={blockMinMax ? 99 : minMax[1]} block={false} setBlock={setBlocMinMax} />
                            <OptionSize textAs={"Как минимум"} text={"Максимум"} size={minMax[1]} number={1} setSize={setMinMaxs} min={minMax[0]} max={99} block={blockMinMax} setBlock={setBlocMinMax} />
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
                        <>
                            <div className={style.RubahaBackNext}>
                                <div className={style.but}>{rubahaCaseNumber > 0 ? <button onClick={() => { setRubahaCaseNumber(rubahaCaseNumber - 1) }}>Назад</button> : null}</div>
                                <div className={style.p}><div>страница {rubahaCaseNumber + 1}</div></div>
                                <div className={style.but}>{rubahaCaseNumber < 10 ? <button onClick={() => { setRubahaCaseNumber(rubahaCaseNumber + 1) }}>Вперед</button> : null}</div>
                            </div>
                            {getRubahaCase()}
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Тип рамки'} targetThis={targetOption[10]} setTarget={setTarget} number={10}>
                        <>
                            <div className={style.RubahaBackNext}>
                                <div className={style.but}>{ramkaCaseNumber > 0 ? <button onClick={() => { setRamkaCaseNumber(ramkaCaseNumber - 1) }}>Назад</button> : null}</div>
                                <div className={style.p}><div>страница {ramkaCaseNumber + 1}</div></div>
                                <div className={style.but}>{ramkaCaseNumber < 9 ? <button onClick={() => { setRamkaCaseNumber(ramkaCaseNumber + 1) }}>Вперед</button> : null}</div>
                            </div>
                            {getRamkaCase()}
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Настроки рубашки'} targetThis={targetOption[11]} setTarget={setTarget} number={11}>
                        <div>
                            <OptionColor text={"Фон листа"} textAs={"Как рубаха 1"} color={colors[27]} number={27} setColor={setColor} block={blockColor[27]} setBlock={setBlocColor} name={colorsNames[27]} />
                            <OptionColor text={"Рубаха 1"} textAs={"Как края"} color={colors[28]} number={28} setColor={setColor} block={blockColor[28]} setBlock={setBlocColor} name={colorsNames[28]} />
                            <OptionColor text={"Рубаха 2"} textAs={"Как фон заголовка"} color={colors[29]} number={29} setColor={setColor} block={blockColor[29]} setBlock={setBlocColor} name={colorsNames[29]} />
                            <OptionColor text={"Рубаха 3"} color={colors[30]} number={30} setColor={setColor} block={blockColor[30]} setBlock={setBlocColor} name={colorsNames[30]} />
                            <OptionColor text={"Рубаха 4"} color={colors[31]} number={31} setColor={setColor} block={blockColor[31]} setBlock={setBlocColor} name={colorsNames[31]} />
                            <OptionColor text={"Рубаха 5"} color={colors[32]} number={32} setColor={setColor} block={blockColor[32]} setBlock={setBlocColor} name={colorsNames[32]} />
                            <OptionColor text={"Рамка 1"} textAs={"Как рубаха 1"} color={colors[37]} number={37} setColor={setColor} block={blockColor[37]} setBlock={setBlocColor} name={colorsNames[37]} />
                            <OptionColor text={"Рамка 2"} color={colors[38]} number={38} setColor={setColor} block={blockColor[38]} setBlock={setBlocColor} name={colorsNames[38]} />
                            <OptionColor text={"Рамка 3"} color={colors[39]} number={39} setColor={setColor} block={blockColor[39]} setBlock={setBlocColor} name={colorsNames[39]} />
                            <OptionColor text={"Рамка 4"} color={colors[40]} number={40} setColor={setColor} block={blockColor[40]} setBlock={setBlocColor} name={colorsNames[40]} />
                            <OptionColor text={"Рамка 5"} color={colors[41]} number={41} setColor={setColor} block={blockColor[41]} setBlock={setBlocColor} name={colorsNames[41]} />
                            {"Работает только на некоторых обложках. Я так себе горизонтальные карточки делала"}
                            <OptionSize text={"Поворот картинки"} size={myDeg[0]} number={0} setSize={setDeg} min={-360} max={360} block={false} setBlock={() => { }} />
                            <OptionSize text={"Маштаб картиники"} size={myDeg[5]} number={5} setSize={setDeg} min={0} max={500} block={false} setBlock={() => { }} />
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setMyNumbers([!myNumbers[0], myNumbers[1], myNumbers[2], myNumbers[3]]) }}> {"___"} {myNumbers[0] && <div />}</div> <p>{"Цифра 1"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setMyNumbers([myNumbers[0], !myNumbers[1], myNumbers[2], myNumbers[3]]) }}> {"___"} {myNumbers[1] && <div />}</div> <p>{"Цифра 2"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setMyNumbers([myNumbers[0], myNumbers[1], !myNumbers[2], myNumbers[3]]) }}> {"___"} {myNumbers[2] && <div />}</div> <p>{"Цифра 3"}</p> </div>
                            <div className={style.NumbersExists}><div className={style.Exists} onClick={() => { setMyNumbers([myNumbers[0], myNumbers[1], myNumbers[2], !myNumbers[3]]) }}> {"___"} {myNumbers[3] && <div />}</div> <p>{"Цифра 4"}</p> </div>
                            <div className={style.FontChose}><div>№ <input type="number" name="" id="" value={targetFont2} min={1} max={listMyFonts.length - 1} onChange={(e) => { setTargetFont2(Number(e.target.value)) }} />{"Шрифта "}</div>{listMyFonts[targetFont2]}</div>
                            <OptionSize text={"Цифра 1 горизонталь"} size={sizeText[13]} number={13} setSize={setSizeText} min={-100} max={996 / kolvo[0]} block={blockSizeText[13]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 1 вертикаль"} size={sizeText[14]} number={14} setSize={setSizeText} min={-100} max={996 / kolvo[1]} block={blockSizeText[14]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 горизонталь"} size={sizeText[15]} number={15} setSize={setSizeText} min={-100} max={996 / kolvo[0]} block={blockSizeText[15]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 вертикаль"} size={sizeText[16]} number={16} setSize={setSizeText} min={-100} max={996 / kolvo[1]} block={blockSizeText[16]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 горизонталь"} size={sizeText[17]} number={17} setSize={setSizeText} min={-100} max={996 / kolvo[0]} block={blockSizeText[17]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 вертикаль"} size={sizeText[18]} number={18} setSize={setSizeText} min={-100} max={996 / kolvo[1]} block={blockSizeText[18]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 горизонталь"} size={sizeText[19]} number={19} setSize={setSizeText} min={-100} max={996 / kolvo[0]} block={blockSizeText[19]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 вертикаль"} size={sizeText[20]} number={20} setSize={setSizeText} min={-100} max={996 / kolvo[1]} block={blockSizeText[20]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 1 размер"} size={sizeText[21]} number={21} setSize={setSizeText} min={0} max={300} block={blockSizeText[21]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 размер"} textAs={"Как цифра 1"} size={sizeText[22]} number={22} setSize={setSizeText} min={0} max={300} block={blockSizeText[22]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 размер"} textAs={"Как цифра 1"} size={sizeText[23]} number={23} setSize={setSizeText} min={0} max={300} block={blockSizeText[23]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 размер"} textAs={"Как цифра 1"} size={sizeText[24]} number={24} setSize={setSizeText} min={0} max={300} block={blockSizeText[24]} setBlock={setBlocSizeText} />
                            <OptionColor text={"Цвет цифры 1"} textAs={"Как рубаха 1"} color={colors[33]} number={33} setColor={setColor} block={blockColor[33]} setBlock={setBlocColor} name={colorsNames[33]} />
                            <OptionColor text={"Цвет цифры 2"} textAs={"Как цифра 1"} color={colors[34]} number={34} setColor={setColor} block={blockColor[34]} setBlock={setBlocColor} name={colorsNames[34]} />
                            <OptionColor text={"Цвет цифры 3"} textAs={"Как цифра 1"} color={colors[35]} number={35} setColor={setColor} block={blockColor[35]} setBlock={setBlocColor} name={colorsNames[35]} />
                            <OptionColor text={"Цвет цифры 4"} textAs={"Как цифра 1"} color={colors[36]} number={36} setColor={setColor} block={blockColor[36]} setBlock={setBlocColor} name={colorsNames[36]} />
                            <OptionSize text={"Поворот цифры 1"} size={myDeg[1]} number={1} setSize={setDeg} min={-360} max={360} block={false} setBlock={() => { }} />
                            <OptionSize text={"Поворот цифры 2"} size={myDeg[2]} number={2} setSize={setDeg} min={-360} max={360} block={false} setBlock={() => { }} />
                            <OptionSize text={"Поворот цифры 3"} size={myDeg[3]} number={3} setSize={setDeg} min={-360} max={360} block={false} setBlock={() => { }} />
                            <OptionSize text={"Поворот цифры 4"} size={myDeg[4]} number={4} setSize={setDeg} min={-360} max={360} block={false} setBlock={() => { }} />
                        </div>
                    </OptionCase>
                </div>
            </div>
            {!showRedactor
                ? <Setting className={style.RedactorSetting} onClick={() => { setShowRedactor(true); }} />
                : null}
            <div className={style.RedactorAll + ' ' + (showOptions ? '' : style.BigWidth)}>
                {isCSVRedactor
                    ? <div className={style.CSVLine}>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>Текущая строка</div>
                            <div className={style.CSVText}>
                                <input type="text" name="" id="" value={newCSV} onChange={(e) => { setNewCSV(e.target.value); }} />
                            </div>
                            <div className={style.Buttons}>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let R = '';
                                        const A: string[] = [...cards[Number((document.getElementById('CTRLC') as HTMLInputElement)?.value)]];
                                        for (let i = 0; i < 18; i++) R = R + '\"' + A[i].replaceAll('\"', '\"\"').replaceAll('\n', 'Џ') + '\"' + ';';
                                        R = getCardFromCSVLine(R, A, 0, R.length - 1, '');
                                        setNewCSV(R);
                                        setNewCard(A);
                                    }}>
                                        Вставить сюда карточку №
                                    </div>
                                    <input min={0} max={cards.length - 1} type="number" name="" id="CTRLC" defaultValue={0} /></div>
                                <div className={style.Download} onClick={() => { setNewCSV(newConst); }}>Очистить карточку</div>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let num = Number((document.getElementById('CTRLV') as HTMLInputElement)?.value);
                                        let afterNum = 0;
                                        while (num >= 0) {
                                            afterNum = CSV.indexOf('\n', afterNum + 1);
                                            num--;
                                        }
                                        if (afterNum == -1) setCSV(CSV + '\n' + newCSV);
                                        else if (afterNum == 0) setCSV(newCSV + '\n' + CSV);
                                        else {
                                            afterNum++;
                                            setCSV(CSV.slice(0, afterNum) + newCSV + '\n' + CSV.slice(afterNum, CSV.length));
                                        }
                                        setMakeCSV(makeCSV + 1);
                                        (document.getElementById('CTRLV') as HTMLInputElement).value = String(cards.length);
                                    }}>Вставить новую карточку после карточки №</div>
                                    <input type="number" min={-1} max={cards.length - 1} name="" id={'CTRLV'} defaultValue={cards.length - 1} />
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className={style.Redactor + ' ' + (showRedactor ? '' : style.HideWindow)}>
                    <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowRedactor(false); }}>Скрыть</div> </div>
                    <div className={style.RedactorCase}>
                        <div className={style.Base}>
                            <div className={style.Title}>База</div>
                            <div className={style.BaseTips}>
                                <BaseTipCase name={"Dnd5e14 (dnd.su)"} number={0} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                    <>
                                        <BaseTipCase name={"Все классы"} number={112} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={116} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, -1], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -1], [9, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={113} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 2, 6, 7, 8, 9, 10, 15, 17, 18, 19, 20, 23, 25, 27, 30, 31, 33, 34, 36, 37, 38, 39, 40, 42, 44, 45], [1, 0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 17, 19, 21, 22, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 65, 66, 68, 69, 70, 71, 73, 74, 76, 77, 78], [2, 0, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 57, 58, 62, 64, 65, 66, 69, 73, 74, 75, 76, 77, 78, 81, 83, 84, 85], [3, 0, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 18, 21, 22, 23, 24, 26, 27, 27, 29, 30, 32, 33, 34, 35, 36, 39, 40, 42, 43, 45, 49, 50, 51, 53, 55, 56, 58, 59, 60, 61, 63, 64, 65, 67, 68, 69, 70, 71, 72], [4, 0, 1, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 27, 28, 30, 31, 32, 37, 38, 39, 42, 43, 44, 47, 49, 50], [5, 0, 1, 5, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 34, 36, 40, 41, 42, 43, 44, 46, 47, 48, 49, 51, 53, 54, 57, 59, 61], [6, 0, 2, 3, 4, 5, 8, 9, 10, 11, 13, 14, 19, 20, 22, 23, 25, 26, 27, 28, 30, 32, 33, 34, 36, 38, 39, 41, 42, 43, 44, 45, 47], [7, 0, 1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 27], [8, 0, 1, 3, 4, 5, 6, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 23], [9, 0, 1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 15, 16, 18, 19, 20]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 2, 6, 7, 8, 9, 10, 15, 17, 18, 19, 20, 23, 25, 27, 30, 31, 33, 34, 36, 37, 38, 39, 40, 42, 44, 45]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 1, 2, 3, 4, 5, 6, 8, 10, 11, 12, 13, 15, 16, 17, 19, 21, 22, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 52, 53, 54, 55, 57, 58, 59, 60, 61, 62, 63, 65, 66, 68, 69, 70, 71, 73, 74, 76, 77, 78]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 2, 3, 4, 6, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 25, 26, 27, 28, 29, 30, 31, 32, 33, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 57, 58, 62, 64, 65, 66, 69, 73, 74, 75, 76, 77, 78, 81, 83, 84, 85]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 4, 5, 6, 7, 8, 10, 12, 13, 14, 15, 18, 21, 22, 23, 24, 26, 27, 27, 29, 30, 32, 33, 34, 35, 36, 39, 40, 42, 43, 45, 49, 50, 51, 53, 55, 56, 58, 59, 60, 61, 63, 64, 65, 67, 68, 69, 70, 71, 72]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 4, 5, 7, 8, 9, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20, 22, 23, 24, 25, 27, 28, 30, 31, 32, 37, 38, 39, 42, 43, 44, 47, 49, 50]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 0, 1, 5, 8, 9, 10, 11, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24, 26, 27, 28, 29, 30, 31, 32, 34, 36, 40, 41, 42, 43, 44, 46, 47, 48, 49, 51, 53, 54, 57, 59, 61]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 2, 3, 4, 5, 8, 9, 10, 11, 13, 14, 19, 20, 22, 23, 25, 26, 27, 28, 30, 32, 33, 34, 36, 38, 39, 41, 42, 43, 44, 45, 47]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 0, 1, 2, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 22, 23, 24, 25, 27]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 1, 3, 4, 5, 6, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 23]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 15, 16, 18, 19, 20]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={114} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 4, 5, 12, 14, 29], [1, 20], [2, 59, 61], [3, 19, 41, 46, 47, 48], [4, 34, 35, 36], [5, 39], [6, 29, 31], [7, 20], [9, 6]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4, 5, 12, 14, 29]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 20]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 59, 61]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 19, 41, 46, 47, 48]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 34, 35, 36]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 39]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 29, 31]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 20]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 6]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={115} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 3, 16, 21, 22, 24, 26, 28, 32, 35, 41, 43], [1, 9, 18, 23, 26, 27, 50, 64, 67, 72, 75], [2, 16, 21, 22, 23, 34, 49, 50, 60, 63, 70, 72, 82], [3, 3, 9, 11, 16, 17, 20, 25, 37, 38, 52, 54, 57], [4, 2, 6, 11, 21, 26, 29, 33, 40, 45, 46], [5, 2, 3, 6, 7, 14, 15, 25, 33, 35, 37, 45, 50, 52, 56, 58, 60], [6, 7, 8, 12, 15, 16, 17, 18, 21, 35, 37, 40, 46], [7, 9, 18, 19, 26], [8, 8, 10, 12, 22], [9, 9, 10, 15]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 3, 16, 21, 22, 24, 26, 28, 32, 35, 41, 43]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 9, 18, 23, 26, 27, 50, 64, 67, 72, 75]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 16, 21, 22, 23, 34, 49, 50, 60, 63, 70, 72, 82]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 9, 11, 16, 17, 20, 25, 37, 38, 52, 54, 57]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 6, 11, 21, 26, 29, 33, 40, 45, 46]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 3, 6, 7, 14, 15, 25, 33, 35, 37, 45, 50, 52, 56, 58, 60]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 7, 8, 12, 15, 16, 17, 18, 21, 35, 37, 40, 46]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9, 18, 19, 26]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 8, 10, 12, 22]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 9, 10, 15]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Бард"} number={18} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={117} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2, 6, 8, 9, 18, 19, 25, 27, 28, 30, 33, 40], [1, 1, 5, 10, 15, 18, 19, 21, 24, 25, 29, 30, 32, 36, 37, 40, 42, 43, 46, 48, 52, 53, 55, 59, 61, 66, 73], [2, 4, 6, 8, 10, 12, 14, 19, 21, 26, 31, 34, 35, 39, 40, 41, 42, 43, 44, 50, 51, 52, 53, 55, 58, 65, 66, 74, 78, 79, 81, 83, 84, 87], [3, 2, 73, 7, 11, 13, 15, 17, 19, 21, 28, 31, 32, 33, 36, 40, 43, 55, 56, 58, 59, 60, 61, 69, 72], [4, 7, 8, 20, 26, 27, 30, 31, 39, 41, 42, 43], [5, 1, 5, 11, 13, 19, 20, 21, 22, 26, 30, 31, 32, 34, 42, 43, 52, 59, 60, 61], [6, 4, 6, 13, 14, 22, 26, 34, 43], [7, 1, 2, 6, 10, 15, 16, 17, 20, 22, 23, 24, 27], [8, 0, 11, 13, 16, 17, 18], [9, 5, 9, 13, 15, 16, 18, 19]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 2, 6, 8, 9, 18, 19, 25, 27, 28, 30, 33, 40]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 5, 10, 15, 18, 19, 21, 24, 25, 29, 30, 32, 36, 37, 40, 42, 43, 46, 48, 52, 53, 55, 59, 61, 66, 73]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 6, 8, 10, 12, 14, 19, 21, 26, 31, 34, 35, 39, 40, 41, 42, 43, 44, 50, 51, 52, 53, 55, 58, 65, 66, 74, 78, 79, 81, 83, 84, 87]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 73, 7, 11, 13, 15, 17, 19, 21, 28, 31, 32, 33, 36, 40, 43, 55, 56, 58, 59, 60, 61, 69, 72]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 8, 20, 26, 27, 30, 31, 39, 41, 42, 43]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 5, 11, 13, 19, 20, 21, 22, 26, 30, 31, 32, 34, 42, 43, 52, 59, 60, 61]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 4, 6, 13, 14, 22, 26, 34, 43]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 2, 6, 10, 15, 16, 17, 20, 22, 23, 24, 27]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 11, 13, 16, 17, 18]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 5, 9, 13, 15, 16, 18, 19]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={19} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2, 6, 8, 9, 18, 19, 25, 27, 30, 33, 40], [1, 1, 5, 10, 15, 19, 21, 29, 30, 32, 36, 37, 40, 42, 43, 46, 48, 52, 53, 59, 66, 73], [2, 4, 6, 8, 10, 12, 14, 26, 31, 35, 39, 40, 41, 43, 53, 55, 58, 65, 66, 74, 81, 83, 84], [3, 7, 15, 21, 32, 33, 36, 40, 43, 55, 56, 58, 59, 60, 61, 69, 72], [4, 8, 20, 27, 30, 31, 39, 42, 43], [5, 1, 5, 11, 13, 19, 21, 22, 26, 30, 31, 32, 34, 42, 43, 59, 61], [6, 4, 6, 13, 14, 26, 34, 43], [7, 1, 2, 6, 10, 15, 17, 22, 23, 24, 27], [8, 11, 13, 16, 17, 18], [9, 5, 13, 18, 19]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 2, 6, 8, 9, 18, 19, 25, 27, 30, 33, 40]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 5, 10, 15, 19, 21, 29, 30, 32, 36, 37, 40, 42, 43, 46, 48, 52, 53, 59, 66, 73]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 6, 8, 10, 12, 14, 26, 31, 35, 39, 40, 41, 43, 53, 55, 58, 65, 66, 74, 81, 83, 84]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 15, 21, 32, 33, 36, 40, 43, 55, 56, 58, 59, 60, 61, 69, 72]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 20, 27, 30, 31, 39, 42, 43]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 5, 11, 13, 19, 21, 22, 26, 30, 31, 32, 34, 42, 43, 59, 61]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 4, 6, 13, 14, 26, 34, 43]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 2, 6, 10, 15, 17, 22, 23, 24, 27]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 11, 13, 16, 17, 18]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 5, 13, 18, 19]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={20} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 55, 61], [2, 44, 52, 78], [3, 13, 19, 28], [4, 7], [5, 20], [6, 22], [7, 16, 20], [8, 0], [9, 16]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 55, 61]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 44, 52, 78]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 13, 19, 28]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 20]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 22]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 16, 20]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 16]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={21} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 28], [1, 18], [2, 21, 34, 50], [3, 11, 17], [4, 26], [5, 52, 60], [9, 9, 15]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 28]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 18]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 21, 34, 50]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 11, 17]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 26]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 52, 60]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 9, 15]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={22} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 24, 25], [2, 19, 42, 51, 79, 87], [3, 73, 2, 31], [4, 41]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 25]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 19, 42, 51, 79, 87]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 73, 31]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 41]]} nameCard={'Бард'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Волшебник"} number={23} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={118} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 2, 4, 5, 6, 8, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 27, 29, 30, 33, 35, 40, 41, 43, 44, 45], [1, 1, 4, 5, 6, 7, 9, 17, 18, 20, 21, 22, 24, 25, 26, 27, 28, 31, 32, 36, 37, 40, 41, 43, 46, 48, 50, 51, 52, 54, 57, 58, 61, 63, 64, 65, 66, 69, 70, 73, 74, 77], [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 19, 21, 22, 26, 27, 29, 30, 32, 34, 35, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 55, 57, 60, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 86, 87], [3, 1, 2, 73, 3, 5, 6, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27, 30, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 57, 58, 60, 64, 66, 69, 70, 72], [4, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 38, 40, 41, 43, 46, 47, 50, 51, 52], [5, 1, 2, 7, 8, 11, 13, 14, 15, 16, 17, 19, 20, 22, 25, 26, 27, 31, 32, 33, 34, 35, 37, 38, 41, 42, 45, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61], [6, 0, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 29, 30, 31, 34, 35, 36, 39, 40, 41, 43, 44, 46], [7, 1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 27], [8, 0, 3, 4, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 22], [9, 0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 1, 2, 4, 5, 6, 8, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 27, 29, 30, 33, 35, 40, 41, 43, 44, 45]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 4, 5, 6, 7, 9, 17, 18, 20, 21, 22, 24, 25, 26, 27, 28, 31, 32, 36, 37, 40, 41, 43, 46, 48, 50, 51, 52, 54, 57, 58, 61, 63, 64, 65, 66, 69, 70, 73, 74, 77]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 19, 21, 22, 26, 27, 29, 30, 32, 34, 35, 37, 38, 39, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 55, 57, 60, 61, 62, 63, 64, 67, 68, 69, 70, 71, 72, 73, 75, 76, 77, 78, 79, 80, 81, 82, 83, 86, 87]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 2, 73, 3, 5, 6, 7, 9, 11, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 25, 26, 27, 30, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 52, 53, 54, 55, 56, 57, 58, 60, 64, 66, 69, 70, 72]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 3, 4, 5, 6, 7, 8, 10, 11, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 26, 27, 30, 31, 32, 33, 34, 35, 36, 38, 40, 41, 43, 46, 47, 50, 51, 52]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 2, 7, 8, 11, 13, 14, 15, 16, 17, 19, 20, 22, 25, 26, 27, 31, 32, 33, 34, 35, 37, 38, 41, 42, 45, 48, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 2, 3, 4, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 24, 25, 29, 30, 31, 34, 35, 36, 39, 40, 41, 43, 44, 46]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 3, 5, 6, 7, 8, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21, 22, 23, 24, 25, 27]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 3, 4, 5, 6, 8, 9, 10, 12, 13, 15, 16, 17, 18, 19, 20, 22]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 3, 5, 6, 7, 9, 10, 11, 12, 13, 14, 15, 16, 19, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={24} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 2, 6, 8, 15, 17, 18, 19, 23, 25, 27, 30, 33, 40, 44, 45], [1, 1, 4, 5, 6, 17, 21, 22, 31, 32, 36, 37, 40, 41, 43, 46, 48, 51, 52, 54, 57, 58, 61, 63, 65, 66, 69, 70, 73, 74, 77], [2, 3, 4, 6, 8, 9, 10, 12, 14, 26, 27, 29, 30, 32, 35, 37, 38, 39, 41, 43, 44, 46, 47, 48, 55, 57, 62, 64, 69, 73, 75, 76, 77, 78, 81], [3, 5, 6, 7, 13, 14, 15, 18, 21, 22, 26, 27, 30, 32, 33, 34, 36, 39, 40, 42, 43, 45, 53, 55, 56, 60, 64, 69, 70, 72], [4, 4, 5, 7, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 27, 30, 31, 38, 43, 47, 50], [5, 1, 8, 11, 13, 16, 17, 19, 20, 22, 26, 27, 31, 32, 34, 41, 42, 48, 51, 53, 54, 57, 59, 61], [6, 0, 2, 3, 4, 6, 9, 10, 11, 13, 14, 19, 20, 25, 30, 34, 36, 39, 41, 43, 44], [7, 1, 5, 6, 7, 8, 10, 12, 13, 15, 16, 22, 23, 24, 25, 27], [8, 0, 3, 4, 5, 6, 9, 13, 15, 16, 17, 18, 19, 20], [9, 0, 2, 3, 5, 7, 11, 12, 13, 14, 16, 19, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 2, 6, 8, 15, 17, 18, 19, 23, 25, 27, 30, 33, 40, 44, 45]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 4, 5, 6, 17, 21, 22, 31, 32, 36, 37, 40, 41, 43, 46, 48, 51, 52, 54, 57, 58, 61, 63, 65, 66, 69, 70, 73, 74, 77]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 4, 6, 8, 9, 10, 12, 14, 26, 27, 29, 30, 32, 35, 37, 38, 39, 41, 43, 44, 46, 47, 48, 55, 57, 62, 64, 69, 73, 75, 76, 77, 78, 81]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 6, 7, 13, 14, 15, 18, 21, 22, 26, 27, 30, 32, 33, 34, 36, 39, 40, 42, 43, 45, 53, 55, 56, 60, 64, 69, 70, 72]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 5, 7, 8, 10, 13, 14, 15, 16, 17, 18, 19, 20, 23, 24, 25, 27, 30, 31, 38, 43, 47, 50]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 8, 11, 13, 16, 17, 19, 20, 22, 26, 27, 31, 32, 34, 41, 42, 48, 51, 53, 54, 57, 59, 61]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 2, 3, 4, 6, 9, 10, 11, 13, 14, 19, 20, 25, 30, 34, 36, 39, 41, 43, 44]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 5, 6, 7, 8, 10, 12, 13, 15, 16, 22, 23, 24, 25, 27]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 3, 4, 5, 6, 9, 13, 15, 16, 17, 18, 19, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 3, 5, 7, 11, 12, 13, 14, 16, 19, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={25} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 4, 5, 12, 14, 29], [1, 20], [2, 11, 61, 83], [3, 19, 41, 46, 47, 48, 58], [4, 32, 34, 35, 36], [6, 29, 31], [7, 20], [9, 6]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4, 5, 12, 14, 29]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 11, 61, 83]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 19, 41, 46, 47, 48, 58]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 32, 34, 35, 36]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 29, 31]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 6]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={26} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 16, 21, 22, 26, 28, 35, 41, 43], [1, 9, 18, 26, 27, 50, 64], [2, 16, 21, 22, 34, 49, 50, 60, 63, 70, 72, 82], [3, 3, 11, 9, 16, 17, 20, 25, 37, 38, 52, 54, 57], [4, 2, 6, 11, 26, 33, 40, 46], [5, 2, 7, 14, 15, 25, 33, 35, 37, 45, 52, 56, 58, 60], [6, 7, 12, 15, 16, 17, 18, 35, 40, 46], [7, 9, 18, 19], [8, 8, 10, 12, 22], [9, 9, 10, 15]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 16, 21, 22, 26, 28, 35, 41, 43]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 9, 18, 26, 27, 50, 64]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 16, 21, 22, 34, 49, 50, 60, 63, 70, 72, 82]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 11, 9, 16, 17, 20, 25, 37, 38, 52, 54, 57]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 6, 11, 26, 33, 40, 46]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 7, 14, 15, 25, 33, 35, 37, 45, 52, 56, 58, 60]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 7, 12, 15, 16, 17, 18, 35, 40, 46]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9, 18, 19]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 8, 10, 12, 22]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 9, 10, 15]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={27} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 7, 24, 25, 28], [2, 5, 7, 19, 42, 51, 67, 68, 71, 79, 80, 86, 87], [3, 1, 2, 73, 44, 66], [4, 3, 41, 51, 52], [5, 38, 55], [6, 24], [7, 3, 21]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 7, 24, 25, 28]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 7, 19, 42, 51, 67, 68, 71, 79, 80, 86, 87]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 2, 73, 44, 66]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 41, 51, 52]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 38, 55]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 24]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3, 21]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа воплощ."} number={28} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 5, 12, 14, 17, 22, 23, 25, 28, 30, 44], [1, 4, 5, 6, 7, 18, 20, 28, 41, 74], [2, 3, 14, 21, 32, 46, 49, 57, 68, 70, 77], [3, 3, 21, 25, 30, 34, 38, 43], [4, 2, 10, 11, 23, 24, 25, 46], [5, 8, 15, 16, 17, 45, 51, 56], [6, 10, 20, 25, 30, 39], [7, 5, 9, 10, 16, 19, 24], [8, 12, 19, 20], [9, 7]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 5, 12, 14, 17, 22, 23, 25, 28, 30, 44]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 4, 5, 6, 7, 18, 20, 28, 41, 74]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 14, 21, 32, 46, 49, 57, 68, 70, 77]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 21, 25, 30, 34, 38, 43]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 10, 11, 23, 24, 25, 46]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 8, 15, 16, 17, 45, 51, 56]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 10, 20, 25, 30, 39]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 5, 9, 10, 16, 19, 24]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 12, 19, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 7]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа вызова"} number={29} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 2, 4, 21, 35, 45], [1, 27, 37, 51, 65, 69, 70], [2, 5, 7, 39, 48, 62, 63, 71, 76, 87], [3, 1, 9, 15, 27, 47, 48, 52, 54], [4, 3, 4, 6, 18, 27, 33, 34, 35, 36, 38, 50], [5, 7, 14, 19, 27, 38, 41, 58], [6, 3, 11, 31, 35], [7, 1, 20, 23, 25], [8, 4, 6, 9, 10], [9, 0, 3, 6]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 2, 4, 21, 35, 45]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 27, 37, 51, 65, 69, 70]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 7, 39, 48, 62, 63, 71, 76, 87]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 9, 15, 27, 47, 48, 52, 54]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 4, 6, 18, 27, 33, 34, 35, 36, 38, 50]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 7, 14, 19, 27, 38, 41, 58]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 3, 11, 31, 35]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 20, 23, 25]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 4, 6, 9, 10]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 3, 6]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа иллюзии"} number={30} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 18], [1, 1, 24, 32, 36, 61], [2, 8, 10, 35, 38, 42, 44, 64, 72], [3, 7, 33, 45, 69], [4, 7, 8, 20], [5, 1, 42, 54, 61], [6, 4, 12], [7, 13, 15, 22], [8, 8], [9, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 18]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 24, 32, 36, 61]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 10, 35, 38, 42, 44, 64, 72]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 33, 45, 69]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 8, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 42, 54, 61]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 4, 12]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 13, 15, 22]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 8]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 20]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа некром."} number={31} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 15, 26], [1, 9, 31, 58], [2, 12, 29, 37, 80], [3, 5, 37, 41, 46, 53, 55, 56, 58], [4, 47, 51], [5, 25, 33, 35], [6, 0, 7, 9, 34, 41], [7, 12], [8, 5, 22], [9, 14]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 15, 26]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 9, 31, 58]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 12, 29, 37, 80]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 37, 41, 46, 53, 55, 56, 58]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 47, 51]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 25, 33, 35]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 7, 9, 34, 41]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 12]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 5, 22]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 14]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа огражд."} number={32} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 8], [1, 17, 22, 50, 63, 64, 77], [2, 9], [3, 14, 18, 19, 22, 32, 36, 60, 64], [4, 13, 16, 17, 52], [5, 32], [6, 24, 43, 44], [7, 6], [8, 15, 18], [9, 2, 10, 16]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 8]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 17, 22, 50, 63, 64, 77]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 9]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 18, 19, 22, 32, 36, 60, 64]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 16, 17, 52]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 32]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 24, 43, 44]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 6]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 15, 18]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 2, 10, 16]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа очаров."} number={33} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 6, 29], [1, 21, 25, 46, 73], [2, 6, 26, 51, 61, 67, 81], [3, 2, 73, 11, 17, 66], [4, 26, 41, 43], [5, 13, 26, 34, 52, 59], [6, 13, 14], [7, 18], [8, 0, 13, 16, 17], [9, 15, 19]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 6, 29]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 21, 25, 46, 73]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 6, 26, 51, 61, 67, 81]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 73, 11, 17, 66]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 26, 41, 43]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 13, 26, 34, 52, 59]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 13, 14]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 18]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 13, 16, 17]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 15, 19]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа преобраз."} number={34} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 16, 27, 33, 40, 41, 43], [1, 26, 48, 54, 57, 66], [2, 16, 22, 27, 30, 34, 43, 47, 50, 69, 75, 73, 78, 79, 82, 83], [3, 6, 13, 16, 20, 26, 39, 42, 44, 57, 70], [4, 5, 14, 15, 31, 40], [5, 2, 31, 37, 53, 55, 57, 60], [6, 2, 15, 16, 17, 18, 19, 29, 36, 40, 46], [7, 3, 7, 8, 21, 27], [8, 3], [9, 5, 9, 11, 12]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 16, 27, 33, 40, 41, 43]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 26, 48, 54, 57, 66]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 16, 22, 27, 30, 34, 43, 47, 50, 69, 75, 73, 78, 79, 82, 83]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 13, 16, 20, 26, 39, 42, 44, 57, 70]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 14, 15, 31, 40]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 31, 37, 53, 55, 57, 60]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 2, 15, 16, 17, 18, 19, 29, 36, 40, 46]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3, 7, 8, 21, 27]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 3]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 5, 9, 11, 12]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа прориц."} number={35} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 19], [1, 40, 43, 52], [2, 4, 11, 19, 41, 55, 60, 86], [3, 40, 72], [4, 19, 30, 32], [5, 11, 20, 22, 48], [6, 6], [9, 13]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 19]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 40, 43, 52]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 11, 19, 41, 55, 60, 86]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 40, 72]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 19, 30, 32]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 11, 20, 22, 48]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 6]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 13]]} nameCard={'Волшебник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Друид"} number={1} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={119} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 3, 7, 10, 16, 21, 22, 24, 27, 28, 34, 35, 36, 37, 38, 41, 43, 45], [1, 5, 18, 19, 22, 23, 27, 29, 30, 38, 40, 42, 44, 46, 47, 50, 57, 59, 64, 66, 68, 70, 76], [2, 0, 3, 7, 11, 13, 15, 17, 20, 21, 23, 28, 31, 34, 53, 54, 55, 57, 58, 59, 62, 63, 65, 73, 78, 80, 81, 82, 83, 85], [3, 0, 3, 4, 10, 14, 16, 27, 39, 48, 49, 51, 54, 55, 57, 59, 60, 61, 63, 67, 68, 71], [4, 5, 6, 9, 10, 15, 17, 20, 23, 24, 26, 28, 30, 31, 32, 36, 37, 38, 40, 42, 43, 45, 47, 49], [5, 2, 3, 5, 6, 9, 10, 16, 19, 21, 22, 23, 26, 29, 36, 37, 38, 41, 43, 32, 47], [6, 2, 8, 15, 16, 17, 18, 19, 21, 22, 26, 27, 32, 33, 37, 39, 45, 47], [7, 3, 6, 7, 11, 17, 19, 22, 25], [8, 0, 3, 4, 7, 14, 16, 19, 23], [9, 1, 4, 12, 13]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 3, 7, 10, 16, 21, 22, 24, 27, 28, 34, 35, 36, 37, 38, 41, 43, 45]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 18, 19, 22, 23, 27, 29, 30, 38, 40, 42, 44, 46, 47, 50, 57, 59, 64, 66, 68, 70, 76]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 3, 7, 11, 13, 15, 17, 20, 21, 23, 28, 31, 34, 53, 54, 55, 57, 58, 59, 62, 63, 65, 73, 78, 80, 81, 82, 83, 85]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 3, 4, 10, 14, 16, 27, 39, 48, 49, 51, 54, 55, 57, 59, 60, 61, 63, 67, 68, 71]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 6, 9, 10, 15, 17, 20, 23, 24, 26, 28, 30, 31, 32, 36, 37, 38, 40, 42, 43, 45, 47, 49]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 3, 5, 6, 9, 10, 16, 19, 21, 22, 23, 26, 29, 36, 37, 38, 41, 43, 32, 47]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 2, 8, 15, 16, 17, 18, 19, 21, 22, 26, 27, 32, 33, 37, 39, 45, 47]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3, 6, 7, 11, 17, 19, 22, 25]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 3, 4, 7, 14, 16, 19, 23]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 1, 4, 12, 13]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={3} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 7, 10, 27, 34, 36, 37, 38, 45], [1, 5, 19, 29, 30, 38, 40, 42, 44, 46, 47, 57, 59, 66, 68, 70, 76], [2, 0, 13, 15, 17, 20, 28, 31, 53, 54, 55, 57, 58, 62, 65, 73, 81, 83, 85], [3, 10, 14, 27, 39, 49, 51, 55, 59, 60, 61, 63, 67, 71], [4, 5, 9, 10, 15, 17, 20, 23, 28, 30, 31, 37, 38, 42, 43, 47, 49], [5, 5, 9, 10, 16, 21, 22, 23, 26, 29, 36, 41, 43, 32, 47], [6, 2, 22, 26, 27, 32, 33, 39, 45, 47], [7, 7, 11, 17, 22, 25], [8, 0, 3, 7, 14, 16, 19, 23], [9, 1, 4, 12, 13]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 7, 10, 27, 34, 36, 37, 38, 45]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 19, 29, 30, 38, 40, 42, 44, 46, 47, 57, 59, 66, 68, 70, 76]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 13, 15, 17, 20, 28, 31, 53, 54, 55, 57, 58, 62, 65, 73, 81, 83, 85]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 10, 14, 27, 39, 49, 51, 55, 59, 60, 61, 63, 67, 71]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 9, 10, 15, 17, 20, 23, 28, 30, 31, 37, 38, 42, 43, 47, 49]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 9, 10, 16, 21, 22, 23, 26, 29, 36, 41, 43, 32, 47]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 2, 22, 26, 27, 32, 33, 39, 45, 47]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 7, 11, 17, 22, 25]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 3, 7, 14, 16, 19, 23]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 1, 4, 12, 13]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={4} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22], [2, 3, 11, 59, 78], [3, 0, 4, 48, 68], [4, 24, 32, 36], [5, 17], [6, 19], [7, 6], [8, 4]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 11, 59, 78]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 4, 48, 68]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 24, 32, 36]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 17]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 19]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 6]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 4]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={5} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 3, 16, 21, 22, 24, 28, 35, 41, 43], [1, 18, 23, 27, 50, 64], [2, 21, 23, 34, 63, 82], [3, 3, 16, 54, 57], [4, 6, 26, 40, 45], [5, 2, 3, 6, 37], [6, 8, 15, 16, 17, 18, 21, 37], [7, 19]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 3, 16, 21, 22, 24, 28, 35, 41, 43]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 18, 23, 27, 50, 64]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 21, 23, 34, 63, 82]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 16, 54, 57]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 6, 26, 40, 45]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 3, 6, 37]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 8, 15, 16, 17, 18, 21, 37]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 19]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={6} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 7, 80], [5, 38], [7, 3]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 7, 80]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 38]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3]]} nameCard={'Друид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг болота"} number={7} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 32, 77], [3, 15, 71], [4, 30, 42], [5, 22, 23]]} nameCard={'Друид - круг земли(болото)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 32, 77]]} nameCard={'Друид - круг земли(болото)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 15, 71]]} nameCard={'Друид - круг земли(болото)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 30, 42]]} nameCard={'Друид - круг земли(болото)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 22, 23]]} nameCard={'Друид - круг земли(болото)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг горы"} number={8} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 47, 85], [3, 30, 63], [4, 15, 17], [5, 16, 53]]} nameCard={'Друид - круг земли(гора)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 47, 85]]} nameCard={'Друид - круг земли(гора)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 30, 63]]} nameCard={'Друид - круг земли(гора)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 15, 17]]} nameCard={'Друид - круг земли(гора)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 16, 53]]} nameCard={'Друид - круг земли(гора)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг леса"} number={9} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 15, 47], [3, 51, 61], [4, 32, 42], [5, 9, 29]]} nameCard={'Друид - круг земли(лес)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 15, 47]]} nameCard={'Друид - круг земли(лес)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 51, 61]]} nameCard={'Друид - круг земли(лес)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 32, 42]]} nameCard={'Друид - круг земли(лес)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 29]]} nameCard={'Друид - круг земли(лес)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг луга"} number={10} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 0, 35], [3, 10, 70], [4, 32, 42], [5, 1, 23]]} nameCard={'Друид - круг земли(луг)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 35]]} nameCard={'Друид - круг земли(луг)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 10, 70]]} nameCard={'Друид - круг земли(луг)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 32, 42]]} nameCard={'Друид - круг земли(луг)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 23]]} nameCard={'Друид - круг земли(луг)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг побережья"} number={11} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 44, 76], [3, 39, 71], [4, 5, 42], [5, 2, 41]]} nameCard={'Друид - круг земли(побережье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 44, 76]]} nameCard={'Друид - круг земли(побережье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 39, 71]]} nameCard={'Друид - круг земли(побережье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 42]]} nameCard={'Друид - круг земли(побережье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 41]]} nameCard={'Друид - круг земли(побережье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг подземья"} number={12} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 47, 48], [3, 6, 15], [4, 8, 15], [5, 23, 27]]} nameCard={'Друид - круг земли(подземье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 47, 48]]} nameCard={'Друид - круг земли(подземье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 15]]} nameCard={'Друид - круг земли(подземье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 15]]} nameCard={'Друид - круг земли(подземье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 23, 27]]} nameCard={'Друид - круг земли(подземье)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг пустыни"} number={13} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 64, 74], [3, 14, 65], [4, 20, 47], [5, 16, 23]]} nameCard={'Друид - круг земли(пустыня)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 64, 74]]} nameCard={'Друид - круг земли(пустыня)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 65]]} nameCard={'Друид - круг земли(пустыня)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 20, 47]]} nameCard={'Друид - круг земли(пустыня)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 16, 23]]} nameCard={'Друид - круг земли(пустыня)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг тундры"} number={14} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 81, 85], [3, 13, 27], [4, 10, 42], [5, 17, 29]]} nameCard={'Друид - круг земли(тундра)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 81, 85]]} nameCard={'Друид - круг земли(тундра)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 13, 27]]} nameCard={'Друид - круг земли(тундра)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10, 42]]} nameCard={'Друид - круг земли(тундра)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 17, 29]]} nameCard={'Друид - круг земли(тундра)'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг огня"} number={15} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 30, 41], [2, 46, 62], [3, 4, 61], [4, 0, 24], [5, 21, 24]]} nameCard={'Друид - круг дикого огня'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 30, 41]]} nameCard={'Друид - круг дикого огня'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 46, 62]]} nameCard={'Друид - круг дикого огня'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 61]]} nameCard={'Друид - круг дикого огня'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 24]]} nameCard={'Друид - круг дикого огня'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 21, 24]]} nameCard={'Друид - круг дикого огня'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг звезд"} number={16} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 38], [1, 35]]} nameCard={'Друид - круг звезд'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 38]]} nameCard={'Друид - круг звезд'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 35]]} nameCard={'Друид - круг звезд'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг спор"} number={17} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 15], [2, 12, 37], [3, 5, 6], [4, 43, 47], [5, 10, 27]]} nameCard={'Друид - круг спор'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 15]]} nameCard={'Друид - круг спор'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 12, 37]]} nameCard={'Друид - круг спор'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 6]]} nameCard={'Друид - круг спор'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 43, 47]]} nameCard={'Друид - круг спор'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 27]]} nameCard={'Друид - круг спор'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Жрец"} number={36} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={120} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 26, 27, 30, 31, 32, 34, 38, 39, 42], [1, 2, 22, 29, 30, 34, 35, 38, 39, 40, 47, 53, 55, 68, 71, 75, 78], [2, 2, 3, 11, 12, 19, 20, 31, 33, 37, 40, 45, 52, 54, 55, 74, 81, 83, 84], [3, 0, 2, 4, 5, 10, 12, 14, 22, 24, 28, 31, 36, 37, 40, 41, 43, 55, 56, 58, 60, 63, 64, 65, 66, 71, 72], [4, 0, 1, 5, 12, 13, 15, 30, 32, 42, 44], [5, 5, 10, 11, 21, 22, 23, 24, 26, 28, 30, 32, 39, 45, 46, 49, 50], [6, 5, 6, 22, 23, 26, 27, 28, 38, 39, 41, 42], [7, 0, 2, 6, 11, 14, 17, 25, 26, 27], [8, 1, 3, 7, 15, 19], [9, 0, 4, 8, 14, 18]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 26, 27, 30, 31, 32, 34, 38, 39, 42]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 22, 29, 30, 34, 35, 38, 39, 40, 47, 53, 55, 68, 71, 75, 78]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 3, 11, 12, 19, 20, 31, 33, 37, 40, 45, 52, 54, 55, 74, 81, 83, 84]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 2, 4, 5, 10, 12, 14, 22, 24, 28, 31, 36, 37, 40, 41, 43, 55, 56, 58, 60, 63, 64, 65, 66, 71, 72]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 5, 12, 13, 15, 30, 32, 42, 44]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 10, 11, 21, 22, 23, 24, 26, 28, 30, 32, 39, 45, 46, 49, 50]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 5, 6, 22, 23, 26, 27, 28, 38, 39, 41, 42]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 0, 2, 6, 11, 14, 17, 25, 26, 27]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 1, 3, 7, 15, 19]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 4, 8, 14, 18]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={37} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 27, 30, 31, 34, 38, 39, 42], [1, 2, 22, 29, 30, 34, 35, 38, 39, 40, 47, 53, 55, 68, 71, 78], [2, 2, 3, 11, 12, 20, 31, 33, 37, 40, 45, 52, 54, 55, 74, 81, 83, 84], [3, 4, 5, 10, 12, 14, 22, 24, 28, 36, 40, 43, 55, 56, 58, 60, 63, 64, 65, 71, 72], [4, 5, 12, 13, 15, 30, 32, 42, 44], [5, 5, 10, 11, 21, 22, 23, 24, 26, 28, 30, 32, 46, 49], [6, 5, 6, 22, 23, 26, 27, 28, 38, 41, 42], [7, 0, 2, 6, 11, 14, 17, 25, 27], [8, 1, 3, 7, 15], [9, 0, 4, 8, 14]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 27, 30, 31, 34, 38, 39, 42]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 22, 29, 30, 34, 35, 38, 39, 40, 47, 53, 55, 68, 71, 78]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 3, 11, 12, 20, 31, 33, 37, 40, 45, 52, 54, 55, 74, 81, 83, 84]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 5, 10, 12, 14, 22, 24, 28, 36, 40, 43, 55, 56, 58, 60, 63, 64, 65, 71, 72]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 12, 13, 15, 30, 32, 42, 44]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 10, 11, 21, 22, 23, 24, 26, 28, 30, 32, 46, 49]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 5, 6, 22, 23, 26, 27, 28, 38, 41, 42]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 0, 2, 6, 11, 14, 17, 25, 27]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 1, 3, 7, 15]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 4, 8, 14]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={38} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[3, 0, 41], [4, 0, 1], [5, 39], [6, 39], [8, 19], [9, 18]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 41]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 39]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 39]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 19]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 18]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={39} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 26, 32], [1, 75], [3, 37], [5, 45, 50], [7, 26]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 26, 32]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 75]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 37]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 45, 50]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 26]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={40} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 19], [3, 2, 31, 66]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 19]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 31, 66]]} nameCard={'Жрец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен бури"} number={41} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 5, 70], [2, 14, 57], [3, 27, 51], [4, 5, 10], [5, 23, 44]]} nameCard={'Жрец - домен бури'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 70]]} nameCard={'Жрец - домен бури'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 57]]} nameCard={'Жрец - домен бури'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 27, 51]]} nameCard={'Жрец - домен бури'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 10]]} nameCard={'Жрец - домен бури'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 23, 44]]} nameCard={'Жрец - домен бури'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен войны"} number={42} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 3, 78], [2, 2, 30], [3, 12, 23], [4, 17, 42], [5, 24, 59]]} nameCard={'Жрец - домен войны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 3, 78]]} nameCard={'Жрец - домен войны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 30]]} nameCard={'Жрец - домен войны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 23]]} nameCard={'Жрец - домен войны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 17, 42]]} nameCard={'Жрец - домен войны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 24, 59]]} nameCard={'Жрец - домен войны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен жизни"} number={43} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 30], [2, 2, 31], [3, 4, 24], [4, 12, 44], [5, 21, 30]]} nameCard={'Жрец - домен жизни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 30]]} nameCard={'Жрец - домен жизни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 31]]} nameCard={'Жрец - домен жизни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 24]]} nameCard={'Жрец - домен жизни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12, 44]]} nameCard={'Жрец - домен жизни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 21, 30]]} nameCard={'Жрец - домен жизни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен знаний"} number={44} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 43, 55], [2, 6, 11], [3, 32, 58], [4, 19, 43], [5, 11, 22]]} nameCard={'Жрец - домен знаний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 43, 55]]} nameCard={'Жрец - домен знаний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 6, 11]]} nameCard={'Жрец - домен знаний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 32, 58]]} nameCard={'Жрец - домен знаний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 19, 43]]} nameCard={'Жрец - домен знаний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 11, 22]]} nameCard={'Жрец - домен знаний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен обмана"} number={45} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 32, 46], [2, 0, 44], [3, 26, 60], [4, 27, 31], [5, 13, 34]]} nameCard={'Жрец - домен обмана'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 32, 46]]} nameCard={'Жрец - домен обмана'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 44]]} nameCard={'Жрец - домен обмана'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 26, 60]]} nameCard={'Жрец - домен обмана'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 27, 31]]} nameCard={'Жрец - домен обмана'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 13, 34]]} nameCard={'Жрец - домен обмана'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен природы"} number={46} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 19, 59], [2, 15, 85], [3, 61, 67], [4, 28, 49], [5, 9, 23]]} nameCard={'Жрец - домен приироды'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 19, 59]]} nameCard={'Жрец - домен приироды'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 15, 85]]} nameCard={'Жрец - домен приироды'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 61, 67]]} nameCard={'Жрец - домен приироды'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 28, 49]]} nameCard={'Жрец - домен приироды'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 23]]} nameCard={'Жрец - домен приироды'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен света"} number={47} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 41, 42], [2, 46, 62], [3, 10, 34], [4, 23, 44], [5, 22, 24]]} nameCard={'Жрец - домен света'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 41, 42]]} nameCard={'Жрец - домен света'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 46, 62]]} nameCard={'Жрец - домен света'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 10, 34]]} nameCard={'Жрец - домен света'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 23, 44]]} nameCard={'Жрец - домен света'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 22, 24]]} nameCard={'Жрец - домен света'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен смерти"} number={48} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 31, 58], [2, 12, 29], [3, 5, 53], [4, 12, 47], [5, 27, 36]]} nameCard={'Жрец - домен смерти'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 31, 58]]} nameCard={'Жрец - домен смерти'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 12, 29]]} nameCard={'Жрец - домен смерти'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 53]]} nameCard={'Жрец - домен смерти'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12, 47]]} nameCard={'Жрец - домен смерти'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 27, 36]]} nameCard={'Жрец - домен смерти'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен магии"} number={49} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 6, 40], [1, 6, 40], [2, 30, 38], [3, 22, 60], [4, 18, 19], [5, 19, 32]]} nameCard={'Жрец - домен магии'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 40]]} nameCard={'Жрец - домен магии'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 30, 38]]} nameCard={'Жрец - домен магии'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 22, 60]]} nameCard={'Жрец - домен магии'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 18, 19]]} nameCard={'Жрец - домен магии'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19, 32]]} nameCard={'Жрец - домен магии'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен кузни"} number={50} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 43, 49], [2, 30, 65], [3, 14, 68], [4, 14, 23], [5, 31, 54]]} nameCard={'Жрец - домен кузни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 43, 49]]} nameCard={'Жрец - домен кузни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 30, 65]]} nameCard={'Жрец - домен кузни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 68]]} nameCard={'Жрец - домен кузни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 14, 23]]} nameCard={'Жрец - домен кузни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 31, 54]]} nameCard={'Жрец - домен кузни'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен упокоения"} number={51} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 53, 58], [2, 29, 37], [3, 4, 53], [4, 12, 47], [5, 30, 36]]} nameCard={'Жрец - домен упокоения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 53, 58]]} nameCard={'Жрец - домен упокоения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 29, 37]]} nameCard={'Жрец - домен упокоения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 53]]} nameCard={'Жрец - домен упокоения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12, 47]]} nameCard={'Жрец - домен упокоения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 30, 36]]} nameCard={'Жрец - домен упокоения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен мира"} number={52} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 71], [2, 45, 52], [3, 24, 43], [4, 1, 25], [5, 5, 20]]} nameCard={'Жрец - домен мира'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 71]]} nameCard={'Жрец - домен мира'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 45, 52]]} nameCard={'Жрец - домен мира'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 24, 43]]} nameCard={'Жрец - домен мира'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 1, 25]]} nameCard={'Жрец - домен мира'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 20]]} nameCard={'Жрец - домен мира'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен порядка"} number={53} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 55], [2, 40, 81], [3, 13, 28], [4, 30, 39], [5, 28, 34]]} nameCard={'Жрец - домен порядка'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 55]]} nameCard={'Жрец - домен порядка'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 40, 81]]} nameCard={'Жрец - домен порядка'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 13, 28]]} nameCard={'Жрец - домен порядка'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 30, 39]]} nameCard={'Жрец - домен порядка'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 28, 34]]} nameCard={'Жрец - домен порядка'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен сумерек"} number={54} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 42, 73], [2, 4, 28], [3, 0, 21], [4, 0, 8], [5, 18, 61]]} nameCard={'Жрец - домен сумерек'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 42, 73]]} nameCard={'Жрец - домен сумерек'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 28]]} nameCard={'Жрец - домен сумерек'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 21]]} nameCard={'Жрец - домен сумерек'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 8]]} nameCard={'Жрец - домен сумерек'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 18, 61]]} nameCard={'Жрец - домен сумерек'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Изобретатель"} number={55} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Таша"} number={56} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 2, 3, 4, 5, 12, 14, 17, 22, 23, 25, 27, 28, 30, 33, 34, 35, 37, 38, 39, 40, 44, 45], [1, 20, 26, 30, 32, 40, 42, 43, 47, 48, 50, 54, 57, 58, 63, 64, 65, 66, 71], [2, 3, 4, 8, 9, 20, 27, 30, 31, 34, 35, 47, 48, 50, 52, 64, 65, 69, 73, 75, 78, 83], [3, 4, 11, 14, 19, 20, 26, 36, 39, 42, 57, 60, 65, 68, 70, 71], [4, 4, 14, 15, 16, 17, 18, 19, 25, 35, 40, 42], [5, 5, 8, 16, 31, 37, 54, 60]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 2, 3, 4, 5, 12, 14, 17, 22, 23, 25, 27, 28, 30, 33, 34, 35, 37, 38, 39, 40, 44, 45]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 20, 26, 30, 32, 40, 42, 43, 47, 48, 50, 54, 57, 58, 63, 64, 65, 66, 71]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 4, 8, 9, 20, 27, 30, 31, 34, 35, 47, 48, 50, 52, 64, 65, 69, 73, 75, 78, 83]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 11, 14, 19, 20, 26, 36, 39, 42, 57, 60, 65, 68, 70, 71]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 14, 15, 16, 17, 18, 19, 25, 35, 40, 42]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 8, 16, 31, 37, 54, 60]]} nameCard={'Изобретатель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Алхимик"} number={57} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 29, 31], [2, 32, 62], [3, 6, 28], [4, 12, 47], [5, 27, 30]]} nameCard={'Изобретатель - алхимик'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 29, 31]]} nameCard={'Изобретатель - алхимик'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 32, 62]]} nameCard={'Изобретатель - алхимик'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 28]]} nameCard={'Изобретатель - алхимик'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12, 47]]} nameCard={'Изобретатель - алхимик'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 27, 30]]} nameCard={'Изобретатель - алхимик'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Артиллерист"} number={58} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 5, 77], [2, 14, 46], [3, 34, 67], [4, 10, 23], [5, 17, 51]]} nameCard={'Изобретатель - артиллерист'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 77]]} nameCard={'Изобретатель - артиллерист'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 46]]} nameCard={'Изобретатель - артиллерист'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 34, 67]]} nameCard={'Изобретатель - артиллерист'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10, 23]]} nameCard={'Изобретатель - артиллерист'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 17, 51]]} nameCard={'Изобретатель - артиллерист'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Боевой кузнец"} number={59} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 77], [2, 25, 45], [3, 0, 50], [4, 1, 24], [5, 12, 21]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 77]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 25, 45]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 50]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 1, 24]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12, 21]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Бронник"} number={60} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 6, 5], [2, 14, 44], [3, 7, 30], [4, 8, 24], [5, 51, 53]]} nameCard={'Изобретатель - бронник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 5]]} nameCard={'Изобретатель - бронник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 44]]} nameCard={'Изобретатель - бронник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 30]]} nameCard={'Изобретатель - бронник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 24]]} nameCard={'Изобретатель - бронник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 51, 53]]} nameCard={'Изобретатель - бронник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Колдун"} number={61} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={121} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2, 3, 4, 5, 6, 8, 12, 14, 15, 18, 19, 20, 21, 22, 26, 28, 29, 35, 40, 45], [1, 0, 4, 9, 16, 22, 24, 36, 37, 46, 52, 54, 60, 62], [2, 6, 14, 19, 26, 29, 35, 39, 44, 47, 60, 66, 71, 72, 76, 77, 81, 82, 86, 87], [3, 73, 6, 7, 8, 9, 17, 18, 19, 22, 33, 41, 42, 46, 47, 48, 52, 53, 60, 64, 66, 69, 72], [4, 2, 3, 13, 20, 21, 26, 27, 33, 34, 40, 41, 47, 51, 52], [5, 1, 7, 14, 19, 24, 25, 32, 33, 35, 48, 52, 56, 59, 61], [6, 6, 7, 9, 11, 12, 13, 15, 16, 17, 18, 19, 29, 31, 32, 34, 35, 41], [7, 9, 12, 18, 20, 24, 25, 27], [8, 6, 11, 12, 13, 16, 17], [9, 0, 2, 5, 6, 13, 14, 15, 19, 20]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 2, 3, 4, 5, 6, 8, 12, 14, 15, 18, 19, 20, 21, 22, 26, 28, 29, 35, 40, 45]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 4, 9, 16, 22, 24, 36, 37, 46, 52, 54, 60, 62]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 6, 14, 19, 26, 29, 35, 39, 44, 47, 60, 66, 71, 72, 76, 77, 81, 82, 86, 87]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 73, 6, 7, 8, 9, 17, 18, 19, 22, 33, 41, 42, 46, 47, 48, 52, 53, 60, 64, 66, 69, 72]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 3, 13, 20, 21, 26, 27, 33, 34, 40, 41, 47, 51, 52]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 7, 14, 19, 24, 25, 32, 33, 35, 48, 52, 56, 59, 61]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 6, 7, 9, 11, 12, 13, 15, 16, 17, 18, 19, 29, 31, 32, 34, 35, 41]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9, 12, 18, 20, 24, 25, 27]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 6, 11, 12, 13, 16, 17]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 5, 6, 13, 14, 15, 19, 20]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={62} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2, 6, 8, 15, 18, 19, 20, 40, 45], [1, 0, 4, 16, 22, 36, 37, 46, 52, 54, 60, 62], [2, 6, 14, 26, 29, 35, 39, 44, 47, 66, 76, 77, 81], [3, 6, 7, 8, 18, 22, 33, 42, 53, 60, 64, 69, 72], [4, 13, 20, 27, 47], [5, 1, 24, 48, 59], [6, 6, 9, 11, 13, 19, 32, 34, 41], [7, 12, 24, 25, 27], [8, 6, 11, 13, 16, 17], [9, 2, 5, 13, 14, 19]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 2, 6, 8, 15, 18, 19, 20, 40, 45]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 4, 16, 22, 36, 37, 46, 52, 54, 60, 62]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 6, 14, 26, 29, 35, 39, 44, 47, 66, 76, 77, 81]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 7, 8, 18, 22, 33, 42, 53, 60, 64, 69, 72]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 20, 27, 47]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 24, 48, 59]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 6, 9, 11, 13, 19, 32, 34, 41]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 12, 24, 25, 27]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 6, 11, 13, 16, 17]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 2, 5, 13, 14, 19]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={63} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 4, 5, 12, 14, 29], [3, 19, 41, 46, 47, 48], [4, 34], [5, 19, 32, 61], [6, 29, 31], [7, 20], [9, 0, 6, 20]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4, 5, 12, 14, 29]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 19, 41, 46, 47, 48]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 34]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19, 32, 61]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 29, 31]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 20]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 6, 20]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={64} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 3, 21, 22, 26, 28, 35], [1, 9], [2, 60, 72, 82], [3, 9, 17, 52], [4, 2, 21, 26, 33, 40], [5, 7, 14, 25, 33, 35, 52, 56], [6, 7, 12, 15, 16, 17, 18, 35], [7, 9, 18], [8, 12], [9, 15]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 3, 21, 22, 26, 28, 35]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 9]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 60, 72, 82]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 9, 17, 52]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 21, 26, 33, 40]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 7, 14, 25, 33, 35, 52, 56]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 7, 12, 15, 16, 17, 18, 35]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9, 18]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 12]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 15]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={65} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 24], [2, 19, 71, 86, 87], [3, 73, 66], [4, 3, 41, 51, 52]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 19, 71, 86, 87]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 73, 66]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 41, 51, 52]]} nameCard={'Колдун'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Архифея"} number={66} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 42, 73], [2, 10, 84], [3, 26, 61], [4, 8, 28], [5, 34, 42]]} nameCard={'Колдун - архифея'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 42, 73]]} nameCard={'Колдун - архифея'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 84]]} nameCard={'Колдун - архифея'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 26, 61]]} nameCard={'Колдун - архифея'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 28]]} nameCard={'Колдун - архифея'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 34, 42]]} nameCard={'Колдун - архифея'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Исчадие"} number={67} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 41, 55], [2, 12, 46], [3, 15, 34], [4, 23, 24], [5, 24, 49]]} nameCard={'Колдун - исчадие'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 41, 55]]} nameCard={'Колдун - исчадие'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 12, 46]]} nameCard={'Колдун - исчадие'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 15, 34]]} nameCard={'Колдун - исчадие'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 23, 24]]} nameCard={'Колдун - исчадие'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 24, 49]]} nameCard={'Колдун - исчадие'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Великий древний"} number={68} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 15, 21], [2, 10, 41], [3, 40, 43], [4, 28, 50], [5, 34, 57]]} nameCard={'Колдун - великий древний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 15, 21]]} nameCard={'Колдун - великий древний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 41]]} nameCard={'Колдун - великий древний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 40, 43]]} nameCard={'Колдун - великий древний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 28, 50]]} nameCard={'Колдун - великий древний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 34, 57]]} nameCard={'Колдун - великий древний'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Бессмертный"} number={69} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 31, 58], [2, 12, 74], [3, 55, 58], [4, 0, 12], [5, 10, 11]]} nameCard={'Колдун - бессмертный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 31, 58]]} nameCard={'Колдун - бессмертный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 12, 74]]} nameCard={'Колдун - бессмертный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 55, 58]]} nameCard={'Колдун - бессмертный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 12]]} nameCard={'Колдун - бессмертный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 11]]} nameCard={'Колдун - бессмертный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ведьм. клинок"} number={70} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 11, 77], [2, 25, 64], [3, 26, 68], [4, 7, 22], [5, 12, 17]]} nameCard={'Колдун - ведьмовский клинок'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 11, 77]]} nameCard={'Колдун - ведьмовский клинок'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 25, 64]]} nameCard={'Колдун - ведьмовский клинок'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 26, 68]]} nameCard={'Колдун - ведьмовский клинок'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 22]]} nameCard={'Колдун - ведьмовский клинок'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12, 17]]} nameCard={'Колдун - ведьмовский клинок'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Небожитель"} number={71} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 30, 35], [2, 31, 62], [3, 4, 10], [4, 23, 44], [5, 5, 24]]} nameCard={'Колдун - небожитель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 30, 35]]} nameCard={'Колдун - небожитель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 31, 62]]} nameCard={'Колдун - небожитель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 10]]} nameCard={'Колдун - небожитель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 23, 44]]} nameCard={'Колдун - небожитель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 24]]} nameCard={'Колдун - небожитель'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Бездонный"} number={72} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 5, 68], [2, 57, 74], [3, 27, 30], [4, 5, 36], [5, 8, 17]]} nameCard={'Колдун - бездонный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 68]]} nameCard={'Колдун - бездонный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 57, 74]]} nameCard={'Колдун - бездонный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 27, 30]]} nameCard={'Колдун - бездонный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 36]]} nameCard={'Колдун - бездонный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 8, 17]]} nameCard={'Колдун - бездонный'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Гений дао"} number={73} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 39, 71], [2, 10, 85], [3, 65, 63], [4, 7, 15], [5, 54, 16], [9, 3]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 39, 71]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 85]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 65, 63]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 15]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 54, 16]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 3]]} nameCard={'Колдун - гений дао'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Гений джинн"} number={74} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 39, 5], [2, 10, 57], [3, 65, 67], [4, 7, 8], [5, 54, 42], [9, 3]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 39, 5]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 57]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 65, 67]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 8]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 54, 42]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 3]]} nameCard={'Колдун - гений джинн'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Гений ифрит"} number={75} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 39, 41], [2, 10, 46], [3, 65, 34], [4, 7, 24], [5, 54, 24], [9, 3]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 39, 41]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 46]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 65, 34]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 24]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 54, 24]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 3]]} nameCard={'Колдун - гений ифрит'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Гений марид"} number={76} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 39, 70], [2, 10, 64], [3, 65, 27], [4, 7, 5], [5, 54, 17], [9, 3]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 39, 70]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 64]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 65, 27]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 5]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 54, 17]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 3]]} nameCard={'Колдун - гений марид'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Нежить"} number={77} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 53, 58], [1, 53, 58], [2, 10, 12], [3, 45, 58], [4, 8, 12], [5, 27, 36]]} nameCard={'Колдун - нежить'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 53, 58]]} nameCard={'Колдун - нежить'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 12]]} nameCard={'Колдун - нежить'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 45, 58]]} nameCard={'Колдун - нежить'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 12]]} nameCard={'Колдун - нежить'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 27, 36]]} nameCard={'Колдун - нежить'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Паладин"} number={79} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={80} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 3, 8, 10, 11, 13, 22, 30, 38, 39, 40, 47, 49, 55, 75, 78], [2, 20, 25, 30, 31, 33, 37, 40, 45, 52, 55, 56], [3, 0, 4, 10, 22, 23, 35, 41, 60, 64, 65, 68], [4, 0, 1, 12, 13, 22, 29, 30], [5, 12, 18, 26, 30, 39, 44, 46, 50]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 3, 8, 10, 11, 13, 22, 30, 38, 39, 40, 47, 49, 55, 75, 78]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 20, 25, 30, 31, 33, 37, 40, 45, 52, 55, 56]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 4, 10, 22, 23, 35, 41, 60, 64, 65, 68]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 12, 13, 22, 29, 30]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12, 18, 26, 30, 39, 44, 46, 50]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={80} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 3, 8, 10, 11, 13, 22, 30, 38, 39, 40, 47, 49, 55, 78], [2, 20, 25, 30, 31, 40, 52, 55, 56], [3, 0, 4, 10, 22, 23, 35, 60, 64, 65, 68], [4, 0, 1, 12, 13, 22, 30], [5, 12, 18, 26, 30, 44, 46]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 3, 8, 10, 11, 13, 22, 30, 38, 39, 40, 47, 49, 55, 78]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 20, 25, 30, 31, 40, 52, 55, 56]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 4, 10, 22, 23, 35, 60, 64, 65, 68]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 12, 13, 22, 30]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12, 18, 26, 30, 44, 46]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={81} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 37, 33, 45], [3, 41], [5, 39]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 37, 33, 45]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 41]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 39]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={82} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 75], [4, 29], [5, 50]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 75]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 29]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 50]]} nameCard={'Паладин'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Преданности"} number={83} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22, 71], [2, 31, 40], [3, 24, 60], [4, 42, 45], [5, 24, 28]]} nameCard={'Паладин - клятва преданности'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22, 71]]} nameCard={'Паладин - клятва преданности'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 31, 40]]} nameCard={'Паладин - клятва преданности'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 24, 60]]} nameCard={'Паладин - клятва преданности'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 42, 45]]} nameCard={'Паладин - клятва преданности'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 24, 28]]} nameCard={'Паладин - клятва преданности'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Древних"} number={84} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 45, 59], [1, 45, 59], [2, 28, 76], [3, 14, 61], [4, 10, 17], [5, 9, 29]]} nameCard={'Паладин - клятва древних'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 45, 59]]} nameCard={'Паладин - клятва древних'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 28, 76]]} nameCard={'Паладин - клятва древних'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 61]]} nameCard={'Паладин - клятва древних'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10, 17]]} nameCard={'Паладин - клятва древних'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 29]]} nameCard={'Паладин - клятва древних'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Мести"} number={85} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 33, 53], [2, 76, 81], [3, 14, 70], [4, 13, 27], [5, 22, 59]]} nameCard={'Паладин - клятва мести'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 33, 53]]} nameCard={'Паладин - клятва мести'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 76, 81]]} nameCard={'Паладин - клятва мести'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 70]]} nameCard={'Паладин - клятва мести'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 27]]} nameCard={'Паладин - клятва мести'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 22, 59]]} nameCard={'Паладин - клятва мести'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Преступник"} number={86} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 0, 34], [2, 26, 77], [3, 5, 56], [4, 43, 47], [5, 10, 34]]} nameCard={'Паладин - клятвопреступник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 34]]} nameCard={'Паладин - клятвопреступник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 26, 77]]} nameCard={'Паладин - клятвопреступник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 56]]} nameCard={'Паладин - клятвопреступник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 43, 47]]} nameCard={'Паладин - клятвопреступник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 34]]} nameCard={'Паладин - клятвопреступник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Короны"} number={87} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 8, 55], [2, 40, 45], [3, 0, 12], [4, 13, 44], [5, 18, 26]]} nameCard={'Паладин - клятва короны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 8, 55]]} nameCard={'Паладин - клятва короны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 40, 45]]} nameCard={'Паладин - клятва короны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 12]]} nameCard={'Паладин - клятва короны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 44]]} nameCard={'Паладин - клятва короны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 18, 26]]} nameCard={'Паладин - клятва короны'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Искупления"} number={88} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 71, 73], [1, 71, 73], [2, 81, 84], [3, 7, 18], [4, 17, 25], [5, 51, 59]]} nameCard={'Паладин - клятва искупления'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 71, 73]]} nameCard={'Паладин - клятва искупления'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 81, 84]]} nameCard={'Паладин - клятва искупления'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 18]]} nameCard={'Паладин - клятва искупления'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 17, 25]]} nameCard={'Паладин - клятва искупления'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 51, 59]]} nameCard={'Паладин - клятва искупления'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Покорения"} number={89} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 16, 55], [2, 2, 81], [3, 56, 69], [4, 17, 28], [5, 27, 34]]} nameCard={'Паладин - клятва покорения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 16, 55]]} nameCard={'Паладин - клятва покорения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 81]]} nameCard={'Паладин - клятва покорения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 56, 69]]} nameCard={'Паладин - клятва покорения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 17, 28]]} nameCard={'Паладин - клятва покорения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 27, 34]]} nameCard={'Паладин - клятва покорения'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Славы"} number={90} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 35], [2, 30, 83], [3, 14, 70], [4, 39, 42], [5, 24, 28]]} nameCard={'Паладин - клятва славы'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 35]]} nameCard={'Паладин - клятва славы'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 30, 83]]} nameCard={'Паладин - клятва славы'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 70]]} nameCard={'Паладин - клятва славы'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 39, 42]]} nameCard={'Паладин - клятва славы'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 24, 28]]} nameCard={'Паладин - клятва славы'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Смотрителей"} number={91} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 40, 63], [2, 4, 28], [3, 18, 32], [4, 1, 13], [5, 22, 59]]} nameCard={'Паладин - клятва смотрителей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 40, 63]]} nameCard={'Паладин - клятва смотрителей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 28]]} nameCard={'Паладин - клятва смотрителей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 18, 32]]} nameCard={'Паладин - клятва смотрителей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 1, 13]]} nameCard={'Паладин - клятва смотрителей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 22, 59]]} nameCard={'Паладин - клятва смотрителей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Следопыт"} number={92} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={122} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 12, 19, 23, 30, 33, 38, 40, 44, 45, 49, 50, 57, 59, 63, 64, 66, 70, 72, 76], [2, 0, 7, 15, 17, 18, 20, 23, 30, 31, 52, 53, 54, 55, 57, 58, 59, 73, 74, 83, 85], [3, 4, 10, 14, 29, 32, 39, 48, 49, 50, 57, 59, 61, 63, 67, 68, 71], [4, 17, 28, 30, 36, 37, 42, 45, 49], [5, 0, 5, 6, 9, 29, 40, 58]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 12, 19, 23, 30, 33, 38, 40, 44, 45, 49, 50, 57, 59, 63, 64, 66, 70, 72, 76]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 7, 15, 17, 18, 20, 23, 30, 31, 52, 53, 54, 55, 57, 58, 59, 73, 74, 83, 85]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 10, 14, 29, 32, 39, 48, 49, 50, 57, 59, 61, 63, 67, 68, 71]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 17, 28, 30, 36, 37, 42, 45, 49]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 0, 5, 6, 9, 29, 40, 58]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={93} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 12, 19, 30, 33, 38, 40, 45, 57, 59, 63, 66, 70, 76], [2, 0, 15, 17, 18, 20, 31, 53, 54, 55, 58, 73, 74, 85], [3, 10, 14, 29, 32, 39, 49, 50, 59, 61, 67, 71], [4, 17, 30, 37, 42, 49], [5, 0, 9, 29, 40]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 12, 19, 30, 33, 38, 40, 45, 57, 59, 63, 66, 70, 76]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 15, 17, 18, 20, 31, 53, 54, 55, 58, 73, 74, 85]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 10, 14, 29, 32, 39, 49, 50, 59, 61, 67, 71]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 17, 30, 37, 42, 49]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 0, 9, 29, 40]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={94} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 44, 49], [2, 30, 52, 57, 59, 83], [3, 4, 48, 63, 68], [4, 28, 36], [5, 5]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 44, 49]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 30, 52, 57, 59, 83]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 48, 63, 68]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 28, 36]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={95} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 23, 50, 64, 72], [2, 23], [3, 57], [4, 45], [5, 6, 58]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 23, 50, 64, 72]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 23]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 57]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 45]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 6, 58]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={96} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 7], [3, 44, 57]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 7]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 44, 57]]} nameCard={'Следопыт'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Стран. горизонта"} number={97} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22], [2, 76], [3, 70], [4, 13], [5, 19]]} nameCard={'Следопыт - странник горизонта'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22]]} nameCard={'Следопыт - странник горизонта'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 76]]} nameCard={'Следопыт - странник горизонта'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 70]]} nameCard={'Следопыт - странник горизонта'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13]]} nameCard={'Следопыт - странник горизонта'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19]]} nameCard={'Следопыт - странник горизонта'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Сумр. охотник"} number={98} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 32], [2, 75], [3, 69], [4, 8], [5, 42]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 32]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 75]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 69]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 42]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Убийца монстров"} number={99} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22], [2, 40], [3, 22], [4, 13], [5, 59]]} nameCard={'Следопыт - убийца монстров'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22]]} nameCard={'Следопыт - убийца монстров'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 40]]} nameCard={'Следопыт - убийца монстров'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 22]]} nameCard={'Следопыт - убийца монстров'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13]]} nameCard={'Следопыт - убийца монстров'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 59]]} nameCard={'Следопыт - убийца монстров'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Странник фей"} number={100} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 46], [2, 76], [3, 60], [4, 27], [5, 61]]} nameCard={'Следопыт - странник фей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 46]]} nameCard={'Следопыт - странник фей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 76]]} nameCard={'Следопыт - странник фей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 60]]} nameCard={'Следопыт - странник фей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 27]]} nameCard={'Следопыт - странник фей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 61]]} nameCard={'Следопыт - странник фей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Хранитель роя"} number={101} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2], [1, 42], [2, 48], [3, 6], [4, 19], [5, 23]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 2]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 42]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 48]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 19]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 23]]} nameCard={'Следопыт - хранитель роя'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Чародей"} number={102} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все истоки"} number={123} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 2, 4, 5, 6, 8, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 27, 28, 29, 30, 33, 35, 40, 41, 43, 44, 45], [1, 1, 4, 5, 6, 17, 18, 20, 24, 25, 26, 27, 31, 32, 40, 41, 46, 48, 50, 52, 54, 57, 58, 61, 65, 67, 70, 73, 74, 77], [2, 4, 5, 6, 7, 10, 12, 13, 14, 16, 21, 22, 26, 27, 30, 35, 39, 41, 42, 43, 44, 46, 47, 48, 49, 50, 57, 60, 61, 62, 63, 64, 68, 69, 70, 72, 73, 76, 77, 78, 79, 80, 81, 82, 83, 86, 87], [3, 73, 3, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 25, 26, 27, 30, 33, 34, 39, 40, 42, 44, 53, 54, 57, 60, 66, 69, 70, 71, 72], [4, 2, 6, 8, 10, 11, 13, 17, 23, 24, 26, 27, 28, 31, 41, 43, 46, 47, 51, 52], [5, 2, 7, 8, 15, 16, 17, 19, 23, 25, 27, 31, 34, 38, 42, 52, 54, 56, 57, 59, 60], [6, 2, 6, 9, 11, 12, 13, 15, 16, 17, 18, 19, 20, 24, 25, 29, 34, 35, 36, 39, 44], [7, 3, 5, 7, 9, 11, 12, 16, 18, 19, 20, 23, 25, 27], [8, 4, 6, 7, 13, 17, 19, 22], [9, 0, 3, 6, 7, 9, 11, 15, 18]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 1, 2, 4, 5, 6, 8, 12, 14, 15, 16, 17, 18, 19, 21, 22, 23, 25, 27, 28, 29, 30, 33, 35, 40, 41, 43, 44, 45]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 4, 5, 6, 17, 18, 20, 24, 25, 26, 27, 31, 32, 40, 41, 46, 48, 50, 52, 54, 57, 58, 61, 65, 67, 70, 73, 74, 77]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 5, 6, 7, 10, 12, 13, 14, 16, 21, 22, 26, 27, 30, 35, 39, 41, 42, 43, 44, 46, 47, 48, 49, 50, 57, 60, 61, 62, 63, 64, 68, 69, 70, 72, 73, 76, 77, 78, 79, 80, 81, 82, 83, 86, 87]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 73, 3, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17, 18, 19, 25, 26, 27, 30, 33, 34, 39, 40, 42, 44, 53, 54, 57, 60, 66, 69, 70, 71, 72]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 6, 8, 10, 11, 13, 17, 23, 24, 26, 27, 28, 31, 41, 43, 46, 47, 51, 52]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 7, 8, 15, 16, 17, 19, 23, 25, 27, 31, 34, 38, 42, 52, 54, 56, 57, 59, 60]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 2, 6, 9, 11, 12, 13, 15, 16, 17, 18, 19, 20, 24, 25, 29, 34, 35, 36, 39, 44]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3, 5, 7, 9, 11, 12, 16, 18, 19, 20, 23, 25, 27]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 4, 6, 7, 13, 17, 19, 22]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 3, 6, 7, 9, 11, 15, 18]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Книга игрока"} number={103} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 2, 6, 8, 15, 17, 18, 19, 23, 25, 27, 30, 33, 40, 44, 45], [1, 1, 4, 5, 6, 17, 31, 32, 40, 41, 46, 48, 52, 54, 57, 58, 61, 70, 73, 74, 77], [2, 4, 6, 10, 12, 14, 26, 27, 35, 39, 41, 43, 44, 46, 47, 48, 57, 64, 69, 73, 76, 77, 78, 81, 83], [3, 6, 7, 10, 13, 14, 15, 18, 26, 27, 30, 33, 34, 39, 40, 42, 60, 69, 70, 71, 72], [4, 8, 10, 13, 17, 23, 27, 28, 31, 43, 47], [5, 16, 17, 19, 23, 27, 31, 34, 42, 54, 57, 59], [6, 2, 6, 9, 11, 13, 25, 34, 36, 39, 44], [7, 5, 7, 11, 12, 16, 23, 25, 27], [8, 4, 7, 13, 17, 19], [9, 0, 3, 7, 11, 18]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 2, 6, 8, 15, 17, 18, 19, 23, 25, 27, 30, 33, 40, 44, 45]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 4, 5, 6, 17, 31, 32, 40, 41, 46, 48, 52, 54, 57, 58, 61, 70, 73, 74, 77]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 6, 10, 12, 14, 26, 27, 35, 39, 41, 43, 44, 46, 47, 48, 57, 64, 69, 73, 76, 77, 78, 81, 83]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 7, 10, 13, 14, 15, 18, 26, 27, 30, 33, 34, 39, 40, 42, 60, 69, 70, 71, 72]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 10, 13, 17, 23, 27, 28, 31, 43, 47]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 16, 17, 19, 23, 27, 31, 34, 42, 54, 57, 59]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 2, 6, 9, 11, 13, 25, 34, 36, 39, 44]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 5, 7, 11, 12, 16, 23, 25, 27]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 4, 7, 13, 17, 19]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 3, 7, 11, 18]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Таша"} number={104} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 4, 5, 12, 14, 29], [1, 20, 65], [2, 13, 30, 61, 62], [3, 19, 53], [4, 24], [5, 8], [6, 19, 20, 29], [7, 20], [8, 6], [9, 6]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4, 5, 12, 14, 29]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 20, 65]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 13, 30, 61, 62]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 19, 53]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 24]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 8]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 19, 20, 29]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 20]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 6]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 6]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ксантар"} number={105} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 16, 21, 22, 28, 35, 41, 43], [1, 18, 26, 27, 50, 67], [2, 16, 21, 22, 49, 50, 60, 63, 70, 72, 82], [3, 3, 9, 11, 16, 17, 25, 54, 57], [4, 2, 6, 11, 26, 46], [5, 2, 7, 15, 25, 52, 56, 60], [6, 12, 15, 16, 17, 18, 35], [7, 9, 18, 19], [8, 22], [9, 9, 15]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 16, 21, 22, 28, 35, 41, 43]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 18, 26, 27, 50, 67]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 16, 21, 22, 49, 50, 60, 63, 70, 72, 82]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 9, 11, 16, 17, 25, 54, 57]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 6, 11, 26, 46]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 7, 15, 25, 52, 56, 60]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 12, 15, 16, 17, 18, 35]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9, 18, 19]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 22]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 9, 15]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Другое"} number={106} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 24, 25], [2, 5, 7, 42, 68, 79, 80, 86, 87], [3, 73, 44, 66], [4, 41, 51, 52], [5, 38], [6, 24], [7, 3]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 25]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 7, 42, 68, 79, 80, 86, 87]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 73, 44, 66]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 41, 51, 52]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 38]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 24]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3]]} nameCard={'Чародей'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Бож. душа"} number={107} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 30, 34, 2, 53, 22]]} nameCard={'Чародей - божественная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Теневая магия"} number={108} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 77]]} nameCard={'Чародей - теневая магия'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Абер. разум"} number={109} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 29], [1, 15, 60], [2, 41, 84], [3, 8, 43], [4, 34, 50], [5, 20, 57]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1 (З)"} numbers={[[1, 29]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 15, 60]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 41, 84]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 43]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 34, 50]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 20, 57]]} nameCard={'Чародей - аберрантный разум'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Заводная душа"} number={110} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 29], [1, 15, 60], [2, 41, 84], [3, 8, 43], [4, 34, 50], [5, 20, 57]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 29]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 15, 60]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 41, 84]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 43]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 34, 50]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 20, 57]]} nameCard={'Чародей - заводная душа'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Лунное чар."} number={111} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22, 63], [2, 31, 52], [3, 14, 60], [4, 35, 42], [5, 5, 51]]} nameCard={'Чародей - лунное чародейство'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22, 63]]} nameCard={'Чародей - лунное чародейство'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 31, 52]]} nameCard={'Чародей - лунное чародейство'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 60]]} nameCard={'Чародей - лунное чародейство'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 35, 42]]} nameCard={'Чародей - лунное чародейство'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 51]]} nameCard={'Чародей - лунное чародейство'} base={base5e14} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                    </>
                                </BaseTipCase>
                                <BaseTipCase name={"Dnd5e24 (ttg.club)"} number={125} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                    <>
                                        <BaseTipCase name={"Все классы"} number={126} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={127} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, -1], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -1], [9, -1]]} nameCard={''} base={base5e14} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, -1]]} nameCard={''} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Бард"} number={131} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={132} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 4, 5, 6, 10, 12, 16, 18, 19, 21, 24, 29], [1, 6, 10, 14, 17, 18, 20, 23, 24, 26, 30, 33, 35, 36, 39, 40, 42, 45, 46, 48, 51, 53, 57, 62], [4, 5, 6, 8, 10, 14, 20, 25, 28, 31, 32, 33, 34, 40, 41, 43, 47, 53, 54, 58, 60, 64, 65, 66, 67], [1, 7, 11, 13, 14, 16, 18, 24, 26, 28, 32, 34, 36, 43, 44, 45, 46, 47, 48, 57, 60], [5, 8, 16, 21, 25, 26, 27, 29, 31, 36, 37, 38, 39, 40], [1, 2, 5, 9, 11, 14, 15, 16, 17, 18, 21, 25, 26, 27, 31, 32, 38, 40, 47, 48], [5, 7, 11, 12, 13, 16, 18, 19, 25, 34], [1, 3, 5, 8, 12, 13, 14, 15, 17, 18, 19, 21], [0, 7, 10, 11, 15, 16], [6, 12, 14, 15, 16, 17]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[1, 2, 4, 5, 6, 10, 12, 16, 18, 19, 21, 24, 29]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 10, 14, 17, 18, 20, 23, 24, 26, 30, 33, 35, 36, 39, 40, 42, 45, 46, 48, 51, 53, 57, 62]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[4, 5, 6, 8, 10, 14, 20, 25, 28, 31, 32, 33, 34, 40, 41, 43, 47, 53, 54, 58, 60, 64, 65, 66, 67]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[1, 7, 11, 13, 14, 16, 18, 24, 26, 28, 32, 34, 36, 43, 44, 45, 46, 47, 48, 57, 60]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[5, 8, 16, 21, 25, 26, 27, 29, 31, 36, 37, 38, 39, 40]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[1, 2, 5, 9, 11, 14, 15, 16, 17, 18, 21, 25, 26, 27, 31, 32, 38, 40, 47, 48]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[5, 7, 11, 12, 13, 16, 18, 19, 25, 34]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[1, 3, 5, 8, 12, 13, 14, 15, 17, 18, 19, 21]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[0, 7, 10, 11, 15, 16]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[6, 12, 14, 15, 16, 17]]} nameCard={'Бард'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Коллегия духов"} number={133} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 14], [3, 10]]} nameCard={'Бард - коллегия духов'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 14]]} nameCard={'Бард - коллегия духов'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 10]]} nameCard={'Бард - коллегия духов'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Коллегия луны"} number={133} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 22]]} nameCard={'Бард - коллегия луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Коллегия очарования"} number={133} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 39, 40, 48], [2, 34]]} nameCard={'Бард - коллегия очарования'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 39, 40, 48]]} nameCard={'Бард - коллегия очарования'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 34]]} nameCard={'Бард - коллегия очарования'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Волшебник"} number={137} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={138} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 12, 15, 16, 17, 18, 19, 20, 21, 24, 29, 32, 33, 34], [1, 1, 5, 6, 7, 8, 16, 18, 19, 20, 22, 25, 26, 30, 33, 34, 36, 39, 40, 42, 44, 45, 47, 49, 50, 53, 55, 56, 57, 59, 60, 62, 63, 65], [2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 16, 20, 21, 23, 24, 26, 28, 29, 30, 31, 33, 34, 36, 37, 38, 43, 45, 46, 49, 50, 51, 52, 57, 58, 59, 61, 62, 63, 64, 65, 66, 68], [3, 1, 3, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 25, 26, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 47, 49, 51, 57, 58, 60], [4, 2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 29, 31, 32, 33, 34, 35, 37, 40, 41, 43, 45], [5, 1, 4, 6, 9, 11, 12, 13, 14, 15, 16, 18, 21, 22, 25, 26, 27, 29, 31, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49], [6, 0, 1, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23, 25, 26, 27, 29, 30, 32, 34, 35, 38], [7, 1, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 20, 21], [8, 0, 2, 3, 4, 5, 6, 7, 9, 11, 12, 14, 15, 16, 17, 18], [9, 0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 15, 17]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 12, 15, 16, 17, 18, 19, 20, 21, 24, 29, 32, 33, 34]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 5, 6, 7, 8, 16, 18, 19, 20, 22, 25, 26, 30, 33, 34, 36, 39, 40, 42, 44, 45, 47, 49, 50, 53, 55, 56, 57, 59, 60, 62, 63, 65]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 3, 4, 5, 6, 7, 8, 9, 10, 13, 14, 16, 20, 21, 23, 24, 26, 28, 29, 30, 31, 33, 34, 36, 37, 38, 43, 45, 46, 49, 50, 51, 52, 57, 58, 59, 61, 62, 63, 64, 65, 66, 68]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 3, 5, 6, 7, 11, 12, 13, 14, 15, 16, 17, 18, 19, 22, 23, 25, 26, 28, 29, 30, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 47, 49, 51, 57, 58, 60]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 15, 17, 18, 19, 20, 21, 23, 24, 25, 26, 27, 29, 31, 32, 33, 34, 35, 37, 40, 41, 43, 45]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 4, 6, 9, 11, 12, 13, 14, 15, 16, 18, 21, 22, 25, 26, 27, 29, 31, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 1, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23, 25, 26, 27, 29, 30, 32, 34, 35, 38]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 4, 5, 6, 7, 8, 10, 11, 12, 13, 15, 16, 18, 19, 20, 21]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 2, 3, 4, 5, 6, 7, 9, 11, 12, 14, 15, 16, 17, 18]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 15, 17]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа воплощ."} number={143} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 9, 15, 16, 19, 21, 32],[1, 5, 6, 7, 8, 34, 63],[2, 3, 14, 26, 36, 46, 63],[3, 14, 17, 18, 25, 29, 49],[4, 2, 10, 11, 23, 41],[5, 6, 12, 43, 44],[6, 23, 27, 29, 32, 38],[7, 4, 8, 13, 15],[8, 14, 17],[9, 8]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 0, 9, 15, 16, 19, 21, 32]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 6, 7, 8, 34, 63]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 14, 26, 36, 46, 63]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 14, 17, 18, 25, 29, 49]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 10, 11, 23, 41]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 6, 12, 43, 44]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 23, 27, 29, 32, 38]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 4, 8, 13, 15]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 14, 17]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 8]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа вызова"} number={144} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1],[1, 22, 30, 44, 56, 59, 60],[2, 31, 38, 45, 51, 62],[3, 3, 5, 13, 23, 39, 41],[4, 3, 7, 19, 27, 33, 34, 35, 45],[5, 4, 14, 22, 29, 46],[6, 0, 4, 10, 11, 22],[7, 1, 19, 20, 21],[8, 3, 5, 9],[9, 0, 2, 7]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 1]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22, 30, 44, 56, 59, 60]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 31, 38, 45, 51, 62]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 5, 13, 23, 39, 41]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 7, 19, 27, 33, 34, 35, 45]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 4, 14, 22, 29, 46]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 4, 10, 11, 22]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 19, 20, 21]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 3, 5, 9]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 7]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа иллюзии"} number={145} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 10],[1, 1, 26, 53],[2, 6, 8, 28, 30, 34, 52],[3, 7, 28, 37, 57],[4, 5, 8, 21],[5, 31, 40, 42, 48],[6, 5],[7, 11, 12, 18],[9, 3]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 10]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 26, 53]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 6, 8, 28, 30, 34, 52]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 28, 37, 57]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 8, 21]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 31, 40, 42, 48]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 5]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 11, 12, 18]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 3]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа некром."} number={146} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 8, 17, 34],[1, 25, 50],[2, 13, 23, 29],[3, 30, 38, 42, 43, 44, 45],[4, 43],[6, 1, 9, 25, 30],[7, 10],[8, 4, 6],[9, 13]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 8, 17, 34]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 25, 50]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 13, 23, 29]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 30, 38, 42, 43, 44, 45]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 43]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 1, 9, 25, 30]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 10]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 4, 6]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 13]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа огражд."} number={147} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 4, 25],[1, 15, 16, 19, 20, 23, 24, 39, 55, 61, 65, 66],[2, 0, 1, 7, 19, 25, 27, 35, 40, 68],[3, 12, 15, 16, 19, 21, 24, 26, 32, 47, 51],[4, 0, 1, 12, 13, 17, 24, 25, 30, 39],[5, 5, 13, 15, 17, 26, 28, 34, 37],[6, 6, 8, 21, 34, 35],[7, 5],[8, 1, 12, 16],[9, 4, 9, 15]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4, 25]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 15, 16, 19, 20, 23, 24, 39, 55, 61, 65, 66]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 1, 7, 19, 25, 27, 35, 40, 68]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 15, 16, 19, 21, 24, 26, 32, 47, 51]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 12, 13, 17, 24, 25, 30, 39]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 13, 15, 17, 26, 28, 34, 37]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 6, 8, 21, 34, 35]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 5]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 1, 12, 16]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 4, 9, 15]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа очаров."} number={148} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2, 6, 20],[1, 2, 9, 10, 14, 17, 18, 40, 46, 48, 54, 62],[2, 5, 20, 32, 39, 47, 50, 54, 65, 67],[3, 1],[4, 22, 26, 28, 36, 37, 40],[5, 1, 11, 21, 27, 38, 39, 47],[6, 12, 13, 18],[7, 17],[8, 0, 7, 10, 11, 15],[9, 14, 16, 17]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 2, 6, 20]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 9, 10, 14, 17, 18, 40, 46, 48, 54, 62]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 20, 32, 39, 47, 50, 54, 65, 67]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 22, 26, 28, 36, 37, 40]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 11, 21, 27, 38, 39, 47]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 12, 13, 18]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 17]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 7, 10, 11, 15]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 14, 16, 17]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа преобраз."} number={149} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 3, 7, 18, 24, 27, 29, 31, 33],[1, 4, 41, 42, 47, 49, 57, 58],[2, 10, 15, 16, 18, 21, 24, 37, 53, 55, 57, 58, 59, 61, 64, 66, 69],[3, 6, 11, 22, 33, 35, 46, 48, 50, 54, 55, 56, 58, 59],[4, 4, 14, 15, 18, 31],[5, 0, 25, 32, 41, 45, 49],[6, 3, 14, 15, 26, 36, 37],[7, 6, 7, 14, 16],[8, 2, 8, 13],[9, 6, 10, 11]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 3, 7, 18, 24, 27, 29, 31, 33]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 4, 41, 42, 47, 49, 57, 58]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 15, 16, 18, 21, 24, 37, 53, 55, 57, 58, 59, 61, 64, 66, 69]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 11, 22, 33, 35, 46, 48, 50, 54, 55, 56, 58, 59]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 14, 15, 18, 31]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 0, 25, 32, 41, 45, 49]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 3, 14, 15, 26, 36, 37]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 6, 7, 14, 16]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 2, 8, 13]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 6, 10, 11]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Школа прориц."} number={150} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 12, 14],[1, 27, 31, 32, 33, 36, 45, 51],[2, 4, 9, 17, 33, 41, 42, 43, 49],[3, 34, 36, 60],[4, 20, 29, 32],[5, 9, 16, 18, 23, 24, 36],[6, 7, 19],[8, 18],[9, 12]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 12, 14]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 27, 31, 32, 33, 36, 45, 51]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 9, 17, 33, 41, 42, 43, 49]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 34, 36, 60]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 20, 29, 32]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 16, 18, 23, 24, 36]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 7, 19]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 18]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 12]]} nameCard={'Волшебник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Друид"} number={151} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={152} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 3, 5, 7, 14, 18, 19, 24, 25, 26, 27, 28, 33, 34],[1, 6, 17, 19, 22, 23, 24, 31, 33, 35, 37, 40, 41, 49, 51, 57, 58, 60, 64],[2, 1, 3, 9, 12, 15, 17, 19, 22, 25, 40, 41, 42, 43, 46, 47, 48, 51, 53, 59, 64, 65, 66, 69],[3, 0, 2, 5, 9, 12, 23, 27, 33, 39, 40, 43, 46, 47, 48, 50, 53, 54, 59],[4, 4, 6, 7, 9, 10, 15, 16, 18, 21, 23, 26, 28, 29, 31, 32, 35, 39, 40, 41, 43, 44],[5, 4, 5, 7, 8, 12, 15, 17, 18, 19, 21, 24, 26, 28, 32, 35, 43, 49],[6, 2, 8, 14, 16, 19, 24, 27, 29, 33, 37],[7, 5, 6, 9, 14, 18, 20],[8, 0, 2, 3, 7, 8, 13, 17, 19],[9, 1, 5, 11, 12]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 3, 5, 7, 14, 18, 19, 24, 25, 26, 27, 28, 33, 34]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 17, 19, 22, 23, 24, 31, 33, 35, 37, 40, 41, 49, 51, 57, 58, 60, 64]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 3, 9, 12, 15, 17, 19, 22, 25, 40, 41, 42, 43, 46, 47, 48, 51, 53, 59, 64, 65, 66, 69]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 2, 5, 9, 12, 23, 27, 33, 39, 40, 43, 46, 47, 48, 50, 53, 54, 59]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 6, 7, 9, 10, 15, 16, 18, 21, 23, 26, 28, 29, 31, 32, 35, 39, 40, 41, 43, 44]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 4, 5, 7, 8, 12, 15, 17, 18, 19, 21, 24, 26, 28, 32, 35, 43, 49]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 2, 8, 14, 16, 19, 24, 27, 29, 33, 37]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 5, 6, 9, 14, 18, 20]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 2, 3, 7, 8, 13, 17, 19]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 1, 5, 11, 12]]} nameCard={'Друид'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли. Засуш"} number={157} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 15],[1, 34],[2, 52],[3, 29],[4, 43],[5, 43]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 15]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 34]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 52]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 29]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 43]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 43]]} nameCard={'Друид - круг земли(засушливая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли. Аркт"} number={158} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 9],[1, 60],[2, 65],[3, 23],[4, 10],[5, 12]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 9]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 60]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 65]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 23]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12]]} nameCard={'Друид - круг земли(арктическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли. Умер"} number={159} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 32],[1, 62],[2, 62],[3, 25],[4, 39],[5, 7]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 32]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 62]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 62]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 25]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 39]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 7]]} nameCard={'Друид - круг земли(умеренная земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли. Троп"} number={160} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0],[1, 25],[2, 38],[3, 13],[4, 31],[5, 19]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 0]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 25]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 38]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 13]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 31]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19]]} nameCard={'Друид - круг земли(тропическая земля)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг моря"} number={161} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 9],[1, 6, 60],[2, 14, 46],[3, 25, 33],[4, 4, 10],[5, 4, 47]]} nameCard={'Друид - круг земли(побережье)'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 9]]} nameCard={'Друид - моря'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 60]]} nameCard={'Друид - моря'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 46]]} nameCard={'Друид - моря'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 25, 33]]} nameCard={'Друид - моря'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 10]]} nameCard={'Друид - моря'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 4, 47]]} nameCard={'Друид - моря'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг звёзд"} number={162} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 29]]} nameCard={'Друид - круг звёзд'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг луны"} number={167} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 5],[1, 24],[2, 22],[3, 2],[4, 16],[5, 17]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 5]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[1, 24]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[2, 22]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 16]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 17]]} nameCard={'Друид - круг луны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Жрец"} number={168} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={169} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 14, 17, 18, 21, 22, 23, 25, 28, 31],[1, 2, 19, 23, 24, 28, 29, 31, 32, 33, 39, 41, 46, 48, 58, 61, 66],[2, 2, 3, 9, 10, 19, 25, 27, 29, 32, 35, 40, 42, 43, 45, 60, 65, 66, 67],[3, 0, 9, 10, 12, 19, 21, 24, 27, 30, 32, 34, 36, 43, 44, 45, 47, 49, 50, 51, 52, 59, 60],[4, 0, 1, 4, 12, 13, 15, 29, 30, 32, 38, 39, 42],[5, 2, 5, 8, 9, 13, 17, 18, 19, 20, 21, 23, 26, 30, 34, 37],[6, 6, 7, 8, 16, 17, 18, 19, 20, 28, 29, 30, 31],[7, 0, 2, 3, 5, 9, 14, 17, 20, 21],[8, 1, 2, 8, 12, 14, 17],[9, 0, 5, 9, 13, 16]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 14, 17, 18, 21, 22, 23, 25, 28, 31]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 19, 23, 24, 28, 29, 31, 32, 33, 39, 41, 46, 48, 58, 61, 66]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 3, 9, 10, 19, 25, 27, 29, 32, 35, 40, 42, 43, 45, 60, 65, 66, 67]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 9, 10, 12, 19, 21, 24, 27, 30, 32, 34, 36, 43, 44, 45, 47, 49, 50, 51, 52, 59, 60]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 4, 12, 13, 15, 29, 30, 32, 38, 39, 42]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 5, 8, 9, 13, 17, 18, 19, 20, 21, 23, 26, 30, 34, 37]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 6, 7, 8, 16, 17, 18, 19, 20, 28, 29, 30, 31]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 0, 2, 3, 5, 9, 14, 17, 20, 21]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 1, 2, 8, 12, 14, 17]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 5, 9, 13, 16]]} nameCard={'Жрец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен войны"} number={175} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 29, 66],[2, 2, 24],[3, 10, 20],[4, 23, 39],[5, 46, 47]]} nameCard={'Жрец - домен войны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 29, 66]]} nameCard={'Жрец - домен войны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 24]]} nameCard={'Жрец - домен войны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 10, 20]]} nameCard={'Жрец - домен войны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 23, 39]]} nameCard={'Жрец - домен войны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 46, 47]]} nameCard={'Жрец - домен войны'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен жизни"} number={176} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 24],[2, 25, 40],[3, 24, 27],[4, 0, 12],[5, 5, 17]]} nameCard={'Жрец - домен жизни'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 24]]} nameCard={'Жрец - домен жизни'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 25, 40]]} nameCard={'Жрец - домен жизни'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 24, 27]]} nameCard={'Жрец - домен жизни'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 12]]} nameCard={'Жрец - домен жизни'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 17]]} nameCard={'Жрец - домен жизни'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен знаний"} number={177} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 33, 36, 45, 48],[2, 33, 49],[3, 26, 47],[4, 13, 20],[5, 9, 18, 38]]} nameCard={'Жрец - домен знаний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 33, 36, 45, 48]]} nameCard={'Жрец - домен знаний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 33, 49]]} nameCard={'Жрец - домен знаний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 26, 47]]} nameCard={'Жрец - домен знаний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 20]]} nameCard={'Жрец - домен знаний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 18, 38]]} nameCard={'Жрец - домен знаний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен обмана"} number={178} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 26, 40],[2, 1, 28],[3, 7, 26],[4, 27, 40],[5, 11, 27]]} nameCard={'Жрец - домен обмана'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 26, 40]]} nameCard={'Жрец - домен обмана'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 28]]} nameCard={'Жрец - домен обмана'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 26]]} nameCard={'Жрец - домен обмана'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 27, 40]]} nameCard={'Жрец - домен обмана'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 11, 27]]} nameCard={'Жрец - домен обмана'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен света"} number={180} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 34, 35], [2, 4, 36], [3, 9, 29], [4, 20, 41], [5, 18, 20]]} nameCard={'Жрец - домен света'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 34, 35]]} nameCard={'Жрец - домен света'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 36]]} nameCard={'Жрец - домен света'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 9, 29]]} nameCard={'Жрец - домен света'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 20, 41]]} nameCard={'Жрец - домен света'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 18, 20]]} nameCard={'Жрец - домен света'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен упокоения"} number={184} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 8],[1, 32, 46],[2, 23, 29],[3, 27, 42],[4, 43],[5, 2, 34, 47]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 8]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 32, 46]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 23, 29]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 27, 42]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 43]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 34, 47]]} nameCard={'Жрец - домен упокоения'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Изобретатель"} number={188} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={189} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 9, 12, 14, 15, 16, 18, 19, 21, 24, 25, 27, 28, 29, 32, 33, 34],[1, 24, 26, 33, 35, 36, 41, 42, 47, 49, 50, 55, 56, 57, 61],[2, 0, 3, 4, 6, 7, 11, 16, 19, 21, 24, 25, 28, 37, 38, 40, 52, 53, 57, 59, 61, 64, 66],[3, 12, 16, 22, 27, 32, 33, 35, 47, 52, 54, 58, 59],[4, 3, 14, 17, 18, 19, 20, 24, 34, 39],[5, 5, 6, 13, 25, 42, 43]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 1, 9, 12, 14, 15, 16, 18, 19, 21, 24, 25, 27, 28, 29, 32, 33, 34]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 26, 33, 35, 36, 41, 42, 47, 49, 50, 55, 56, 57, 61]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 3, 4, 6, 7, 11, 16, 19, 21, 24, 25, 28, 37, 38, 40, 52, 53, 57, 59, 61, 64, 66]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 16, 22, 27, 32, 33, 35, 47, 52, 54, 58, 59]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 14, 17, 18, 19, 20, 24, 34, 39]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 6, 13, 25, 42, 43]]} nameCard={'Изобретатель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Алхимик"} number={190} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 23, 25],[2, 26, 51],[3, 6, 24],[4, 11, 12],[5, 2, 22]]} nameCard={'Изобретатель - алхимик'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 23, 25]]} nameCard={'Изобретатель - алхимик'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 26, 51]]} nameCard={'Изобретатель - алхимик'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 24]]} nameCard={'Изобретатель - алхимик'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 11, 12]]} nameCard={'Изобретатель - алхимик'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 22]]} nameCard={'Изобретатель - алхимик'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Артиллерист"} number={191} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 6, 65],[2, 14, 36],[3, 29, 53],[4, 10, 41],[5, 12, 44]]} nameCard={'Изобретатель - артиллерист'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 65]]} nameCard={'Изобретатель - артиллерист'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 36]]} nameCard={'Изобретатель - артиллерист'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 29, 53]]} nameCard={'Изобретатель - артиллерист'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10, 41]]} nameCard={'Изобретатель - артиллерист'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12, 44]]} nameCard={'Изобретатель - артиллерист'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Боевой кузнец"} number={192} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 65],[2, 35, 55],[3, 0, 4],[4, 1, 23],[5, 10, 17]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 65]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 35, 55]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 4]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 1, 23]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 17]]} nameCard={'Изобретатель - боевой кузнец'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Бронник"} number={193} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 6, 7],[2, 14, 34],[3, 7, 25],[4, 8, 23],[5, 41, 44]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 7]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 34]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 25]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 23]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 41, 44]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Картограф"} number={183} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 23, 29, 35],[2, 43, 49],[3, 34, 40, 58],[4, 13, 29, 39],[5, 14, 18]]} nameCard={'Изобретатель - бронник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 23, 29, 35]]} nameCard={'Изобретатель - картограф'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 43, 49]]} nameCard={'Изобретатель - картограф'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 34, 40, 58]]} nameCard={'Изобретатель - картограф'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 29, 39]]} nameCard={'Изобретатель - картограф'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 14, 18]]} nameCard={'Изобретатель - картограф'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Колдун"} number={194} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={195} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 2, 4, 8, 10, 12, 13, 17, 19, 20, 29, 34],[1, 0, 5, 15, 18, 19, 20, 30, 33, 40, 45, 46, 47, 51, 52, 54],[2, 5, 20, 23, 28, 31, 34, 37, 49, 54, 56, 62, 63, 65],[3, 1, 6, 7, 8, 15, 16, 17, 19, 28, 35, 38, 39, 41, 42, 47, 51, 56, 57, 60],[4, 13, 21, 25, 26, 27, 33, 37, 38, 43],[5, 14, 18, 26, 36, 38, 39, 40, 47, 48],[6, 0, 7, 9, 10, 22, 25, 30],[7, 10, 15, 20, 21],[8, 5, 7, 10, 11, 15],[9, 0, 3, 4, 6, 7, 12, 13, 14, 17]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 1, 2, 4, 8, 10, 12, 13, 17, 19, 20, 29, 34]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 5, 15, 18, 19, 20, 30, 33, 40, 45, 46, 47, 51, 52, 54]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 20, 23, 28, 31, 34, 37, 49, 54, 56, 62, 63, 65]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 6, 7, 8, 15, 16, 17, 19, 28, 35, 38, 39, 41, 42, 47, 51, 56, 57, 60]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 21, 25, 26, 27, 33, 37, 38, 43]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 14, 18, 26, 36, 38, 39, 40, 47, 48]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 7, 9, 10, 22, 25, 30]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 10, 15, 20, 21]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 5, 7, 10, 11, 15]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 3, 4, 6, 7, 12, 13, 14, 17]]} nameCard={'Колдун'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Архифея"} number={196} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 35, 62],[2, 8, 62, 67],[3, 22],[4, 8, 28],[5, 27, 31]]} nameCard={'Колдун - архифея'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 35, 62]]} nameCard={'Колдун - архифея'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 62, 67]]} nameCard={'Колдун - архифея'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 22]]} nameCard={'Колдун - архифея'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8, 28]]} nameCard={'Колдун - архифея'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 27, 31]]} nameCard={'Колдун - архифея'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Исчадие"} number={197} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 34, 48],[2, 5, 36],[3, 13, 29],[4, 23, 41],[5, 19, 21]]} nameCard={'Колдун - исчадие'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 34, 48]]} nameCard={'Колдун - исчадие'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 36]]} nameCard={'Колдун - исчадие'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 13, 29]]} nameCard={'Колдун - исчадие'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 23, 41]]} nameCard={'Колдун - исчадие'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19, 21]]} nameCard={'Колдун - исчадие'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Великий древний"} number={198} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 14, 18],[2, 8, 33],[3, 8, 34],[4, 33, 40],[5, 11, 45]]} nameCard={'Колдун - великий древний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 14, 18]]} nameCard={'Колдун - великий древний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 33]]} nameCard={'Колдун - великий древний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 34]]} nameCard={'Колдун - великий древний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 33, 40]]} nameCard={'Колдун - великий древний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 11, 45]]} nameCard={'Колдун - великий древний'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Небожитель"} number={199} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 21, 22],[1, 24, 29],[2, 25, 40],[3, 9, 27],[4, 41, 42],[5, 5, 30]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 21, 22]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 29]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 25, 40]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 9, 27]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 41, 42]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 30]]} nameCard={'Колдун - небожитель'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Нежить"} number={200} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 25, 50],[2, 8, 10],[3, 42, 45],[4, 5, 12],[5, 22, 28]]} nameCard={'Колдун - нежить'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 25, 50]]} nameCard={'Колдун - нежить'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 10]]} nameCard={'Колдун - нежить'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 42, 45]]} nameCard={'Колдун - нежить'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 12]]} nameCard={'Колдун - нежить'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 22, 28]]} nameCard={'Колдун - нежить'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Ведьмовской клинок"} number={201} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 11, 54, 65],[2, 0, 24],[3, 4, 47],[4, 22, 39],[5, 25, 46]]} nameCard={'Колдун - ведьмовской клинок'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 11, 54, 65]]} nameCard={'Колдун - ведьмовской клинок'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 24]]} nameCard={'Колдун - ведьмовской клинок'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 4, 47]]} nameCard={'Колдун - ведьмовской клинок'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 22, 39]]} nameCard={'Колдун - ведьмовской клинок'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 25, 46]]} nameCard={'Колдун - ведьмовской клинок'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Король-чародей"} number={202} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 9, 11, 48], [2, 49, 65], [3, 36, 57], [4, 22, 36], [5, 27, 38]]} nameCard={'Колдун - король-чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 9, 11, 48]]} nameCard={'Колдун - король-чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 49, 65]]} nameCard={'Колдун - король-чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 36, 57]]} nameCard={'Колдун - король-чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 22, 36]]} nameCard={'Колдун - король-чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 27, 38]]} nameCard={'Колдун - король-чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Паладин"} number={212} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={213} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 3, 4, 9, 10, 11, 13, 19, 24, 31, 32, 33, 39, 41, 43, 48, 66],[2, 19, 24, 25, 27, 29, 32, 35, 40, 43, 44, 55],[3, 0, 9, 19, 20, 27, 31, 47, 51, 52, 54],[4, 0, 1, 12, 13, 22, 29],[5, 2, 5, 10, 13, 21, 30, 33, 34]]} nameCard={'Паладин'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 3, 4, 9, 10, 11, 13, 19, 24, 31, 32, 33, 39, 41, 43, 48, 66]]} nameCard={'Паладин'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 19, 24, 25, 27, 29, 32, 35, 40, 43, 44, 55]]} nameCard={'Паладин'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 9, 19, 20, 27, 31, 47, 51, 52, 54]]} nameCard={'Паладин'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 12, 13, 22, 29]]} nameCard={'Паладин'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 5, 10, 13, 21, 30, 33, 34]]} nameCard={'Паладин'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Преданности"} number={217} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 19, 66],[2, 32, 40],[3, 21, 47],[4, 39, 42],[5, 20, 23]]} nameCard={'Паладин - клятва преданности'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 19, 66]]} nameCard={'Паладин - клятва преданности'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 32, 40]]} nameCard={'Паладин - клятва преданности'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 21, 47]]} nameCard={'Паладин - клятва преданности'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 39, 42]]} nameCard={'Паладин - клятва преданности'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 20, 23]]} nameCard={'Паладин - клятва преданности'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Древних"} number={218} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 38, 51],[2, 22, 62],[3, 12, 48],[4, 10, 18],[5, 7, 24]]} nameCard={'Паладин - клятва древних'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 38, 51]]} nameCard={'Паладин - клятва древних'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 22, 62]]} nameCard={'Паладин - клятва древних'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 48]]} nameCard={'Паладин - клятва древних'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10, 18]]} nameCard={'Паладин - клятва древних'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 7, 24]]} nameCard={'Паладин - клятва древних'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Мести"} number={219} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 27, 46],[2, 62, 65],[3, 12, 58],[4, 13, 27],[5, 18, 47]]} nameCard={'Паладин - клятва мести'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 27, 46]]} nameCard={'Паладин - клятва мести'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 62, 65]]} nameCard={'Паладин - клятва мести'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 58]]} nameCard={'Паладин - клятва мести'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 27]]} nameCard={'Паладин - клятва мести'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 18, 47]]} nameCard={'Паладин - клятва мести'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Преступник"} number={220} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 0, 5],[2, 20, 63],[3, 38, 57],[4, 5, 43],[5, 8, 46]]} nameCard={'Паладин - клятвопреступник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 5]]} nameCard={'Паладин - клятвопреступник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 20, 63]]} nameCard={'Паладин - клятвопреступник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 38, 57]]} nameCard={'Паладин - клятвопреступник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 43]]} nameCard={'Паладин - клятвопреступник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 8, 46]]} nameCard={'Паладин - клятвопреступник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Гения"} number={221} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 13, 63],[2, 8, 34],[3, 6, 35],[4, 7, 35],[5, 10, 36]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 13, 63]]} nameCard={'Паладин клятва благородных гениев'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 34]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 35]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 7, 35]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 36]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Чаростража"} number={222} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 33, 65],[2, 4, 60],[3, 15, 47],[4, 24, 39],[5, 13, 37]]} nameCard={'Паладин - клятва чаростража'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 33, 65]]} nameCard={'Паладин - клятва чаростража'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 60]]} nameCard={'Паладин - клятва чаростража'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 15, 47]]} nameCard={'Паладин - клятва чаростража'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 24, 39]]} nameCard={'Паладин - клятва чаростража'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 13, 37]]} nameCard={'Паладин - клятва чаростража'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"К.Славы"} number={224} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 29],[2, 24, 66],[3, 12, 58],[4, 36, 39],[5, 1, 9]]} nameCard={'Паладин - клятва славы'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 29]]} nameCard={'Паладин - клятва славы'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 24, 66]]} nameCard={'Паладин - клятва славы'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 58]]} nameCard={'Паладин - клятва славы'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 36, 39]]} nameCard={'Паладин - клятва славы'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 9]]} nameCard={'Паладин - клятва славы'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Следопыт"} number={226} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={227} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 12, 17, 24, 27, 31, 33, 37, 38, 49, 51, 55, 57, 60, 64],[2, 1, 15, 17, 18, 19, 24, 25, 40, 41, 42, 43, 46, 47, 48, 59, 60, 66, 69],[3, 2, 4, 9, 12, 26, 27, 33, 39, 46, 47, 48, 50, 53, 54, 55, 59],[4, 6, 18, 28, 29, 35, 39, 44],[5, 0, 3, 5, 7, 15, 24, 46]]} nameCard={'Следопыт'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 12, 17, 24, 27, 31, 33, 37, 38, 49, 51, 55, 57, 60, 64]]} nameCard={'Следопыт'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 15, 17, 18, 19, 24, 25, 40, 41, 42, 43, 46, 47, 48, 59, 60, 66, 69]]} nameCard={'Следопыт'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 4, 9, 12, 26, 27, 33, 39, 46, 47, 48, 50, 53, 54, 55, 59]]} nameCard={'Следопыт'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 6, 18, 28, 29, 35, 39, 44]]} nameCard={'Следопыт'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 0, 3, 5, 7, 15, 24, 46]]} nameCard={'Следопыт'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Сумр. охотник"} number={242} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 26],[2, 61],[3, 57],[4, 8],[5, 31]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 26]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 61]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 57]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 8]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 31]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Страж пустоты"} number={243} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 11],[2, 69],[3, 37],[4, 21],[5, 32]]} nameCard={'Следопыт - страж пустоты'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 11]]} nameCard={'Следопыт - страж пустоты'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 69]]} nameCard={'Следопыт - страж пустоты'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 37]]} nameCard={'Следопыт - страж пустоты'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 21]]} nameCard={'Следопыт - страж пустоты'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 32]]} nameCard={'Следопыт - страж пустоты'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Фейский странник"} number={244} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 40],[2, 62],[3, 39],[4, 27],[5, 48]]} nameCard={'Следопыт - фейский странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 40]]} nameCard={'Следопыт - фейский странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 62]]} nameCard={'Следопыт - фейский странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 39]]} nameCard={'Следопыт - фейский странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 27]]} nameCard={'Следопыт - фейский странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 48]]} nameCard={'Следопыт - фейский странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Зимний странник"} number={245} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22],[2, 65],[3, 51],[4, 10],[5, 12]]} nameCard={'Следопыт - зимний странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22]]} nameCard={'Следопыт - зимний странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 65]]} nameCard={'Следопыт - зимний странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 51]]} nameCard={'Следопыт - зимний странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 10]]} nameCard={'Следопыт - зимний странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12]]} nameCard={'Следопыт - зимний странник'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Чародей"} number={246} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={247} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 12, 15, 16, 18, 19, 20, 21, 24, 29, 30, 32, 33, 34],[1, 1, 5, 6, 7, 8, 16, 22, 25, 26, 33, 34, 40, 42, 45, 47, 49, 50, 53, 56, 60, 62, 63, 65],[2, 0, 4, 5, 8, 10, 12, 13, 14, 16, 20, 21, 24, 28, 31, 33, 34, 36, 37, 38, 46, 49, 50, 51, 52, 57, 58, 59, 62, 63, 64, 65, 66],[3, 1, 6, 7, 9, 11, 12, 13, 14, 15, 16, 22, 23, 25, 28, 29, 33, 34, 35, 41, 42, 47, 49, 56, 57, 58, 59, 60],[4, 2, 8, 10, 11, 13, 18, 23, 25, 26, 27, 28, 30, 31, 37, 40, 41, 43],[5, 6, 12, 14, 19, 22, 25, 27, 31, 38, 42, 43, 45, 47, 49],[6, 7, 9, 10, 11, 12, 14, 15, 25, 26, 27, 29, 35, 38],[7, 4, 6, 9, 10, 13, 16, 19, 21],[8, 3, 5, 6, 8, 11, 15, 17],[9, 0, 2, 7, 8, 10, 14, 17]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 12, 15, 16, 18, 19, 20, 21, 24, 29, 30, 32, 33, 34]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 5, 6, 7, 8, 16, 22, 25, 26, 33, 34, 40, 42, 45, 47, 49, 50, 53, 56, 60, 62, 63, 65]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 4, 5, 8, 10, 12, 13, 14, 16, 20, 21, 24, 28, 31, 33, 34, 36, 37, 38, 46, 49, 50, 51, 52, 57, 58, 59, 62, 63, 64, 65, 66]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 6, 7, 9, 11, 12, 13, 14, 15, 16, 22, 23, 25, 28, 29, 33, 34, 35, 41, 42, 47, 49, 56, 57, 58, 59, 60]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 8, 10, 11, 13, 18, 23, 25, 26, 27, 28, 30, 31, 37, 40, 41, 43]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 6, 12, 14, 19, 22, 25, 27, 31, 38, 42, 43, 45, 47, 49]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 7, 9, 10, 11, 12, 14, 15, 25, 26, 27, 29, 35, 38]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 4, 6, 9, 10, 13, 16, 19, 21]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 3, 5, 6, 8, 11, 15, 17]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 7, 8, 10, 14, 17]]} nameCard={'Чародей'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Искажённое чар."} number={248} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 20],[1, 14, 52],[2, 33, 67],[3, 8, 36],[4, 33, 45],[5, 16, 45]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"  } numbers={[[0, 20]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 14, 52]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 33, 67]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 36]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 33, 45]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 16, 45]]} nameCard={'Чародей - искажённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Драконье чар."} number={249} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 48, 63],[2, 16, 57],[3, 35, 57],[4, 20, 26],[5, 9, 29]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 48, 63]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 16, 57]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 35, 57]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 20, 26]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 29]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Чар. порядка"} number={250} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 19, 55],[2, 25, 40],[3, 12, 47],[4, 34, 39],[5, 5, 44]]} nameCard={'Чародей - чародейство порядка'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 19, 55]]} nameCard={'Чародей - чародейство порядка'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 25, 40]]} nameCard={'Чародей - чародейство порядка'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12, 47]]} nameCard={'Чародей - чародейство порядка'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 34, 39]]} nameCard={'Чародей - чародейство порядка'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 44]]} nameCard={'Чародей - чародейство порядка'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Чар. чаропламени"} number={251} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 24, 29],[2, 25, 36],[3, 0, 47],[4, 23, 41],[5, 5, 20]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 29]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 25, 36]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 47]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 23, 41]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 20]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Осквернённое чар."} number={252} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 25, 28],[2, 10, 23],[3, 42, 44],[4, 21, 43],[5, 8, 28]]} nameCard={'Чародей - осквернённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 25, 28]]} nameCard={'Чародей - осквернённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 10, 23]]} nameCard={'Чародей - осквернённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 42, 44]]} nameCard={'Чародей - осквернённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 21, 43]]} nameCard={'Чародей - осквернённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 8, 28]]} nameCard={'Чародей - осквернённое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Теневое чар."} number={253} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 28, 46],[2, 1, 63],[3, 8, 38],[4, 5],[5, 8, 42]]} nameCard={'Чародей - теневое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 28, 46]]} nameCard={'Чародей - теневое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 63]]} nameCard={'Чародей - теневое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 38]]} nameCard={'Чародей - теневое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5]]} nameCard={'Чародей - теневое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 8, 42]]} nameCard={'Чародей - теневое чародейство'} base={base5e24_ttg} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                    </>
                                </BaseTipCase>
                                <BaseTipCase name={"Dnd5e24 (dnd.su)"} number={260} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                    <>
                                        <BaseTipCase name={"Все классы"} number={261} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={262} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, -1], [1, -1], [2, -1], [3, -1], [4, -1], [5, -1], [6, -1], [7, -1], [8, -1], [9, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, -1]]} nameCard={''} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Артефактор"} number={263} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={264} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 9, 11, 13, 14, 15, 18, 20, 23, 24, 26, 27, 28, 31, 32, 33], [1, 24, 26, 28, 35, 38, 39, 43, 44, 49, 51, 57, 58, 61], [2, 2, 3, 6, 7, 12, 17, 20, 23, 26, 27, 28, 30, 31, 40, 41, 42, 51, 54, 56, 58, 61, 64], [3, 1, 11, 16, 27, 28, 31, 42, 47, 49, 51, 53], [4, 3, 34, 16, 17, 19, 20, 21, 31, 37, 25], [5, 3, 6, 12, 14, 26, 42]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 1, 9, 11, 13, 14, 15, 18, 20, 23, 24, 26, 27, 28, 31, 32, 33]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 26, 28, 35, 38, 39, 43, 44, 49, 51, 57, 58, 61]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 3, 6, 7, 12, 17, 20, 23, 26, 27, 28, 30, 31, 40, 41, 42, 51, 54, 56, 58, 61, 64]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 11, 16, 27, 28, 31, 42, 47, 49, 51, 53]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 34, 16, 17, 19, 20, 21, 31, 37, 25]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 6, 12, 14, 26, 42]]} nameCard={'Артефактор'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Алхимик"} number={265} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 23, 25], [2, 21, 27, 50], [3, 5, 18], [4, 13, 14], [5, 22, 25]]} nameCard={'Артефактор - алхимик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 23, 25]]} nameCard={'Артефактор - алхимик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 21, 27, 50]]} nameCard={'Артефактор - алхимик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 18]]} nameCard={'Артефактор - алхимик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 13, 14]]} nameCard={'Артефактор - алхимик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 22, 25]]} nameCard={'Артефактор - алхимик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Артиллерист"} number={266} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 6, 64], [2, 14, 39], [3, 24, 48], [4, 12, 39], [5, 13, 44]]} nameCard={'Артефактор - артиллерист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 64]]} nameCard={'Артефактор - артиллерист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 39]]} nameCard={'Артефактор - артиллерист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 24, 48]]} nameCard={'Артефактор - артиллерист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12, 39]]} nameCard={'Артефактор - артиллерист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 13, 44]]} nameCard={'Артефактор - артиллерист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Боевой кузнец"} number={267} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 64], [2, 38, 53], [3, 0, 37], [4, 1, 24], [5, 10, 18]]} nameCard={'Артефактор - боевой кузнец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 64]]} nameCard={'Артефактор - боевой кузнец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 38, 53]]} nameCard={'Артефактор - боевой кузнец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 37]]} nameCard={'Артефактор - боевой кузнец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 1, 24]]} nameCard={'Артефактор - боевой кузнец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 18]]} nameCard={'Артефактор - боевой кузнец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Брониик"} number={268} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 6, 7], [2, 14, 37], [3, 6, 20], [4, 9, 24], [5, 44, 41]]} nameCard={'Артефактор - брониик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 7]]} nameCard={'Артефактор - брониик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 37]]} nameCard={'Артефактор - брониик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 20]]} nameCard={'Артефактор - брониик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 9, 24]]} nameCard={'Артефактор - брониик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 44, 41]]} nameCard={'Артефактор - брониик'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Картограф"} number={269} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 23, 30, 38], [2, 45, 49], [3, 30, 36], [4, 15, 30], [5, 15, 19], [6, 21]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 23, 30, 38]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 45, 49]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 30, 36]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 15, 30]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 15, 19]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 21]]} nameCard={'Артефактор - картограф'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Бард"} number={270} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={271} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 2, 4, 5, 6, 10, 11, 15, 17, 18, 20, 23, 28], [1, 1, 6, 10, 14, 18, 19, 21, 23, 24, 26, 31, 32, 35, 38, 39, 42, 44, 47, 48, 50, 53, 55, 58, 62], [2, 3, 4, 6, 8, 11, 14, 22, 27, 30, 31, 33, 34, 35, 37, 42, 43, 45, 48, 52, 55, 57, 61, 63, 64, 65], [3, 6, 10, 12, 18, 21, 22, 23, 27, 30, 32, 39, 40, 41, 42, 43, 50, 52, 54, 55], [4, 5, 9, 10, 18, 22, 26, 27, 28, 30, 32, 36, 37, 38], [5, 3, 4, 5, 9, 11, 15, 16, 17, 18, 19, 25, 26, 27, 28, 32, 33, 39, 47, 48, 49], [6, 5, 7, 15, 16, 18, 19, 21, 26, 31], [7, 1, 2, 4, 7, 12, 13, 14, 17, 18, 19, 20, 21], [8, 0, 8, 9, 11, 14, 15], [9, 6, 11, 14, 15, 16]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 2, 4, 5, 6, 10, 11, 15, 17, 18, 20, 23, 28]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 6, 10, 14, 18, 19, 21, 23, 24, 26, 31, 32, 35, 38, 39, 42, 44, 47, 48, 50, 53, 55, 58, 62]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 4, 6, 8, 11, 14, 22, 27, 30, 31, 33, 34, 35, 37, 42, 43, 45, 48, 52, 55, 57, 61, 63, 64, 65]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 10, 12, 18, 21, 22, 23, 27, 30, 32, 39, 40, 41, 42, 43, 50, 52, 54, 55]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 9, 10, 18, 22, 26, 27, 28, 30, 32, 36, 37, 38]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 4, 5, 9, 11, 15, 16, 17, 18, 19, 25, 26, 27, 28, 32, 33, 39, 47, 48, 49]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 5, 7, 15, 16, 18, 19, 21, 26, 31]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 2, 4, 7, 12, 13, 14, 17, 18, 19, 20, 21]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 8, 9, 11, 14, 15]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 6, 11, 14, 15, 16]]} nameCard={'Бард'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Коллегия очарования"} number={272} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 50], [2, 37]]} nameCard={'Бард - коллегия очарования'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 50]]} nameCard={'Бард - коллегия очарования'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 37]]} nameCard={'Бард - коллегия очарования'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Коллегия луны"} number={273} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 24]]} nameCard={'Бард - коллегия луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Варвар"} number={274} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Путь дикого сердца"} number={275} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 53], [2, 18], [5, 24]]} nameCard={'Варвар - путь дикого сердца'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 53]]} nameCard={'Варвар - путь дикого сердца'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 18]]} nameCard={'Варвар - путь дикого сердца'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 24]]} nameCard={'Варвар - путь дикого сердца'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Воин"} number={276} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Пси-воин"} number={277} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 45]]} nameCard={'Воин - пси-воин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Волшебник"} number={278} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={279} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 23, 28, 31, 32, 33], [1, 1, 5, 6, 7, 8, 17, 19, 20, 21, 22, 25, 26, 28, 31, 32, 35, 36, 37, 39, 42, 44, 46, 47, 49, 51, 52, 55, 57, 58, 60, 62, 63, 64], [2, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 17, 21, 22, 23, 25, 26, 28, 31, 32, 33, 35, 37, 39, 40, 41, 45, 47, 49, 50, 51, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 66], [3, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31, 32, 33, 35, 38, 39, 40, 42, 44, 46, 50, 51, 52, 54, 55], [4, 2, 3, 4, 5, 6, 34, 35, 9, 12, 13, 15, 16, 17, 19, 20, 21, 22, 39, 24, 26, 27, 28, 30, 31, 32, 33, 8, 38, 25, 41, 43], [5, 1, 4, 5, 6, 9, 11, 12, 13, 14, 15, 16, 17, 19, 22, 26, 27, 28, 31, 32, 37, 44, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49], [6, 0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 23, 26, 28, 29, 31, 32, 35], [7, 1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21], [8, 0, 2, 3, 4, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17], [9, 0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 11, 14, 15, 16, 17, 18, 19, 20, 23, 28, 31, 32, 33]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 5, 6, 7, 8, 17, 19, 20, 21, 22, 25, 26, 28, 31, 32, 35, 36, 37, 39, 42, 44, 46, 47, 49, 51, 52, 55, 57, 58, 60, 62, 63, 64]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 17, 21, 22, 23, 25, 26, 28, 31, 32, 33, 35, 37, 39, 40, 41, 45, 47, 49, 50, 51, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 66]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 3, 4, 5, 6, 10, 11, 12, 13, 14, 16, 17, 20, 21, 22, 23, 24, 27, 28, 29, 30, 31, 32, 33, 35, 38, 39, 40, 42, 44, 46, 50, 51, 52, 54, 55]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 3, 4, 5, 6, 34, 35, 9, 12, 13, 15, 16, 17, 19, 20, 21, 22, 39, 24, 26, 27, 28, 30, 31, 32, 33, 8, 38, 25, 41, 43]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 4, 5, 6, 9, 11, 12, 13, 14, 15, 16, 17, 19, 22, 26, 27, 28, 31, 32, 37, 44, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 1, 2, 3, 4, 5, 7, 9, 10, 11, 12, 13, 14, 15, 16, 17, 23, 26, 28, 29, 31, 32, 35]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 3, 4, 5, 6, 7, 9, 10, 12, 13, 15, 16, 18, 19, 20, 21]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 2, 3, 4, 6, 7, 9, 10, 11, 13, 14, 15, 16, 17]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 3, 4, 6, 7, 8, 10, 11, 12, 13, 14, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Иллюзионист"} number={280} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[2, 9], [3, 3]]} nameCard={'Волшебник - иллюзионист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 9]]} nameCard={'Волшебник - иллюзионист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3]]} nameCard={'Волшебник - иллюзионист'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Оградитель"} number={281} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[3, 13, 42]]} nameCard={'Волшебник - оградитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. воплощений"} number={282} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 9, 14, 18, 20, 31], [1, 5, 6, 7, 8, 37, 63], [2, 2, 14, 21, 39, 47, 60], [3, 20, 24, 35, 44, 52, 54], [4, 2, 12, 13, 39, 24], [5, 6, 12, 13, 44, 40], [6, 10, 11, 12, 28, 35], [7, 3, 7, 13, 20], [8, 13, 16], [9, 8]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 9, 14, 18, 20, 31]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 5, 6, 7, 8, 37, 63]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 14, 21, 39, 47, 60]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 20, 24, 35, 44, 52, 54]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 12, 13, 39, 24]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 6, 12, 13, 44, 40]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 10, 11, 12, 28, 35]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3, 7, 13, 20]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 13, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 8]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. иллюзий"} number={283} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 10, 15], [1, 1, 21, 26, 55], [2, 5, 6, 8, 31, 37, 51], [3, 6, 23, 33, 50], [4, 5, 9, 22], [5, 5, 32, 42, 48], [6, 5], [7, 12, 15, 18], [9, 3]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 10, 15]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 21, 26, 55]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 5, 6, 8, 31, 37, 51]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 23, 33, 50]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 5, 9, 22]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 32, 42, 48]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 5]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 12, 15, 18]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 3]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. некромантии"} number={284} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 8, 16, 33], [1, 25, 52], [2, 1, 25, 32], [3, 2, 21, 29, 38, 39, 40], [4, 41], [6, 1, 9, 26, 29], [7, 9], [8, 6], [9, 13]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 8, 16, 33]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 25, 52]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 25, 32]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 21, 29, 38, 39, 40]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 41]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 1, 9, 26, 29]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 6]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 13]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. ограждения"} number={285} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 4], [1, 17, 20, 32, 57, 64], [2, 7, 28, 62], [3, 11, 13, 14, 22, 27, 42, 46], [4, 15, 19, 26, 25], [5, 14, 16, 27], [6, 23, 31, 32], [7, 4], [8, 10, 15], [9, 4, 14]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 17, 20, 32, 57, 64]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 7, 28, 62]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 11, 13, 14, 22, 27, 42, 46]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 15, 19, 26, 25]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 14, 16, 27]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 23, 31, 32]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 4]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 10, 15]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 4, 14]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. очарования"} number={286} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 2, 19], [1, 19, 42, 62], [2, 4, 22, 63], [4, 27, 38], [5, 4, 11, 28, 39, 47, 49], [6, 15, 16], [8, 0, 9, 11, 14], [9, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 2, 19]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 19, 42, 62]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 22, 63]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 27, 38]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 4, 11, 28, 39, 47, 49]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 15, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 9, 11, 14]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. преобразования"} number={287} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 17, 23, 28, 32], [1, 44, 49, 51, 58], [2, 11, 17, 23, 26, 41, 54, 55, 56, 58, 61, 64], [3, 5, 10, 16, 31, 51], [4, 4, 16, 17, 20, 32], [5, 26, 41, 43, 45], [6, 3, 4, 17], [7, 5, 6, 16], [8, 2], [9, 6, 10, 12]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 17, 23, 28, 32]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 44, 49, 51, 58]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 11, 17, 23, 26, 41, 54, 55, 56, 58, 61, 64]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 10, 16, 31, 51]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 16, 17, 20, 32]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 26, 41, 43, 45]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 3, 4, 17]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 5, 6, 16]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 2]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 6, 10, 12]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. призыва"} number={288} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1], [1, 22, 28, 31, 36, 46, 60], [2, 33, 40, 50, 59, 66], [3, 3, 4, 12, 17, 28], [4, 3, 6, 34, 35, 28, 31, 8, 43], [5, 1, 15, 22, 31, 46], [6, 0, 2, 13, 14], [7, 1, 10, 19, 21], [8, 3, 4, 7], [9, 0, 2, 7]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22, 28, 31, 36, 46, 60]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 33, 40, 50, 59, 66]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3, 4, 12, 17, 28]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 3, 6, 34, 35, 28, 31, 8, 43]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 15, 22, 31, 46]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 2, 13, 14]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 1, 10, 19, 21]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 3, 4, 7]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 7]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Шк. прорицания"} number={289} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 11], [1, 35, 39, 47], [2, 3, 10, 35, 45, 49], [3, 30, 32, 55], [4, 21, 30, 33], [5, 9, 17, 19, 37], [6, 7], [8, 17], [9, 11]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 11]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 35, 39, 47]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 10, 35, 45, 49]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 30, 32, 55]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 21, 30, 33]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 17, 19, 37]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 7]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 17]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 11]]} nameCard={'Волшебник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Друид"} number={290} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={291} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 3, 5, 7, 13, 17, 18, 23, 24, 25, 26, 27, 32, 33], [1, 6, 15, 18, 20, 22, 23, 24, 33, 35, 38, 40, 42, 43, 51, 53, 58, 59, 60], [2, 0, 2, 9, 10, 13, 15, 18, 20, 24, 27, 30, 42, 43, 44, 45, 46, 47, 48, 50, 56, 61, 63, 64], [3, 0, 1, 3, 4, 8, 11, 17, 28, 34, 36, 39, 41, 42, 43, 45, 48, 49, 53], [4, 4, 35, 11, 12, 17, 18, 20, 22, 39, 24, 27, 29, 30, 32, 33, 7, 8, 37, 38, 41, 42], [5, 3, 4, 7, 8, 12, 13, 16, 18, 19, 20, 24, 27, 29, 31, 33, 36, 43], [6, 3, 8, 12, 17, 19, 21, 24, 25, 28, 33, 34], [7, 4, 5, 8, 10, 14, 18], [8, 0, 2, 3, 5, 11, 12, 16, 18], [9, 1, 5, 11, 12]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 3, 5, 7, 13, 17, 18, 23, 24, 25, 26, 27, 32, 33]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 15, 18, 20, 22, 23, 24, 33, 35, 38, 40, 42, 43, 51, 53, 58, 59, 60]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 2, 9, 10, 13, 15, 18, 20, 24, 27, 30, 42, 43, 44, 45, 46, 47, 48, 50, 56, 61, 63, 64]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 1, 3, 4, 8, 11, 17, 28, 34, 36, 39, 41, 42, 43, 45, 48, 49, 53]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 35, 11, 12, 17, 18, 20, 22, 39, 24, 27, 29, 30, 32, 33, 7, 8, 37, 38, 41, 42]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 4, 7, 8, 12, 13, 16, 18, 19, 20, 24, 27, 29, 31, 33, 36, 43]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 3, 8, 12, 17, 19, 21, 24, 25, 28, 33, 34]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 4, 5, 8, 10, 14, 18]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 0, 2, 3, 5, 11, 12, 16, 18]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 1, 5, 11, 12]]} nameCard={'Друид'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг звёзд"} number={292} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 13], [1, 30]]} nameCard={'Друид - круг звёзд'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 13]]} nameCard={'Друид - круг звёзд'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 30]]} nameCard={'Друид - круг звёзд'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли (засуш)"} number={293} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 14], [1, 37], [2, 51], [3, 24], [4, 41], [5, 12]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 14]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 37]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 51]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 24]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 41]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 12]]} nameCard={'Друид - круг земли (засушливая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли (поляр)"} number={294} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 9], [1, 60], [2, 63], [3, 17], [4, 12], [5, 13]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 9]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 60]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 63]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 17]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 13]]} nameCard={'Друид - круг земли (полярная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли (умерен)"} number={295} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 31], [1, 62], [2, 59], [3, 20], [4, 37], [5, 7]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 31]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 62]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 59]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 20]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 37]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 7]]} nameCard={'Друид - круг земли (умеренная местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг земли (тропич)"} number={296} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0], [1, 25], [2, 40], [3, 12], [4, 32], [5, 20]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 25]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 40]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 12]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 32]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 20]]} nameCard={'Друид - круг земли (тропическая местность)'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг луны"} number={297} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 5], [1, 24], [2, 24], [3, 34], [4, 18], [5, 18]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 5]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 24]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 34]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 18]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 18]]} nameCard={'Друид - круг луны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Круг моря"} number={298} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 9], [1, 6, 60], [2, 14, 47], [3, 20, 28], [4, 4, 12], [5, 31, 47]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 9]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 6, 60]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 14, 47]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 20, 28]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 4, 12]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 31, 47]]} nameCard={'Друид - круг моря'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Жрец"} number={299} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={300} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 13, 16, 17, 20, 21, 22, 24, 27, 30], [1, 2, 20, 23, 24, 29, 30, 32, 33, 34, 35, 43, 48, 50, 59, 61, 65], [2, 2, 10, 11, 16, 20, 27, 29, 32, 34, 38, 42, 44, 45, 57, 63, 64, 65, 66], [3, 0, 1, 8, 9, 11, 14, 15, 18, 21, 27, 29, 30, 32, 39, 40, 42, 44, 45, 46, 47, 53, 55], [4, 0, 1, 4, 10, 14, 15, 17, 30, 33, 37, 40], [5, 2, 3, 4, 8, 9, 14, 18, 19, 20, 21, 23, 25, 27, 35, 38], [6, 6, 7, 8, 18, 19, 20, 21, 22, 27, 28, 29, 30], [7, 0, 2, 4, 8, 10, 11, 14, 17, 21], [8, 1, 2, 5, 10, 13, 16], [9, 0, 5, 9, 13, 15]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 13, 16, 17, 20, 21, 22, 24, 27, 30]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 20, 23, 24, 29, 30, 32, 33, 34, 35, 43, 48, 50, 59, 61, 65]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 2, 10, 11, 16, 20, 27, 29, 32, 34, 38, 42, 44, 45, 57, 63, 64, 65, 66]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 1, 8, 9, 11, 14, 15, 18, 21, 27, 29, 30, 32, 39, 40, 42, 44, 45, 46, 47, 53, 55]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 4, 10, 14, 15, 17, 30, 33, 37, 40]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 3, 4, 8, 9, 14, 18, 19, 20, 21, 23, 25, 27, 35, 38]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 6, 7, 8, 18, 19, 20, 21, 22, 27, 28, 29, 30]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 0, 2, 4, 8, 10, 11, 14, 17, 21]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 1, 2, 5, 10, 13, 16]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 5, 9, 13, 15]]} nameCard={'Жрец'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен войны"} number={301} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 30, 65], [2, 16, 26], [3, 9, 25], [4, 24, 37], [5, 46, 47]]} nameCard={'Жрец - домен войны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 30, 65]]} nameCard={'Жрец - домен войны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 16, 26]]} nameCard={'Жрец - домен войны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 9, 25]]} nameCard={'Жрец - домен войны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 24, 37]]} nameCard={'Жрец - домен войны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 46, 47]]} nameCard={'Жрец - домен войны'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен жизни"} number={302} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 24], [2, 27, 42], [3, 1, 18], [4, 0, 14], [5, 3, 18]]} nameCard={'Жрец - домен жизни'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 24]]} nameCard={'Жрец - домен жизни'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 27, 42]]} nameCard={'Жрец - домен жизни'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 18]]} nameCard={'Жрец - домен жизни'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 14]]} nameCard={'Жрец - домен жизни'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 18]]} nameCard={'Жрец - домен жизни'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен обмана"} number={303} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 26, 42], [2, 0, 31], [3, 6, 22], [4, 28, 38], [5, 11, 28]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 26, 42]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 31]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 6, 22]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 28, 38]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 11, 28]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен обмана"} number={304} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 37, 38], [2, 3, 39], [3, 8, 24], [4, 21, 39], [5, 19, 21]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 37, 38]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 3, 39]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 24]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 21, 39]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19, 21]]} nameCard={'Жрец - домен обмана'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Домен знаний"} number={305} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 35, 39, 47, 50], [2, 35, 49], [3, 22, 42, 55], [4, 15, 21, 38], [5, 9, 19, 39]]} nameCard={'Жрец - домен знаний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 35, 39, 47, 50]]} nameCard={'Жрец - домен знаний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 35, 49]]} nameCard={'Жрец - домен знаний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 22, 42, 55]]} nameCard={'Жрец - домен знаний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 15, 21, 38]]} nameCard={'Жрец - домен знаний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 19, 39]]} nameCard={'Жрец - домен знаний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Колдун"} number={306} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={307} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 1, 2, 4, 8, 10, 11, 12, 16, 18, 19, 28, 33], [1, 0, 5, 16, 19, 20, 21, 31, 35, 42, 47, 48, 49, 53, 54, 56], [2, 4, 22, 25, 31, 33, 37, 41, 49, 52, 59, 60, 63], [3, 2, 3, 5, 6, 7, 13, 14, 23, 31, 38, 42, 46, 50, 55], [4, 6, 10, 15, 22, 26, 27, 28, 41], [5, 5, 15, 19, 27, 37, 39, 40, 47, 48], [6, 0, 2, 7, 9, 13, 26, 29], [7, 9, 10, 20, 21], [8, 4, 8, 9, 11, 14], [9, 0, 3, 4, 6, 7, 11, 13, 16]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1, 2, 4, 8, 10, 11, 12, 16, 18, 19, 28, 33]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 0, 5, 16, 19, 20, 21, 31, 35, 42, 47, 48, 49, 53, 54, 56]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 4, 22, 25, 31, 33, 37, 41, 49, 52, 59, 60, 63]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 2, 3, 5, 6, 7, 13, 14, 23, 31, 38, 42, 46, 50, 55]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 6, 10, 15, 22, 26, 27, 28, 41]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 5, 15, 19, 27, 37, 39, 40, 47, 48]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 0, 2, 7, 9, 13, 26, 29]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 9, 10, 20, 21]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 4, 8, 9, 11, 14]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 3, 4, 6, 7, 11, 13, 16]]} nameCard={'Колдун'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Великий древний"} number={308} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 14, 19], [2, 35, 8], [3, 30, 7], [4, 38, 6], [5, 11, 45]]} nameCard={'Колдун - великий древний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 14, 19]]} nameCard={'Колдун - великий древний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 35, 8]]} nameCard={'Колдун - великий древний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 30, 7]]} nameCard={'Колдун - великий древний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 38, 6]]} nameCard={'Колдун - великий древний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 11, 45]]} nameCard={'Колдун - великий древний'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Архифея"} number={309} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 38, 62], [2, 8, 59, 65], [3, 16, 43], [4, 9, 29], [5, 28, 32]]} nameCard={'Колдун - архифея'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 38, 62]]} nameCard={'Колдун - архифея'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 59, 65]]} nameCard={'Колдун - архифея'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 16, 43]]} nameCard={'Колдун - архифея'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 9, 29]]} nameCard={'Колдун - архифея'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 28, 32]]} nameCard={'Колдун - архифея'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Исчадие"} number={310} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 37, 50], [2, 39, 4], [3, 24, 12], [4, 24, 39], [5, 4, 20]]} nameCard={'Колдун - исчадие'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 37, 50]]} nameCard={'Колдун - исчадие'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 39, 4]]} nameCard={'Колдун - исчадие'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 24, 12]]} nameCard={'Колдун - исчадие'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 24, 39]]} nameCard={'Колдун - исчадие'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 4, 20]]} nameCard={'Колдун - исчадие'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Небожитель"} number={311} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 20, 21], [1, 24, 30], [2, 42, 27], [3, 8, 1], [4, 40, 39], [5, 3, 2]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 20, 21]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 30]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 42, 27]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 8, 1]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 40, 39]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 2]]} nameCard={'Колдун - небожитель'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Монах"} number={312} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Воин тени"} number={313} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 10], [2, 60]]} nameCard={'Монах - воин тени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 10]]} nameCard={'Монах - воин тени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 60]]} nameCard={'Монах - воин тени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Воин стихий"} number={314} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 32]]} nameCard={'Монах - воин стихий'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 32]]} nameCard={'Монах - воин стихий'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Паладин"} number={315} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={316} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 2, 3, 4, 9, 10, 11, 13, 20, 24, 32, 33, 34, 35, 43, 45, 50, 65], [2, 20, 26, 27, 29, 32, 34, 36, 38, 42, 45, 53], [3, 0, 1, 8, 14, 25, 26, 42, 46, 47, 49], [4, 0, 1, 14, 15, 23, 30], [5, 2, 3, 4, 10, 14, 25, 34, 35]]} nameCard={'Паладин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 2, 3, 4, 9, 10, 11, 13, 20, 24, 32, 33, 34, 35, 43, 45, 50, 65]]} nameCard={'Паладин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 20, 26, 27, 29, 32, 34, 36, 38, 42, 45, 53]]} nameCard={'Паладин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 1, 8, 14, 25, 26, 42, 46, 47, 49]]} nameCard={'Паладин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 0, 1, 14, 15, 23, 30]]} nameCard={'Паладин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 2, 3, 4, 10, 14, 25, 34, 35]]} nameCard={'Паладин'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Кл. благ. гениев"} number={317} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 32], [1, 13, 63], [2, 8, 37], [3, 5, 31], [4, 35, 8], [5, 10, 37]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 32]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 13, 63]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 8, 37]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 31]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 35, 8]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 10, 37]]} nameCard={'Паладин - клятва благородных гениев'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Клятва возмездия"} number={318} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 27, 48], [2, 59, 63], [3, 11, 51], [4, 15, 28], [5, 19, 47]]} nameCard={'Паладин - клятва возмездия'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 27, 48]]} nameCard={'Паладин - клятва возмездия'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 59, 63]]} nameCard={'Паладин - клятва возмездия'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 11, 51]]} nameCard={'Паладин - клятва возмездия'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 15, 28]]} nameCard={'Паладин - клятва возмездия'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 19, 47]]} nameCard={'Паладин - клятва возмездия'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Клятва древних"} number={319} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 41, 53], [2, 24, 59], [3, 11, 43], [4, 12, 20], [5, 7, 24]]} nameCard={'Паладин - клятва древних'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 41, 53]]} nameCard={'Паладин - клятва древних'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 24, 59]]} nameCard={'Паладин - клятва древних'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 11, 43]]} nameCard={'Паладин - клятва древних'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12, 20]]} nameCard={'Паладин - клятва древних'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 7, 24]]} nameCard={'Паладин - клятва древних'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Кл. преданности"} number={320} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 20, 65], [2, 34, 42], [3, 15, 42], [4, 37, 40], [5, 21, 23]]} nameCard={'Паладин - клятва преданности'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 20, 65]]} nameCard={'Паладин - клятва преданности'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 34, 42]]} nameCard={'Паладин - клятва преданности'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 15, 42]]} nameCard={'Паладин - клятва преданности'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 37, 40]]} nameCard={'Паладин - клятва преданности'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 21, 23]]} nameCard={'Паладин - клятва преданности'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Клятва славы"} number={321} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 10, 30], [2, 26, 64], [3, 11, 51], [4, 36, 37], [5, 9, 49]]} nameCard={'Паладин - клятва славы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 10, 30]]} nameCard={'Паладин - клятва славы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 26, 64]]} nameCard={'Паладин - клятва славы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 11, 51]]} nameCard={'Паладин - клятва славы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 36, 37]]} nameCard={'Паладин - клятва славы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 9, 49]]} nameCard={'Паладин - клятва славы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Плут"} number={322} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Мистич. ловкач"} number={323} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Заговор"} numbers={[[0, 1]]} nameCard={'Плут - мистический ловкач'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Наследник троицы"} number={324} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Заговор"} numbers={[[0, 4, 8, 10]]} nameCard={'Плут - наследник троицы'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Следопыт"} number={325} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={326} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 12, 15, 18, 24, 27, 33, 35, 40, 41, 51, 53, 57, 58, 60], [2, 0, 9, 15, 18, 19, 20, 26, 27, 42, 43, 44, 45, 46, 47, 48, 56, 57, 64], [3, 1, 3, 8, 11, 19, 22, 28, 34, 37, 41, 42, 43, 45, 48, 49, 53], [4, 35, 20, 29, 30, 7, 37, 42], [5, 0, 3, 7, 16, 24, 30, 46]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 12, 15, 18, 24, 27, 33, 35, 40, 41, 51, 53, 57, 58, 60]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 0, 9, 15, 18, 19, 20, 26, 27, 42, 43, 44, 45, 46, 47, 48, 56, 57, 64]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 1, 3, 8, 11, 19, 22, 28, 34, 37, 41, 42, 43, 45, 48, 49, 53]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 35, 20, 29, 30, 7, 37, 42]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 0, 3, 7, 16, 24, 30, 46]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Зимний ходок"} number={329} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 22], [2, 63], [3, 46], [4, 12], [5, 13]]} nameCard={'Следопыт - зимний ходок'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 22]]} nameCard={'Следопыт - зимний ходок'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 63]]} nameCard={'Следопыт - зимний ходок'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 46]]} nameCard={'Следопыт - зимний ходок'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 12]]} nameCard={'Следопыт - зимний ходок'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 13]]} nameCard={'Следопыт - зимний ходок'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Странник фей"} number={327} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 42], [2, 59], [3, 3], [4, 28], [5, 48]]} nameCard={'Следопыт'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 42]]} nameCard={'Следопыт - странник фей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 59]]} nameCard={'Следопыт - странник фей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 3]]} nameCard={'Следопыт - странник фей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 28]]} nameCard={'Следопыт - странник фей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 48]]} nameCard={'Следопыт - странник фей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Сумрач. охотник"} number={328} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 26], [2, 58], [3, 50], [4, 9], [5, 32]]} nameCard={'Следопыт - суирачный охотник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 26]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 58]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 50]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 9]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 32]]} nameCard={'Следопыт - сумрачный охотник'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                        <BaseTipCase name={"Чародей"} number={329} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                            <>
                                                <BaseTipCase name={"Все"} number={330} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 23, 28, 29, 31, 32, 33], [1, 1, 5, 6, 7, 8, 17, 22, 25, 26, 28, 35, 37, 42, 44, 47, 49, 51, 52, 55, 60, 62, 63, 64], [2, 1, 3, 4, 8, 11, 13, 14, 17, 22, 23, 26, 28, 31, 33, 35, 37, 39, 40, 41, 47, 49, 50, 51, 54, 55, 56, 59, 60, 61, 63, 64], [3, 5, 6, 8, 10, 11, 12, 13, 16, 17, 20, 23, 24, 28, 30, 31, 38, 42, 44, 50, 51, 53, 54, 55], [4, 2, 9, 12, 13, 15, 20, 39, 24, 26, 27, 28, 29, 32, 38, 41], [5, 6, 12, 13, 15, 20, 22, 26, 28, 32, 39, 42, 43, 45, 47], [6, 3, 4, 7, 9, 11, 12, 13, 15, 17, 26, 28, 32, 35], [7, 3, 5, 8, 9, 10, 13, 16, 19, 21], [8, 3, 4, 5, 9, 14, 16], [9, 0, 2, 7, 8, 10, 16]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 0, 1, 2, 4, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20, 23, 28, 29, 31, 32, 33]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 1, 5, 6, 7, 8, 17, 22, 25, 26, 28, 35, 37, 42, 44, 47, 49, 51, 52, 55, 60, 62, 63, 64]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 1, 3, 4, 8, 11, 13, 14, 17, 22, 23, 26, 28, 31, 33, 35, 37, 39, 40, 41, 47, 49, 50, 51, 54, 55, 56, 59, 60, 61, 63, 64]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 5, 6, 8, 10, 11, 12, 13, 16, 17, 20, 23, 24, 28, 30, 31, 38, 42, 44, 50, 51, 53, 54, 55]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 2, 9, 12, 13, 15, 20, 39, 24, 26, 27, 28, 29, 32, 38, 41]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 6, 12, 13, 15, 20, 22, 26, 28, 32, 39, 42, 43, 45, 47]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 6"} numbers={[[6, 3, 4, 7, 9, 11, 12, 13, 15, 17, 26, 28, 32, 35]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 7"} numbers={[[7, 3, 5, 8, 9, 10, 13, 16, 19, 21]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 8"} numbers={[[8, 3, 4, 5, 9, 14, 16]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 9"} numbers={[[9, 0, 2, 7, 8, 10, 16]]} nameCard={'Чародей'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Аберрантное"} number={331} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[0, 19], [1, 14, 54], [2, 35, 65], [3, 7, 32], [4, 6, 43], [5, 17, 45]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Заговор"} numbers={[[0, 19]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 14, 54]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 35, 65]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 7, 32]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 6, 43]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 17, 45]]} nameCard={'Чародей - аберрантное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Заводное"} number={332} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 20, 57], [2, 27, 42], [3, 11, 42], [4, 34, 37], [5, 3, 44]]} nameCard={'Чародей - заводное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 20, 57]]} nameCard={'Чародей - заводное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 27, 42]]} nameCard={'Чародей - заводное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 11, 42]]} nameCard={'Чародей - заводное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 34, 37]]} nameCard={'Чародей - заводное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 44]]} nameCard={'Чародей - заводное чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Драконье"} number={333} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 50, 63], [2, 17, 54], [3, 31, 50], [4, 21, 27], [5, 1, 9]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 50, 63]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 17, 54]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 31, 50]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 21, 27]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 1, 9]]} nameCard={'Чародей - драконье чародейство'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                                <BaseTipCase name={"Чаропламени"} number={334} openThis={openThisBaseCase} setOpenThis={setOpenThisBaseCas}>
                                                    <>
                                                        <BaseTip name={"Все уровни"} numbers={[[1, 24, 30], [2, 27, 39], [3, 0, 42], [4, 24, 39], [5, 3, 21]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 1"} numbers={[[1, 24, 30]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 2"} numbers={[[2, 27, 39]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 3"} numbers={[[3, 0, 42]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 4"} numbers={[[4, 24, 39]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                        <BaseTip name={"Уровень 5"} numbers={[[5, 3, 21]]} nameCard={'Чародей - чародейство чаропламени'} base={base5e24_dndsu} setTargetBase={setOpenThisBas} />
                                                    </>
                                                </BaseTipCase>
                                            </>
                                        </BaseTipCase>
                                    </>
                                </BaseTipCase>
                            </div>
                        </div>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>CSV</div>
                            <div className={style.CSVText}>
                                <textarea value={CSV} name="CSVText" id="CSVText" wrap='off' onChange={(e) => { setCSV(e.target.value); }} />
                            </div>
                            <div className={style.Buttons}>
                                <input className={style.DownloadInput} type="file" id="InputFile" onChange={readFile} />
                                <label className={style.Download} htmlFor="InputFile">Загрузить файл</label>
                                <div className={style.Obnova}>
                                    <div className={style.Download} onClick={() => { setMakeCSV(makeCSV + 1) }}>Обновить карточки</div>
                                    {needUpdate ? <div className={style.NeedUpdate}>!</div> : null}
                                </div>
                                <div className={style.Download} onClick={downloadFile}>Скачать файл</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {
                !isCSVRedactor
                    ? <div className={style.Lists + ' ' + (showRedactor ? style.ListDown : '') + ' ' + (showOptions ? style.ListRigth : '')}> {getCards()} </div>
                    : <div className={style.AroundTwoCards + (showOptions ? ' ' + style.AddPadRig : '')}>
                        <div className={style.TwoCards}>
                            <div className={style.OneCard}><CardSpell startPerepolnen={startPerepolnen} keyt={-1} plusPerepolnen={plusPerepolnen} minMax={minMax} cardType={targetTypeCardNumber} Pole={newCard} /></div>
                            <div className={style.OneCard}><CardSpell NumbersExist={myNumbers} isBack={true} keyt={-1} cardType={targetTypeCardNumber} Pole={newCard}>{getBackCardImg(newCard[16])}{getRamkaImg(newCard[17])}</CardSpell></div>
                            <div className={style.CardSelection}>
                                <div>
                                    <input placeholder='Заголовок' type="text" value={newCard[0]} onChange={(e) => { const A = newCard; A[0] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Школа-уровень' type="text" value={newCard[1]} onChange={(e) => { const A = newCard; A[1] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Опция 1' type="text" value={newCard[2]} onChange={(e) => { const A = newCard; A[2] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Текст опции 1' type="text" value={newCard[3]} onChange={(e) => { const A = newCard; A[3] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Опция 2' type="text" value={newCard[4]} onChange={(e) => { const A = newCard; A[4] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Текст опции 2' type="text" value={newCard[5]} onChange={(e) => { const A = newCard; A[5] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Опция 3' type="text" value={newCard[6]} onChange={(e) => { const A = newCard; A[6] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Текст опции 3' type="text" value={newCard[7]} onChange={(e) => { const A = newCard; A[7] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Опция 4' type="text" value={newCard[8]} onChange={(e) => { const A = newCard; A[8] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Текст опции 4' type="text" value={newCard[9]} onChange={(e) => { const A = newCard; A[9] = e.target.value; setPoles(A) }} />
                                    <input placeholder='///' type="text" value={newCard[10]} onChange={(e) => { const A = newCard; A[10] = e.target.value; setPoles(A) }} />
                                    <textarea placeholder='Главный текст' rows={6} value={newCard[11]} onChange={(e) => { const A = newCard; A[11] = e.target.value; setPoles(A) }} />
                                    <input placeholder='На более высоком уровне' type="text" value={newCard[12]} onChange={(e) => { const A = newCard; A[12] = e.target.value; setPoles(A) }} />
                                    <textarea placeholder='Доп текст' rows={6} value={newCard[13]} onChange={(e) => { const A = newCard; A[13] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Подпись' type="text" value={newCard[14]} onChange={(e) => { const A = newCard; A[14] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Номер на рубахе' type="text" value={newCard[15]} onChange={(e) => { const A = newCard; A[15] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Номер рубахи' type="text" value={newCard[16]} onChange={(e) => { const A = newCard; A[16] = e.target.value; setPoles(A) }} />
                                    <input placeholder='Номер рамки' type="text" value={newCard[17]} onChange={(e) => { const A = newCard; A[17] = e.target.value; setPoles(A) }} />
                                </div>
                            </div>
                        </div>
                    </div>
            }
        </div>
    );
}
export default SpellMain;