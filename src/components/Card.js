function Card({ card, handleCardClick }) {
    return (
        <li className="elements__card">
            <img
                onClick={() => { handleCardClick(card) }}
                src={card.link}
                className="elements__image"
                alt={card.name} />
            <button
                type="button"
                className="elements__card-button_trash"
            ></button>
            <div className="elements__title-wrap">
                <h2 className="elements__title">{card.name}</h2>
                <div className="elements__like-group">
                    <button
                        type="button"
                        className="elements__like-button"
                        onClick={(event) => { event.target.classList.toggle('elements__like-button_active') }}
                    ></button>
                    <span className="elements__like-count">{card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card