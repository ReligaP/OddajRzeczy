import { useState , useEffect } from "react";
import { BrowserView , MobileView } from "react-device-detect";
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import mobileFormBagsOptions from "../../../database/mobileFormBagsOptions";

const FormStep2 = ({ update }) => {
    const [bags,setBags] = useState("1");
    const [isOpen, setIsOpen] = useState(false);
    const [currentCase, setCurrentCase] = useState(NaN);

    useEffect(() => {
        update("bags",bags);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const handleClickBags = (e) => {
        setBags(e.target.value);
    };
    const togglingBags = () => setIsOpen(!isOpen);
    const onOptionClicked = value => () => {
        setBags(value);
        update("bags",value);
        setIsOpen(false);
        setCurrentCase(NaN);
    };
    const currentSelector = (e) => {
        setCurrentCase(Number(e.target.value));
    };
    return (
        <>
            <BrowserView>
                <div className="step2Box">
                    <div className="step">
                        <p className="step_content">
                            Krok 2/4
                        </p>
                    </div>
                    <div className="text">
                        <p className="text_content">
                            Podaj liczbę 60l worków, w które spakowałeś/aś rzeczy:
                        </p>
                    </div>
                    <div className="step2Box_content">
                        <p className="step2Box_content__text">
                            Liczba 60l worków:
                        </p>
                        <FormControl
                            size="medium"
                        >
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                className="step2Box_content__select"
                                value={bags}
                                size="large"
                                variant="standard"
                                onChange={handleClickBags}
                                onBlur={() => update("bags", bags)}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <section>
                    <div className="stepMobileBox">
                        <header>
                            <div className="stepMobileBox_header headerStep2">
                                <p className="stepMobileBox_header__content headerStep2_content">
                                    Podaj liczbę 60 l worków, w które spakowałeś/aś rzeczy
                                </p>
                            </div>
                        </header>
                        <div className="stepMobileBox_warning">
                            <InfoOutlinedIcon sx={{fontSize:"50px",color:"#fff"}} />
                            <div className="stepMobileBox_warning__content">
                                <p className="stepWarningText warningTextStep2">
                                    Wszystkie rzeczy do oddania zapakuj w 60 l worki.
                                </p>
                                <p className="stepWarningText">
                                    Dokładną instrukcję jak poprawnie spakować rzeczy znajdziesz &nbsp;
                                    <span className="warningTextStep2_content">
                                        tutaj
                                    </span>
                                    .
                                </p>
                            </div>
                        </div>
                        <form>
                            <div className="stepMobileBox_step2Box">
                                <p className="stepMobileBox_step2Box__text">
                                    Liczba 60 l worków:
                                </p>
                                <div className="dropDownContainerStep2">
                                    <div
                                        className="dropDownHeaderStep2"
                                        onClick={togglingBags}
                                    >
                                        {bags}
                                        {isOpen ? <ArrowUpwardIcon fontSize="xsmall"/> : <ArrowDownwardIcon fontSize="xsmall"/>}
                                    </div>
                                    {
                                        isOpen
                                        &&
                                        (
                                            <div className="dropDownListContainer">
                                                <ul className="dropDownListStep2">
                                                    {
                                                        mobileFormBagsOptions.map((option,index) => (
                                                            <li
                                                                className={`listItemStep2 ${currentCase === index ?'focusStep2':''}`}
                                                                key={index}
                                                                value={index}
                                                                onClick={onOptionClicked(option)}
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
                            </div>
                        </form>
                    </div>
                </section>
            </MobileView>
        </>
    );
};

export default FormStep2;