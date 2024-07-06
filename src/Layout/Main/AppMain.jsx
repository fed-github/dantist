import React, { useState } from "react";
import foto from "/src/icons/negro.jpg";
import Grid from "./Grid/Grid";
import "./AppMain.css";

import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import InfoIcon from "@mui/icons-material/Info";
import ReplyIcon from "@mui/icons-material/Reply";

import { Modal, Box, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PaidSharpIcon from "@mui/icons-material/PaidSharp";
import PaymentMenu from "./PaymentMenu";

import {
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

export default function AppMain() {
  const [open, setOpen] = useState(false);
  const [paymentOpen, setPaymentOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handlePaymentOpen = () => setPaymentOpen(true);
  const handlePaymentClose = () => setPaymentOpen(false);

  return (
    <main className="main">
      <div className="photo_section" id="блок0">
        <div className="flex flex-col items-center p-4 backdrop-blur-md text-white rounded-lg shadow-md max-w-[90%] mx-auto">
          <img
            src={foto}
            alt="Dentist portrait"
            className="w-44 h-44 rounded-full mt-2 mb-4 bg-white"
          />
          <Tooltip
            title="Стоматолог с многолетним опытом работы"
            arrow
            placement="top"
          >
            <IconButton className="ml-2 p-0 m-0 text-white">
              <h2 className="font-semibold text-lg text-white m-0 p-0">
                Стоматолог: Вадим Булатов
              </h2>
            </IconButton>
          </Tooltip>

          <p className="text-sm">Адрес: Сhirakchi</p>
          <Button
            onClick={handleOpen}
            style={{ marginTop: "15px" }}
            variant="contained"
          >
            Номер телефона
          </Button>
        </div>
      </div>

      <div id="блок1" className="grid_title">
        <h2>Основные услуги клиники</h2>
      </div>

      <Grid />

      <div
        id="блок2"
        className="backdrop-blur-md text-white py-5 rounded-lg"
      >
        <div className="container mx-auto max-w-7xl px-5 ">
          <h2 className="text-4xl font-bold text-center text-white">
            Улыбка вашей мечты с Кобиловым Абдикадиром!
          </h2>

          <p className="text-lg mt-4 text-white">
            Приветствуем вас на сайте Dental Clinic! Мы рады предложить вам
            широкий спектр стоматологических услуг, предоставляемых опытным и
            высококвалифицированным врачом-стоматологом Кобиловым Абликадиром.
          </p>

          <p className="text-lg mt-4 text-white">
            Кобилов Абликадир обладает многолетним опытом работы и непрерывным
            стремлением к совершенствованию своих навыков. Он использует только
            самые передовые методы лечения и новейшее оборудование, чтобы
            обеспечить вам максимально комфортное и безболезненное посещение.
          </p>

          <h2 className="text-3xl font-bold mt-8 text-white-200">
            Наши преимущества:
          </h2>

          <ul className="list-disc list-inside text-lg mt-4 text-white">
            {[
              "Опытный и внимательный врач",
              "Современное оборудование",
              "Комфортные условия лечения",
              "Безболезненные процедуры",
              "Индивидуальный подход",
              "Доступные цены",
            ].map((item) => (
              <li key={item} className="flex items-start mt-2">
                <CheckCircleIcon className="h-6 w-6 text-green-300 mr-2" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-3xl font-bold mt-8 text-white">
            Что мы предлагаем:
          </h2>

          <ul className="list-disc list-inside text-lg mt-4 text-white">
            {[
              "Обследование полости рта",
              "Лечение кариеса",
              "Установка имплантов и протезов",
              "Отбеливание зубов",
              "Исправление прикуса",
              "И многое другое!",
            ].map((item) => (
              <li key={item} className="flex items-start mt-2">
                <CheckCircleIcon className="h-6 w-6 text-green-300 mr-2" />
                {item}
              </li>
            ))}
          </ul>

          <p className="text-lg mt-8 text-white">
            Мы также предлагаем нашим пациентам индивидуальный подход и гибкую
            систему скидок.
          </p>

          <p className="text-lg mt-8 text-white">
            Позаботьтесь о здоровье вашей улыбки вместе с Кобилов Абликадир!
            Запишитесь на прием уже сегодня!
          </p>

          <h2 className="text-3xl font-bold mt-8 text-white" id="блок3">
            Контакты:
          </h2>

          <ul className="list-disc list-inside text-lg mt-4 text-white">
            <li className="flex items-start mt-2">
              <PhoneIcon className="h-6 w-6 text-yellow-300 mr-2" />
              Телефон: 8-800-555-35-35
            </li>
            <li className="flex items-start mt-2">
              <EnvelopeIcon className="h-6 w-6 text-yellow-300 mr-2" />
              Email: Qobilov@mail.uz
            </li>
          </ul>

          <p className="text-lg mt-8 text-white">
            <strong>Dental Clinic / DrQobilov</strong>
          </p>

          <ul className="list-disc list-inside text-lg mt-4 text-white">
            <li className="flex items-start mt-2">
              <MapPinIcon className="h-6 w-6 text-green-300 mr-2" />
              Адрес: Улица Пушкина, дом Колотушкина
            </li>
          </ul>
        </div>
      </div>

      <footer className="w-full mt-4 text-center text-xs border-t border-white pt-2 text-white">
        © 2024 All rights reserved.
      </footer>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-6 shadow-lg max-w-lg w-80 sm:w-full relative">
            <Box sx={{ position: "absolute", top: 8, right: 8 }}>
              <IconButton onClick={handleClose} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>

            <h2 id="parent-modal-title" className="text-2xl mb-4">
              Info:
            </h2>
            <p id="parent-modal-description" className="mb-4 font-bold">
              Tel: +998-90-546-45-45
            </p>
            <p id="parent-modal-description" className="mb-4">
              Время работы: с 9:00 до 17:00
            </p>
            <p id="parent-modal-description" className="mb-2">
              Обед: 13:00 ( 1 час )
            </p>

            <p id="parent-modal-description" className="mb-0">
              Воскресение - выходной{" "}
              <Tooltip title="Он играет в контр страйк" arrow placement="top">
                <IconButton className="ml-2 p-0 m-0 text-white">
                  <p className="font-semibold text-lg text-white m-0 p-0">
                    <InfoIcon />
                  </p>
                </IconButton>
              </Tooltip>
            </p>

            <Button
              onClick={handleClose}
              style={{ marginTop: "15px" }}
              variant="contained"
            >
              Нaзад <ReplyIcon className="ml-2" />
            </Button>
            <Box
              sx={{
                position: "absolute",
                bottom: 25,
                right: 25,
              }}
            >
              <Button
                onClick={handlePaymentOpen}
                variant="contained"
                sx={{
                  backgroundColor: "#ff5722",
                  color: "#ffffff",
                  marginTop: "15px",
                }}
              >
                ADD card <PaidSharpIcon sx={{ marginLeft: "4px" }} />
              </Button>
            </Box>
          </div>
        </div>
      </Modal>

      <Modal
        open={paymentOpen}
        onClose={handlePaymentClose}
        aria-labelledby="payment-modal-title"
        aria-describedby="payment-modal-description"
      >
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-gray-800 text-white rounded-lg p-10 shadow-lg max-w-lg w-80 sm:w-full relative">
            <Box sx={{ position: "absolute", top: 8, right: 8 }}>
              <IconButton onClick={handlePaymentClose} color="inherit">
                <CloseIcon />
              </IconButton>
            </Box>
            <PaymentMenu />
          </div>
        </div>
      </Modal>
    </main>
  );
}

