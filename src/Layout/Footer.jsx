import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

const CustomTextField = styled(TextField)({
  "& .MuiInputBase-input": {
    color: "white", // Цвет текста белый
  },
  "& .MuiInputLabel-root": {
    color: "white", // Цвет лейбла белый
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white", // Цвет рамки белый
    },
    "&:hover fieldset": {
      borderColor: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const Footer = () => {
  return (
    <Box
      component="footer"
      className="w-full p-10 mt-4 text-center text-xs pt-2 text-white "
    >
      <Box className="social-media-links my-4">
        <Typography variant="h6">Следите за нами в соцсетях:</Typography>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Facebook
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Instagram
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          Twitter
        </a>
      </Box>

      {/* <Box className="customer-reviews my-4">
        <Typography variant="h6">Отзывы наших клиентов:</Typography>
        <blockquote>
          "Отличная клиника! Врач очень внимательный и профессиональный."
        </blockquote>
        <blockquote>
          "Был впервые и остался очень доволен. Рекомендую всем!"
        </blockquote>
      </Box> */}

      <Typography variant="h6">Наш адрес:</Typography>
      <Box className="map-section my-4 flex justify-center alighn-column">
        <iframe
          src="https://www.google.com/maps?q=39.036811381417145,66.57110237315982&output=embed"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full max-w-lg"
        ></iframe>
      </Box>
      <Box className="feedback-form my-4">
        <Typography variant="h6">Оставьте отзыв или вопрос:</Typography>
        <form>
          <CustomTextField
            label="Ваше имя"
            variant="outlined"
            required
            fullWidth
            margin="normal"
          />
          <CustomTextField
            label="Ваш email"
            type="email"
            variant="outlined"
            required
            fullWidth
            margin="normal"
          />
          <CustomTextField
            label="Ваше сообщение"
            variant="outlined"
            required
            fullWidth
            multiline
            rows={4}
            margin="normal"
          />
          <Box className="mt-5">
            {" "}
            <Button type="submit" variant="contained" color="primary">
              Отправить
            </Button>
          </Box>
        </form>
      </Box>

      {/* <Box className="working-hours my-4">
        <Typography variant="h6">Расписание работы:</Typography>
        <Typography>Понедельник - Пятница: 9:00 - 18:00</Typography>
        <Typography>Суббота: 10:00 - 14:00</Typography>
        <Typography>Воскресенье: Выходной</Typography>
      </Box> */}

      <Box
        component="footer"
        className="w-full text-center text-xs border-t border-white text-white "
      >
        <Box className="w-full mt-5 text-center text-xs text-white ">
          <Typography>© 2024 All rights reserved.</Typography>
          <Typography>Dantist clinic: Chirakchi, Uzbekistan.</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
