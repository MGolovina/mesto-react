import { useState, useEffect } from "react";
import Card from "./Card";
import api from "../utils/Api";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick }) {
  const [userName, setUserName] = useState('')
  const [userInfo, setuserInfo] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setCards] = useState([])
  
  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getCards()])
      .then(([userInfo, cards]) => {
        setUserAvatar(userInfo.avatar)
        setCards(cards);
        setUserName(userInfo.name)
        setuserInfo(userInfo.about)
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
                handleCardClick={onCardClick}
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