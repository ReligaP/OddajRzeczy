import { useEffect , useState } from 'react';
import { BrowserView , MobileView } from "react-device-detect";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import mobileFormCityOptions from "../../../database/mobileFormCityOptions";
import mobileFormFundOptions from "../../../database/mobileFormFundOptions";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const FormStep3 = ({ update }) => {
    const [city,setCity]= useState("Warszawa");
    const [isOpen, setIsOpen] = useState(false);
    const [currentCase, setCurrentCase] = useState(NaN);
    const [who,setWho] = useState("dzieciom");
    const [active,setActive] = useState(false);
    const [fund,setFund] = useState("");

    useEffect(() => {
        update("localization",city)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const handleClickCity = (e) => {
        setCity(e.target.value);
    };
    const togglingCity = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setCity(value);
        update("localization",value);
        setIsOpen(false);
        setCurrentCase(NaN);
    };
    const currentSelector = (e) => {
        setCurrentCase(Number(e.target.value));
    };
    const handleClickWhoHelp = (e) => {
        setWho(e.target.value);
        update("whoHelp",e.target.value);
    };
    const handleClickActive = () => {
        setActive(true);
    };
    const handleClickFund = (e) => {
        setFund(e.target.value);
        update("fund",e.target.value);
    };
    const handleClickOther = (e) => {
        setFund(e.target.value);
        update("fund",fund);
    };
    return (
        <>
            <BrowserView>
                <section className="step3Box">
                    <header className="step">
                        <p className="step_content">
                            Krok 3/4
                        </p>
                    </header>
                    <section className="text">
                        <p className="text_content">
                            Lokalizacja:
                        </p>
                    </section>
                    <form className="step3Box_content">
                        <div>
                            <FormControl
                                size="medium"
                            >
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={city}
                                    size="large"
                                    variant="standard"
                                    sx = {{width:"150px"}}
                                    onChange={handleClickCity}
                                    onBlur={() => update("localization", city)}
                                >
                                    <MenuItem value={"Warszawa"}>Warszawa</MenuItem>
                                    <MenuItem value={"Poznań"}>Poznań</MenuItem>
                                    <MenuItem value={"Kraków"}>Kraków</MenuItem>
                                    <MenuItem value={"Wrocław"}>Wrocław</MenuItem>
                                    <MenuItem value={"Katowice"}>Katowice</MenuItem>
                                    <MenuItem value={"Gdańsk"}>Gdańsk</MenuItem>
                                    <MenuItem value={"Lublin"}>Lublin</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="content3Box">
                            <p className="content3Box_text">
                                Komu chcesz pomóc?
                            </p>
                            <div className="content3Box_select">
                                <label className="container">
                                    <span className="container_text">
                                        dzieciom
                                    </span>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value={"dzieciom"}
                                        onClick={() => setWho("dzieciom")}
                                        onBlur={() => update("who",who)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="container">
                                    <span className="container_text">
                                        samotnym matkom
                                    </span>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value={"samotnym matkom"}
                                        onClick={() => setWho("samotnym matkom")}
                                        onBlur={() => update("who",who)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="container">
                                    <span className="container_text">
                                        bezdomnym
                                    </span>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value={"bezdomnym"}
                                        onClick={() => setWho("bezdomnym")}
                                        onBlur={() => update("who",who)}
                                    />
                                    <span className="checkmark" />
                                </label>
                                <label className="container">
                                    <span className="container_text">
                                        niepełnosprawnym
                                    </span>
                                    <input
                                        type="radio"
                                        name="radio"
                                        value={"niepełnosprawnym"}
                                        onClick={() => setWho("niepełnosprawnym")}
                                        onBlur={() => update("who",who)}
                                    />
                                    <span className="checkmark" />
                                </label>
                            </div>
                        </div>
                        <div>
                            <p className="content3Box_text">
                                Wpisz nazwę innej lokalizacji (opcjonalnie)
                            </p>
                            <input
                                className="content3Box_input"
                                onChange={handleClickCity}
                                onBlur={() => update("localization",city)}
                            />
                        </div>
                    </form>
                </section>
            </BrowserView>
            <MobileView>
                <section>
                    <div className="stepMobileBox">
                        <header>
                            <div className="stepMobileBox_header headerStep2">
                                <p className="stepMobileBox_header__content headerStep2_content">
                                    Znajdź organizację, której chcesz pomóc
                                </p>
                            </div>
                        </header>
                        <div className="stepMobileBox_warning">
                            <InfoOutlinedIcon sx={{fontSize:"50px",color:"#fff"}} />
                            <div className="stepMobileBox_warning__content">
                                <p className="stepWarningText warningTextStep2">
                                    Jeśli wiesz komu chcesz pomóc, możesz wpisać nazwę organizacji.
                                </p>
                                <p className="stepWarningText warningTextStep2">
                                    Możesz też filtrować organizacje po ich lokalizacji bądź celu ich pomocy.
                                </p>
                            </div>
                        </div>
                        <div className="stepMobileBox_step3Box">
                            <div className="stepMobileBox_step3Box__city">
                                <p className="step3Box_text">
                                    Lokalizacja
                                </p>
                                <div className="dropDownContainerStep2 dropDownStep3">
                                    <div
                                        className="dropDownHeaderStep2"
                                        onClick={togglingCity}
                                    >
                                        {city}
                                        {isOpen ? <ArrowUpwardIcon fontSize="xsmall"/> : <ArrowDownwardIcon fontSize="xsmall"/>}
                                    </div>
                                    {
                                        isOpen
                                        &&
                                        (
                                            <div className="dropDownListContainer">
                                                <ul className="dropDownListStep2">
                                                    {
                                                        mobileFormCityOptions.map((option,index) => (
                                                            <li
                                                                className={`listItemStep2 ${currentCase === index?'focusStep2':''}`}
                                                                onClick={onOptionClicked(option)}
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
                            <div className="stepMobileBox_step3Box__who">
                                    <p className="step3Box_text">
                                        Komu chcesz pomóc
                                    </p>
                                    <div className="step3Box_container">
                                        <button
                                            className={`step3Box_container__box ${who === "dzieciom" ? 'activeItem' :''}`}
                                            value={"dzieciom"}
                                            onClick={handleClickWhoHelp}
                                        >
                                            dzieciom
                                        </button>
                                        <button
                                            className={`step3Box_container__box ${who === "samotnym matkom" ? 'activeItem' :''}`}
                                            value={"samotnym matkom"}
                                            onClick={handleClickWhoHelp}
                                        >
                                            samotnym matkom
                                        </button>
                                        <button
                                            className={`step3Box_container__box ${who === "bezdomnym" ? 'activeItem' :''}`}
                                            value={"bezdomnym"}
                                            onClick={handleClickWhoHelp}
                                        >
                                            bezdomnym
                                        </button>
                                        <button
                                            className={`step3Box_container__box ${who === "niepełnosprawnym" ? 'activeItem' :''}`}
                                            value={"niepełnosprawnym"}
                                            onClick={handleClickWhoHelp}
                                        >
                                            niepełnosprawnym
                                        </button>
                                    </div>
                                </div>
                            <div className="stepMobileBox_step3Box__search">
                                <button
                                    className="step3Box_button"
                                    onClick={handleClickActive}
                                >
                                    szukaj
                                </button>
                                {
                                    active
                                    &&
                                    <div
                                        className="step3BoxSearchContainer"
                                    >
                                        {
                                            mobileFormFundOptions.filter(el =>
                                                (el.city === city && (el.type.includes(`${who}`)))).map((item) => {
                                                    return(
                                                        <li
                                                            key={item.id}
                                                            className="step3BoxSearchContainer_item"
                                                        >
                                                            <button
                                                                value={item.title}
                                                                onClick={handleClickFund}
                                                                className={`buttonSearch ${fund === `${item.title}` ? 'activeFund' : ''}`}
                                                            >
                                                        <span className="buttonSearch_title">
                                                            {item.title}
                                                        </span>
                                                                <span className="buttonSearch_type">
                                                            Pomoc {item.type.toString()}
                                                        </span>
                                                                <span className="buttonSearch_city">
                                                            {item.city}
                                                        </span>
                                                                <span className="buttonSearch_content">
                                                            {item.description}
                                                        </span>
                                                            </button>
                                                        </li>
                                                    )
                                                })
                                        }
                                    </div>
                                }
                            </div>
                            <div className="stepMobileBox_step3Box__fundOther">
                                <p className="step3Box_text">
                                    Wpisz nazwę konkretnej organizacji (opcjonalnie)
                                </p>
                                <input
                                    className="content3Box_input fundOtherInput"
                                    onChange={handleClickOther}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </MobileView>
        </>
    );
};

export default FormStep3;