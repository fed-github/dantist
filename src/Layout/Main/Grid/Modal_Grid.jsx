import React, { useState } from "react";
import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const Modal_Grid = ({ serviceInfo, onClose }) => {
  const [isSecondModalOpen, setSecondModalOpen] = useState(false);
  const [question, setQuestion] = useState(
    `Вы действительно хотите купить услугу ${serviceInfo.title} ?`
  );
  const [imageSrc, setImageSrc] = useState(serviceInfo.image);

  // Обработчик для кнопки "Купить"
  const handleBuyClick = () => {
    setSecondModalOpen(true);
  };

  // Обработчик для кнопки "Да"
  const handleYesClick = () => {
    setQuestion("Я этого еще не добавил...\n Но ты можешь позвонить");
    setImageSrc(`${import.meta.env.BASE_URL}icons/Catcker.gif`);
  };

  // Обработчик для кнопки "Нет"
  const handleNoClick = () => {
    setSecondModalOpen(false);
  };

  return (
    <>
      {/* Первое модальное окно */}
      <Modal
        open={!!serviceInfo}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-lg w-80 sm:w-full relative">

            {/* Кнопка закрытия модального окна */}
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-white hover:text-gray-400 pb-2"
              // Добавлен отступ снизу для иконки
            >
              <CloseIcon />
            </button>

            {/* Заголовок модального окна */}
            <h2 id="modal-modal-title" className="text-2xl mb-4">
              {serviceInfo.title}
            </h2>

            {/* Изображение услуги */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={serviceInfo.image}
                alt="Service"
                className="object-cover w-1/2 h-auto rounded-lg"
              />
            </div>

            {/* Описание услуги */}
            <p id="modal-modal-description" className="mb-4 text-lg">
              {serviceInfo.description}
            </p>

            {/* Цена услуги */}
            <p className="text-lg font-bold mb-4 text-center text-gray-200">
              Цена: <span className="text-green-400">${serviceInfo.price}</span>
            </p>

            {/* Кнопки действия */}
            <div className="flex justify-center space-x-4 relative">
              <button
                onClick={handleBuyClick}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Купить
              </button>
              <button
                onClick={onClose}
                className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
              >
                Назад
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Второе модальное окно */}
      <Modal
        open={isSecondModalOpen}
        onClose={handleNoClick}
        aria-labelledby="confirmation-modal-title"
        aria-describedby="confirmation-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-lg w-80 sm:w-full relative">

            {/* Кнопка закрытия модального окна */}
            <button
              onClick={handleNoClick}
              className="absolute top-2 right-2 text-white hover:text-gray-400 pb-2"
              // Добавлен отступ снизу для иконки
            >
              <CloseIcon />
            </button>

            {/* Заголовок модального окна */}
            <h2
              id="confirmation-modal-title"
              className="text-2xl mb-4 text-center"
            >
              {question}
            </h2>

            {/* Изображение подтверждения */}
            <div className="flex justify-center items-center mb-4">
              <img
                src={imageSrc}
                alt="Confirmation"
                className="object-cover w-1/2 h-auto rounded-lg "
              />
            </div>

            {/* Кнопки действия */}
            <div className="flex justify-center space-x-4 relative">
              {question.includes("позвонить") ? (
                <button
                  className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded-lg"
                >
                  55535
                </button>
              ) : (
                <>
                  <button
                    onClick={handleYesClick}
                    className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300"
                  >
                    Да
                  </button>
                  <button
                    onClick={handleNoClick}
                    className="bg-red-700 hover:bg-red-800 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Нет
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Modal_Grid;
