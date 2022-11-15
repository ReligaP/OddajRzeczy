import { Link } from "react-router-dom";

const MobileFormButtons = (props) => {
    return (
        <div className={`mobileFormButtons ${props.page > 1 && 'buttonsBox'} ${props.page === 6 && 'buttonsBoxThanks'}`}>
            {
                (props.page !== 1 && props.page <= 5)
                &&
                <button
                    className="mobileFormButton mobileBackButton"
                    onClick={props.back}
                >
                    cofnij
                </button>
            }
            {
                props.page < 5
                &&
                <button
                    className="mobileFormButton mobileNextButton"
                    onClick={props.next}
                >
                    dalej
                </button>
            }
            {
                props.page === 5
                &&
                <button
                    className="mobileFormButton mobileConfirmButton"
                    onClick={props.confirm}
                >
                    potwierdzam
                </button>
            }
            {
                props.page >= 6
                &&
                <Link to="/" className="mobileFormButtonLink mobileFormButton mobileThanksButton">
                        Strona główna
                </Link>
            }
            {
                props.page >= 6
                &&
                <Link
                    className="mobileFormButtonLink mobileFormButton mobileThanksButton"
                    to="/"
                >
                    Twoje darowizny
                </Link>
            }
        </div>
    );
};

export default MobileFormButtons;