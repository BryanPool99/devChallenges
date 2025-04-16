import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import ImgLogo from "../assets/images/logo-qr-generator.svg";
import { MdDownload } from "react-icons/md";
import { FaPaperclip } from "react-icons/fa";
import {
    BtnAction,
    ContainerBtns,
    ContainerImgQR,
  ContainerLogo,
  ContainerQRCodePage,
  ContainerQrBtns,
  Figure,
  ImageQR,
  ImageTagLogo,
} from "../styles/QRCodePageStyles";
const QRCodePage = () => {
  const location = useLocation();
  const qrCodeValue = location.state?.qrCodeValue || "";
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}`;
    image.onload = () => {
      setLoading(false);
    };
    image.onerror = () => {
      setLoading(false);
      console.error("Error al cargar la imagen QR.");
    };
  }, [qrCodeValue]);
  const handleDownloadClick = async () => {
    try {
      const response = await fetch(
        `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}`
      );
      const blob = await response.blob();
  
      // Crear un objeto Blob
      const blobObject = new Blob([blob], { type: 'image/png' });
  
      // Crear un enlace para descargar
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blobObject);
      link.download = 'qr_code.png';
      document.body.appendChild(link);
  
      // Simular clic en el enlace
      link.click();
  
      // Eliminar el enlace del DOM
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error al descargar la imagen:', error);
    }
  };
  
  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Compartir QR Code',
        text: '¡Mira este QR Code!',
        url: `https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}`
      })
        .then(() => console.log('Compartido con éxito'))
        .catch((error) => console.error('Error al compartir:', error));
    } else {
      // Puedes proporcionar una alternativa si el navegador no admite la API de compartir
      alert('Tu navegador no admite la función de compartir.');
    }
  };
    
  return (
    <ContainerQRCodePage>
      <ContainerLogo>
        <ImageTagLogo src={ImgLogo} alt="logo" />
      </ContainerLogo>
      <ContainerQrBtns>
        <Figure>
        <ContainerImgQR>
            {loading ? (
              <div>Cargando...</div>
            ) : (
              <ImageQR
                src={`https://api.qrserver.com/v1/create-qr-code/?data=${qrCodeValue}`}
                alt="QR Code"
              />
            )}
          </ContainerImgQR>
          <ContainerBtns>
            <BtnAction onClick={handleDownloadClick}>
              <span>Download</span>
              <MdDownload />
            </BtnAction>
            <BtnAction onClick={handleShareClick}>
              <span>Share</span>
              <FaPaperclip />
            </BtnAction>
          </ContainerBtns>
        </Figure>
      </ContainerQrBtns>
    </ContainerQRCodePage>
  );
};
export default QRCodePage;
