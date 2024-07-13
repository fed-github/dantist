import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" className="w-full mt-4 text-center text-xs border-t border-white pt-2 text-white bg-gray-800">
      <Box className="social-media-links my-4">
        <Typography variant="h6">Следите за нами в соцсетях:</Typography>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mx-2">Facebook</a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="mx-2">Instagram</a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="mx-2">Twitter</a>
      </Box>

      <Box className="customer-reviews my-4">
        <Typography variant="h6">Отзывы наших клиентов:</Typography>
        <blockquote>"Отличная клиника! Врач очень внимательный и профессиональный."</blockquote>
        <blockquote>"Был впервые и остался очень доволен. Рекомендую всем!"</blockquote>
      </Box>

      <Box className="feedback-form my-4">
        <Typography variant="h6">Оставьте отзыв или вопрос:</Typography>
        <form>
          <TextField label="Ваше имя" variant="outlined" required fullWidth margin="normal" />
          <TextField label="Ваш email" type="email" variant="outlined" required fullWidth margin="normal" />
          <TextField label="Ваше сообщение" variant="outlined" required fullWidth multiline rows={4} margin="normal" />
          <Button type="submit" variant="contained" color="primary">Отправить</Button>
        </form>
      </Box>

      <Box className="map-section my-4">
        <Typography variant="h6">Наш адрес:</Typography>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.58684115694!2d144.95605401534988!3d-37.81720997975181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43e1b2c3fb%3A0x4647f06498df24af!2sVictoria%20Market!5e0!3m2!1sen!2sau!4v1634113786634!5m2!1sen!2sau"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </Box>

      <Box className="working-hours my-4">
        <Typography variant="h6">Расписание работы:</Typography>
        <Typography>Понедельник - Пятница: 9:00 - 18:00</Typography>
        <Typography>Суббота: 10:00 - 14:00</Typography>
        <Typography>Воскресенье: Выходной</Typography>
      </Box>

      <Typography>© 2024 All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
