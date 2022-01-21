import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';


function App() {
  const [selectedCard, setSelectedCard] = useState();
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);

  function handleCardClick(elem) {
    setSelectedCard(elem)
  }

  function onEditAvatar() {
    setIsEditAvatarPopupOpen(true)
  }

  function onEditProfile() {
    setIsEditProfilePopupOpen(true)
  }

  function onAddPlace() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard('');
    setIsEditAvatarPopupOpen(false);
  }

  return (
    <div className='page'>
      <div className='page__container'>
        <Header />
        <Main
          onEditAvatar={onEditAvatar}
          handleCardClick={handleCardClick}
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
        />
        <Footer />

        <PopupWithForm isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} title='Обновить аватар' name='avatar'>
          <input id='avatar-link' name='avatar' type='url' required placeholder='Ссылка на картинку'
            className='popup__input' />
          <span id='avatar-link-error' className='popup__input-error'></span>
        </PopupWithForm>

        <PopupWithForm isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} title='Редактировать профиль' name='popupProfileForm'>
          <>
            <input id='profile-name' name='name' minLength='2' maxLength='40' required type='text' placeholder='Имя'
              className='popup__input popup__input_type_name' />
            <span id='profile-name-error' className='popup__input-error'></span>
            <input id='profile-caption' name='about' minLength='2' maxLength='200' required type='text' placeholder='Описание'
              className='popup__input popup__input_type_about' />
            <span id='profile-caption-error' className='popup__input-error'></span>
          </>
        </PopupWithForm>

        <PopupWithForm isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} title='Новое место' name='popupAddForm'>
          <>
            <input id='placeName-input' name='name' minLength='2' maxLength='40' required type='text'
              placeholder='Название' className='popup__input popup__input_place_name' />
            <span id='placeName-input-error' className='popup__input-error'></span>
            <input id='placeUrl-input' name='link' type='url' required placeholder='Ссылка на картинку'
              className='popup__input popup__input_place_url' />
            <span id='placeUrl-input-error' className='popup__input-error'></span>
          </>
        </PopupWithForm>
        <ImagePopup onClose={closeAllPopups} card={selectedCard} />
      </div>
    </div>
  );
};

export default App;
