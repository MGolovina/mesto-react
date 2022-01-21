function PopupWithForm({ name, title, isOpen, onClose, children }) {
  return (
    <div
      className={`popup popup_${name} ${isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container popup__overlay">
        <button
          className={`popup__close popup__close_edit"`}
          onClick={onClose}
          type="button"
        ></button>
        <form
          className="popup__form"
          name={name}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button name="submit" className="popup__button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;