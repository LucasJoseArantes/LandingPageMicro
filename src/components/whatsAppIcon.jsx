import React from 'react';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import '../styles/app.css';

export default function Whatsapp() {
  return (
    <FloatingWhatsApp
      phoneNumber='+5534998125957'
      avatar='https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/800px-HD_transparent_picture.png?20200606142532'
      accountName='DMBot'
      chatMessage='Olá, como posso te ajudar?'
      statusMessage='Online'
      placeholder='Digite a sua mensagem'
      allowClickAway={true}
      allowEsc={true}
    />
  );
}