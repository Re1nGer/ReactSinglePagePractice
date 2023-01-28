import "./WhatWeAdvise.css";
import { PhoneCall } from "react-feather";

function WhatWeAdvise() {

    return (

        <div className="whatweadvise">
            <div className="section">
                <div className="whatweadvise__container">
                    <div className="whatweadvise__left">
                        <div className="whatweadvise__left_title">
                            <h1>We advise leaders on strategy, marketing, organization, operations, IT and M&A</h1>
                        </div>
                        <div className="whatweadvise__left_content">
                            <p>The principal reason we continue to adapt and evolve our business model is to ensure that we are meeting our customers’ expectations. One example of this has been to use modern technology and the introduction of the real time tracking our teams using GPS. This ensures our customers get the time they have paid for has been spent at our customers’ homes since this is the most common problem within our industry.</p>
                        </div>
                        <div className="whatweadvise__left_chat">
                            <PhoneCall className="whatweadvise__left_chat-icon" />
                            <h3 className="whatweadvise__left_chat-text">Chat Now</h3>
                        </div>
                    </div>
                    <div className="whatweadvise__right">
                        <h1 className="whatweadvise__right_title-text">We collaborate with brands and agencies to create memorable experiences.</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhatWeAdvise;