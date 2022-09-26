import { BrowserView , MobileView } from "react-device-detect";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Icon1 from "../../../assets/Icon-1.svg";
import Icon2 from "../../../assets/Icon-4.svg";

const FormSummary = ({ data }) => {
    const printBags = () => {
        if (Number(data.bags) === 1) {
            return `${data.bags} worek ,`
        }
        if (Number(data.bags) >= 2 && Number(data.bags) <= 4) {
            return `${data.bags} worki ,`
        }
        if (Number(data.bags) > 4 ) {
            return `${data.bags} worków ,`
        }
        if ((data.bags.length) === 2 ) {
            return `Więcej niż 5 worków ,`
        }
    };
    const printType = () => {
        switch (data.type) {
            case "ubrania do wyrzucenia":
                return `${data.type}`;
            case "książki":
                return `${data.type} ${data.forWhoBooks}`;
            case "inne":
                return `${data.type}`;
            case "ubrania do ponownego użycia":
                return `${data.type}, ${data.forWhoClothes}`;
            case "zabawki":
                return `${data.type},${data.forWhoToys} w wieku ${data.toysBoyAge} ${data.toysGirlAge} lat`
            default:
                break;
        }
    };
    return (
        <>
            <BrowserView>
                <div className="summaryBox">
                    <div className="text">
                        <p className="text_content">
                            Podsumowanie Twojej darowizny
                        </p>
                    </div>
                    <div className="summaryBox_content">
                        <div className="contentUpBox">
                            <p className="contentUpBox_title">
                                Oddajesz:
                            </p>
                            <div className="contentUpBox_text" >
                                <img
                                    src={Icon1}
                                    alt="Icon1"
                                    className="contentUpBox_text__img"
                                />
                                <p className="contentUpBox_text__info">
                                    {data.bags} worki,{data.type}, {data.who}
                                </p>
                            </div>
                            <div className="contentUpBox_text">
                                <img
                                    src={Icon2}
                                    alt="Icon2"
                                    className="contentUpBox_text__img"
                                />
                                <p className="contentUpBox_text__info">
                                    dla lokalizacji: {data.localization}
                                </p>
                            </div>
                        </div>
                        <div className="contentDownBox">
                            <div className="contentDownBox_box1">
                                <p className="contentDownBox_box1__title">
                                    Adres odbioru:
                                </p>
                                <div className="contentDownBox_box1__text1">
                                    <p className="contentDownBox_text">
                                        Ulica
                                    </p>
                                    <p className="contentDownBox_text">
                                        {data.street}
                                    </p>
                                </div>
                                <div className="contentDownBox_box1__text2">
                                    <p className="contentDownBox_text">
                                        Miasto
                                    </p>
                                    <p className="contentDownBox_text">
                                        {data.city}
                                    </p>
                                </div>
                                <div className="contentDownBox_box1__text3">
                                    <p className="contentDownBox_text contentDownBox_text3">
                                        Kod Pocztowy
                                    </p>
                                    <p className="contentDownBox_text">
                                        {data.postCode}
                                    </p>
                                </div>
                                <div className="contentDownBox_box1__text3">
                                    <p className="contentDownBox_text contentDownBox_text4">
                                        Numer telefonu
                                    </p>
                                    <p className="contentDownBox_text">
                                        {data.phone}
                                    </p>
                                </div>
                            </div>
                            <div className="contentDownBox_box2">
                                <p className="contentDownBox_box2__title">
                                    Termin odbioru:
                                </p>
                                <div className="contentDownBox_box2__text1">
                                    <p className="contentDownBox_text">
                                        Data
                                    </p>
                                    <p className="contentDownBox_text contentDownBox_marginText">
                                        {data.date}
                                    </p>
                                </div>
                                <div className="contentDownBox_box2__text2">
                                    <p className="contentDownBox_text">
                                        Godzina
                                    </p>
                                    <p className="contentDownBox_text contentDownBox_marginText">
                                        {data.time}
                                    </p>
                                </div>
                                <div className="contentDownBox_box2__text3">
                                    <p className="contentDownBox_text contentDownBox_text5">
                                        Uwagi dla kuriera
                                    </p>
                                    <p className="contentDownBox_text">
                                        {data.note}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <div className="StepMobileBox">
                   <div className="stepMobileBox_header headerStep2 ">
                       <p className="stepMobileBox_header__content headerStep2_content">
                           Podsumowanie Twojej darowizny
                       </p>
                   </div>
                    <div className="stepMobileBox_summaryBox">
                        <div className="stepMobileBox_summaryBox__dataBox">
                            <div className="deliveryBox_title">
                                <p className="deliveryBox_title__content summaryDataBoxTitle ">
                                   Oddajesz
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <ShoppingBagOutlinedIcon sx={{width:"50px",height:"50px",marginRight:"10px"}} />
                                <p className="dataBox_content__text">
                                    {printBags()}{printType()}
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <VolunteerActivismIcon sx={{width:"50px",height:"50px",marginRight:"10px"}} />
                                <p className="dataBox_content__text">
                                    {data.fund}&nbsp;
                                    {(data.fund === undefined || data.localization === undefined) ? '' : ', '}
                                    {data.localization}
                                </p>
                            </div>
                        </div>
                        <div className="stepMobileBox_summaryBox__dataBox">
                            <div className="deliveryBox_title">
                                <p className="deliveryBox_title__content summaryDataBoxTitle">
                                    Adres odbioru
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text ">
                                    Ulica:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.street}
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text">
                                    Miasto:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.city}
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text">
                                    Kod pocztowy:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.postCode}
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text">
                                    Numer Tel:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.phone}
                                </p>
                            </div>
                        </div>
                        <div className="stepMobileBox_summaryBox__dataBox">
                            <div className="deliveryBox_title">
                                <p className="deliveryBox_title__content summaryDataBoxTitle">
                                    Termin odbioru
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text">
                                    Data:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.date}
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text">
                                    Godzina:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.time}
                                </p>
                            </div>
                            <div className="dataBox_content">
                                <p className="dataBox_content__text">
                                    Uwagi:
                                </p>
                                <p className="dataBox_content__text dataBoxContentText2">
                                    {data.note}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MobileView>
        </>
    );
};

export default FormSummary;