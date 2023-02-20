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
import OptionAllain from '../OptionAllain/OptionAllain';
type AlertProps = {
};
const SpellMain = ({ }: AlertProps): JSX.Element => {
    const maxLength = 15;
    const [cards, setCards] = useState<string[][]>([]);
    const [newCard, setNewCard] = useState<string[]>([]);
    const [CSV, setCSV] = useState("");
    const newConst = "\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\" \";\"\";\"\";\"\";";
    const [newCSV, setNewCSV] = useState("\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\"\";\" \";\"\";\"\";\"\";");
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
    const [sizeText, setSizesText] = useState([14, 11, 11, 11, 10, 10, 10, 10, 14, 14, 14, 14, 14, 20, 5, 200, 5, 200, 264, 20, 264, 70, 70, 70, 70]);
    const [paddingText, setPaddingText] = useState([4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 2, 2, 4, 10, 9]);
    const [alignValue, setAlignValue] = useState([2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4, 1]);
    const [borderRadiusValue, setBorderRadiusValue] = useState([11, 11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 11, 11]);
    const [kolvo, setKolvo] = useState(3);
    const [targetBackgroundNumber, setTargetBackgroundNumber] = useState(1);
    const [targetTypeCardNumber, setTargetTypeCardNumber] = useState(0);
    const perepolnen: boolean[] = [];
    const [perepolnenText, setPerepolnenText] = useState('');
    const [startPerepolnen, setStartPerepolnen] = useState(0);
    const [isBack, setIsBack] = useState(false);
    const [myNumbers, setMyNumbers] = useState([true, false, true, false]);
    const fontMas = ["BookerlyBold", "BookerlyBoldItalic", "BookerlyDisplayBoldItalic", "BookerlyDisplay", "BookerlyItalic", "BookerlyLightItalic", "BookerlyLight", "Bookerly", "EtnaFreeFont", "GogonoCocoaMochiCyrillic", "GULAGPavljenko", "HellasDustCyrillic", "MorningBreezeBold", "MorningBreezeItalic", "MorningBreezeLight", "MorningBreeze", "OldSoviet", "SquareMeal", "ZarubkaTypeRegular", "ZaychikRegular"];
    const [targetFont1, setTargetFont1] = useState(7);
    const [targetFont2, setTargetFont2] = useState(7);
    const [isCSVRedactor, setIsCSVRedactor] = useState(false);
    const setTarget = (a: number, b: boolean) => {
        const M = [];
        for (let i = 0; i < targetOption.length; i++) M[i] = false;
        M[a] = b;
        setTargetOptions(M);
    };
    const setKolv = (a: number) => {
        setKolvo(a);
    };
    useEffect(() => {
        let Car :string[] = [];
        getCardFromCSVLine(newCSV, Car, 0, newCSV.length - 1, '');
        setNewCard(Car);
    }, [newCSV]);
    useEffect(() => {
        for (let i = 0; i < 40; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(colorsNames[i], colors[i]);
    }, [colors]);
    useEffect(() => {
        for (let i = 0; i < 30; i++) document.getElementById("ThisIsColorsConst")?.style.setProperty(sizePoleNames[i], String(sizePole[i]) + 'px' );
    }, [sizePole]);
    useEffect(() => {
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--w", String(kolvo) );
        document.getElementById("ThisIsColorsConst")?.style.setProperty("--h", String(kolvo) );
    }, [kolvo]);
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
        if (V[33]) M[33] = M[28];
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
                setCSV("\"Дубинка\";\"Заговор, преобразование\";\"Время накладывания\";\"1 бонусное действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"1 минута\";\"\";\"Компоненты: омела, лист клевера и дубинка или боевой посохЏДерево дубинки или боевого посоха, который вы держите, наполняется силой природы. Пока заклинание активно, вы можете использовать свою базовую характеристику вместо Силы для бросков рукопашной атаки и урона при использовании этого оружия, и кость урона становится равной к8. Если оружие не было магическим, оно становится им. Заклинание оканчивается, если вы наложите его ещё раз или выпустите оружие из рук.\";\"\";\"\";\"Друид\";\"0\";\"\";\n\"Починка\";\"Заговор, преобразование\";\"Время накладывания\";\"1 минута\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"Мгновенная\";\"\";\"Компоненты: два магнетитаЏЭто заклинание чинит одно повреждение или разрыв на предмете, которого касаетесь, например, разорванное звено цепи, две половинки сломанного ключа, порванный плащ или протекающий бурдюк. Если повреждение или разрыв не больше 1 фута в любом измерении, вы чините его, не оставляя следов.ЏЭто заклинание может физически починить магический предмет или Конструкта, но не может восстановить магию в таких предметах.\";\"\";\"\";\"Друид\";\"0\";\"\";\n\"Искусство друидов\";\"Заговор, преобразование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"30 футов\";\"Компоненты\";\"В, С\";\"Длительность\";\"Мгновенная\";\"\";\"Пошептавшись с духами природы, вы создаёте один из следующих эффектов в пределах дистанции:Џ●Вы создаёте крохотный безвредный ощутимый эффект, предсказывающий погоду в текущем месте в течение следующих 24 часов. Это может быть золотистый шарик, означающий ясную погоду, облачко, означающее дождь, снежинка, и так далее. Эффект длится 1 раунд.Џ●Вы мгновенно заставляете цветок распуститься, семечко прорасти, или почку раскрыться.Џ●Вы создаёте мгновенный безвредный ощутимый эффект, такой как падающие листья, порыв ветра, звук маленького животного, или слабый запах скунса. Эффект должен находиться в кубе с длиной ребра 5 футов.Џ●Вы мгновенно зажигаете или тушите свечу, факел или небольшой костёр.\";\"\";\"\";\"Друид\";\"0\";\"\";\n\"Сопротивление\";\"Заговор, ограждение\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"К до 1 минуты\";\"\";\"Компоненты: крошечный плащЏВы касаетесь одного согласного существа. Пока заклинание активно, цель может один раз бросить к4 и добавить выпавшее число к одному спасброску на свой выбор. Кость можно кидать до или после спасброска. После этого заклинание оканчивается.\";\"\";\"\";\"Друид\";\"0\";\"\";\n\"Сотворение пламени\";\"Заговор, вызов\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"На себя\";\"Компоненты\";\"В, С\";\"Длительность\";\"10 минут\";\"\";\"В вашей ладони появляется мерцающее пламя. Оно остаётся там, пока заклинание активно, и не вредит ни вам, ни вашему снаряжению. Огонь испускает яркий свет в радиусе 10 футов и тусклый свет в пределах ещё 10 футов. Заклинание оканчивается, если вы оканчиваете его действием или накладываете ещё раз.ЏВы можете атаковать этим пламенем, но это тоже оканчивает заклинание. Когда вы накладываете это заклинание, или другим действием в одном из последующих ходов вы можете метнуть пламя в существо, находящееся в пределах 30 футов от вас. Совершите дальнобойную атаку заклинанием. При попадании цель получает урон огнём 1к8.\";\"На более высоком уровне\";\"Урон этого заклинания увеличивается на 1к8, когда вы достигаете 5-го уровня (2к8), 11-го уровня (3к8) и 17-го уровня (4к8).\";\"Друид\";\"0\";\"\";\n\"Терновый кнут\";\"Заговор, преобразование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"30 футов\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"Мгновенная\";\"\";\"Компоненты: стебель растения с шипами.ЏВы создаёте длинный, похожий на лозу кнут, покрытый шипами, бьющий по вашей команде существо, находящееся в пределах дистанции. Совершите рукопашную атаку заклинанием по цели. Если атака попадает, существо получает колющий урон 1к6, и если размер существа не больше Большого, вы подтягиваете существо на 10 футов к себе.\";\"На более высоком уровне\";\"Урон этого заклинания увеличивается на 1к6, когда вы достигаете 5 уровня (2к6), 11 уровня (3к6) и 17 уровня (4к6).\";\"Друид\";\"0\";\"\";\n\"Указание\";\"Заговор, прорицание\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С\";\"Длительность\";\"К до 1 минуты\";\"\";\"Вы касаетесь одного согласного существа. Один раз, пока заклинание активно, цель может бросить 1к4 и добавить выпавшее число к одной проверке характеристики на свой выбор. Эту кость можно бросить до или после совершения проверки. После этого заклинание оканчивается.\";\"На более высоком уровне\";\"\";\"Друид\";\"0\";\"\";\n\"Ядовитые брызги\";\"Заговор, вызов\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"10 футов\";\"Компоненты\";\"В, С\";\"Длительность\";\"Мгновенная\";\"\";\"Вы простираете руку к существу, видимому в пределах дистанции, и выпускаете из ладони клубы токсичного газа. Это существо должно преуспеть в спасброске Телосложения, иначе оно получит урон ядом 1к12.\";\"На более высоком уровне\";\"Урон этого заклинания увеличивается на 1к12, когда вы достигаете 5-го уровня (2к12), 11-го уровня (3к12) и 17-го уровня (4к12).\";\"Друид\";\"0\";\"\";");
                break;
            case 1:
                setCSV("\"Волна грома\";\"1 уровень, воплощение\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"На себя\";\"Компоненты\";\"В, С\";\"Длительность\";\"Мгновенная\";\"\";\"От вас исходит волна громовой силы. Все существа в кубе с длиной ребра 15 футов, исходящего от вас, должны совершить спасбросок Телосложения. При провале существо получает урон звуком 2к8 и толкается на 10 футов от вас. При успехе существо получает половину урона и не толкается.ЏКроме того, незакрепленные предметы, оказавшиеся полностью в области эффекта, автоматически толкаются на 10 футов от вас эффектом заклинания, и заклинание издает громовой рокот, слышимый на расстоянии 300 футов.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, урон увеличивается на 1к8 за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Дружба с животными\";\"1 уровень, очарование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"30 футов\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"24 часа\";\"\";\"Компоненты: кусочек пищи.ЏЭто заклинание позволяет убедить Зверя, что вы не намерены причинять ему вред. Выберите Зверя, которого вы видите в пределах дистанции. Он должен видеть и слышать вас. Если Интеллект Зверя 4 и больше, то заклинание проваливается. В противном случае Зверь должен преуспеть в спасброске Мудрости, иначе он станет очарованным на время действия заклинания. Если вы или один из ваших спутников причинит цели вред, заклинание окончится.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете воздействовать на одного дополнительного Зверя за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Защита от зла и добра\";\"1 уровень, ограждение\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"К до 10 минут\";\"\";\"Компоненты: святая вода или порошок серебра и железа, расходуемые заклинанием.ЏПока заклинание активно, одно согласное существо, которого вы коснулись, защищено от существ следующих видов: Аберрации, Исчадия, Небожители, Нежить, Феи и Элементали.ЏЗащита предоставляет несколько преимуществ. Данные существа совершают с помехой броски атаки по цели. Цель также не может быть очарована, испугана и одержима ими. Если цель уже очарована, испугана или одержима таким существом, цель совершает последующие спасброски от таких эффектов с преимуществом.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Лечащее слово\";\"1 уровень, воплощение\";\"Время накладывания\";\"1 бонусное действие\";\"Дистанция\";\"60 футов\";\"Компоненты\";\"В\";\"Длительность\";\"Мгновенная\";\"\";\"Существо на ваш выбор, видимое в пределах дистанции, восстанавливает количество хитов, равное 1к4 + ваш модификатор базовой характеристики. Это заклинание не оказывает никакого эффекта на Нежить и Конструктов.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, количество восстанавливаемых хитов увеличивается на 1к4 за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Лечение ран\";\"1 уровень, воплощение\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С\";\"Длительность\";\"Мгновенная\";\"\";\"Существо, которого вы касаетесь, восстанавливает количество хитов, равное 1к8 + ваш модификатор базовой характеристики. Это заклинание не оказывает никакого эффекта на Нежить и Конструктов.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, лечение увеличивается на 1к8 за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Обнаружение болезней и яда\";\"1 уровень, прорицание (ритуал)\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"На себя\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"К до 10 минут\";\"\";\"Компоненты: лист тиса.ЏПока заклинание активно, вы можете ощущать присутствие и местонахождение ядов, ядовитых существ и болезней в пределах 30 футов от себя. Вы также распознаёте вид яда, ядовитого существа или болезни.ЏЗаклинание проницает большую часть барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева или земли.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Обнаружение магии\";\"1 уровень, прорицание (ритуал)\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"На себя\";\"Компоненты\";\"В, С\";\"Длительность\";\"К до 10 минут\";\"\";\"Пока заклинание активно, вы чувствуете присутствие магии в пределах 30 футов. Если вы почувствовали за счет этого заклинания присутствие магии, вы можете действием увидеть слабую ауру вокруг видимого существа или предмета, несущего на себе магию, а также узнать школу этой магии, если она есть.ЏЗаклинание проницает большую часть барьеров, но блокируется 1 футом камня, 1 дюймом обычного металла, тонким листом свинца или 3 футами дерева или земли.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Огонь фей\";\"1 уровень, воплощение\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"60 футов\";\"Компоненты\";\"В\";\"Длительность\";\"К до 1 минуты\";\"\";\"Все предметы в кубе с длиной ребра 20 футов в пределах дистанции подсвечиваются синим, зелёным или фиолетовым цветом (на ваш выбор). Все существа в этой области тоже подсвечиваются, если проваливают спасбросок Ловкости. На время длительности заклинания подсвеченные предметы и существа испускают тусклый свет в радиусе 10 футов.ЏВсе броски атаки по затронутым существам и предметам совершаются с преимуществом, если атакующий видит их, и эти существа и предметы не получают преимуществ от невидимости.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Опутывание\";\"1 уровень, вызов\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"90 футов\";\"Компоненты\";\"В, С\";\"Длительность\";\"К до 1 минуты\";\"\";\"Из точки на земле в пределах дистанции на площади квадрата с длиной стороны в 20 футов вырастают цепкие травы и плети. Пока заклинание активно, эти растения превращают землю в труднопроходимую местность.ЏСущества, находящиеся в этой области, когда вы накладываете заклинание, должны преуспеть в спасброске Силы, иначе они станут опутанными растениями до окончания действия заклинания. Опутанное растениями существо может действием совершать проверки Силы против Сл ваших заклинаний. В случае успеха оно освобождается.ЏКогда заклинание оканчивается, вызванные растения увядают.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Очарование личности\";\"1 уровень, очарование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"30 футов\";\"Компоненты\";\"В, С\";\"Длительность\";\"1 час\";\"\";\"Вы пытаетесь очаровать Гуманоида, которого видите в пределах дистанции. Он должен совершить спасбросок Мудрости; с преимуществом, если вы или ваши спутники сражаетесь с ним. Если он проваливает спасбросок, он очарован вами, пока заклинание активно или пока вы или ваши спутники не причините ему вред. Очарованное существо считает вас своим другом. Когда заклинание оканчивается, существо знает, что было очаровано вами.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше первого. Эти существа должны находиться в пределах 30 футов друг от друга, чтобы вы могли на них нацелиться.\";\"Друид\";\"1\";\"\";\n\"Очищение пищи и питья\";\"1 уровень, преобразование (ритуал)\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"10 футов\";\"Компоненты\";\"В, С\";\"Длительность\";\"Мгновенная\";\"\";\"Вся немагическая еда и питьё в пределах сферы с радиусом 5 футов с центром на точке, выбранной вами в пределах дистанции, очищается и избавляется от ядов и болезней.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Прыжок\";\"1 уровень, преобразование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"1 минута\";\"\";\"Компоненты: задняя лапка кузнечика.ЏВы касаетесь существа. Пока заклинание активно, расстояние прыжка этого существа увеличивается в три раза.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Разговор с животными\";\"1 уровень, прорицание (ритуал)\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"На себя\";\"Компоненты\";\"В, С\";\"Длительность\";\"10 минут\";\"\";\"Пока заклинание активно, вы получаете возможность понимать Зверей и общаться с ними устно. Знание и сознание многих Зверей ограничено их интеллектом, но они как минимум могут дать информацию о ближайших местах и чудовищах, включая тех, кого они видели за последний день. На усмотрение Мастера, вы можете попытаться убедить Зверя оказать вам небольшую помощь.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";\n\"Скороход\";\"1 уровень, преобразование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"1 час\";\"\";\"Вы касаетесь существа. Пока заклинание активно, скорость существа увеличивается на 10 футов.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы можете сделать целью одно дополнительное существо за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Сотворение, уничтожение воды\";\"1 уровень, преобразование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"30 футов\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"Мгновенная\";\"\";\"Компоненты: капля воды, если вода создаётся, или несколько песчинок, если вода уничтожается.ЏВы либо создаёте либо уничтожаете воду.Џ●Сотворение воды. Вы создаёте до 10 галлонов (45 литров) чистой воды в пределах дистанции в открытом контейнере. В качестве альтернативы вода выпадает дождём в кубе с длиной ребра 30 футов в пределах дальности, туша открытое пламя.Џ● Уничтожение воды. Вы уничтожаете до 10 галлонов (45 литров) воды в открытом контейнере в пределах дистанции. В качестве альтернативы вы уничтожаете туман в кубе с длиной ребра 30 футов в пределах дистанции.\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, вы создаёте или уничтожаете 10 дополнительных галлонов (45 литров) воды, и длина ребра куба увеличивается на 5 футов за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Туманное облако\";\"1 уровень, вызов\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"120 футов\";\"Компоненты\";\"В, С\";\"Длительность\";\"К до 1 часа\";\"\";\"Вы создаете сферу с радиусом 20 футов из тумана с центром на точке в пределах дистанции. Сфера обходит углы, и её пространство — сильно заслонённая местность. Она существует до окончания действия заклинания, или пока её не рассеет ветер (со скоростью как минимум 10 миль в час).\";\"На более высоком уровне\";\"Если вы накладываете это заклинание, используя ячейку 2-го уровня или выше, радиус тумана увеличивается на 20 футов за каждый уровень ячейки выше первого.\";\"Друид\";\"1\";\"\";\n\"Чудо-ягоды\";\"1 уровень, преобразование\";\"Время накладывания\";\"1 действие\";\"Дистанция\";\"Касание\";\"Компоненты\";\"В, С, М\";\"Длительность\";\"Мгновенная\";\"\";\"Компоненты: ветка омелы.ЏВ вашей руке появляются до десяти ягод, наполненных магией. Любое существо может действием съесть одну ягоду. Это восстанавливает 1 хит, и ягода настолько питательна, что насыщает существо на весь день.ЏЯгоды теряют силу, если их не съесть через 24 часа после создания.\";\"На более высоком уровне\";\"\";\"Друид\";\"1\";\"\";");
                break;
            default:
                setCSV("");
                break;
        }
        setMakeCSV(makeCSV + 1);
    };
    const plusPerepolnen = (num: number, bool: boolean) => {
        if(num == -1) perepolnen[0] = bool;
        else perepolnen[num + 1] = bool;
    }
    const setPoles = (text: string[]) => {
        let R = '';
        for (let i = 0; i < 17; i++) R = R + '\"' + text[i]?.replaceAll('\"', '\"\"')?.replaceAll('\n', 'Џ') + '\"' + ';';
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
                    perText = perText + '\n' + (i == 0 ? 'Тестовой карточке' : cards[i + 1][0]);
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
    const getCardFromCSVLine = (CSV:string, C: string[], pointStart: number, pointEnd: number,newCSV:string) => {
        for (let i = 0; pointStart<pointEnd || i<17; i++) {
            C[i] = '';
            if (pointEnd <= pointStart) {
                C[i] = '';
            } else if (CSV[pointStart] == '\"') {
                pointStart++;
                let nextK = CSV.indexOf('\"', pointStart);
                while (CSV[nextK + 1] == '\"' && nextK <= pointEnd && nextK != -1) {
                    C[i] = C[i] + CSV.slice(pointStart, nextK+1);
                    pointStart = nextK + 2;
                    nextK = CSV.indexOf('\"', nextK + 2);
                }
                if (nextK > pointEnd || nextK == -1) {
                    C[i] = C[i] + CSV.slice(pointStart, pointEnd);
                    pointStart = pointEnd+1;
                } else {
                    C[i] = C[i] + CSV.slice(pointStart, nextK);
                    pointStart = nextK + 1;
                    const FirstTZ = CSV.indexOf(';', pointStart);
                    if (FirstTZ <= pointEnd && FirstTZ !=-1) {
                        pointStart = FirstTZ + 1;
                    } else {
                        pointStart = pointEnd;
                    }
                }
            } else {
                const FirstTZ = CSV.indexOf(';', pointStart);
                if (FirstTZ <= pointEnd && FirstTZ !=-1) {
                    C[i] = CSV.slice(pointStart, FirstTZ);
                    pointStart = FirstTZ + 1;
                } else {
                    C[i] = CSV.slice(pointStart, pointEnd+1);
                    pointStart = pointEnd;
                }
            }
            newCSV = newCSV + '\"' + C[i].replaceAll('\"', '\"\"') + '\"' + ';';
            C[i] = C[i].replaceAll('Џ', '\n');
        }
        return newCSV;
    };
    const makeCardsFromCSV = () => {
        let nowPoint = 0, nextEnter = 0, endPoint = CSV.length - 1;
        let cardNumber = 0, newCSV= '';
        const C: string[][] = [];
        while ((nextEnter = CSV.indexOf('\n', nowPoint)) != -1) {
            C[cardNumber] = [];
            newCSV = getCardFromCSVLine(CSV,C[cardNumber], nowPoint, nextEnter - 1, newCSV) + '\n';
            nowPoint = nextEnter + 1;
            cardNumber++;
        };
        C[cardNumber] = [];
        newCSV = getCardFromCSVLine(CSV, C[cardNumber], nowPoint, CSV.length - 1, newCSV);
        if (document.getElementById('CTRLV') as HTMLInputElement != undefined) (document.getElementById('CTRLV') as HTMLInputElement).value = String (cardNumber);
        setCards(C);
        setCSV(newCSV);
    }
    const getBackCardImg = (PoleStr: string) => {
        let A = Number(PoleStr); 
        if (A == undefined || A == 0 || A > 43) {
            A = targetBackgroundNumber;
        }
        if (A < 0 && A > -11) {
            const r = pyt[0 - A - 1];
            return (
                <img src={r!=undefined ? URL.createObjectURL(r) : undefined} alt="" />
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
                return (<MyjBaraban />);
            case 36:
                return (<NapitokPennyi />);
            case 37:
                return (<NapitokTrop />);
            case 38:
                return (<NapitokShip />);
            case 39:
                return (<OgonMech />);
            case 40:
                return (<SiglaMelekTaus />);
            case 41:
                return (<Sovushka />);
            case 42:
                return (<Shesternya1 />);
            case 43:
                return (<Shesternya2 />);
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
                        <div className={style.List  + ' ' + (targetTypeCardNumber == 0 ||targetTypeCardNumber == 1 ||targetTypeCardNumber == 2 ||targetTypeCardNumber == 3 ? null : style.ListHorisont)} key={"List" + index}>
                            {
                                Array.from(Array(h).keys()).map((a, index2) => {
                                    return (
                                        <div className={style.LineCards} key={"List" + index +" Line" + index2}>
                                        {
                                            Array.from(Array(w).keys()).map((a, index3) => {
                                                if (isBack) {
                                                    if(cards.length >= w*h * index + h * index2 + w - index3 ) {
                                                        return (
                                                            <div className={style.Card} key={index*w*h + index2*h + w - index3} >
                                                                <CardSpell targetFont={String(fontMas[targetFont2])} NumbersExist={myNumbers} isBack={true} keyt={index * w * h + index2 * h + w - index3} cardType={targetTypeCardNumber} Pole={cards[w * h * index + h * index2 + w - index3 -1]}>{getBackCardImg(cards[w*h * index + h * index2 + w - index3-1][16])}</CardSpell>
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className={style.Card } key={"List" + index + " Line" + index2 + " Card" + (w - index3)} >
                                                        </div>
                                                    );
                                                } else {
                                                    if(cards.length > w*h * index + h * index2 + index3) {
                                                        return (
                                                            <div className={style.Card} key={index*w*h + index2*h + index3} >
                                                                <CardSpell targetFont={String(fontMas[targetFont1])} startPerepolnen={startPerepolnen} keyt={index*w*h + index2*h + index3} plusPerepolnen = {plusPerepolnen} minMax = {minMax} cardType={targetTypeCardNumber} Pole={cards[w*h * index + h * index2 + index3]} />
                                                            </div>
                                                        );
                                                    }
                                                    return (
                                                        <div className={style.Card} key={"List" + index + " Line" + index2 + " Card" + index3} >
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
            <div className={style.Viu + ' ' + (showOptions ? style.OpenOptionViu : '')}>
                <div className={style.ChangeCardViu + ' ' + style.BigViu}>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? '' : style.OnHover)} onClick={() => { setIsCSVRedactor(false); setNewCSV(newConst);}}>
                        <p>Режим печати</p>
                    </div>
                    <div className={style.RubahaViu + ' ' + (isCSVRedactor ? style.OnHover : '')} onClick={() => {setIsCSVRedactor(true)}}>
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
            <Setting className={style.OptionsSetting} onClick={() => {setShowOptions(true);}}/>
            <div className={style.Options + ' ' + (showOptions ? '' : style.HideWindow)}>
                <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowOptions(false); }}>Скрыть</div> </div>
                <div className={style.OpionsCase}>
                    <OptionCase nameSetting={'Вид карточек'} targetThis={targetOption[0]} setTarget={setTarget} number={0}>
                        <>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard1} name={"1"} targetThis={targetTypeCardNumber == 0} setTarget={setTargetTypeCardNumber} number={0} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard2} name={"2"} targetThis={targetTypeCardNumber == 1} setTarget={setTargetTypeCardNumber} number={1} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard3} name={"3"} targetThis={targetTypeCardNumber == 2} setTarget={setTargetTypeCardNumber} number={2} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard4} name={"4"} targetThis={targetTypeCardNumber == 3} setTarget={setTargetTypeCardNumber} number={3} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard5} name={"5"} targetThis={targetTypeCardNumber == 4} setTarget={setTargetTypeCardNumber} number={4} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard6} name={"6"} targetThis={targetTypeCardNumber == 5} setTarget={setTargetTypeCardNumber} number={5} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard7} name={"7"} targetThis={targetTypeCardNumber == 6} setTarget={setTargetTypeCardNumber} number={6} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard8} name={"8"} targetThis={targetTypeCardNumber == 7} setTarget={setTargetTypeCardNumber} number={7} ></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={spellCard9} name={"9"} targetThis={targetTypeCardNumber == 8} setTarget={setTargetTypeCardNumber} number={8} ></OptionCardImg>
                                <OptionCardImg numHide={true} img={spellCard10} name={"10"} targetThis={targetTypeCardNumber == 9} setTarget={setTargetTypeCardNumber} number={9} ></OptionCardImg>
                            </div>
                        </>
                    </OptionCase>
                    <OptionCase nameSetting={'Количество на листе'} targetThis={targetOption[1]} setTarget={setTarget} number={1}>
                        <div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={''} name={"4x4"} targetThis={(kolvo == 4) ? true : false} setTarget={setKolv} number={4} />
                                <OptionCardImg numHide={true} img={''} name={"3x3"} targetThis={(kolvo == 3) ? true : false} setTarget={setKolv} number={3} />
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg numHide={true} img={''} name={"2x2"} targetThis={(kolvo == 2) ? true : false} setTarget={setKolv} number={2} />
                                <OptionCardImg numHide={true} img={''} name={"1x1"} targetThis={(kolvo == 1) ? true : false} setTarget={setKolv} number={1   } />
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
                            <OptionSize text={"Заголовок"} size={sizePole[0]} number={0} setSize={setSizePole} min={0} max={99} block={blockSizePole[0]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Полоса 1"} size={sizePole[1]} number={1} setSize={setSizePole} min={0} max={49} block={blockSizePole[1]} setBlock={setBlocSizePole} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={sizePole[2]} number={2} setSize={setSizePole} min={0} max={49} block={blockSizePole[2]} setBlock={setBlocSizePole} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={sizePole[3]} number={3} setSize={setSizePole} min={0} max={49} block={blockSizePole[3]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Опции"} size={sizePole[4]} number={4} setSize={setSizePole} min={0} max={199} block={blockSizePole[4]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Между опциями"} size={sizePole[5]} number={5} setSize={setSizePole} min={0} max={40} block={blockSizePole[5]} setBlock={setBlocSizePole} />
                            <OptionSize text={"Нижняя подпись"} size={sizePole[6]} number={6} setSize={setSizePole} min={0} max={90} block={blockSizePole[6]} setBlock={setBlocSizePole} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Размеры текста'} targetThis={targetOption[4]} setTarget={setTarget} number={4}>
                        <div>
                            <div className={style.FontChose}><div>№ <input type="number" name="" id="" value={targetFont1} min={0} max={19} onChange={(e)=>{setTargetFont1(Number(e.target.value))}} />{"Шрифта "}</div>{fontMas[targetFont1]}</div>
                            <OptionSize text={"Заголовок"} size={sizeText[0]} number={0} setSize={setSizeText} min={0} max={99} block={blockSizeText[0]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Полоса 1"} size={sizeText[1]} number={1} setSize={setSizeText} min={0} max={99} block={blockSizeText[1]} setBlock={setBlocSizeText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={sizeText[2]} number={2} setSize={setSizeText} min={0} max={99} block={blockSizeText[2]} setBlock={setBlocSizeText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={sizeText[3]} number={3} setSize={setSizeText} min={0} max={99} block={blockSizeText[3]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 1"} size={sizeText[4]} number={4} setSize={setSizeText} min={0} max={99} block={blockSizeText[4]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 2"} textAs={"Как опция 1"} size={sizeText[5]} number={5} setSize={setSizeText} min={0} max={99} block={blockSizeText[5]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 3"} textAs={"Как опция 1"} size={sizeText[6]} number={6} setSize={setSizeText} min={0} max={99} block={blockSizeText[6]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Заголовок опции 4"} textAs={"Как опция 1"} size={sizeText[7]} number={7} setSize={setSizeText} min={0} max={99} block={blockSizeText[7]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Текст опции 1"} textAs={"Как загол 1"}  size={sizeText[8]} number={8} setSize={setSizeText} min={0} max={99} block={blockSizeText[8]} setBlock={setBlocSizeText} />
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
                            <OptionSize text={"Поля листа"} size={paddingText[15]} number={15} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[15]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Обводка карточки"} size={paddingText[16]} number={16} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[16]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок"} size={paddingText[0]} number={0} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[0]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Полоса 1"} size={paddingText[1]} number={1} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[1]} setBlock={setBlocPaddingText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 2"} size={paddingText[2]} number={2} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[2]} setBlock={setBlocPaddingText} />
                            <OptionSize textAs={"Как полоса 1"} text={"Полоса 3"} size={paddingText[3]} number={3} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[3]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 1"} size={paddingText[4]} number={4} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[4]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 2"} textAs={"Как опция 1"} size={paddingText[5]} number={5} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[5]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 3"} textAs={"Как опция 1"} size={paddingText[6]} number={6} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[6]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Заголовок опции 4"} textAs={"Как опция 1"} size={paddingText[7]} number={7} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[7]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 1"}textAs={"Как загол 1"}  size={paddingText[8]} number={8} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[8]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 2"} textAs={"Как опция 1"} size={paddingText[9]} number={9} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[9]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 3"} textAs={"Как опция 1"} size={paddingText[10]} number={10} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[10]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Текст опции 4"} textAs={"Как опция 1"} size={paddingText[11]} number={11} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[11]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Главный текст"} size={paddingText[12]} number={12} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[12]} setBlock={setBlocPaddingText} />
                            <OptionSize text={"Доп текст"} textAs={"Как главный"} size={paddingText[13]} number={13} setSize={setPaddinText} min={0} max={199} block={blockPaddingText[13]} setBlock={setBlocPaddingText} />
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
                            <OptionSize text={"Опция 1 ┐"} textAs={"как ┌"} size={borderRadiusValue[5]} number={5} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[5]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 ┘"} textAs={"как ┌"} size={borderRadiusValue[6]} number={6} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[6]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 1 └"} textAs={"как ┌"} size={borderRadiusValue[7]} number={7} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[7]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┌"} textAs={"как 1"} size={borderRadiusValue[8]} number={8} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[8]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┐"} textAs={"как ┌"} size={borderRadiusValue[9]} number={9} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[9]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 ┘"} textAs={"как ┌"} size={borderRadiusValue[10]} number={10} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[10]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 2 └"} textAs={"как ┌"} size={borderRadiusValue[11]} number={11} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[11]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┌"} textAs={"как 1"} size={borderRadiusValue[12]} number={12} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[12]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┐"} textAs={"как ┌"} size={borderRadiusValue[13]} number={13} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[13]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 ┘"} textAs={"как ┌"} size={borderRadiusValue[14]} number={14} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[14]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 3 └"} textAs={"как ┌"} size={borderRadiusValue[15]} number={15} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[15]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┌"} textAs={"как 1"} size={borderRadiusValue[16]} number={16} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[16]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┐"} textAs={"как ┌"} size={borderRadiusValue[17]} number={17} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[17]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 ┘"} textAs={"как ┌"} size={borderRadiusValue[18]} number={18} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[18]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Опция 4 └"} textAs={"как ┌"} size={borderRadiusValue[19]} number={19} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[19]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┌"} size={borderRadiusValue[20]} number={20} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[20]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┐"} textAs={"как ┌"} size={borderRadiusValue[21]} number={21} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[21]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст ┘"} textAs={"как ┌"} size={borderRadiusValue[22]} number={22} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[22]} setBlock={setBlocBorderRadius} />
                            <OptionSize text={"Весь текст └"} textAs={"как ┌"} size={borderRadiusValue[23]} number={23} setSize={setBordersRadiusValue} min={0} max={99} block={blockBorderRadius[23]} setBlock={setBlocBorderRadius} />
                        </div>
                    </OptionCase>
                    <OptionCase nameSetting={'Подгонка описания'} targetThis={targetOption[8]} setTarget={setTarget} number={8}>
                        <div>
                            <OptionSize text={"Минимумальный размер"} size={minMax[0]} number={0} setSize={setMinMaxs} min={0} max={blockMinMax ? 99 : minMax[1]} block={false} setBlock={setBlocMinMax} />
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
                        <div>
                            
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -10} setTarget={setTargetBackgroundNumber} number={-10} img={pyt[9] != undefined ? URL.createObjectURL(pyt[9]) : undefined}><div>{setPyti(-10)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -9} setTarget={setTargetBackgroundNumber} number={-9} img={pyt[8]!=undefined ? URL.createObjectURL(pyt[8]) : undefined}><div>{setPyti(-9)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -8} setTarget={setTargetBackgroundNumber} number={-8} img={pyt[7]!=undefined ? URL.createObjectURL(pyt[7]) : undefined}><div>{setPyti(-8)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -7} setTarget={setTargetBackgroundNumber} number={-7} img={pyt[6]!=undefined ? URL.createObjectURL(pyt[6]) : undefined}><div>{setPyti(-7)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -6} setTarget={setTargetBackgroundNumber} number={-6} img={pyt[5]!=undefined ? URL.createObjectURL(pyt[5]) : undefined}><div>{setPyti(-6)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -5} setTarget={setTargetBackgroundNumber} number={-5} img={pyt[4]!=undefined ? URL.createObjectURL(pyt[4]) : undefined}><div>{setPyti(-5)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -4} setTarget={setTargetBackgroundNumber} number={-4} img={pyt[3]!=undefined ? URL.createObjectURL(pyt[3]) : undefined}><div>{setPyti(-4)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -3} setTarget={setTargetBackgroundNumber} number={-3} img={pyt[2]!=undefined ? URL.createObjectURL(pyt[2]) : undefined}><div>{setPyti(-3)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -2} setTarget={setTargetBackgroundNumber} number={-2} img={pyt[1]!=undefined ? URL.createObjectURL(pyt[1]) : undefined}><div>{setPyti(-2)}</div></OptionCardImg>
                                <OptionCardImg name={"Своя"} d={true} targetThis={targetBackgroundNumber == -1} setTarget={setTargetBackgroundNumber} number={-1} img={pyt[0]!=undefined ? URL.createObjectURL(pyt[0]) : undefined}><div>{setPyti(-1)}</div></OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Бард"} targetThis={targetBackgroundNumber == 1} setTarget={setTargetBackgroundNumber} number={1} >{getBackCardImg('1')}</OptionCardImg>
                                <OptionCardImg name={"Варвар"} targetThis={targetBackgroundNumber == 2} setTarget={setTargetBackgroundNumber} number={2} >{getBackCardImg('2')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Военка"} targetThis={targetBackgroundNumber == 3} setTarget={setTargetBackgroundNumber} number={3} >{getBackCardImg('3')}</OptionCardImg>
                                <OptionCardImg name={"Волшебник"} targetThis={targetBackgroundNumber == 4} setTarget={setTargetBackgroundNumber} number={4} >{getBackCardImg('4')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Друид"} targetThis={targetBackgroundNumber == 5} setTarget={setTargetBackgroundNumber} number={5} >{getBackCardImg('5')}</OptionCardImg>
                                <OptionCardImg name={"Жрец"} targetThis={targetBackgroundNumber == 6} setTarget={setTargetBackgroundNumber} number={6} >{getBackCardImg('6')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Колдун"} targetThis={targetBackgroundNumber == 7} setTarget={setTargetBackgroundNumber} number={7} >{getBackCardImg('7')}</OptionCardImg>
                                <OptionCardImg name={"Ксанатар"} targetThis={targetBackgroundNumber == 8} setTarget={setTargetBackgroundNumber} number={8} >{getBackCardImg('8')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Монах"} targetThis={targetBackgroundNumber == 9} setTarget={setTargetBackgroundNumber} number={9} >{getBackCardImg('9')}</OptionCardImg>
                                <OptionCardImg name={"Мистик"} targetThis={targetBackgroundNumber == 10} setTarget={setTargetBackgroundNumber} number={10} >{getBackCardImg('10')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Паладин"} targetThis={targetBackgroundNumber == 11} setTarget={setTargetBackgroundNumber} number={11} >{getBackCardImg('11')}</OptionCardImg>
                                <OptionCardImg name={"Следопыт"} targetThis={targetBackgroundNumber == 12} setTarget={setTargetBackgroundNumber} number={12} >{getBackCardImg('12')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Чародей"} targetThis={targetBackgroundNumber == 13} setTarget={setTargetBackgroundNumber} number={13} >{getBackCardImg('13')}</OptionCardImg>
                                <OptionCardImg name={"Элементаль"} targetThis={targetBackgroundNumber == 14} setTarget={setTargetBackgroundNumber} number={14} >{getBackCardImg('14')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Воплощение"} targetThis={targetBackgroundNumber == 15} setTarget={setTargetBackgroundNumber} number={15} >{getBackCardImg('15')}</OptionCardImg>
                                <OptionCardImg name={"Вызов"} targetThis={targetBackgroundNumber == 16} setTarget={setTargetBackgroundNumber} number={16} >{getBackCardImg('16')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Иллюзия"} targetThis={targetBackgroundNumber == 17} setTarget={setTargetBackgroundNumber} number={17} >{getBackCardImg('17')}</OptionCardImg>
                                <OptionCardImg name={"Некромантия"} targetThis={targetBackgroundNumber == 18} setTarget={setTargetBackgroundNumber} number={18} >{getBackCardImg('18')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Ограждение"} targetThis={targetBackgroundNumber == 19} setTarget={setTargetBackgroundNumber} number={19} >{getBackCardImg('19')}</OptionCardImg>
                                <OptionCardImg name={"Очарование"} targetThis={targetBackgroundNumber == 20} setTarget={setTargetBackgroundNumber} number={20} >{getBackCardImg('20')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Преобразование"} targetThis={targetBackgroundNumber == 21} setTarget={setTargetBackgroundNumber} number={21} >{getBackCardImg('21')}</OptionCardImg>
                                <OptionCardImg name={"Прорицание"} targetThis={targetBackgroundNumber == 22} setTarget={setTargetBackgroundNumber} number={22} >{getBackCardImg('22')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Африканская леди"} targetThis={targetBackgroundNumber == 23} setTarget={setTargetBackgroundNumber} number={23} >{getBackCardImg('23')}</OptionCardImg>
                                <OptionCardImg name={"Африканская леди в танце"} targetThis={targetBackgroundNumber == 24} setTarget={setTargetBackgroundNumber} number={24} >{getBackCardImg('24')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Африкански мужик в танце"} targetThis={targetBackgroundNumber == 25} setTarget={setTargetBackgroundNumber} number={25} >{getBackCardImg('25')}</OptionCardImg>
                                <OptionCardImg name={"Валькирия"} targetThis={targetBackgroundNumber == 26} setTarget={setTargetBackgroundNumber} number={26} >{getBackCardImg('26')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Ведьмочка"} targetThis={targetBackgroundNumber == 27} setTarget={setTargetBackgroundNumber} number={27} >{getBackCardImg('27')}</OptionCardImg>
                                <OptionCardImg name={"Волк"} targetThis={targetBackgroundNumber == 28} setTarget={setTargetBackgroundNumber} number={28} >{getBackCardImg('28')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Гавайская леди"} targetThis={targetBackgroundNumber == 29} setTarget={setTargetBackgroundNumber} number={29} >{getBackCardImg('29')}</OptionCardImg>
                                <OptionCardImg name={"Дракон"} targetThis={targetBackgroundNumber == 30} setTarget={setTargetBackgroundNumber} number={30} >{getBackCardImg('30')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Жук"} targetThis={targetBackgroundNumber == 31} setTarget={setTargetBackgroundNumber} number={31} >{getBackCardImg('31')}</OptionCardImg>
                                <OptionCardImg name={"Жук 2"} targetThis={targetBackgroundNumber == 32} setTarget={setTargetBackgroundNumber} number={32} >{getBackCardImg('32')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Жук-Бабочка"} targetThis={targetBackgroundNumber == 33} setTarget={setTargetBackgroundNumber} number={33} >{getBackCardImg('33')}</OptionCardImg>
                                <OptionCardImg name={"Жук-Оса"} targetThis={targetBackgroundNumber == 34} setTarget={setTargetBackgroundNumber} number={34} >{getBackCardImg('34')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Мужик с барабанами"} targetThis={targetBackgroundNumber == 35} setTarget={setTargetBackgroundNumber} number={35} >{getBackCardImg('35')}</OptionCardImg>
                                <OptionCardImg name={"Напиток пенный"} targetThis={targetBackgroundNumber == 36} setTarget={setTargetBackgroundNumber} number={36} >{getBackCardImg('36')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Напиток тропически"} targetThis={targetBackgroundNumber == 37} setTarget={setTargetBackgroundNumber} number={37} >{getBackCardImg('37')}</OptionCardImg>
                                <OptionCardImg name={"Напиток шипящий"} targetThis={targetBackgroundNumber == 38} setTarget={setTargetBackgroundNumber} number={38} >{getBackCardImg('38')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Огненный меч"} targetThis={targetBackgroundNumber == 39} setTarget={setTargetBackgroundNumber} number={39} >{getBackCardImg('39')}</OptionCardImg>
                                <OptionCardImg name={"Сигла мелек таус"} targetThis={targetBackgroundNumber == 40} setTarget={setTargetBackgroundNumber} number={40} >{getBackCardImg('40')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Совушка"} targetThis={targetBackgroundNumber == 41} setTarget={setTargetBackgroundNumber} number={41} >{getBackCardImg('41')}</OptionCardImg>
                                <OptionCardImg name={"Шестерня 1"} targetThis={targetBackgroundNumber == 42} setTarget={setTargetBackgroundNumber} number={42} >{getBackCardImg('42')}</OptionCardImg>
                            </div>
                            <div className={style.LineSetting}>
                                <OptionCardImg name={"Шестерня 2"} targetThis={targetBackgroundNumber == 43} setTarget={setTargetBackgroundNumber} number={43} >{getBackCardImg('43')}</OptionCardImg>
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
                            <div className={style.FontChose}><div>№ <input type="number" name="" id="" value={targetFont2} min={0} max={19} onChange={(e)=>{setTargetFont2(Number(e.target.value))}} />{"Шрифта "}</div>{fontMas[targetFont2]}</div>
                            <OptionSize text={"Цифра 1 горизонталь"} size={sizeText[13]} number={13} setSize={setSizeText} min={-100} max={750/kolvo} block={blockSizeText[13]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 1 вертикаль"} size={sizeText[14]} number={14} setSize={setSizeText} min={-100} max={996/kolvo} block={blockSizeText[14]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 горизонталь"} size={sizeText[15]} number={15} setSize={setSizeText} min={-100} max={750/kolvo} block={blockSizeText[15]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 вертикаль"} size={sizeText[16]} number={16} setSize={setSizeText} min={-100} max={996/kolvo} block={blockSizeText[16]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 горизонталь"} size={sizeText[17]} number={17} setSize={setSizeText} min={-100} max={750/kolvo} block={blockSizeText[17]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 вертикаль"} size={sizeText[18]} number={18} setSize={setSizeText} min={-100} max={996/kolvo} block={blockSizeText[18]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 горизонталь"} size={sizeText[19]} number={19} setSize={setSizeText} min={-100} max={750/kolvo} block={blockSizeText[19]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 вертикаль"} size={sizeText[20]} number={20} setSize={setSizeText} min={-100} max={996/kolvo} block={blockSizeText[20]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 1 размер"} size={sizeText[21]} number={21} setSize={setSizeText} min={0} max={300} block={blockSizeText[21]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 2 размер"} textAs={"Как цифра 1"} size={sizeText[22]} number={22} setSize={setSizeText} min={0} max={300} block={blockSizeText[22]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 3 размер"} textAs={"Как цифра 1"} size={sizeText[23]} number={23} setSize={setSizeText} min={0} max={300} block={blockSizeText[23]} setBlock={setBlocSizeText} />
                            <OptionSize text={"Цифра 4 размер"} textAs={"Как цифра 1"} size={sizeText[24]} number={24} setSize={setSizeText} min={0} max={300} block={blockSizeText[24]} setBlock={setBlocSizeText} />
                            <OptionColor text={"Цвет цифры 1"} textAs={"Как рубаха 1"} color={colors[33]} number={33} setColor={setColor} block={blockColor[33]} setBlock={setBlocColor} name={colorsNames[33]} />
                            <OptionColor text={"Цвет цифры 2"} textAs={"Как цифра 1"} color={colors[34]} number={34} setColor={setColor} block={blockColor[34]} setBlock={setBlocColor} name={colorsNames[34]} />
                            <OptionColor text={"Цвет цифры 3"} textAs={"Как цифра 1"} color={colors[35]} number={35} setColor={setColor} block={blockColor[35]} setBlock={setBlocColor} name={colorsNames[35]} />
                            <OptionColor text={"Цвет цифры 4"} textAs={"Как цифра 1"} color={colors[36]} number={36} setColor={setColor} block={blockColor[36]} setBlock={setBlocColor} name={colorsNames[36]} />                            
                        </div>
                    </OptionCase>
                </div>
            </div>
            {!showRedactor
                ? <Setting className={style.RedactorSetting} onClick={() => { setShowRedactor(true); }} />
                : null}
            <div className={style.RedactorAll+ ' ' + (showOptions ? '' : style.BigWidth)}>
                {isCSVRedactor
                    ? <div className={style.CSVLine}>
                        <div className={style.InputPlace}>
                            <div className={style.Title}>Текущая строка</div>
                            <div className={style.CSVText}>
                                <input type="text" name="" id="" value={newCSV} onChange={(e) => { setNewCSV(e.target.value); }}/>
                            </div>
                            <div className={style.Buttons}>
                                <div>
                                    <div className={style.Download} onClick={() => {
                                        let R = '';
                                        const A: string[] = [...cards[Number((document.getElementById('CTRLC') as HTMLInputElement)?.value)]];
                                        for (let i = 0; i < 17; i++) R = R + '\"' + A[i].replaceAll('\"', '\"\"').replaceAll('\n', 'Џ') + '\"' + ';';
                                        R = getCardFromCSVLine(R, A, 0, R.length - 1, '');
                                        setNewCSV(R);
                                        setNewCard(A);
                                    }}>
                                        Вставить сюда карточку №
                                    </div>
                                    <input min={0} max={cards.length - 1} type="number" name="" id="CTRLC" defaultValue={0} /></div>
                                <div className={style.Download} onClick={() => {setNewCSV(newConst);}}>Очистить карточку</div>
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
                                        (document.getElementById('CTRLV') as HTMLInputElement).value = String (cards.length);
                                    }}>Вставить новую карточку после карточки №</div>
                                    <input type="number" min={-1} max={cards.length - 1} name="" id={'CTRLV'}  defaultValue={cards.length - 1}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    : null
                }
                <div className={style.Redactor  + ' ' + (showRedactor ? '' : style.HideWindow)}>
                    <div className={style.Hide}> <div className={style.Text} onClick={() => { setShowRedactor(false); }}>Скрыть</div> </div>
                    <div className={style.RedactorCase}>
                        <div className={style.Base}>
                            <div className={style.Title}>База</div>
                            <div className={style.BaseTips}>
                                <BaseTipCase name={"Dnd5"} openThis={openThisBaseCase[0]} setOpenThis={setOpenThisBaseCas} number={0}>
                                    <>
                                        <BaseTip name={"Друид. 0"} targetThis={openThisBase[0]} setTargetBase={setOpenThisBas} number={0} />
                                        <BaseTip name={"Друид. 1"} targetThis={openThisBase[1]} setTargetBase={setOpenThisBas} number={1} />
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
                            <input className={style.DownloadInput} type="file" id="InputFile" onChange={readFile}/>
                            <label className={style.Download} htmlFor="InputFile">Загрузить файл</label>
                                <div className={style.Download} onClick={() => {
                                    setMakeCSV(makeCSV + 1);
                                }}>Обновить карточки</div>
                            <div className={style.Download} onClick={downloadFile}>Скачать файл</div>
                        </div>
                        </div>
                    </div>
            </div>

            </div>
            {
                !isCSVRedactor
                    ? <div className={style.Lists + ' ' + (showRedactor ? style.ListDown : '') + ' ' + (showOptions ? style.ListRigth : '')}> {getCards()} </div>
                    : <div className={style.AroundTwoCards}>
                        <div className={style.TwoCards}>
                            <div className={style.OneCard + ' ' + (targetTypeCardNumber == 0 ||targetTypeCardNumber == 1 ||targetTypeCardNumber == 2 ||targetTypeCardNumber == 3 ? null : style.Horisont)}><CardSpell targetFont={String(fontMas[targetFont1])} startPerepolnen={startPerepolnen} keyt={-1} plusPerepolnen={plusPerepolnen} minMax={minMax} cardType={targetTypeCardNumber} Pole={newCard} myChangesParametrs={true} setPole={setPoles}/></div>
                            <div className={style.OneCard + ' ' + (targetTypeCardNumber == 0 ||targetTypeCardNumber == 1 ||targetTypeCardNumber == 2 ||targetTypeCardNumber == 3 ? null : style.Horisont)}><CardSpell targetFont={String(fontMas[targetFont2])} NumbersExist={myNumbers} isBack={true} keyt={-1} cardType={targetTypeCardNumber} Pole={newCard} myChangesParametrs={true} setPole={setPoles}>{getBackCardImg(newCard[16])}</CardSpell></div>
                        </div>
                    </div>
            }
            
            
        </div>
    );
}

export default SpellMain;