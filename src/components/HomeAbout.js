import Decoration from "../assets/Decoration.svg";
import Signature from "../assets/Signature.svg";
import Image from "../assets/People.jpg";

const HomeAbout = () => {
    return (
        <div id="HomeAbout" className="homeAboutBox">
            <div className="homeAboutBox_content">
                <p className="homeAboutBox_content__title">
                    O nas
                </p>
                <img
                    className="homeAboutBox_content__img"
                    src={Decoration}
                    alt="decoration sign"
                />
                <div className="homeAboutBox_content__text">
                    <p>
                        Nori grape silver beet broccoli kombu beet greens fava bean
                        potato quandong celery. Bunya nuts black-eyed pea prairie turnip
                        leek lentil turnip greens parsnip.
                    </p>
                </div>
                <img
                    className="homeAboutBox_content__signature"
                    src={Signature}
                    alt="signature"
                />
            </div>
            <div
                className="homeAboutBox_image"
                style={{backgroundImage:`url(${Image})`}}
            >
            </div>
        </div>
    );
};

export default HomeAbout;