import { useState } from "react";
import { BrowserView , MobileView } from "react-device-detect";
import { addDoc, collection , getFirestore } from "firebase/firestore";
import FormStep1 from "./FormSteps/FormStep1";
import FormStep2 from "./FormSteps/FormStep2";
import FormStep3 from "./FormSteps/FormStep3";
import FormStep4 from "./FormSteps/FormStep4";
import FormSummary from "./FormSteps/FormSummary";
import FormThanks from "./FormSteps/FormThanks";
import FormStepHeader1 from "./FormStepHeaders/FormStepHeader1";
import FormStepHeader2 from "./FormStepHeaders/FormStepHeader2";
import FormStepHeader3 from "./FormStepHeaders/FormStepHeader3";
import FormStepHeader4 from "./FormStepHeaders/FormStepHeader4";
import MobileFormHeader from "../MobileView/MobileFormHeader";
import MobileFormProgress from "../MobileView/MobileFormProgress";
import MobileFormButtons from "../MobileView/MobileFormButtons";
import app from "../../firebase/firebaseconfig";
import Background from "../../assets/Background-Form.jpg";


const FormSelect = ( props ) => {
    const [page,setPage]= useState(1);
    const [data,setData]= useState({});

    const updateData = (type,newData) => {
        setData((data) => {
            return {...data, [type] : newData}
        })
    };
    const gotoNextPage = () => {
        if (page === 5) return;
        setPage(page => page + 1)
    };
    const goToPreviousPage = () => {
        if (page === 1) return;
        setPage(page => page - 1)
    };
    const confirm = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        const docRef = await addDoc(collection(db, `/${props.email}/`), {
            data,
        });
        if (docRef) {
            setPage(page => page + 1);
        }
    };
    return (
        <>
            <BrowserView>
                <div className="formSelectBox">
                    {page === 1 && <FormStepHeader1 />}
                    {page === 2 && <FormStepHeader2 />}
                    {page === 3 && <FormStepHeader3 />}
                    {page === 4 && <FormStepHeader4 />}
                    <div
                        className="formSelectBox_content"
                        style={{backgroundImage:`url(${Background}`}}
                    >
                        <div>
                            {page === 1 && <FormStep1 update={updateData} />}
                            {page === 2 && <FormStep2 update={updateData} />}
                            {page === 3 && <FormStep3 update={updateData} />}
                            {page === 4 && <FormStep4 update={updateData} />}
                            {page === 5 && <FormSummary data={data} />}
                            {page === 6 && <FormThanks />}
                        </div>
                        <div className="formSelectBox_content__buttons">
                            {
                                (page !== 1 && page <= 5)
                                &&
                                <button
                                    className="previousButton"
                                    onClick={goToPreviousPage}
                                >
                                    Wstecz
                                </button>
                            }
                            {
                                page < 5
                                &&
                                <button
                                    className="nextButton"
                                    onClick={gotoNextPage}
                                >
                                    Dalej
                                </button>
                            }
                            {
                                page === 5
                                &&
                                <button
                                    className="confirmButton"
                                    onClick={confirm}
                                >
                                    Potwierdzam
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </BrowserView>
            <MobileView>
                <main>
                    <section>
                        <div className="mobileSelectBox">
                            <>
                                {
                                    page <= 5 && <MobileFormHeader />
                                }
                                <MobileFormProgress page={page} />
                                {
                                    page === 1 && <FormStep1 update={updateData} />
                                }
                                {
                                    page === 2 && <FormStep2 update={updateData} />
                                }
                                {
                                    page === 3 && <FormStep3 update={updateData} />
                                }
                                {
                                    page === 4 && <FormStep4 update={updateData} />
                                }
                                {
                                    page === 5 && <FormSummary data={data} />
                                }
                                {
                                    page >= 6 && <FormThanks />
                                }
                                <MobileFormButtons
                                    page={page}
                                    confirm={confirm}
                                    next={gotoNextPage}
                                    back={goToPreviousPage}
                                />
                            </>
                        </div>
                    </section>
                </main>
            </MobileView>
        </>
    );
};

export default FormSelect;