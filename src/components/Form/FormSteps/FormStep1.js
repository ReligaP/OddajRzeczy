import { useState } from "react";
import { BrowserView , MobileView } from "react-device-detect";
import mobileFormAgeOptions from "../../../database/mobileFormAgeOptions";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const FormStep1 = ({ update }) => {
    const [type, setType] = useState("");
    const [forWhoClothes,setForWhoClothes] = useState([]);
    const [forWhatDestiny,setForWhatDestiny] = useState([]);
    const [forWhoBooks,setForWhoBooks] = useState([]);
    const [forWhoToys,setForWhoToys] = useState([]);
    const [isOpenBoy, setIsOpenBoy] = useState(false);
    const [isOpenGirl, setIsOpenGirl] = useState(false);
    const [selectedOptionBoy, setSelectedOptionBoy] = useState("0-2");
    const [selectedOptionGirl, setSelectedOptionGirl] = useState("0-2");
    const [otherTypeText, setOtherTypeText] = useState("");

    const togglingBoyAge = () => setIsOpenBoy(!isOpenBoy);
    const togglingGirlAge = () => setIsOpenGirl((!isOpenGirl));
    const onOptionClickedBoy = value => () => {
        setSelectedOptionBoy(value);
        update("toysBoyAge",value)
        setIsOpenBoy(false);
    };
    const onOptionClickedGirl = value => () => {
        setSelectedOptionGirl(value);
        update("toysGirlAge",value);
        setIsOpenGirl(false)
    };
    const handleClickWho = (e) => {
        if (e.target.checked) {
            setForWhoClothes([...forWhoClothes,e.target.value]);}
        else  {
            setForWhoClothes(forWhoClothes.filter((el) => el !== e.target.value));
        }
    };
    const handleClickWhat = (e) => {
            if (e.target.checked) {
                setForWhatDestiny([...forWhatDestiny,e.target.value]);}
            else  {
                setForWhatDestiny(forWhatDestiny.filter((el) => el !== e.target.value));
        }
    };
    const handleClickBooks = (e) => {
        if (e.target.checked) {
            setForWhoBooks([...forWhoBooks,e.target.value]);}
        else  {
            setForWhoBooks(forWhoBooks.filter((el) => el !== e.target.value));
        }
    };
    const handleClickToys = (e) => {
        if (e.target.checked) {
            setForWhoToys([...forWhoToys,e.target.value]);}
        else  {
            setForWhoToys(forWhoToys.filter((el) => el !== e.target.value));
        }
    };
    const handleChangeOther = (e) => {
        setOtherTypeText(e.target.value);
    };
    return (
        <>
            <BrowserView>
                <div className="step1Box">
                    <div className="step">
                        <p className="step_content">
                            Krok 1/4
                        </p>
                    </div>
                    <div className="text">
                        <p className="text_content">
                            Zaznacz co chcesz oddać:
                        </p>
                    </div>
                    <div className="step1Box_content">
                        <div className="step1Box_content__box">
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
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="stepMobileBox">
                    <div className="stepMobileBox_header">
                        <p className="stepMobileBox_header__content">
                            Zaznacz co chcesz oddać
                        </p>
                    </div>
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
                    <div className="stepMobileBox_step1Box">
                        <label className="mobileContainer">
                            <span className="mobileContainer_text">
                                ubrania do ponownego użycia
                            </span>
                            <input
                                type="radio"
                                name="radio"
                                value={"ubrania do ponownego użycia"}
                                onClick={() => setType("ubrania do ponownego użycia")}
                                onBlur={() => update("type",type)}
                            />
                            <span className="mobileCheckmark" />
                        </label>
                        <label className="mobileContainer">
                            <span className="mobileContainer_text">
                                ubrania do wyrzucenia
                            </span>
                            <input
                                type="radio"
                                name="radio"
                                onClick={() => setType("ubrania do wyrzucenia")}
                                onBlur={() => update("type",type)}
                            />
                            <span className="mobileCheckmark" />
                        </label>
                        <label className="mobileContainer">
                            <span className="mobileContainer_text">
                                zabawki
                            </span>
                            <input
                                type="radio"
                                name="radio"
                                onClick={() => setType("zabawki")}
                                onBlur={() => update("type",type)}
                            />
                            <span className="mobileCheckmark" />
                        </label>
                        <label className="mobileContainer">
                            <span className="mobileContainer_text">
                                książki
                            </span>
                            <input
                                type="radio"
                                name="radio"
                                onClick={() => setType("książki")}
                                onBlur={() => update("type",type)}
                            />
                            <span className="mobileCheckmark" />
                        </label>
                        <label className="mobileContainer">
                            <span className="mobileContainer_text">
                                inne
                            </span>
                            <input
                                type="radio"
                                name="radio"
                                onClick={() => setType("inne")}
                                onBlur={() => update("type",type)}
                            />
                            <span className="mobileCheckmark" />
                        </label>
                        {
                            (type === "ubrania do ponownego użycia")
                            &&
                            <div className="mobileContainerDetails">
                                <div className="mobileContainerDetails_content">
                                    <div className="mobileContainerDetails_content__clothesBox">
                                        <p className="detailsBox_title">
                                            Dla kogo:
                                        </p>
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
                                                value="Dla dziewczynki"
                                                onChange = {handleClickWho}
                                            />
                                            <span />
                                            Dla dziewczynki
                                        </label>
                                    </div>
                                    <div className="mobileContainerDetails_content__clothesBox">
                                        <p className="detailsBox_title">
                                            Jakie przeznaczenie:
                                        </p>
                                        <label className="checkbox">
                                            <input
                                                type="checkbox"
                                                value="Sezon jesień - zima"
                                                onChange = {handleClickWhat}
                                            />
                                            <span />
                                            Sezon jesień - zima
                                        </label>
                                        <label className="checkbox">
                                            <input
                                                type="checkbox"
                                                value="Sezon wiosna - lato"
                                                onChange = {handleClickWhat}
                                            />
                                            <span />
                                            Sezon wiosna - lato
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="mobileFormButton mobileNextButton mobileConfirmTypeButton"
                                    onClick={()=> {
                                        setType('');
                                        setForWhatDestiny([]);
                                        setForWhoClothes([]);
                                        update("forWhoClothes", [...forWhoClothes]);
                                        update("forWhatDestinyClothes", [...forWhatDestiny]);
                                        }}
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
                                                                        className="listItem"
                                                                        onClick={onOptionClickedBoy(option)}
                                                                        key={index}
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
                                                                        className="listItem"
                                                                        onClick={onOptionClickedGirl(option)}
                                                                        key={index}
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
                                    onClick={() => {
                                        setType('');
                                        update("forWhoToys", [...forWhoToys]);
                                        setForWhoToys([]);
                                        setSelectedOptionGirl("0-2");
                                        setSelectedOptionBoy("0-2");
                                    }}
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
                                        <label className="checkbox">
                                            <input
                                                type="checkbox"
                                                value="dla Dorosłych"
                                                onChange={handleClickBooks}
                                            />
                                            <span />
                                            Dla dorosłych
                                        </label>
                                        <label className="checkbox">
                                            <input
                                                type="checkbox"
                                                value="dla Dzieci"
                                                onChange={handleClickBooks}
                                            />
                                            <span />
                                            Dla dzieci
                                        </label>
                                        <label className="checkbox">
                                            <input
                                                type="checkbox"
                                                value="dla Młodzieży"
                                                onChange={handleClickBooks}
                                            />
                                            <span />
                                            Dla młodzieży
                                        </label>
                                        <label className="checkbox">
                                            <input
                                                type="checkbox"
                                                value="Edukacyjne"
                                                onChange={handleClickBooks}
                                            />
                                            <span />
                                            Edukacyjne
                                        </label>
                                    </div>
                                </div>
                                <button
                                    className="mobileFormButton mobileNextButton mobileConfirmTypeButton"
                                    onClick={()=>{
                                        setType('');
                                        update("forWhoBooks", [...forWhoBooks]);
                                        setForWhoBooks([]);
                                        }}
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
                                    onClick={()=> {
                                        setType('');
                                        update("otherTypeText",otherTypeText);
                                        setOtherTypeText('');
                                        }}
                                >
                                    ok
                                </button>
                            </div>
                        }
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default FormStep1;