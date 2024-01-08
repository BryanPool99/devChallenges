import React, { useState } from "react";
import { useNavigate  } from "react-router-dom";
import QRCode from "qrcode.react";
import {
  BoxInput,
  BtnGenerar,
  InputText,
} from "../styles/ContainerInputStyles";

const ContainerInput = () => {
  const [url, setUrl] = useState("");
  const [showQRCode, setShowQRCode] = useState(false);
  const navigate = useNavigate(); 

  const handleGenerateQR = () => {
    setShowQRCode(true);

    // Navegar a la página QRCodePage y pasar el valor del código QR como estado
    navigate('/qrCode', { state: { qrCodeValue: url } });
  };
  
  return (
    <BoxInput>
      <InputText
        type="text"
        placeholder="Enter an url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <BtnGenerar onClick={handleGenerateQR}>QR code</BtnGenerar>
      {showQRCode && <QRCode value={url} />}
    </BoxInput>
  );
};
export default ContainerInput;
