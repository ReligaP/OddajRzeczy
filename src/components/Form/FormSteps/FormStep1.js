import { useState } from "react";
import { BrowserView , MobileView } from "react-device-detect";
import mobileFormAgeOptions from "../../../database/mobileFormAgeOptions";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FormStep1 = ({ update }) => {
    const [type, setType] = useState("");
    const [forWhoClothes,setForWhoClothes] = useState([]);
    const [forWhatDestiny,setForWhatDestiny] = useState([]);
    const [forWhoToys,setForWhoToys] = useState([]);
    const [isOpenBoy, setIsOpenBoy] = useState(false);
    const [selectedOptionBoy, setSelectedOptionBoy] = useState("0-2");
    const [isOpenGirl, setIsOpenGirl] = useState(false);
    const [selectedOptionGirl, setSelectedOptionGirl] = useState("0-2");
    const [currentCase, setCurrentCase] = useState(NaN);
    const [forWhoBooks,setForWhoBooks] = useState([]);
    const [otherTypeText, setOtherTypeText] = useState("");

    const handleClickType = (e) => {
        setType(e.target.value);
        update("type",e.target.value);
    };
    const handleClickWho = (e) => {
        if (e.target.checked) {
            setForWhoClothes([...forWhoClothes,e.target.value]);}
        else  {
            setForWhoClothes(forWhoClothes.filter((el) => el !== e.target.value));
        }
    };
    const handleClickDestiny = (e) => {
        if (e.target.checked) {
            setForWhatDestiny([...forWhatDestiny,e.target.value]);}
        else  {
            setForWhatDestiny(forWhatDestiny.filter((el) => el !== e.target.value));
        }
    };
    const handleClickTypeDetails = () => {
            setType('');
            setForWhatDestiny([]);
            setForWhoClothes([]);
            update("forWhoClothes", [...forWhoClothes]);
            update("forWhatDestinyClothes", [...forWhatDestiny]);
    };
    const handleClickToys = (e) => {
        if (e.target.checked) {
            setForWhoToys([...forWhoToys,e.target.value]);}
        else  {
            setForWhoToys(forWhoToys.filter((el) => el !== e.target.value));
        }
    };
    const togglingBoyAge = () => setIsOpenBoy(!isOpenBoy);
    const onOptionClickedBoy = value => () => {
        setSelectedOptionBoy(value);
        update("toysBoyAge",value);
        setIsOpenBoy(false);
    };
    const togglingGirlAge = () => setIsOpenGirl((!isOpenGirl));
    const onOptionClickedGirl = value => () => {
        setSelectedOptionGirl(value);
        update("toysGirlAge",value);
        setIsOpenGirl(false);
    };
    const currentSelector = (e) => {
        setCurrentCase(Number(e.target.value));
    };
    const handleClickToysDetails = () => {
        setType('');
        update("forWhoToys", [...forWhoToys]);
        setForWhoToys([]);
        setSelectedOptionGirl("0-2");
        setSelectedOptionBoy("0-2");
    };
    const handleClickBooks = (e) => {
        if (e.target.checked) {
            setForWhoBooks([...forWhoBooks,e.target.value]);}
        else  {
            setForWhoBooks(forWhoBooks.filter((el) => el !== e.target.value));
        }
    };
    const handleClickBooksDetails = () => {
        setType('');
        update("forWhoBooks", [...forWhoBooks]);
        setForWhoBooks([]);
    };
    const handleChangeOther = (e) => {
        setOtherTypeText(e.target.value);
    };
    const handleClickOtherDetails = () => {
        setType('');
        update("otherTypeText",otherTypeText);
        setOtherTypeText('');
    };
    return (
        <>
            <BrowserView>
                <section className="step1Box">
                    <header className="step">
                        <p className="step_content">
                            Krok 1/4
                        </p>
                    </header>
                    <section className="text">
                        <p className="text_content">
                            Zaznacz co chcesz oddać:
                        </p>
                    </section>
                    <section className="step1Box_content">
                        <form className="step1Box_content__box">
                            <label className="container">
                                <span className="container_text">
                                    ubrania, które nadają się do ponownego użycia
                                </span>
                                <input
                                    type="radio"
                                    name="radio"
                                    value={"ubrania, które nadają się do ponownego użycia"}
                                    onClick={() => setType("ubrania, które nadają się do ponownego użycia")}
                                    onBlur={() => update("type",type)}
                                />
                                <span className="checkmark" />
                            </label>
                            <label className="container">
                                <span className="container_text">
                                    ubrania, do wyrzucenia
                                </span>
                                <input
                                    type="radio"
                                    name="radio"
                                    onClick={() => setType("ubrania, do wyrzucenia")}
                                    onBlur={() => update("type",type)}
                                />
                                <span className="checkmark" />
                            </label>
                            <label className="container">
                                <span className="container_text">
                                    zabawki
                                </span>
                                <input
                                    type="radio"
                                    name="radio"
                                    onClick={() => setType("zabawki")}
                                    onBlur={() => update("type",type)}
                                />
                                <span className="checkmark" />
                            </label>
                            <label className="container">
                                <span className="container_text">
                                    książki
                                </span>
                                <input
                                    type="radio"
                                    name="radio"
                                    onClick={() => setType("książki")}
                                    onBlur={() => update("type",type)}
                                />
                                <span className="checkmark" />
                            </label>
                            <label className="container">
                                <span className="container_text">
                                    Inne
                                </span>
                                <input
                                    type="radio"
                                    name="radio"
                                    onClick={() => setType("Inne")}
                                    onBlur={() => update("type",type)}
                                />
                                <span className="checkmark" />
                            </label>
                        </form>
                    </section>
                </section>
            </BrowserView>
            <MobileView>
                <section>
                    <div className="stepMobileBox">
                        <header>
                            <div className="stepMobileBox_header headerStep1">
                                <p className="stepMobileBox_header__content">
                                    Zaznacz co chcesz oddać
                                </p>
                            </div>
                        </header>
                        <div className="stepMobileBox_warning">
                            <InfoOutlinedIcon sx={{fontSize:"50px",color:"#fff"}} />
                            <div className="stepMobileBox_warning__content">
                                <p className="stepWarningTitle">
                                    ważne!
                                </p>
                                <p className="stepWarningText">
                                    Uzupełnij szczegóły dotyczące Twoich rzeczy. Dzięki temu będziemy wiedzieć
                                    komu najlepiej je przekazać.
                                </p>
                            </div>
                        </div>
                        <form>
                            <div className="stepMobileBox_step1Box">
                                <fieldset>
                                    <label className="mobileContainer">
                                        <span className="mobileContainer_text">
                                            Ubrania do ponownego użycia
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={"ubrania do ponownego użycia"}
                                            onClick={handleClickType}
                                        />
                                        <span className="mobileCheckmark" />
                                    </label>
                                    <label className="mobileContainer">
                                        <span className="mobileContainer_text">
                                            Ubrania do wyrzucenia
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={"ubrania do wyrzucenia"}
                                            onClick={handleClickType}
                                        />
                                        <span className="mobileCheckmark"/>
                                    </label>
                                    <label className="mobileContainer">
                                        <span className="mobileContainer_text">
                                            Zabawki
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={"zabawki"}
                                            onClick={handleClickType}
                                        />
                                        <span className="mobileCheckmark" />
                                    </label>
                                    <label className="mobileContainer">
                                        <span className="mobileContainer_text">
                                            Książki
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={"książki"}
                                            onClick={handleClickType}
                                        />
                                        <span className="mobileCheckmark" />
                                    </label>
                                    <label className="mobileContainer">
                                        <span className="mobileContainer_text">
                                            Inne
                                        </span>
                                        <input
                                            type="radio"
                                            name="radio"
                                            value={"inne"}
                                            onClick={handleClickType}
                                        />
                                        <span className="mobileCheckmark" />
                                    </label>
                                </fieldset>
                                {
                                    (type === "ubrania do ponownego użycia")
                                    &&
                                    <div className="mobileContainerDetails">
                                        <div className="mobileContainerDetails_content">
                                            <div className="mobileContainerDetails_content__clothesBox">
                                                <p className="detailsBox_title">
                                                    Dla kogo:
                                                </p>
                                                <fieldset>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="męskie"
                                                            onChange={handleClickWho}
                                                        />
                                                        <span />
                                                        Męskie
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="damskie"
                                                            onChange = {handleClickWho}
                                                        />
                                                        <span />
                                                        Damskie
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla chłopca"
                                                            onChange = {handleClickWho}
                                                        />
                                                        <span />
                                                        Dla chłopca
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla dziewczynki"
                                                            onChange = {handleClickWho}
                                                        />
                                                        <span />
                                                        Dla dziewczynki
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div className="mobileContainerDetails_content__clothesBox">
                                                <p className="detailsBox_title">
                                                    Jakie przeznaczenie:
                                                </p>
                                                <fieldset>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="sezon jesień - zima"
                                                            onChange = {handleClickDestiny}
                                                        />
                                                        <span />
                                                        Sezon jesień - zima
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="sezon wiosna - lato"
                                                            onChange = {handleClickDestiny}
                                                        />
                                                        <span />
                                                        Sezon wiosna - lato
                                                    </label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <button
                                            className="mobileFormButton mobileNextButton mobileConfirmTypeButton"
                                            onClick={handleClickTypeDetails}
                                        >
                                            ok
                                        </button>
                                    </div>
                                }
                                {
                                    (type === "zabawki")
                                    &&
                                    <div className="mobileContainerDetails">
                                        <div className="mobileContainerDetails_content">
                                            <div className="mobileContainerDetails_content__toysBox">
                                                <p className="detailsBox_title">
                                                    Dla kogo:
                                                </p>
                                                <fieldset>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla chłopca"
                                                            onChange={handleClickToys}
                                                        />
                                                        <span />
                                                        Dla chłopca
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla dziewczynki"
                                                            onChange={handleClickToys}
                                                        />
                                                        <span />
                                                        Dla dziewczynki
                                                    </label>
                                                </fieldset>
                                            </div>
                                            <div className="mobileContainerDetails_content__toysBox">
                                                <p className="detailsBox_title">
                                                    Wiek:
                                                </p>
                                                <div className="dropDownContainer">
                                                    <div
                                                        className="dropDownHeader"
                                                        onClick={togglingBoyAge}
                                                    >
                                                        {selectedOptionBoy}
                                                        <ArrowDownwardIcon fontSize="small" />
                                                    </div>
                                                    {
                                                        isOpenBoy
                                                        &&
                                                        (
                                                            <div className="dropDownListContainer">
                                                                <ul className="dropDownList">
                                                                    {
                                                                        mobileFormAgeOptions.map((option,index) => (
                                                                            <li
                                                                                className={`listItem
                                                                                    ${currentCase
                                                                                ===
                                                                                index ? 'focusStep2' : '' }`
                                                                                }
                                                                                onClick={onOptionClickedBoy(option)}
                                                                                key={index}
                                                                                value={index}
                                                                                onTouchStart={currentSelector}
                                                                            >
                                                                                {option}
                                                                            </li>
                                                                        ))
                                                                    }
                                                                </ul>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                                <div className="dropDownContainer">
                                                    <div
                                                        className="dropDownHeader"
                                                        onClick={togglingGirlAge}
                                                    >
                                                        {selectedOptionGirl}
                                                        <ArrowDownwardIcon fontSize="small" />
                                                    </div>
                                                    {
                                                        isOpenGirl
                                                        &&
                                                        (
                                                            <div className="dropDownListContainer">
                                                                <ul className="dropDownList">
                                                                    {
                                                                        mobileFormAgeOptions.map((option,index) => (
                                                                                <li
                                                                                    className={`listItem
                                                                                    ${currentCase
                                                                                    ===
                                                                                    index ? 'focusStep2' : '' }`
                                                                                    }
                                                                                    onClick={onOptionClickedGirl(option)}
                                                                                    key={index}
                                                                                    value={index}
                                                                                    onTouchStart={currentSelector}
                                                                                >
                                                                                    {option}
                                                                                </li>
                                                                            )
                                                                        )
                                                                    }
                                                                </ul>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            className="mobileFormButton mobileNextButton mobileConfirmTypeButton"
                                            onClick={handleClickToysDetails}
                                        >
                                            ok
                                        </button>
                                    </div>
                                }
                                {
                                    type === "książki"
                                    &&
                                    <div className="mobileContainerDetails">
                                        <div className="mobileContainerDetails_content">
                                            <div className="mobileContainerDetails_content__booksBox">
                                                <p className="detailsBox_title">
                                                    Dla kogo:
                                                </p>
                                                <fieldset>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla dorosłych"
                                                            onChange={handleClickBooks}
                                                        />
                                                        <span />
                                                        Dla dorosłych
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla dzieci"
                                                            onChange={handleClickBooks}
                                                        />
                                                        <span />
                                                        Dla dzieci
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="dla młodzieży"
                                                            onChange={handleClickBooks}
                                                        />
                                                        <span />
                                                        Dla młodzieży
                                                    </label>
                                                    <label className="checkbox">
                                                        <input
                                                            type="checkbox"
                                                            value="edukacyjne"
                                                            onChange={handleClickBooks}
                                                        />
                                                        <span />
                                                        Edukacyjne
                                                    </label>
                                                </fieldset>
                                            </div>
                                        </div>
                                        <button
                                            className="mobileFormButton mobileNextButton mobileConfirmTypeButton"
                                            onClick={handleClickBooksDetails}
                                        >
                                            ok
                                        </button>
                                    </div>
                                }
                                {
                                    type === "inne"
                                    &&
                                    <div className="mobileContainerDetails">
                                        <div className="mobileContainerDetails_content">
                                            <div className="mobileContainerDetails_content__otherTypeBox">
                                                <p className="detailsBox_title">
                                                    Wypisz jakie:
                                                </p>
                                                <textarea
                                                    className="otherTypeBox_input"
                                                    onChange={handleChangeOther}
                                                />
                                            </div>
                                        </div>
                                        <button
                                            className="mobileFormButton mobileNextButton mobileConfirmTypeButton"
                                            onClick={handleClickOtherDetails}
                                        >
                                            ok
                                        </button>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </section>
            </MobileView>
        </>
    );
};

export default FormStep1;