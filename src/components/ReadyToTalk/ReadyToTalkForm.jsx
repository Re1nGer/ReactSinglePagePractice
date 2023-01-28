import "./ReadyToTalkForm.css";

function ReadyToTalkForm() {

    return (
        <div className="readytalk__form">
            <p className="readytalk__form_heading">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <h1 className="readytalk__form_title">Ready to talk?</h1>
            <form className="readytalk__form_fields">
                <input required name="name" className="readytalk__form_input-name" type="text" placeholder="name" />
                <input required name="surname" className="readytalk__form_input-email" type="email" placeholder="email" />
                <button type="submit" className="readytalk__form_contact-btn">Contact Us</button>
            </form>
        </div>
    );
}

export default ReadyToTalkForm;