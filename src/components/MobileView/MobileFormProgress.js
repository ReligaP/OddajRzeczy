import DoneIcon from '@mui/icons-material/Done';

const MobileFormProgress = ( props ) => {
    return (
        <div className={`mobileFormProgress ${props.page === 6 && `mobileFormProgressDone`}`}>
                <div className={`mobileFormProgress_box ${props.page === 1 && `checked`} ${props.page > 1 && 'done'}`}>
                    <p className="mobileFormProgress_box__number">
                        1
                    </p>
                </div>
                <div className={`mobileFormProgress_box ${props.page === 2 && `checked`} ${props.page > 2 && 'done'}`}>
                    <p className="mobileFormProgress_box__number">
                        2
                    </p>
                </div>
                <div className={`mobileFormProgress_box ${props.page === 3 && `checked`} ${props.page > 3 && 'done'}`}>
                    <p className="mobileFormProgress_box__number">
                        3
                    </p>
                </div>
                <div className={`mobileFormProgress_box ${props.page === 4 && `checked`} ${props.page > 4 && 'done'}`}>
                    <p className="mobileFormProgress_box__number">
                        4
                    </p>
                </div>
                <div className={`mobileFormProgress_box ${props.page === 5 && `checked`} ${props.page > 5 && 'done'}`}>
                    <DoneIcon
                        fontSize="large"
                        className="mobileFormProgress_box__icon"
                    />
                </div>
        </div>
    );
};

export default MobileFormProgress;