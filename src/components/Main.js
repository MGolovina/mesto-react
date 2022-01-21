import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, handleCardClick }) {
    const [userName, setUserName] = useState('')
    const [userInfo, setuserInfo] = useState('')
    const [userAvatar, setUserAvatar] = useState('')
    const [cards, setCards] = useState([])

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCards()])
            .then((data) => {
                setUserAvatar(data[0].avatar)
                setCards(data[1]);
                setUserName(data[0].name)
                setuserInfo(data[0].about)
            })
            .catch((er) => {
                console.log(er);
            });
    }, []);

    return (
        <main>
            <section className='profile'>
                <div className="profile__avatar">
                    <img 
                    src={userAvatar} 
                    className='profile__avatar profile__new-avatar' />
                    <button 
                    type="button"
                    onClick={onEditAvatar} 
                    className='profile__avatar-edit-button'></button>
                </div>
                <div className='profile__info'>
                    <div className="profile__container">
                        <h1 className='profile__name'>{userName}</h1>
                        <button 
                        type='button' 
                        className='profile__edit-button' 
                        onClick={onEditProfile}></button>
                    </div>
                    <h2 className='profile__about'>{userInfo}</h2>
                </div>
                <button 
                type='button' 
                onClick={onAddPlace} 
                className='profile__add-button'></button>
            </section>
            <section className="elements">
                <ul className="elements__container">
                    {cards.map((elem) => {
                        return (
                            <Card
                                handleCardClick={handleCardClick}
                                key={elem._id}
                                card={elem}
                            />
                        )
                    })}
                </ul>
            </section>
        </main>

    )
}

export default Main;