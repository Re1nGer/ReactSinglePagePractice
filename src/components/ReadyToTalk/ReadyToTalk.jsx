import "./ReadyToTalk.css";
import FormImage from "../../assets/readyTalk.jpg";
import ReadyToTalkForm from "./ReadyToTalkForm";

function ReadyToTalk() {
    return (
        <div className="readytalk">
            <div className="section">
                <div className="readytalk__container">
                    <ReadyToTalkForm />
                    <div className="readytalk__right">
                        <h1 className="readytalk__right_title">We work with ambitious leaders</h1>
                        <div className="readytalk__right_img-container">
                            <img className="readytalk__right_img" src={FormImage} alt="form" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ReadyToTalk;