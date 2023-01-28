import "./Card.css";

function InfoCardWithButton({ content }) {
    return (
        <div className="card">
            <div className="card__info_content">
                <p className="card__info_content-text">{content}</p>
            </div>
            <div className="card__info_btn">
                <button className="">Read More</button>
            </div>
        </div>
     );
}

export default InfoCardWithButton;