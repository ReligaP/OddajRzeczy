import React from 'react';

const HomeThreeColumns = () => {
    return (

        <div className="homeThreeColumnsBox" style={{backgroundColor:"yellow"}}>
            <div className="homeThreeColumnsBox_Boxes">
                <div className="homeThreeColumnsBox_Boxes__number">
                    10
                </div>
                <div className="homeThreeColumnsBox_Boxes__title">
                    Oddanych worków
                </div>
                <div className="homeThreeColumnsBox_Boxes__content">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </div>
            </div>
            <div className="homeThreeColumnsBox_Boxes">
                <div className="homeThreeColumnsBox_Boxes__number">
                    5
                </div>
                <div className="homeThreeColumnsBox_Boxes__title">
                    Wspartych organizacji
                </div>
                <div className="homeThreeColumnsBox_Boxes__content">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma. Aliquam erat volutpat.
                </div>
            </div>
            <div className="homeThreeColumnsBox_Boxes">
                <div className="homeThreeColumnsBox_Boxes__number">
                    7
                </div>
                <div className="homeThreeColumnsBox_Boxes__title">
                    Zorganizowanych zbiórek
                </div>
                <div className="homeThreeColumnsBox_Boxes__content">
                    Lorem ipsum dolor sit amet, consectetur adipisc Pellentesque
                    vel enim a elit viverra elementuma.<br/>Aliquam erat volutpat.
                </div>
            </div>
        </div>
    );
};

export default HomeThreeColumns;