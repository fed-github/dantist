import React from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import { styled } from "@mui/system";

import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

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
      className="w-full pl-10 pr-10 text-center text-xs text-white "
    >
      <Box className="social-media-links mb-5" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="h6">Свяжитесь с нами в соцсетях:</Typography>
        <Button
          variant="contained"
          href="https://t.me/DrQobilov"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
          sx={{
            "&:hover": {
              backgroundColor: "black", // более темный розовый для состояния наведения
            },
          }}
        >
          {" "}
          <TelegramIcon />
          <Box className="ml-3"> Telegram</Box>
        </Button>

        <Button
          variant="contained"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2 ml-5"
          sx={{
            backgroundColor: "#ff69b4",
            "&:hover": {
              backgroundColor: "black", // более темный розовый для состояния наведения
            },
          }}
        >
          <InstagramIcon />
          <Box className="ml-3"> Instagram</Box>
        </Button>
      </Box>

      <Typography id="блок4" variant="h6">Наш адрес:</Typography>
      <Box className="map-section my-4 flex justify-center alighn-column" >
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
