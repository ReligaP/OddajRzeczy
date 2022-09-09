
const MobileFormButtons = (props) => {
    return (
        <div className={`mobileFormButtons ${props.page > 1 && 'buttonsBox'} ${props.page === 6 && `buttonsThank`}`}>
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
        </div>
    );
};

export default MobileFormButtons;